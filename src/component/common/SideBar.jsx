import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = ({ children }) => {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-center  w-full border-b border-[#EBEBEB] '>
                <div className='flex items-center justify-between min-w-[260px] p-4 border-r border-[#EBEBEB]  '>
                    <Link href="/">
                        <Image
                            src="/images/dashboard/logo.svg"
                            width="137"
                            height="20"
                            alt='Brand name'
                        />
                    </Link>
                    <Image
                        src="/images/dashboard/expand.svg"
                        width="16"
                        height="16"
                        alt='arrow'
                    />
                </div>
                <div className='flex items-center justify-between w-full px-8 py-3 gap-5 '>
                    <div className=''>
                        <input type="text" placeholder='Search anything...' className='px-3 py-1 border border-[#EBEBEB] rounded w-full md:w-[240px] lg:w-[340px] placeholder:text-sm font-normal  ' />
                    </div>
                    <div className='flex items-center justify-center gap-4' >
                        <div className='relative p-2 rounded-full bg-[#F4F4F4] '>
                            <Image
                                src="/images/dashboard/bell.svg"
                                width="16"
                                height="16"
                                alt='bell'
                                className='cursor-pointer'
                            />
                            <Image
                                src="/images/dashboard/Dots.svg"
                                width="5"
                                height="5"
                                alt='dots'
                                className='absolute top-[6px] right-[9px]'
                            />
                        </div>
                        <div className='flex items-center  justify-center gap-2.5 cursor-pointer'>
                            <Image
                                src="/images/dashboard/userlogo.png"
                                width="32"
                                height="32"
                                alt='user'
                            />
                            <span>James Hudges</span>
                            <Image
                                src="/images/dashboard/downArrow.svg"
                                width="14"
                                height="14"
                                alt='user'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-start  w-full'>
                <div className=' border-r border-[#EBEBEB] min-w-[260px] h-screen '>
                    <div className='px-2 py-3 flex flex-col items-start gap-1'>
                        <span className='p-3 w-full text-[#7E8B99] font-semibold leading-3 text-xs tracking-[0.1px] '>MAIN MENU</span>
                        <Link href="/dashboard" className='flex items-center  gap-3 bg-[#EDECF9] w-full px-3 py-2.5 rounded-md '>
                            <Image
                                src="/images/dashboard/home.svg"
                                width="18"
                                height="18"
                                alt='arrow'
                            />
                            <span className='text-[#705EE6] text-sm font-semibold leading-3 tracking-[0.2px] '>Dashboard</span>
                        </Link>
                    </div>
                </div>
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SideBar