import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import avatar from "../assets/images/IMG_20200113_074147_067.jpg"
import { BsHeadphones, BsHeartFill } from "react-icons/bs"
import { FaPlay, FaPause } from "react-icons/fa"
import TagsBox from './TagsBox'
import CardsContainer from './CardsContainer'
import RecentArtist from './RecentArtist'
import PlayerComponent from './PlayerComponent'
import { useMock } from '../context/DataContext'

const MainContent = () => {
    const [mockIndex, setMockIndex] = useState(null)
    const [mockSingle, setMockSingle] = useState({})
    const {mock, setSelectedSong, selectedSong} = useMock()
    const [playing, setPlaying] = useState(false)
    const musicGenres = ["Rock", "House", "Pop", "Metal", "Indie", "Trap", "Rap", "Cumbia", "Lofi", "Relax"]

    const playSong = ()=>{
        setPlaying(!playing)
        setSelectedSong(mock[mockIndex])
    }

    useEffect(()=>{
        const maxLimit = mock.length
        let randomNum = Math.random() * maxLimit
        const randomIndex = Math.floor(randomNum)
        setMockIndex(randomIndex)
    },[mock])



    console.log(playing);


  return (
    <div className='w-full h-full bg-inherit p-4'>
        <CardsContainer />
        <div className='w-full min-h-[300px] bg-inherit flex flex-wrap justify-start items-center gap-4'>
            <section className='w-full min-h-[250px] bg-inherit p-4'>
                <h2 className='text-lg'>
                    Genres
                </h2>
                <div className='w-full h-full bg-inherit flex flex-wrap justify-start items-center gap-4 mt-4'>
                    {musicGenres.map((tag, index)=>{
                        return (
                            <TagsBox tag={tag} key={index} />
                        )
                    })}
                </div>
                <div className='w-full min-h-[30px] border border-white bg-[#202020] rounded-3xl p-4 text-center mt-4 transition-opacity duration-300 hover:opacity-70 cursor-pointer text-lg'>All genres</div>
            </section>
            <section className='w-full min-h-[250px] bg-inherit p-4'>
                <h2 className='text-lg'>Tracks of the Week</h2>
                <div className='mt-4 w-full min-h-[200px] p-4 rounded-lg border border-gray-200'>
                    <div className='w-full min-h-[60px] border-b border-gray-600 mb-2 flex flex-col tablet:flex-row items-center justify-start p-4 gap-4'>
                        <div className='w-[80px] tablet:w-[90px] tablet:h-[65px] h-[80px] rounded-[20px] bg-[#202020] overflow-hidden tablet:mr-4'>
                            <img src={mock[mockIndex]?.artists?.artist_card} alt="Artist picture" className='w-full h-full' />
                        </div>
                        <div className='h-full w-fit tablet:w-[150px] text-center '>
                            <h1 className='font-bold text-xl'>{mock[mockIndex]?.artists?.artist_name}</h1>
                            <h3 className='text-gray-300'>{mock[mockIndex]?.artists?.song?.song_name}</h3>
                        </div>
                        <div className='h-full w-full flex justify-between tablet:justify-end items-center gap-4'>
                            <div className='flex items-center text-xl'>
                                <BsHeadphones className='text-2xl' />
                                <strong className='ml-2'>244k</strong>
                            </div>
                            <div className='h-full min-h-[50px] w-[100px] bg-inherit rounded-[30px] border border-gray-500 flex justify-between items-center'>
                                <BsHeartFill className='text-gray-200 text-lg ml-4' />
                                <div className='w-[50px] h-[50px] rounded-full border border-gray-300 cursor-pointer flex justify-center items-center transition duration-300 hover:bg-gray-800' onClick={playSong} >
                                    {!playing ? <FaPlay className='text-[1.3rem]' /> : <FaPause className='text-[1.3rem]' /> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RecentArtist />
            <PlayerComponent {...selectedSong} playing={playing} setPlaying={setPlaying} />
        </div>
    </div>
  )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: #000;
    padding: 1rem;
`

const Searchbar = styled.div`
    width: 100%;
    min-height: 40px;
    background: #202020;
    border: 1px solid #fff;
    border-radius: 25px;
    padding: 0.3rem 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
`

const InputContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;

    svg {
        font-size: 1.35rem;
        margin-right: 13px;
        cursor: pointer;
    }
    input {
        border: 0px solid transparent;
        background: transparent;
        width: 100%;
        height: 100%;
        color: #fff;
        outline: none;
        font-size: 18px;

        &::placeholder {
            color: #fff;
            text-align: start;
        }
    }
`

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0 3px;
`
const Line = styled.div`
    width: 2px;
    height: 30px;
    background: #363636;
    margin: 3px;
`
const Filterdiv = styled.div`
    flex: ;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #f8f8f8;

    svg {
        margin: 0;
        cursor: pointer;
        font-size: 1.45rem;
    }
`


export default MainContent