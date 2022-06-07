import React from 'react'
import { useMock } from "../context/DataContext"

const RecentArtist = () => {
    const { mock } = useMock()

  return (
    <section className='w-full tablet:w-[50%] tablet:mx-auto  laptop:w-[30%] min-h-[250px] p-4 mb-12'>
        <h2 className='text-lg pb-4'>Recent artist</h2>
        <div className='w-full min-h-[300px] bg-inherit rounded-3xl flex flex-wrap justify-between items-center gap-y-5'>
            {mock.map((artist, index)=>{
                return (
                    <div className='w-[130px] h-[140px] rounded-2xl bg-red-900 overflow-hidden hover:opacity-70 transition-opacity duration-300' key={index}>
                        <img src={artist.artists?.artist_card} alt="Artist picture" className='h-full w-full object-cover' />
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default RecentArtist