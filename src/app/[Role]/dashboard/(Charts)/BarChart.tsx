"use client"
import Chart from 'chart.js/auto'
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

const labels = ["January","February","March","April","May","June","July","August", "September","October","November","December"];
const data = {
  labels: labels,
  datasets: [{
    label: 'Lessons completed',
    barPercentage: 1,
    minBarLength: 10,
    data: [4, 2, 0, 1, 5, 3, 2,1,0,4,1,0],
    backgroundColor: 'rgba(37,99,235,0.3)',
    borderColor: 'rgba(37,99,235,0.3)',
    hoverBackgroundColor:"rgb(37,99,235)",
    hoverBorderColor:"rgb(37,99,235)",
    borderWidth: 1,
    borderRadius:6
  }]
};

const options={
    responsive:true,
    plugins: {
            legend: {display: false,},
            },
    scales:{
        y: {
            display:false,
            beginAtZero: false
        },
       x:{
        display:false,
        grid:{
            display:false
        },
        border:{
            display:false
        },
        ticks: {
            font: {
                size: 10,
                color: "#a9abb1",

            }
        }
       },
      },
      
    }


  
Chart.register(CategoryScale);

function BarChart() {
    return (
        <div className="w-2/3 bg-white  rounded-2xl p-4 grow-0"> 
        <div className='w-fit grid place-items-center'>
            <h2 className='font-bold text-xl'>Overview</h2>
            <h4 className=' font-normal text-xs text-black/70'>Lesssons completed / month</h4>
        </div>
    <Bar
        data={data}
        options={options}
        updateMode='resize'
      /> 
      </div>);
}

export default BarChart;