import Image from 'next/image'
import React, { useState } from 'react'
import DateRangeComp from './DateRangeComp';
import CustomSelect from './CustomSelect';

const dropdownlist = [
    {
        id: 1,
        name: 'First Tab',
        icon: ""
    },
    {
        id: 2,
        name: 'Secode Tab',
        icon: ""
    },
    {
        id: 3,
        name: 'Third Tab',
        icon: ""
    },
]

const CustombodyHeader = () => {
    const [active, setActive] = useState('FinancialYear');

    const handleSwitch = (value) => {
        setActive(value);
    };
    return (
        <div className='flex flex-col items-start justify-center w-full gap-6 '>
            <div className='w-full flex flex-wrap items-center justify-between gap-5 lg:gap-10'>
                <div className='flex flex-col items-start justify-center gap-1'>
                    <span className='text-2xl font-bold leading-6 text-[#3C3E49] '>Dashboard</span>
                    <span className='text-[#75757A] text-sm font-medium leading-4 '>Here you can see all about your product statistics</span>
                </div>
                <div className='flex flex-wrap items-center justify-start sm:justify-center gap-5'>
                    <div className='flex items-center justify-center gap-2 rounded-lg bg-white shadow-[0px_0px_0px_1px_#12376914] py-2.5 px-4 '>
                        <Image
                            src="/images/dashboard/presentation.svg"
                            width="20"
                            height="20"
                            alt='presentation'
                        />
                        <span className='text-[#1D2433] text-sm font-medium leading-5 '>View Insights</span>
                    </div>
                    <div className='bg-[#6956E5] flex items-center justify-center py-2 px-4 gap-2 rounded-lg shadow-[0px_1px_2px_0px_#A4ACB9] '>

                        <Image
                            src="/images/dashboard/thumbs-up.svg"
                            width="20"
                            height="20"
                            alt='thumbs-up'
                        />
                        <span className='text-white text-sm font-medium leading-6'>View Recommendation</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-5 items-start xl:items-center justify-between w-full cursor-pointer'>
                <CustomSelect name={'By Travel Date'}  dropdownlist={dropdownlist} />

                <div className='flex flex-wrap items-center justify-start xl:justify-center gap-3'>
                    <div className=" cursor-pointer flex items-center gap-2 p-1 rounded-lg bg-[#F1F3F9] border-[#EAECF0] ">
                        <span
                            className={`block px-6 py-2 ${active === 'FinancialYear' ? 'text-[#1D2433] bg-white transition-all duration-300 ' : 'text-[#1D2433A6] '} cursor-pointer text-sm font-bold leading-5 `}
                            onClick={() => handleSwitch('FinancialYear')}
                        >
                            Financial Year
                        </span>
                        <span
                            className={`block px-6 py-2 ${active === 'Calendar' ? 'text-[#1D2433] bg-white transition-all duration-300 ' : 'text-[#1D2433A6]'} cursor-pointer text-sm font-bold leading-5`}
                            onClick={() => handleSwitch('Calendar')}
                        >
                            Calendar
                        </span>
                    </div>
                    <div className='py-2 px-4 flex items-center  rounded-lg shadow-[0px_0px_0px_1px_#12376914] bg-white gap-3 w-80'>
                        <DateRangeComp />
                        <Image
                            src="/images/dashboard/downArrow.svg"
                            width="8"
                            height="6"
                            alt='downArrow'
                        />
                    </div>
                    <div className='flex items-center justify-center gap-2  shadow-[0px_0px_0px_1px_#12376914] py-2.5 px-4 rounded-lg bg-white cursor-pointer '>
                        <Image
                            src="/images/dashboard/download.svg"
                            width="13"
                            height="13"
                            alt='downArrow'
                        />
                        <span>Export PDF</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustombodyHeader


// box-shadow: 0px_0px_0px_1px_#12376914;

// box-shadow: 0px 1px 2px 0px #A4ACB93D;
