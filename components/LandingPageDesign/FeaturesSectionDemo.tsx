import React from "react";
import { useId } from "react";


export function Featuree() {
  return (
    <div className="py-20  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 md:gap-2  mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
const grid = [
  {
    title: "Real-Time Code Collaboration",
    description: "Multiple team members can code together in real-time, enhancing productivity and reducing workflow bottlenecks.",
  },
  {
    title: "Integrated Code Compiler",
    description: "Test and debug code directly within the platform without needing external tools, streamlining the development process.",
  },
  {
    title: "AI-Powered Assistance",
    description: "Utilize an AI-powered chatbot for instant coding help, debugging tips, and documentation guidance to boost efficiency.",
  },
  {
    title: "Collaborative Note-Taking",
    description: "Share and edit notes in real-time, ensuring all team members are aligned and have access to the most up-to-date information.",
  },
  {
    title: "Integrated Task Management",
    description: "Assign, track, and manage tasks within the platform, keeping the team organized and focused on project goals.",
  },
  {
    title: "Version Control",
    description: "Maintain and manage different versions of your code, allowing easy access to previous versions and tracking changes over time.",
  },
  {
    title: "Real-Time Notifications",
    description: "Receive instant notifications for code changes, comments, and updates to keep everyone in sync and on schedule.",
  },
  {
    title: "Code Snippet Sharing",
    description: "Easily share reusable code snippets within your team to promote consistency and save time on repetitive tasks.",
  },
];


export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
