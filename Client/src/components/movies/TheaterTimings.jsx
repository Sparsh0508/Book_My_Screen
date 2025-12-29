import React, { useState } from "react";
import dayjs from "dayjs";
import { theatres } from "../../utils/constants";

const TheaterTimings = () => {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);
  const formattedDate = selectedDate.format("DD MMM YYYY");

  const next7Days = Array.from({ length: 7 }).map((_, index) =>
    today.add(index, "day")
  );

  return (
    <>
      <hr className="my-8 border-gray-200" />
      <div className="flex items-center gap-2 mb-4 overflow-x-auto py-4 px-2">
        {next7Days.map((date, index) => {
          const isSelected = selectedDate.isSame(date, "day");
          return (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`flex cursor-pointer flex-col border border-gray-200 items-center px-3 py-2 rounded-lg min-w-[50px] ${
                isSelected
                  ? "bg-black text-white font-semibold"
                  : "hover:bg-gray-100 text-black"
              }`}
            >
              <span className="text-sm font-black">{date.format("DD")}</span>
              <span className="text-xs">{date.format("ddd")}</span>
              <span className="text-[10px]">
                {date.format("MMM").toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Theater   */}
      <div className="space-y-8 px-4 mb-10">
        {theatres.map((theatre, index) => (
          <div key={index}>
            {/* Theatre Details */}
            <div className="flex items-start gap-3 mb-2">
              <img
                src={theatre.img}
                alt={theatre.name}
                className="w-8 h-8 object-contain"
              />
              <div>
                <p className="font-semibold">{theatre.name}</p>
                <p className="text-sm text-gray-500">Allows Cancellations</p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex flex-wrap gap-3 ml-11">
              {theatre.timings.map((slot, timeIndex) => (
                <button
                  key={timeIndex}
                  className="border cursor-pointer border-gray-300 px-12 py-2 rounded-[16px] hover:border-black flex flex-col items-center justify-center"
                >
                  <span className="leading-tight font-semibold">{slot.time}</span>
                  <span className="font-black text-[10px] text-gray-500">{slot.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TheaterTimings;
