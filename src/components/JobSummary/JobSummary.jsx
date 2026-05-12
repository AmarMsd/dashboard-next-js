"use client";
import React from "react";
import { MoreVertical } from "lucide-react";

export default function JobSummary() {
  const dataJobSummary = [
    {
      id: 1,
      label: "Closed",
      color: "#d7fa86",
      count : 15
    },
    {
        id: 2,
        label: "On Hold",
        color: "#c2abff",
        count : 50
    },
    {
        id: 3,
        label: "Published",
        color: "#86f0d7",
        count : 40
    },
    {
        id: 4,
        label: "Internal",
        color: "#f0c686",
        count : 18
    },
  ];

  const totalJobs = dataJobSummary.reduce((sum, item) => sum + item.count, 0);

  const size = 200; 
  const strokeWidth = 12; 
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius; 
  let cumulativePercent = 0; 

  return (
    <div className="rounded-2xl w-full max-w-sm mt-10">
      
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold tracking-tight text-gray-900">
        Jobs Summary
      </h2>
      <button className="text-gray-500 hover:text-gray-700">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>

      <div className="relative flex justify-center items-center mb-8">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth={strokeWidth}
          />
          
          {dataJobSummary.map((item) => {
            const percent = Number(item.count / totalJobs);
            const strokeLength = percent * circumference;
            const gap = 4;
            const dashArray = `${Math.max(0, strokeLength - gap)} ${circumference}`;
            const offset = -(cumulativePercent * circumference);
            
            cumulativePercent += percent;

            return (
              <circle
                key={item.id}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={offset}
                strokeLinecap="round" 
                className="transition-all duration-1000 ease-out"
                transform={`rotate(-90 ${size / 2} ${size / 2})`} 
              />
            );
          })}
        </svg>

        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-gray-900">{totalJobs}</span>
          <span className="text-xs font-medium text-gray-500 tracking-wide mt-1">
            TOTAL JOBS
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-2 px-2">
        {dataJobSummary.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <div 
              className="w-1.5 h-6 rounded-full" 
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-gray-900 leading-none">
                {item.count}
              </span>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}