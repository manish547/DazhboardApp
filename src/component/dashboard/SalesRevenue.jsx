import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import Image from 'next/image';
import React from 'react'
import { Bar } from 'react-chartjs-2';
import CustomSelect from '../common/CustomSelect';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const dropdownlist = [
    {
        id: 1,
        name: 'Bar Chart',
        icon: "/images/dashboard/bar-line-chart.svg"
    },
    {
        id: 2,
        name: 'Pie Chart',
        icon: "/images/dashboard/pie-chart-03.svg"
    },
    {
        id: 3,
        name: 'Line Chart',
        icon: "/images/dashboard/line-chart-up-01.svg"
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

const SalesRevenue = () => {


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
            },
        },
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Sales Value',
                data: [12, 6, 14, 4, 6, 4, 11, 6, 14, 10, 7, 2],
                backgroundColor: '#6956E5',
                barThickness: 32,
                borderRadius: 10,
            },
            {
                label: 'Booking',
                data: [12, 12, 8, 4, 13, 17, 3, 9, 4, 6, 5, 4],
                backgroundColor: '#9C8FF2',
                barThickness: 32,
                borderRadius: 10,

            },
        ],
    };

    return (

        <div className='bg-white py-2 px-5 gap-6 rounded-md' >
            <div className=''>
                <div className='flex flex-wrap items-center justify-between gap-4 p-5'>
                    <div className='flex flex-col  justify-center gap-3 '>
                        <span className='text-[#1D2433] text-lg font-semibold leading-[18px] '>Sales Revenue</span>
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

                        <CustomSelect name={'This Month'} dropdownlist={Monthdropdownlist}  />
                    </div>
                </div>
                <div className='flex items-center justify-end gap-6 px-5'>
                <div className='flex items-center gap-2'>
                        <div className='relative' >
                            <Image
                                src="./images/dashboard/Line.svg"
                                width='32'
                                height='3'
                                alt='Line'
                            />
                            <Image
                                src="./images/dashboard/RoundDots.svg"
                                width='9'
                                height='9'
                                alt='Line'
                                className='absolute -top-[3px] left-2 '
                            />
                        </div>
                        <span className='text-[#6B7280] text-sm font-medium leading-[14px] ' >Sales Value</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='relative' >
                            <Image
                                src="./images/dashboard/Line.svg"
                                width='32'
                                height='3'
                                alt='Line'
                            />
                            <Image
                                src="./images/dashboard/RoundDots.svg"
                                width='9'
                                height='9'
                                alt='Line'
                                className='absolute -top-[3px] left-2 '
                            />
                        </div>
                        <span className='text-[#6B7280] text-sm font-medium leading-[14px] ' >Bookings</span>
                    </div>
                </div>
            </div>
            <div className=' w-full '>
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}

export default SalesRevenue