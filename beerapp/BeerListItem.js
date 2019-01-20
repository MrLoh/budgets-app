import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.View`
  background-color: #eee;
  padding: 10px;
  margin: 7.5px 15px;
  border-radius: 1.5px;
`

const RatingWrapper = styled.View`
  flex-direction: row;
  margin: 0 -2px;
  height: 15px;
  align-items: center;
`

const Name = styled.Text`
  font-weight: 700;
`

const BeerAttribute = styled.Text`
  color: #666;
`
const Star = styled.View`
  width: 7px;
  height: 7px;
  background-color: ${(p) => (p.active ? '#000' : '#bbb')};
  border-radius: 3.5px;
  margin: 0 2px;
`

export const BeerListItem = ({ name, brewery, style, rating }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <RatingWrapper>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star active={rating >= i} key={i} />
        ))}
      </RatingWrapper>
      <BeerAttribute>{brewery}</BeerAttribute>
      <BeerAttribute>{style}</BeerAttribute>
    </Wrapper>
  )
}
