import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Draw A UI - AI-Powered Wireframe to HTML Converter';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="6" fill="white" />
            <path
              d="M8 12C8 10.8954 8.89543 10 10 10H14C15.1046 10 16 10.8954 16 12V16C16 17.1046 15.1046 18 14 18H10C8.89543 18 8 17.1046 8 16V12Z"
              fill="#3B82F6"
            />
            <path
              d="M18 14C18 12.8954 18.8954 12 20 12H22C23.1046 12 24 12.8954 24 14V20C24 21.1046 23.1046 22 22 22H20C18.8954 22 18 21.1046 18 20V14Z"
              fill="#3B82F6"
            />
            <path
              d="M8 20L16 20"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="18"
              x2="20"
              y2="14"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
            maxWidth: 1000,
            lineHeight: 1.2,
          }}
        >
          Draw A UI
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 'normal',
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          AI-Powered Wireframe to HTML Converter
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 40,
            opacity: 0.8,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <span>✏️ Draw</span>
          <span>→</span>
          <span>🤖 AI</span>
          <span>→</span>
          <span>⚡ HTML + Tailwind</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
