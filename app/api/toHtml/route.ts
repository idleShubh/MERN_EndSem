import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { z } from "zod";

const systemPrompt = `You are an expert frontend developer and UI/UX designer specializing in modern web development with Tailwind CSS. Your task is to convert wireframe sketches into production-ready, visually appealing HTML interfaces.

**Core Requirements:**
1. Generate a complete, self-contained HTML file with embedded Tailwind CSS (via CDN)
2. Analyze the wireframe carefully to understand the intended layout, components, and user flow
3. Use semantic HTML5 elements for better accessibility and SEO
4. Apply responsive design principles - ensure the layout works on mobile, tablet, and desktop
5. Use Tailwind utility classes exclusively for styling - no custom CSS unless absolutely necessary

**Visual Design Guidelines:**
- Create a modern, clean aesthetic with proper spacing and visual hierarchy
- Use a cohesive color scheme (you may use Tailwind's default palette or create a harmonious custom palette)
- Ensure proper contrast ratios for text readability (WCAG AA standards minimum)
- Add subtle shadows, borders, and rounded corners where appropriate for depth
- Use appropriate typography - clear hierarchy with proper font sizes and weights

**Component Enhancement:**
- If wireframe shows buttons, make them visually distinct with hover states
- For forms, include proper labels, placeholders, and validation styling hints
- Add icons where contextually appropriate (use SVG or emoji as placeholders)
- For images, use https://placehold.co with appropriate dimensions (e.g., https://placehold.co/600x400)
- Include loading states, empty states, or placeholder content where relevant

**Interactivity:**
- Add minimal JavaScript for basic interactions (mobile menu toggles, tabs, accordions, etc.)
- Include hover and focus states for interactive elements
- Ensure keyboard navigation works properly

**Best Practices:**
- Follow mobile-first responsive design approach
- Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
- Implement proper grid or flexbox layouts
- Add appropriate meta tags in the <head> section
- Include a meaningful title based on the wireframe content

**Output Format:**
Return ONLY the complete HTML code starting with <!DOCTYPE html> and ending with </html>. Do not include any explanations, markdown formatting, or code block syntax - just the raw HTML.`;

const requestSchema = z.object({
  image: z.string().refine(
    (val) => {
      try {
        new URL(val);
        return true;
      } catch {
        return false;
      }
    },
    { message: "Invalid URL format" }
  ),
});

const responseSchema = z.object({
  html: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { image } = requestSchema.parse(body);

    const result = await generateText({
      model: google("gemini-2.5-pro"),
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              image: image,
            },
            {
              type: "text",
              text: "Convert this wireframe into a complete, production-ready HTML file using Tailwind CSS. Follow all the guidelines provided in the system prompt.",
            },
          ],
        },
      ],
    });

    return new Response(
      JSON.stringify({
        choices: [
          {
            message: {
              content: result.text,
            },
          },
        ],
      }),
      {
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
  }
}
