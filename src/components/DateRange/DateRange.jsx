
import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DateRange() {
    const [date, setDate] = React.useState({
        from: new Date(new Date().getFullYear(), 0, 20),
        to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
    })
    
    return (
        <div id="dateRangePicker" className="flex flex-col gap-2 w-72">
    {/* Hapus className="py-4" dari Popover karena Popover tidak menerima class */}
    <Popover>
        <PopoverTrigger asChild>
        <Button
            id="date-picker-range"
            variant="ghost" 
            className={`flex items-center justify-start text-left w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium h-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                !date ? "text-gray-400" : "text-gray-700 cursor-pointer"
            }`}
        >
            <CalendarIcon className="mr-3 h-4 w-4 text-gray-500" />
            {date?.from ? (
            date.to ? (
                <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
                </>
            ) : (
                format(date.from, "LLL dd, y")
            )
            ) : (
            <span>Pick a date</span>
            )}
        </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
        <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
        />
        </PopoverContent>
    </Popover>
</div>
    )
}