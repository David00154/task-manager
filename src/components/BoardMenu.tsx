import Link from 'next/link'
import React from 'react'
import { FC } from 'react'
import { HiOutlineSquares2X2, HiOutlineSquaresPlus } from "react-icons/hi2"

const BoardMenu: FC = () => {
    return (
        <div className='flex flex-col gap-4 flex-1 mt-10'>
            <span className='inline-flex text-[#fff] opacity-[.6] font-medium text-sm pl-5'>ALL BOARDS (2)</span>
            {/* <div className="overflow-y-auto h-full"> */}
            <ul className='flex flex-col gap-1 pr-8'>
                {/* bg-site-purple */}
                <li className='bg-purple-700 hover:bg-purple-800 py-3 px-5 rounded-r-lg cursor-pointer'>
                    <Link href={'#'}>
                        <a className='text-white font-medium flex items-center gap-2 h-full w-full'>
                            <HiOutlineSquares2X2 aria-hidden="true" size={23} />
                            Platform launch
                        </a>
                    </Link>
                </li>
                <li className='py-3 px-5 rounded-r-lg cursor-pointer'>
                    <Link href={'#'}>
                        <a className='text-[#fff] opacity-[.6]  font-medium flex items-center gap-2'>
                            <HiOutlineSquares2X2 aria-hidden="true" size={23} />
                            Road Map
                        </a>
                    </Link>
                </li>
                <li className='py-3 px-5 rounded-r-lg cursor-pointer'>
                    <Link href={'#'}>
                        {/* text-site-purple opacity-[3] */}
                        <a className='text-purple-700 hover:text-purple-800 font-medium flex items-center gap-2'>
                            <HiOutlineSquaresPlus aria-hidden="true" size={23} />
                            Create New Board
                        </a>
                    </Link>
                </li>
            </ul>
            {/* </div> */}

        </div>
    )
}

export default BoardMenu