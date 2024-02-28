"use client"
import Chart from 'chart.js/auto'
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
Chart.register(CategoryScale);

function BarChart({Data}: any) { 
    
    const {theme,setTheme} =useTheme()
    const years = ["2024","2023","2022","2021"]
    const [year,setYear]=useState("2024")    
    const  Lessons =[0,0,0,0,0,0,0,0,0,0,0,0]
    if(!Data) return null
    const YearData=Data[year]
    if(YearData){
        Lessons.map((index,i)=>{
            Lessons[i]=YearData[i+1+""] || 0
            
        })
    }

const chartColor = theme === 'dark' ? 'rgb(243, 244, 246)' : 'rgba(37,99,235,0.3)';
const labels = ["January","February","March","April","May","June","July","August", "September","October","November","December"];
const data = {
  labels: labels,
  datasets: [{
    label: 'Lessons completed',
    barPercentage: 1,
    minBarLength: 10,
    data: Lessons,
    backgroundColor: chartColor,
    borderColor: chartColor,
    hoverBackgroundColor:"rgb(37,99,235)",
    hoverBorderColor:"rgb(37,99,235)",
    borderWidth: 4,
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
    
    return (
        <div className="w-2/3 bg-white  rounded-2xl p-4 grow-0 dark:bg-slate-900"> 
        <div className='flex justify-between'>
        <div className='w-fit grid place-items-center pb-2'>
            <h2 className='font-bold text-xl'>Overview</h2>
            <h4 className=' font-normal text-xs text-black/70 dark:text-white/70'>Lesssons completed / month</h4>
        </div>
        <Popover >
            <PopoverTrigger asChild><Button>{year}</Button></PopoverTrigger>
            <PopoverContent className='flex flex-col w-32 gap-2'> 
            {years.map((index)=>index!=year && <Button onClick={()=>setYear(index)} key={index}>{index}</Button>)}
            </PopoverContent>
        </Popover>
        </div>

    <Bar
        data={data}
        options={options}
        updateMode='resize'
        />
      </div>);
}

export default BarChart;