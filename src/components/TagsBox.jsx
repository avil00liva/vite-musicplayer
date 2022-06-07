import React from 'react'
import styled from "styled-components"

const TagsBox = ({tag}) => {
  return (
    <Box>
        {tag}
    </Box>
  )
}

TagsBox.defaultProps = {
    tag: "TagBox"
}

const Box = styled.div`
    background: transparent;
    padding: 0.5rem 0.7rem;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 7px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.3s ease;
    text-align: center;
    &:hover {
        opacity: 0.7;
    }
` 

export default TagsBox