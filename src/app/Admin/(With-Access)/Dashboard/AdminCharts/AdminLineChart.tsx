"use client";
import { Line } from "react-chartjs-2";
import moment from "moment";
type SoldCourses = {
  [key: string]: {
    [key: string]: number;
  };
};
function AdminLineChart({ SoldCourses }: { SoldCourses: SoldCourses }) {
  let ThisYear = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let LastYear = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
  if (SoldCourses) {
    const thisYearSellings = SoldCourses[moment(Date.now()).year()] || [];
    const lastYearSellings = SoldCourses[moment(Date.now()).year() - 1] || [];
    console.log(thisYearSellings, "test ", lastYearSellings);
    ThisYear.map((index, i) => {
      if (thisYearSellings[i + 1 + ""])
        ThisYear[i] = thisYearSellings[i + 1 + ""];
      else ThisYear[i] = 0;
    });
    LastYear.map((index, i) => {
      if (lastYearSellings[i + 1 + ""])
        LastYear[i] = lastYearSellings[i + 1 + ""];
      else LastYear[i] = 0;
    });
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Course Sellings this year",
        data: ThisYear,
        yAxisID: "y",
        hoverBackgroundColor: "rgb(37,99,235)",
        hoverBorderColor: "rgb(37,99,235)",
      },
      {
        label: "Course Sellings last year",
        data: LastYear,
        yAxisID: "y1",
        hoverBackgroundColor: "rgb(37,99,235)",
        hoverBorderColor: "rgb(37,99,235)",
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      y1: {
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
    <div className="  bg-white rounded-2xl p-4 dark:bg-slate-900 border col-span-2 shadow-md ">
      <div className="w-fit grid place-items-center">
        <h2 className="font-bold text-xl">Course Sellings</h2>
        <h4 className=" font-normal text-xs text-black/70 dark:text-white/70">
          Breakdown of Courses sold by month
        </h4>
      </div>

      <Line data={data} options={options} updateMode="resize" />
    </div>
  );
}

export default AdminLineChart;
