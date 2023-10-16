import Image from 'next/image'
import React from 'react'
import CustomSelect from '../common/CustomSelect'


const peformanceData = [
    { index: 0, title: "Trip advisor", image: "/images/Dashboard/Ellipse1.svg", performance: "89%", price: '$67,098', color: 'bg-[#397CF629]' },
    { index: 1, title: "Viator", image: "/images/Dashboard/Ellipse2.svg", performance: "75%", price: '$32,098', color: 'bg-[#EE46BC29]' },
    { index: 2, title: "Klook", image: "/images/Dashboard/Ellipse3.svg", performance: "65%", price: '$67,098', color: 'bg-[#F7900929]' },
    { index: 3, title: "Experience Oz", image: "/images/Dashboard/Ellipse4.svg", performance: "35%", price: '$67,098', color: 'bg-[#15C39A29]' },
    { index: 4, title: "GetYourGuide", image: "/images/Dashboard/Ellipse5.svg", performance: "55%", price: '$67,098', color: 'bg-[#3D39F629]' },
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

const commentsData = [
    {
        id: 0,
        user: "/images/Dashboard/Oval1.svg",
        name: "Jonathan Willium",
        ratting: 4.0,
        dayago: '4 days ago',
        description: "It's user friendly. Easy to search, browse, look up orders, track shipping progress, update profile settings..."
    },
    {
        id: 1,
        user: "/images/Dashboard/Oval2.svg",
        name: "John Miller",
        ratting: 5.0,
        dayago: '4 days ago',
        description: "It's user friendly. Easy to search, browse, look up orders, track shipping progress, update profile settings..."
    },
    {
        id: 2,
        user: "/images/Dashboard/Oval3.svg",
        name: "Ket Jim",
        ratting: 5.0,
        dayago: '4 days ago',
        description: "It's user friendly. Easy to search, browse, look up orders, track shipping progress, update profile settings..."
    },
]


const SalesAndReviewa = () => {
    return (
        <div className='flex items-center justify-between w-full gap-6'>
            <div className='flex flex-col justify-center w-1/2  bg-white shadow-[0px_0px_0px_1px_#12376914] '>
                <div className='flex items-center justify-between gap-5 px-5 py-4'>
                    <span>Sales by Reseller</span>
                    <CustomSelect name={'By Travel Date'} dropdownlist={Monthdropdownlist}  />
                </div>
                <div className='flex items-center justify-between py-3 px-4 rounded-lg bg-[#F3F2FB] mx-5 '>
                    <div className='flex flex-col justify-center gap-1'>
                        <span className='text-[#475467] text-xs font-medium leading-4 '>Total Sales</span>
                        <span className='text-[#1D2433] text-lg font-semibold leading-7 '>$6,598</span>
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <span className='text-[#475467] text-xs font-medium leading-4 '>Orders</span>
                        <span className='text-[#1D2433] text-lg font-semibold leading-7 '>123</span>
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <span className='text-[#475467] text-xs font-medium leading-4 '>Total Pax</span>
                        <span className='text-[#1D2433] text-lg font-semibold leading-7 '>253</span>
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <span className='text-[#475467] text-xs font-medium leading-4 '>Avg. Order Value</span>
                        <span className='text-[#1D2433] text-lg font-semibold leading-7 '>$250.00</span>
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <span className='text-[#475467] text-xs font-medium leading-4 '>Lead Times</span>
                        <span className='text-[#1D2433] text-lg font-semibold leading-7 '>253</span>
                    </div>
                </div>
                <div className="px-5 py-6">

                    <div className='flex flex-col gap-4'>
                        {peformanceData.map((item, index) => {
                            const { title, performance, price, image, color } = item
                            return (
                                <div key={index} className='flex items-center gap-3 '>
                                    <div>
                                        <Image
                                            src={image}
                                            width="28"
                                            height="28"
                                            alt='downArrow'
                                        />
                                    </div>
                                    <div

                                        className="h-full w-full relative border border-[#F3F3F4]  py-7 px-[18px] sm:px-4 md:px-8 rounded-lg"
                                    >

                                        <div className={`bg-[#EEE7FD] absolute top-0 left-0 h-full rounded-lg ${color}`} style={{ width: performance }} />
                                        <div className="text-[15px] text-black absolute left-0 flex w-full h-full top-0 transform[-translate-y-1/2] px-[18px] sm:px-4 md:px-8 py-4 items-center justify-between cursor-pointer group  ">
                                            <span className="block">{title ?? ""}</span>
                                            <div className='flex items-center gap-1'>
                                                {title === 'Trip advisor' && <Image
                                                    src="/images/Dashboard/flash.svg"
                                                    width="16"
                                                    height="16"
                                                    alt='downArrow'
                                                />}
                                                <span className={`${title === 'Trip advisor' ? 'text-[#397CF6]' : 'text-[#3C3E49]'} font-semibold  text-sm leading-4  block`}>{price ?? ""}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className='flex items-center justify-center gap-5 p-8 border-t '>
                    <span className='text-[#6956E5] text-center text-base font-semibold leading-4 '>View all reseller data</span>
                    <Image
                        src="/images/Dashboard/downArrow.svg"
                        width="8"
                        height="4"
                        alt='downArrow'
                        className='-rotate-90'
                    />
                </div>
            </div>
            <div className='flex flex-col justify-center w-1/2  bg-white shadow-[0px_0px_0px_1px_#12376914] '>
                <div className='flex items-center justify-between gap-5 px-5 py-4'>
                    <span>Reviews & Ratings</span>
                </div>
                <div className='flex items-center justify-start py-3 px-4 rounded-lg bg-[#F3F2FB] mx-5 gap-4 '>
                    <div className='flex flex-col justify-center gap-1'>
                        <span className='text-[#475467] text-xs font-medium leading-4 '>Avg. Ratings</span>
                        <div className='flex items-center justify-center gap-1.5'>
                            <Image
                                src="/images/Dashboard/Star.svg"
                                width="18"
                                height="18"
                                alt='star'
                            />
                            <span className='text-[#1D2433] text-lg font-semibold leading-7 '>$6,598</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <span className='text-[#475467] text-xs font-medium leading-4 '>Total Reviews</span>
                        <div className='flex items-center justify-center gap-1.5'>
                            <span className='text-[#1D2433] text-lg font-semibold leading-7 '>10.0K</span>

                            <div className='flex items-center py-[2px] px-1.5 gap-1 bg-[#12a3802e] rounded-3xl '>
                                <Image
                                    src='/images/dashboard/trendUp.svg'
                                    width="14"
                                    height="14"
                                    alt='trendUp' />
                                <span className='text-[#12A380] text-xs font-normal leading-3 '>80%</span>
                            </div>

                        </div>
                    </div>

                </div>
                <div className=" py-4 ">
                    {
                        commentsData.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col justify-center gap-3 px-5 py-[14px] border-b border-[#F1F3F6] h-[127px] '>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <Image
                                                src={item.user}
                                                width='40'
                                                height='40'
                                                alt='userimage' />
                                        </div>
                                        <div className='flex items-center justify-between  w-full'>
                                            <div className='flex flex-col '>
                                                <span className='text-[#3C3E49] text-sm font-medium leading-5 '>{item.name}</span>
                                                <div className='flex items-center gap-1.5'>
                                                    {Array.from({ length: item.ratting }, (_, i) => (
                                                        <Image
                                                            key={i}
                                                            src="/images/Dashboard/Star.svg"
                                                            width="18"
                                                            height="18"
                                                            alt='star'
                                                        />
                                                    ))}
                                                    <span className='text-[#3C3E49] text-xs font-semibold leading-3 '>{item.ratting}</span>
                                                </div>
                                            </div>
                                            <span className='text-[#6B7280] text-xs font-normal leading-5 '>{item.dayago}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-[#6B7280] text-sm font-normal leading-[18px] '>{item.description}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center gap-5 p-8 border-t '>
                    <span className='text-[#6956E5] text-center text-base font-semibold leading-4 '>View all reseller data</span>
                    <Image
                        src="/images/Dashboard/downArrow.svg"
                        width="8"
                        height="4"
                        alt='downArrow'
                        className='-rotate-90'
                    />
                </div>
            </div>
        </div>
    )
}

export default SalesAndReviewa