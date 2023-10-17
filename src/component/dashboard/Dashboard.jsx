import { BlockData, CardData, Data } from '@/assets/dashboardData';
import Image from 'next/image';
import React, { useState } from 'react'
import SalesRevenue from './SalesRevenue';
import MarketingGraph from './MarketingGraph';
import SalesAndReviewa from './SalesAndReviewa';
import { LineChart } from './LineChart';
import Tableboard from "./Tableboard";
import DataTable from "./DataTable";
import GraphTable from "./GraphTable";
import CustomSelect from '../common/CustomSelect';


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

const Dashboard = () => {
    const [card, setCard] = useState(CardData)
    const [block, setBlock] = useState(BlockData);
    return (
        <div className='flex flex-col justify-center gap-6'>
            <div className=' flex flex-wrap items-center justify-center md:justify-between  lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-10 '>
                {
                    card.map((item, index) => {
                        return (
                            <div key={index} className='p-4 flex flex-col gap-8 bg-white min-w-[270px] rounded-lg  shadow-[0px_0px_0px_1px_#12376914]
                            '>
                                <div className='flex items-center px-2.5 py-[2px] gap-[5px] rounded-md border border-[#397cf61a] bg-[#DDE9FF] w-fit '>
                                    <Image
                                        src='/images/dashboard/Dot.svg'
                                        width="10"
                                        height="10"
                                        alt={item.title} />
                                    <span className='text-[#1D2433] text-base font-medium leading-[18px] '>{item.title}</span>
                                </div>
                                <div className='flex items-end justify-between gap-5 '>
                                    <div className='flex flex-col items-start justify-center gap-2.5'>
                                        <div className='text-[#111827] text-2xl font-semibold leading-6 tracking-[-0.24px] '>{item.price}</div>

                                        <div className='flex items-center justify-center gap-1'>
                                            <span>{item.graph === "Up" ? <Image
                                                src='/images/dashboard/trendUp.svg'
                                                width="14"
                                                height="14"
                                                alt={item.graph} />
                                                :
                                                <Image
                                                    src='/images/dashboard/trenddown.svg'
                                                    width="14"
                                                    height="14"
                                                    alt={item.graph} />}
                                            </span>
                                            <span className='text-[#12A380] text-xs font-medium leading-3 '>{item.percentage}</span>
                                            <span className='text-[#6B7280] text-sm font-medium leading-5 '>{item.month}</span>

                                        </div>
                                    </div>
                                    <div>
                                        <LineChart />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='flex  min-w-[270px] items-center justify-between bg-white  p-[2px] rounded-lg  shadow-[0px_0px_0px_1px_#12376914]'>
                    <div className=' p-2  flex flex-col gap-8 bg-[#DDE9FF] w-[60%] border-l-2 border-[#3778F5] rounded'>
                        <div className='flex items-center px-2.5 py-[2px] gap-[5px] rounded-md border border-[#397cf61a] bg-[#DDE9FF] w-fit '>
                            <Image
                                src='/images/dashboard/Dot.svg'
                                width="10"
                                height="10"
                                alt="Dots" />
                            <span className='text-[#1D2433] text-base font-medium leading-[18px] '>Direct</span>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-2.5'>
                            <div className='text-[#111827] text-2xl font-semibold leading-6 tracking-[-0.24px] '>80%</div>

                            <div className='flex items-center justify-center gap-1'>
                                <Image
                                    src='/images/dashboard/trendUp.svg'
                                    width="14"
                                    height="14"
                                    alt='trendUp' />
                                <span className='text-[#12A380] text-xs font-medium leading-3 '>2.11%</span>
                                <span className='text-[#6B7280] text-sm font-medium leading-5 '>Vs last mth</span>
                            </div>
                        </div>
                    </div>
                    <div className=' p-2  flex flex-col gap-8 bg-white w-[40%] '>
                        <div className='flex items-center px-2.5 py-[2px] gap-[5px] rounded-md border border-[#397cf61a] bg-[#DDE9FF] w-fit '>
                            <Image
                                src='/images/dashboard/Dot.svg'
                                width="10"
                                height="10"
                                alt="Dots" />
                            <span className='text-[#1D2433] text-base font-medium leading-[18px] '>Reseller</span>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-2.5'>
                            <div className='text-[#111827] text-2xl font-semibold leading-6 tracking-[-0.24px] '>20%</div>

                            <div className='flex items-center justify-center gap-1'>
                                <Image
                                    src='/images/dashboard/trendUp.svg'
                                    width="14"
                                    height="14"
                                    alt='trendUp' />
                                <span className='text-[#12A380] text-xs font-medium leading-3 '>2.11%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SalesRevenue />

            <div className="flex flex-col xl:flex-row  xl:items-center xl:justify-between gap-5 w-full ">
                <div className="bg-white rounded-lg xl:w-1/2  w-full lg:h-[450px] ">
                    <div className="flex flex-row justify-between px-6  mt-4">
                        <div className="flex flex-col  justify-center gap-3 ">
                            <span className="text-[#1D2433] text-xl font-semibold leading-[18px] ">
                                Sales by Country of Origin
                            </span>
                        </div>

                        <CustomSelect name={'This Month'} dropdownlist={Monthdropdownlist} />
                    </div>

                    <GraphTable />
                    <div className="w-full flex flex-row justify-center items-center p-4 text-lg gap-2 font-semibold text-blue-600 mt-2">
                        <span>View all Countries data</span>
                        <Image
                            src="/images/dashboard/downArrow.svg"
                            width="18"
                            height="6"
                            alt="downArrow"
                            className="-rotate-90"
                        />
                    </div>
                </div>
                <div className="xl:w-1/2 w-full bg-white rounded-lg lg:h-[450px]">
                    <div className="flex flex-row justify-between px-6 mt-4">
                        <div className="flex flex-col justify-center gap-3 ">
                            <span className="text-[#1D2433] text-xl font-semibold leading-[18px] ">
                                Financial Data
                            </span>
                        </div>
                        <CustomSelect name={'This Month'} dropdownlist={Monthdropdownlist} />
                    </div>
                    <div className=" flex flex-wrap items-center justify-center lg:grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 px-6  ">
                    {/* <div className="flex items-center  flex-wrap gap-4 mt-8 px-6 w-full "> */}
                        {block.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="p-4 flex flex-col gap-8 bg-white min-w-[270px] rounded-lg top-1  shadow-[0px_0px_0px_1px_#12376914]"
                                >
                                    <div className="flex items-center px-2.5 py-[2px] gap-[5px] rounded-md border border-[#397cf61a] bg-[#DDE9FF] w-fit ">
                                        <Image
                                            src="/images/dashboard/Dot.svg"
                                            width="10"
                                            height="10"
                                            alt={item.title}
                                        />
                                        <span className="text-[#1D2433] text-base font-medium leading-[18px] ">
                                            {item.title}
                                        </span>
                                    </div>
                                    <div className="flex items-end justify-between gap-5 ">
                                        <div className="flex flex-col items-start justify-center gap-2.5">
                                            <div className="text-[#111827] text-2xl font-semibold leading-6 tracking-[-0.24px] ">
                                                {item.price}
                                            </div>

                                            <div className="flex items-center justify-center gap-1">
                                                <span>
                                                    {item.graph === "Up" ? (
                                                        <Image
                                                            src="/images/dashboard/trendUp.svg"
                                                            width="14"
                                                            height="14"
                                                            alt={item.graph}
                                                        />
                                                    ) : (
                                                        <Image
                                                            src="/images/dashboard/trenddown.svg"
                                                            width="14"
                                                            height="14"
                                                            alt={item.graph}
                                                        />
                                                    )}
                                                </span>
                                                <span className="text-[#12A380] text-xs font-medium leading-3">
                                                    {item.percentage}
                                                </span>
                                                <span className="text-[#6B7280] text-sm font-medium leading-5 ">
                                                    {item.month}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            {item.graph === "Up" ? (
                                                <Image
                                                    src="/images/dashboard/Upgraph.svg"
                                                    width="50"
                                                    height="28"
                                                    alt={item.graph}
                                                />
                                            ) : (
                                                <Image
                                                    src="/images/dashboard/Downgraph.svg"
                                                    width="50"
                                                    height="28"
                                                    alt={item.graph}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full flex flex-row justify-center items-center p-4 text-lg gap-2 font-semibold text-blue-600">
                        <span>View all Financial data</span>
                        <Image
                            src="/images/dashboard/downArrow.svg"
                            width="18"
                            height="6"
                            alt="downArrow"
                            className="-rotate-90"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg">
                <div className="flex items-center justify-between px-6 mt-8">
                    <div className="flex flex-col  justify-center gap-3 ">
                        <span className="text-[#1D2433] text-xl font-semibold leading-[18px] ">
                            Top Products
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CustomSelect name={'This Month'} dropdownlist={Monthdropdownlist} />
                    </div>
                </div>
                <Tableboard />
                <div className="w-full flex flex-row justify-center items-center p-4 text-lg gap-2 font-semibold text-blue-600">
                    <span>View all products data</span>
                    <Image
                        src="/images/dashboard/downArrow.svg"
                        width="18"
                        height="6"
                        alt="downArrow"
                        className="-rotate-90"
                    />
                </div>
            </div>

            <MarketingGraph />

            <SalesAndReviewa />

            <div className="bg-white rounded-lg">
                <div className="flex items-center justify-between px-6 mt-8">
                    <div className="flex flex-col  justify-center gap-3 ">
                        <span className="text-[#1D2433] text-xl font-semibold leading-[18px] ">
                            Top Categories
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CustomSelect name={'This Month'} dropdownlist={Monthdropdownlist} />
                    </div>
                </div>
                <DataTable />
                <div className="w-full flex flex-row justify-center items-center p-4 text-lg gap-2 font-semibold text-blue-600">
                    <span>View all Categories data</span>
                    <Image
                        src="/images/dashboard/downArrow.svg"
                        width="18"
                        height="6"
                        alt="downArrow"
                        className="-rotate-90"
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard