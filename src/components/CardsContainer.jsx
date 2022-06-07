import React from 'react'
import '@splidejs/react-splide/css';
import styled from "styled-components"
import Card from './Card'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useMock } from '../context/DataContext';

const CardsContainer = () => {
    const { mock } = useMock()
  return (
    <CardsContainerM>
        <Splide tag='section' aria-label='arial label test' options={{
            type: 'loop',
            rewind: true,
            padding: "1rem",
            gap: "1rem",
        }}>
        {
            mock.map((mockCard, index)=>{
                return (
                    <SplideSlide key={index}>
                        <Card cover={mockCard.artists.artist_card} />
                    </SplideSlide>
                )
            })
        }

        </Splide>
    </CardsContainerM>
  )
}

const CardsContainerM = styled.div`
    background: transparent;
    width: 100%;
    min-height: 300px;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    overflow: hidden;
    box-sizing: border-box;

    section {
        width: 100%;
        padding: 1rem;
    }
`

export default CardsContainer