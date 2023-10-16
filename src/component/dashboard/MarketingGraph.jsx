import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip, PointElement, LineElement } from 'chart.js';
import Image from 'next/image';
import React from 'react'
import { Line } from 'react-chartjs-2';
import CustomSelect from '../common/CustomSelect';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const dropdownlist = [
    {
        id: 1,
        name: 'Bar Chart',
        icon: "/images/Dashboard/bar-line-chart.svg"
    },
    {
        id: 2,
        name: 'Pie Chart',
        icon: "/images/Dashboard/pie-chart-03.svg"
    },
    {
        id: 3,
        name: 'Line Chart',
        icon: "/images/Dashboard/line-chart-up-01.svg"
    },
]
const Monthdropdownlist = [
    {
        id: 1,
        name: 'This Month',
        icon: ""
    },
    {
        id: 2,
        name: 'Priveus Month',
        icon: ""
    }
]

const MarketingGraph = () => {


    const options = {
        plugins: {
            title: {
                display: true,
                text: '',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        if (value >= 1000) {
                            return (value / 1000).toString() + 'k';
                        }
                        return value;
                    },
                },
            },
        },
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Sales Value',
                data: [4265, 6325, 5892, 7856, 9245, 7526, 3110, 6125, 5485, 6231, 7852, 13542],
                backgroundColor: '#F472B6',
                borderColor: '#F472B6',
                barThickness: 32,
                borderRadius: 10,
                tension: 0.7,
                fill: true,
                pointBorderWidth: 0,
            },
            {
                label: 'Booking',
                data: [12953, 13521, 10325, 15624, 13325, 10235, 18623, 20359, 22224, 30256, 35462, 44444],
                backgroundColor: '#397CF6',
                borderColor: '#397CF6',
                barThickness: 32,
                borderRadius: 10,
                tension: 0.7,
                fill: true,
                pointBorderWidth: 0,
            },
        ],
    };

    return (

        <div className='bg-white py-2 px-5 gap-6 rounded-md' >
            <div className=''>
                <div className='flex items-center justify-between gap-4 p-5'>
                    <div className='flex flex-col  justify-center gap-3 '>
                        <span className='text-[#1D2433] text-lg font-semibold leading-[18px] '>Marketing Graph</span>
                        <div className='flex items-center justify-center gap-2'>
                            <span className='text-[#6B7280] text-sm font-medium leading-[14px] '>Compare to previous month</span>
                            <div className='flex items-center py-[2px] px-1.5 gap-1 bg-[#12a3802e] rounded-3xl '>
                                <Image
                                    src='/images/dashboard/trendUp.svg'
                                    width="14"
                                    height="14"
                                    alt='trendUp' />
                                <span className='text-[#12A380] text-xs font-normal leading-3 '>2.11%</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <CustomSelect name={'Chart Options'} dropdownlist={dropdownlist} />
                        <CustomSelect name={'This Month'} dropdownlist={Monthdropdownlist} />
                    </div>
                </div>
            </div>
            <div className=' w-full '>
                <Line options={options} data={data} />
            </div>
        </div>
    )
}

export default MarketingGraph