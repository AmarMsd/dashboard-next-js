"use client";
import React from "react";

export default function TaskCard() {
  const dataTask = [
    {
      id: 1,
      shedule: "09.00 - 10.00 AM",
      decription : "Interview dengan kandidat untuk posisi Software Engineer",
      color: "#d7fa86"
    },
    {
      id: 2,
      shedule: "10.00 - 11.00 AM",
      decription : "Meeting bersama tim Design untuk pembahasan UI/UX",
      color: "#c2abff"
    },
    {
        id: 3,
        shedule: "11.00 - 12.00 AM",
        decription : "Screening CV kandidat untuk posisi Product Manager",
        color: "#86f0d7"
    },
    {
        id: 4,
        shedule: "01.00 - 02.00 PM",
        decription : "Meeting dengan tim HR untuk pembahasan proses rekrutmen",
        color: "#f0c686"
    },
    {
        id: 5,
        shedule: "02.00 - 03.00 PM",
        decription : "Interview dengan kandidat untuk posisi UX Designer",
        color: "#f0c686"
    },
    {
        id:6,
        shedule: "02.00 - 03.00 PM",
        decription : "Interview dengan kandidat untuk posisi UX Designer",
        color: "#f0c686"
    },
    {
        id:7,
        shedule: "02.00 - 03.00 PM",
        decription : "Interview dengan kandidat untuk posisi UX Designer",
        color: "#f0c686"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full mt-4 overflow-x-auto">
      
      <div className="min-w-[800px] custom-scrollbar h-[400px] overflow-y-auto">
        <div className="flex flex-col gap-1 mb-4 pb-2">
            {dataTask.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 mb-4 pb-2 border-l-4 rounded-md px-4 py-2 border-y-1" style={{ borderColor: item.color }}>
                    <div className="font-bold text-gray-900">{item.shedule}</div>
                    <div className="text-gray-700">{item.decription}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}