"use client"
import { GetLessonsProgress } from '@/app/Actions/DashboardActions';
import { sleep } from '@/lib/utils'
import Chart, { CategoryScale } from 'chart.js/auto'
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { Doughnut } from "react-chartjs-2"
Chart.register(CategoryScale);

 function DoughnutChart({Data}:{Data:number}){


  const {theme,setTheme} =useTheme()
  const chartColor = theme === 'dark' ? 'rgb(243, 244, 246)' : 'rgba(37,99,235)';
  
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
    data: [Data*100],
    hoverBackgroundColor:
       chartColor,
    hoverBorderColor:
      chartColor,
    backgroundColor:
      'rgb(37, 99, 235 ,0.3)',
    borderColor:
       'rgb(37, 99, 235,0.3)',
    radius:
       140,
    circumference:
      Data*360,
    rotation:
       5,
    cutout: 90
  }]
}



   
  return (
    <div className="w-1/3 bg-white rounded-2xl p-4 grow-0 dark:bg-slate-900 ">
      <div className='w-fit grid place-items-center'>
        <h2 className='font-bold text-xl'>Progress</h2>
        <h4 className=' font-normal text-xs text-black/70 dark:text-white/70'>Overall progress on lessons</h4>
      </div>
       <Doughnut data={doughnutData} options={doughnutOptions} width={340} height={340} updateMode='resize' />
    </div>
  );
}

export default DoughnutChart;