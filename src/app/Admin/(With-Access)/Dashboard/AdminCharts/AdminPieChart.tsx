"use client";
import Chart, { CategoryScale } from "chart.js/auto";
import { useTheme } from "next-themes";
import { Doughnut } from "react-chartjs-2";
Chart.register(CategoryScale);

type UsersData = {
  teachers: number;
  students: number;
  admins: number;
};
function AdminPieChart({
  UsersData,
  ChartSize,
}: {
  UsersData: UsersData;
  ChartSize?: number;
}) {
  const { theme, setTheme } = useTheme();
  const chartColor =
    theme === "dark" ? "rgb(243, 244, 246)" : "rgba(37,99,235)";

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const doughnutData = {
    labels: ["Teachers", "Students", "Admins"],
    datasets: [
      {
        label: "Users",
        data: [UsersData.teachers, UsersData.students, UsersData.admins],
        hoverBackgroundColor: chartColor,
        hoverBorderColor: chartColor,
        backgroundColor: [
          "rgb(37, 99, 235 ,0.3)",
          "rgb(37, 99, 235 ,0.5)",
          "rgb(37, 99, 235 ,0.7)",
        ],
        borderColor: "rgb(37, 99, 235,0.3)",
        radius: 140,
        rotation: 0,
        cutout: 90,
      },
    ],
  };

  return (
    <div className="  bg-white rounded-2xl p-4 dark:bg-slate-900 border col-span-1 shadow-md ">
      <div className="w-fit grid place-items-center">
        <h2 className="font-bold text-xl">Users Breakdown</h2>
        <h4 className=" font-normal text-xs text-black/70 dark:text-white/70">
          Breakdown of users by role
        </h4>
      </div>
      <Doughnut
        data={doughnutData}
        options={doughnutOptions}
        width={ChartSize || 140}
        height={ChartSize || 140}
        updateMode="resize"
      />
    </div>
  );
}

export default AdminPieChart;
