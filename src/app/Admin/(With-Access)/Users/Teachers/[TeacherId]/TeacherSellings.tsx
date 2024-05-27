"use client";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetUserLocalStorage } from "@/app/Hooks/LocalStorage";
import { cn } from "@/lib/utils";
Chart.register(CategoryScale);

function TeacherSellings({ Data }: any) {
  const userData = GetUserLocalStorage();

  const { theme, setTheme } = useTheme();
  const years = ["2024", "2023", "2022", "2021"];
  const [year, setYear] = useState("2024");
  const Courses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (Data) {
    const YearData = Data[year];
    if (YearData) {
      Courses.map((index, i) => {
        Courses[i] = YearData[i + 1 + ""] || 0;
      });
    }
  }

  const chartColor =
    theme === "dark" ? "rgb(243, 244, 246)" : "rgba(37,99,235,0.3)";
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Courses Sold`,
        barPercentage: 1,
        minBarLength: 10,
        data: Courses,
        backgroundColor: chartColor,
        borderColor: chartColor,
        hoverBackgroundColor: "rgb(37,99,235)",
        hoverBorderColor: "rgb(37,99,235)",
        borderWidth: 4,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
            color: "#a9abb1",
          },
        },
      },
    },
  };

  return (
    <div
      className={cn(
        " bg-white flex flex-col rounded-2xl p-4 justify-between dark:bg-slate-900 "
      )}
    >
      <div className="flex justify-between">
        <div className="w-fit grid place-items-center pb-2">
          <h2 className="font-bold text-xl">Overview</h2>
          <h4 className=" font-normal text-xs text-black/70 dark:text-white/70">
            Courses Sold / Month
          </h4>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="border p-3 font-semibold gap-3">
              {year}
              <ChevronDown className="size-5 pt-[0.7" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-24 gap-2 p-0">
            {years.map(
              (index) =>
                index != year && (
                  <Button
                    onClick={() => setYear(index)}
                    key={index}
                    variant="ghost"
                  >
                    {index}
                  </Button>
                )
            )}
          </PopoverContent>
        </Popover>
      </div>

      <Bar data={data} options={options} updateMode="resize" />
    </div>
  );
}

export default TeacherSellings;
