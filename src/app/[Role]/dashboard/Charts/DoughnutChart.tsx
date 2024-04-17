"use client"
import Chart, { CategoryScale } from 'chart.js/auto'
import { useTheme } from 'next-themes';
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
  },
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
       0,
    cutout: 90
  }]
}



   
  return (
    <div className="w-1/3 max-md:w-full md:h-full  bg-white rounded-2xl p-4 grow-0 shrink-0 dark:bg-slate-900  ">
      <div className='w-fit grid place-items-center'>
        <h2 className='font-bold text-xl'>Progress</h2>
        <h4 className=' font-normal text-xs text-black/70 dark:text-white/70'>Overall progress on Courses</h4>
      </div>{
        Data!=0?
       <Doughnut data={doughnutData} options={doughnutOptions} width={340} height={340} updateMode='resize' />
      :<p className='flex w-full h-full justify-center items-center text-xl font-semibold text-black/50 dark:text-white/50' >You have no progress so far</p>
      }
    </div>
  );
}

export default DoughnutChart;