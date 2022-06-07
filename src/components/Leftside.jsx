import React from 'react'
import styled from "styled-components"
import { BiHome } from "react-icons/bi"
import { MdExplore, MdMicrowave } from "react-icons/md"
import { BsFillMicFill, BsClockFill, BsThreeDots } from "react-icons/bs"



const Leftside = () => {
  return (
    <Aside>
        <img src="https://rb.gy/xkacau" alt="Spotify logo" />
        <Line />
        <Lista>
            <BiHome />
            <MdExplore />
            <BsFillMicFill />
            <MdMicrowave />
            <BsClockFill />
            <BsThreeDots />
        </Lista>
    </Aside>
  )
}


const Aside = styled.aside `
    background: inherit;
    width: 70px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #000;
    z-index: 50;

    /*position: fixed;
    top: 0;
    left: 0;
    margin-right: 70px;*/

    img {
        width: 70px;
        height: 70px;
    }
`
const Line = styled.div `
    width: 60px;
    height: 1px;
    background: #363636;
    margin-bottom: 1rem;
`
const Lista = styled.div `
    width: 100%;
    min-height: 90px;
    height: 100%;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem 0;

    svg {
        font-size: 1.45rem;
        cursor: pointer;
        transition: 0.3s ease;
        color: #494949;

        &:first-child {
            color: #fff;
        } &:first-child:hover {
            color: lime;
        }

        &:hover {
            color: #404040;
        }
    }
`

export default Leftside