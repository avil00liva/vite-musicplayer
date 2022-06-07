import React from 'react'
import { FiSearch } from "react-icons/fi"
import { BsFilter } from "react-icons/bs"
import TagsBox from './TagsBox'

const Navbar = () => {
  return (
    <nav className='w-full min-h-[40px] bg-[#202020] border border-white rounded-[25px] py-[0.3rem] px-4 flex items-center gap-[5px]'>
        <div className='h-full flex items-center flex-1'>
            <FiSearch className='text-[1.35rem] mr-[13px] cursor-pointer' />
            <input type="text" placeholder='Search..' className='border-0 bg-inherit border-transparent outline-none w-full h-full text-white text-[18px] placeholder:text-white' />
        </div>
        <div className='hidden laptop:flex items-center gap-[3px]'>
            <TagsBox tag={"Rock"} />
            <TagsBox tag={"Minimal"} />
            <TagsBox tag={"House"} />
        </div>
        <div className='w-[2px] h-[30px] bg-[#363636] m-[3px]' />
        <div className='h-full flex justify-between items-center text-[13px] text-[#f8f8f8]'>
            <BsFilter className='m-0 cursor-pointer text-[1.45rem]' />
            Filters
        </div>
    </nav>
  )
}

export default Navbar