import React from "react";

export default function DesignImg(props) {
  const theme = props.theme;
  return (
    <svg
      id="cybersecurity"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width="450px"
      height="450px"
    >
      {/* Security Shield with Lock */}
      <g transform="translate(100, 100) scale(0.8)">
        {/* Shield Background */}
        <path
          d="M500,100 L900,250 C900,550 750,800 500,900 C250,800 100,550 100,250 L500,100 Z"
          fill={theme.imageHighlight}
          opacity="0.2"
        />

        {/* Shield Border */}
        <path
          d="M500,100 L900,250 C900,550 750,800 500,900 C250,800 100,550 100,250 L500,100 Z"
          fill="none"
          stroke={theme.text}
          strokeWidth="15"
        />

        {/* Lock Body */}
        <rect
          x="350"
          y="400"
          width="300"
          height="250"
          rx="20"
          ry="20"
          fill={theme.imageHighlight}
          stroke={theme.text}
          strokeWidth="10"
        />

        {/* Lock Shackle */}
        <path
          d="M400,400 L400,300 C400,240 450,200 500,200 C550,200 600,240 600,300 L600,400"
          fill="none"
          stroke={theme.text}
          strokeWidth="25"
          strokeLinecap="round"
        />

        {/* Keyhole */}
        <circle
          cx="500"
          cy="480"
          r="40"
          fill={theme.dark}
          stroke={theme.text}
          strokeWidth="5"
        />
        <rect
          x="485"
          y="480"
          width="30"
          height="80"
          fill={theme.dark}
          stroke={theme.text}
          strokeWidth="5"
        />

        {/* Binary Code Background */}
        <g opacity="0.3" fill={theme.text}>
          <text x="120" y="300" fontSize="20">
            01001000
          </text>
          <text x="120" y="330" fontSize="20">
            01000001
          </text>
          <text x="120" y="360" fontSize="20">
            01000011
          </text>
          <text x="120" y="390" fontSize="20">
            01001011
          </text>
          <text x="120" y="420" fontSize="20">
            01000101
          </text>
          <text x="120" y="450" fontSize="20">
            01010010
          </text>

          <text x="800" y="300" fontSize="20">
            01010011
          </text>
          <text x="800" y="330" fontSize="20">
            01000101
          </text>
          <text x="800" y="360" fontSize="20">
            01000011
          </text>
          <text x="800" y="390" fontSize="20">
            01010101
          </text>
          <text x="800" y="420" fontSize="20">
            01010010
          </text>
          <text x="800" y="450" fontSize="20">
            01000101
          </text>
        </g>

        {/* Network Connections */}
        <g stroke={theme.text} strokeWidth="3" opacity="0.5">
          <line x1="250" y1="200" x2="350" y2="300" />
          <line x1="300" y1="150" x2="400" y2="250" />
          <line x1="700" y1="200" x2="600" y2="300" />
          <line x1="750" y1="150" x2="650" y2="250" />
          <line x1="200" y1="500" x2="350" y2="500" />
          <line x1="800" y1="500" x2="650" y2="500" />
        </g>

        {/* Small Nodes */}
        <circle cx="250" cy="200" r="10" fill={theme.imageHighlight} />
        <circle cx="300" cy="150" r="10" fill={theme.imageHighlight} />
        <circle cx="700" cy="200" r="10" fill={theme.imageHighlight} />
        <circle cx="750" cy="150" r="10" fill={theme.imageHighlight} />
        <circle cx="200" cy="500" r="10" fill={theme.imageHighlight} />
        <circle cx="800" cy="500" r="10" fill={theme.imageHighlight} />
      </g>
    </svg>
  );
}
