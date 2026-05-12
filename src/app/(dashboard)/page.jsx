"use client"

import * as React from "react"
import { addDays, format } from "date-fns"

import DateRange from "@/components/DateRange/DateRange"
import Export from "@/components/Export/Export"
import DropDownJobs from "@/components/DropDownJobs/DropDownJobs"
import RecruitmentTable from "@/components/RecruitmentTable/RecruitmentTable"
import JobSummary from "@/components/JobSummary/JobSummary"
import TaskCard from "@/components/Task/Task"
import Employee from "@/components/Employee/Employee"

export default function DashboardPage() {
  

  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex items-center justify-between gap-4 mt-4">
        <p className="text-gray-600">Hari ini Senin, 11 Mei 2026.</p>

        <div className= "flex items-center gap-2">
            <DateRange />
            <Export />
        </div>
        
      </div>


        <div className="flex flex-row gap-6 mt-6">
            <div className="mt-6 rounded-lg shadow-md w-full px-6 py-4 bg-white">
                <div className="flex item-center justify-between">
                    <div className="flex flex-row gap-2">
                        <h2 className="text-2xl font-bold ml-10 mr-48">Hiring</h2>
                        <DropDownJobs />
                    </div>
                    <div className="border rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Lihat Semua
                    </div>
                </div>

                <div className="flex flex-row gap-4 mt-4 bg-white rounded-lg p-4">
                    <RecruitmentTable />    
                </div>
                
            </div>
            <div className="mt-6 rounded-lg shadow-md px-6 py-4 bg-white w-[30%]">
                <JobSummary />
            </div>
        </div>
        
        <div className="flex flex-row gap-6 mt-6">
            <div className="mt-6 rounded-lg shadow-md w-full px-6 py-4 bg-white">
                <div className="flex item-center justify-between">
                    <div className="flex flex-row gap-2">
                        <h2 className="text-2xl font-bold  ml-10 mr-48">Task</h2>
                        <DateRange />
                    </div>
                    
                    <div className="border rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Lihat Semua
                    </div>
                </div>
                
                <div className="flex flex-row gap-4 mt-4 bg-white rounded-lg p-4">
                    <TaskCard />    
                </div>
            </div>

            <div className="mt-6 rounded-lg shadow-md px-6 py-4 bg-white w-[30%]">
                <Employee />
            </div>

        </div>
       
    </>
  )
}