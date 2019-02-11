import styled from 'styled-components'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { BEER_COLORS } from './theme'

const Wrapper = styled.TouchableOpacity`
  background-color: ${(p) => BEER_COLORS[p.colorValue || 0]};
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

const DeleteButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  justify-content: center;
  align-items: center;
`

export const BeerListItem = ({
  id,
  name,
  brewery,
  style,
  rating,
  colorValue,
  onPress,
  onDelete,
}) => {
  return (
    <Wrapper colorValue={colorValue} onPress={() => onPress(id)}>
      <Name>{name}</Name>
      <RatingWrapper>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star active={rating >= i} key={i} />
        ))}
      </RatingWrapper>
      <BeerAttribute>{brewery}</BeerAttribute>
      <BeerAttribute>{style}</BeerAttribute>
      <DeleteButton onPress={() => onDelete(id)}>
        <AntDesign name="close" size={20} color="black" />
      </DeleteButton>
    </Wrapper>
  )
}
