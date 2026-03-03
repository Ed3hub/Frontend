import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const ScheduleSession = () => {
  const [sessionTitle, setSessionTitle] = useState("DAO Governance Q&A");
  const [description, setDescription] = useState(
    "Join this live Q&A to dive into DAO governance — ask your questions, explore decision-making models, and learn how decentralized communities manage power and resources."
  );
  const [sessionType, setSessionType] = useState("Q&A");

  // Visibility States
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Calendar States
  const [viewDate, setViewDate] = useState(new Date());
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(null);
  const [finalDateDisplay, setFinalDateDisplay] = useState("");

  // Time States
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState(0);
  const [ampm, setAmpm] = useState("AM");

  // Toggle State
  const [autoTimeZone, setAutoTimeZone] = useState(true);

  // Calendar Logic
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Monday start
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setTempSelectedDate(selected);
  };

  const handleApply = () => {
    if (tempSelectedDate) {
      const formatted = tempSelectedDate
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-");
      setFinalDateDisplay(formatted);
      setShowDatePicker(false); // Hide input and calendar after applying
    }
  };

  const renderCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const offset = firstDayOfMonth(year, month);
    const calendarDays = [];

    for (let i = 0; i < offset; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="p-2" />);
    }

    for (let d = 1; d <= totalDays; d++) {
      const isSelected =
        tempSelectedDate?.getDate() === d &&
        tempSelectedDate?.getMonth() === month;
      calendarDays.push(
        <div
          key={d}
          onClick={() => handleDateClick(d)}
          className={`p-2 cursor-pointer text-[11px] rounded-md transition-all text-center
            ${
              isSelected
                ? "bg-[#00AEEF] text-white font-bold"
                : "text-black hover:bg-gray-100"
            }`}
        >
          {d}
        </div>
      );
    }
    return calendarDays;
  };

  return (
    <div className="max-w-xl mx-auto py-8 bg-white font-sans text-[#1a1a1a]">
      <h2 className="text-base font-bold mb-8">Schedule a session</h2>

      <div className="space-y-6">
        {/* Title & Description */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Session Title
          </label>
          <input
            type="text"
            value={sessionTitle}
            onChange={(e) => setSessionTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Description/Agenda
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none resize-none text-black text-sm leading-relaxed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Session Type
          </label>
          <select
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none text-black bg-white cursor-pointer appearance-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")".replace(/stroke-width/g, "strokeWidth").replace(/stroke-linecap/g, "strokeLinecap").replace(/stroke-linejoin/g, "strokeLinejoin"),
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1em",
            }}
          >
            <option>Q&A</option>
            <option>Workshop</option>
            <option>Office Hours</option>
            <option>AMA</option>
          </select>
        </div>

        <h3 className="text-sm font-bold pt-4">Date & Time</h3>

        {/* Date Section */}
        <div className="relative">
          {!showDatePicker && (
            <div
              onClick={() => setShowDatePicker(true)}
              className="w-full bg-[#E3F5FF] p-3 rounded-lg flex items-center justify-between text-[#00AEEF] cursor-pointer"
            >
              <span className="text-sm font-medium">
                {finalDateDisplay || "Select Date"}
              </span>
              <CalendarIcon size={20} />
            </div>
          )}

          {showDatePicker && (
            <div className="animate-in fade-in duration-300">
              {/* Input shows only when picker is open */}
              <input
                type="text"
                readOnly
                value={
                  tempSelectedDate
                    ? tempSelectedDate
                        .toLocaleDateString("en-GB")
                        .replace(/\//g, "-")
                    : "DD-MM-YYYY"
                }
                className="w-full px-4 py-3 border-2 border-[#00AEEF] rounded-lg text-[#00AEEF] font-bold outline-none text-center mb-4"
              />

              {/* Calendar Container */}
              <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <ChevronLeft
                    onClick={() =>
                      setViewDate(
                        new Date(viewDate.setMonth(viewDate.getMonth() - 1))
                      )
                    }
                    className="text-[#00AEEF] cursor-pointer"
                  />
                  <span className="font-bold text-sm text-black">
                    {viewDate.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <ChevronRight
                    onClick={() =>
                      setViewDate(
                        new Date(viewDate.setMonth(viewDate.getMonth() + 1))
                      )
                    }
                    className="text-[#00AEEF] cursor-pointer"
                  />
                </div>
                <div className="grid grid-cols-7 text-[10px] text-center gap-1 font-bold text-gray-400 mb-2">
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                    <div key={d}>{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {renderCalendarDays()}
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleApply}
                    className="px-8 py-2 bg-[#D1F0FF] text-[#00AEEF] font-bold rounded-lg text-xs"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Time Selection */}
        <div className="pt-6">
          <label className="block text-sm font-medium text-gray-400 mb-8">
            Select Time
          </label>
          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col items-center">
              <ChevronUp
                className="cursor-pointer text-gray-300"
                onClick={() => setHours((h) => (h === 12 ? 1 : h + 1))}
              />
              <span className="text-5xl font-bold my-2 text-black">
                {hours.toString().padStart(2, "0")} h
              </span>
              <ChevronDown
                className="cursor-pointer text-gray-300"
                onClick={() => setHours((h) => (h === 1 ? 12 : h - 1))}
              />
            </div>
            <span className="text-5xl font-bold text-black">:</span>
            <div className="flex flex-col items-center">
              <ChevronUp
                className="cursor-pointer text-gray-300"
                onClick={() => setMinutes((m) => (m + 1) % 60)}
              />
              <span className="text-5xl font-bold my-2 text-black">
                {minutes.toString().padStart(2, "0")} m
              </span>
              <ChevronDown
                className="cursor-pointer text-gray-300"
                onClick={() => setMinutes((m) => (m === 0 ? 59 : m - 1))}
              />
            </div>
            <div className="flex flex-col space-y-4 ml-6">
              <button
                onClick={() => setAmpm("AM")}
                className={`text-2xl font-bold ${
                  ampm === "AM" ? "text-[#00AEEF]" : "text-gray-300"
                }`}
              >
                AM
              </button>
              <button
                onClick={() => setAmpm("PM")}
                className={`text-2xl font-bold ${
                  ampm === "PM" ? "text-[#00AEEF]" : "text-gray-300"
                }`}
              >
                PM
              </button>
            </div>
          </div>
        </div>

        {/* Time Zone Toggle */}
        <div className="pt-8 flex items-center justify-between">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-400 mb-1">
              Time Zone
            </label>
            <span className="text-sm font-medium text-black">
              Automatic Time Zone
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setAutoTimeZone(!autoTimeZone)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoTimeZone ? "bg-[#00AEEF]" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  autoTimeZone ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-xs font-bold text-black">GMT +09:00</span>
          </div>
        </div>

        {/* Small Save Button */}
        <div className="flex justify-end pt-10 mt-10">
          <button className="bg-[#00AEEF] text-white py-2.5 px-12 rounded-lg font-bold hover:bg-[#0096ce] transition-all">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSession;
