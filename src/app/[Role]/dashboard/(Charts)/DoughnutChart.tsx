"use client"
import Chart, { CategoryScale } from 'chart.js/auto'
import { Doughnut } from "react-chartjs-2"

const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    }
  }
}

const doughnutData = {
  labels: ['Overall Progress'],
  datasets: [{
    label:"Percentage",
    data: [70],
    backgroundColor:
       'rgba(37, 99, 235, 0.3)',
    borderColor:
      'rgba(37, 99, 235, 0.3)',
    hoverBackgroundColor:
      'rgb(37, 99, 235)',
    hoverBorderColor:
       'rgb(37, 99, 235)',
    radius:
       140,
    circumference:
      240,
    rotation:
       5,
    cutout: 90
  }]
}



Chart.register(CategoryScale);

function DoughnutChart(){
  return (
    <div className="w-1/3 bg-white rounded-2xl p-4 grow-0">
      <div className='w-fit grid place-items-center'>
        <h2 className='font-bold text-xl'>Progress</h2>
        <h4 className=' font-normal text-xs text-black/70'>Overall progress on lessons</h4>
      </div>
      <Doughnut data={doughnutData} options={doughnutOptions}  updateMode='resize' /> 
    </div>
  );
}

export default DoughnutChart;