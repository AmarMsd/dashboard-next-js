"use client";
import React from "react";

export default function RecruitmentTable() {
  // Data statis untuk mensimulasikan tabel (bisa diganti dengan data API nanti)
  // Penggunaan objek warna ini penting di Tailwind agar class tidak ter-purge (terhapus saat build)
  const pipelineData = [
    {
      id: 1,
      jobTitle: "Software Engineer",
      totalApp: 88,
      theme: { light: "bg-pink-100 text-pink-500", active: "bg-pink-200 text-pink-900" },
      stages: [
        { count: 18, status: "light" },
        { count: 8, status: "light" },
        { count: 3, status: "active" },
        { count: null, status: "empty" },
        { count: null, status: "empty" },
      ],
    },
    {
      id: 2,
      jobTitle: "Product Manager",
      totalApp: 88,
      theme: { light: "bg-orange-100 text-orange-500", active: "bg-orange-200 text-orange-900" },
      stages: [
        { count: 16, status: "light" },
        { count: 10, status: "active" },
        { count: null, status: "empty" },
        { count: null, status: "empty" },
        { count: null, status: "empty" },
      ],
    },
    {
      id: 3,
      jobTitle: "UX Designer",
      totalApp: 88,
      theme: { light: "bg-sky-100 text-sky-500", active: "bg-sky-200 text-sky-900" },
      stages: [
        { count: 88, status: "light" },
        { count: 60, status: "light" },
        { count: 30, status: "active" },
        { count: null, status: "empty" },
        { count: null, status: "empty" },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full mt-4 overflow-x-auto">
      
      <div className="min-w-[800px]">
        <div className="grid grid-cols-[minmax(200px,1.5fr)_repeat(5,1fr)] gap-4 mb-4 pb-2">
          <div className="font-bold text-gray-900">Posisi</div>
          <div className="font-bold text-gray-900">Baru Melamar</div>
          <div className="font-bold text-gray-900">Screening</div>
          <div className="font-bold text-gray-900">Interview</div>
          <div className="font-bold text-gray-900">Test</div>
          <div className="font-bold text-gray-900">Hired</div>
        </div>

        <div className="flex flex-col gap-4">
          {pipelineData.map((row) => (
            <div key={row.id} className="grid grid-cols-[minmax(200px,1.5fr)_repeat(5,1fr)] gap-4 items-center">
              
              <div>
                <h3 className="font-bold text-lg text-gray-900">{row.jobTitle}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">
                  Total Application {row.totalApp}
                </p>
              </div>

              {row.stages.map((stage, index) => {
                let cellClass = "flex items-center px-4 py-3 rounded-lg text-sm font-medium h-12 ";
                
                if (stage.status === "empty") {
                  cellClass += "bg-gray-50"; // Kotak abu-abu kosong
                } else if (stage.status === "light") {
                  cellClass += row.theme.light; // Kotak warna muda
                } else if (stage.status === "active") {
                  cellClass += row.theme.active; // Kotak warna lebih gelap (tahap saat ini)
                }

                return (
                  <div key={index} className={cellClass}>
                    {stage.count !== null ? `${stage.count} Candidates` : ""}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}