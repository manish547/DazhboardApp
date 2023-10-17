import Image from 'next/image'
import React, { useState } from 'react'



const CustomSelect = ({ name, dropdownlist }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex items-center py-1.5 px-4 gap-2 bg-white rounded-lg shadow-[0px_0px_0px_1px_#12376914] relative cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <span className=''>{name}</span>
            <Image
                src="/images/dashboard/downArrow.svg"
                width="8"
                height="4"
                alt='downArrow'
            />
            {isOpen && <div className='py-3 px-[14px] flex flex-col gap-4 rounded-md border border-[#EBEBEB] shadow-[0px_2px_6px_0px_#00000014] absolute bg-white top-10 left-0 z-50'>
                {
                    dropdownlist.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center gap-2 cursor-pointer'>
                                {item.icon.length > 0 && <Image
                                    src={item.icon}
                                    width="16"
                                    height="16"
                                    alt={item.name} />}
                                <span className='text-[#4B5563] text-sm font-medium leading-[14px] w-[130px]   '>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )
}

export default CustomSelect