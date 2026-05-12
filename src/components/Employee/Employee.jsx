"use client";
import React from "react";

export default function Employee() {
  const dataEmployee = [
    {
      id: 1,
      team: "Tim Software Engineer",
      totalTeam : 15,
      members: [
        { name: "John", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
        { name: "Sarah", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
        { name: "Mike", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
      ]
    },
    {
      id: 2,
      team: "Tim Product Manager",
      totalTeam : 12,
      members: [
        { name: "Emily", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" },
        { name: "Alex", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
        { name: "Lisa", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa" },
      ]
    },
    {
        id: 3,
        team: "Tim UX Designer",
        totalTeam : 20,
        members: [
          { name: "Chris", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris" },
          { name: "Diana", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana" },
          { name: "Robert", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert" },
        ]
    },
  ];

  return (
    <div className="rounded-2xl w-full max-w-sm border border-gray-100 mt-4 bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Employee</h2>
        <div className="border rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
            Lihat Semua
        </div>
      </div>
      <div className="custom-scrollbar h-[400px] overflow-y-auto">
        <div className="flex flex-col gap-4">
            {dataEmployee.map((item) => {
              const displayCount = 3;
              const remainingCount = Math.max(0, item.totalTeam - displayCount);
              
              return (
                <div key={item.id} className="flex justify-between bg-gray-50 rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-gray-900 mb-1">{item.team}</h3>
                        <p className="text-xs text-gray-500 mb-3">TOTAL MEMBER {item.totalTeam}</p>
                    </div>
                    
                    
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {item.members.slice(0, displayCount).map((member, index) => (
                          <img
                            key={member.name}
                            src={member.avatar}
                            alt={member.name}
                            className="w-8 h-8 rounded-full border-2 border-white"
                            style={{ marginLeft: index === 0 ? 0 : -12 }}
                          />
                        ))}
                      </div>
                      
                      {remainingCount > 0 && (
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-700 ml-1">
                          +{remainingCount}
                        </div>
                      )}
                    </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}