import React from 'react'
import styled from "styled-components"
//import cover from "../assets/images/cover.webp"

const Card = ({cover}) => {
  return (
    <CardContent>
        <CoverImg src={cover} alt="Cover picture" />
    </CardContent>
  )
}

const CardContent = styled.div`
    width: 220px;
    height: 280px;
    border-radius: 35px;
    background: transparent;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease;

    &:hover {
        transform: scale(1.04)
    }
`

const CoverImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
`

export default Card