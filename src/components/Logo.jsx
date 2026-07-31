import React from 'react';

export default function Logo({ className = "w-10 h-10", isDark }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} transition-all duration-700`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Geometric Shape */}
      <path 
        d="M20 20L80 50L20 80V20Z" 
        stroke={isDark ? "white" : "#0f172a"} 
        strokeWidth="2"
        strokeOpacity={isDark ? "0.1" : "0.05"}
      />
      
      {/* The KL Monogram Mark */}
      <g>
        {/* K Vertical */}
        <rect x="35" y="30" width="4" height="40" fill={isDark ? "white" : "#0f172a"} />
        {/* K Angled Top */}
        <path d="M39 50L55 30H61L45 50L39 50Z" fill={isDark ? "white" : "#0f172a"} />
        {/* K Angled Bottom */}
        <path d="M39 50L55 70H61L45 50L39 50Z" fill={isDark ? "white" : "#0f172a"} />
        
        {/* L Vertical (shared or close to K) */}
        <rect x="65" y="30" width="4" height="40" fill={isDark ? "white" : "#0f172a"} opacity="0.4" />
        {/* L Base */}
        <rect x="65" y="66" width="12" height="4" fill={isDark ? "white" : "#0f172a"} opacity="0.4" />
      </g>

      {/* Finishing Detail - Glowing Point */}
      <circle cx="50" cy="50" r="1.5" fill={isDark ? "#82AAFF" : "#6366f1"} />
    </svg>
  );
}
