import React from "react";

export default function BlockchainImg(props) {
  const theme = props.theme;
  return (
    <svg
      id="blockchain"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width="500px"
      height="500px"
    >
      {/* Main Blockchain Structure */}
      <g transform="translate(100, 100) scale(0.8)">
        {/* Background Circle */}
        <circle
          cx="500"
          cy="400"
          r="350"
          fill={theme.imageHighlight}
          opacity="0.1"
        />

        {/* Blockchain Nodes and Connections */}
        <g>
          {/* Node 1 */}
          <rect
            x="200"
            y="250"
            width="120"
            height="80"
            rx="10"
            fill={theme.imageHighlight}
            opacity="0.8"
            stroke={theme.text}
            strokeWidth="2"
          />
          <text
            x="260"
            y="290"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="16"
            fontWeight="bold"
          >
            BLOCK 1
          </text>
          <text
            x="260"
            y="315"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="12"
          >
            0x7F3A...
          </text>

          {/* Node 2 */}
          <rect
            x="450"
            y="150"
            width="120"
            height="80"
            rx="10"
            fill={theme.imageHighlight}
            opacity="0.8"
            stroke={theme.text}
            strokeWidth="2"
          />
          <text
            x="510"
            y="190"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="16"
            fontWeight="bold"
          >
            BLOCK 2
          </text>
          <text
            x="510"
            y="215"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="12"
          >
            0x8B2C...
          </text>

          {/* Node 3 */}
          <rect
            x="700"
            y="250"
            width="120"
            height="80"
            rx="10"
            fill={theme.imageHighlight}
            opacity="0.8"
            stroke={theme.text}
            strokeWidth="2"
          />
          <text
            x="760"
            y="290"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="16"
            fontWeight="bold"
          >
            BLOCK 3
          </text>
          <text
            x="760"
            y="315"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="12"
          >
            0x9D4F...
          </text>

          {/* Node 4 */}
          <rect
            x="450"
            y="400"
            width="120"
            height="80"
            rx="10"
            fill={theme.imageHighlight}
            opacity="0.8"
            stroke={theme.text}
            strokeWidth="2"
          />
          <text
            x="510"
            y="440"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="16"
            fontWeight="bold"
          >
            BLOCK 4
          </text>
          <text
            x="510"
            y="465"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="12"
          >
            0xAE5D...
          </text>

          {/* Node 5 */}
          <rect
            x="200"
            y="550"
            width="120"
            height="80"
            rx="10"
            fill={theme.imageHighlight}
            opacity="0.8"
            stroke={theme.text}
            strokeWidth="2"
          />
          <text
            x="260"
            y="590"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="16"
            fontWeight="bold"
          >
            BLOCK 5
          </text>
          <text
            x="260"
            y="615"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="12"
          >
            0xBF6E...
          </text>

          {/* Node 6 */}
          <rect
            x="700"
            y="550"
            width="120"
            height="80"
            rx="10"
            fill={theme.imageHighlight}
            opacity="0.8"
            stroke={theme.text}
            strokeWidth="2"
          />
          <text
            x="760"
            y="590"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="16"
            fontWeight="bold"
          >
            BLOCK 6
          </text>
          <text
            x="760"
            y="615"
            textAnchor="middle"
            fill={theme.dark}
            fontSize="12"
          >
            0xC07F...
          </text>

          {/* Connections */}
          <line
            x1="320"
            y1="290"
            x2="450"
            y2="190"
            stroke={theme.text}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="570"
            y1="190"
            x2="700"
            y2="290"
            stroke={theme.text}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="760"
            y1="330"
            x2="570"
            y2="400"
            stroke={theme.text}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="450"
            y1="440"
            x2="320"
            y2="550"
            stroke={theme.text}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="320"
            y1="590"
            x2="700"
            y2="590"
            stroke={theme.text}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="510"
            y1="150"
            x2="510"
            y2="100"
            stroke={theme.text}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="760"
            y1="630"
            x2="760"
            y2="680"
            stroke={theme.text}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </g>

        {/* Ethereum Logo */}
        <g transform="translate(450, 650) scale(0.8)">
          <polygon
            points="125,30 125,170 250,100"
            fill={theme.imageHighlight}
            opacity="0.9"
          />
          <polygon
            points="125,30 125,170 0,100"
            fill={theme.imageHighlight}
            opacity="0.7"
          />
          <polygon
            points="125,0 250,100 125,30"
            fill={theme.imageHighlight}
            opacity="0.5"
          />
          <polygon
            points="125,0 0,100 125,30"
            fill={theme.imageHighlight}
            opacity="0.5"
          />
          <polygon
            points="125,230 125,170 250,100"
            fill={theme.imageHighlight}
            opacity="0.9"
          />
          <polygon
            points="125,230 125,170 0,100"
            fill={theme.imageHighlight}
            opacity="0.7"
          />
        </g>

        {/* Binary Background Elements */}
        <g opacity="0.2" fill={theme.text}>
          <text x="150" y="200" fontSize="14">
            10110101
          </text>
          <text x="720" y="200" fontSize="14">
            01001010
          </text>
          <text x="400" y="100" fontSize="14">
            11001001
          </text>
          <text x="600" y="500" fontSize="14">
            10110110
          </text>
          <text x="300" y="650" fontSize="14">
            01101001
          </text>
          <text x="800" y="400" fontSize="14">
            11010010
          </text>
        </g>
      </g>
    </svg>
  );
}
