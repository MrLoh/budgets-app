import styled from 'styled-components'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { BEER_COLORS } from './theme'

const Wrapper = styled.TouchableOpacity`
  background-color: ${(p) => BEER_COLORS[p.colorValue || 0]};
  padding: 10px;
  /* margin: 7.5px 15px; */
  /* border-radius: 1.5px; */
`

const RatingWrapper = styled.View`
  flex-direction: row;
  margin: 2px 0px;
  height: 15px;
  align-items: center;
`

const Name = styled.Text`
  font-weight: 700;
  font-size: 15;
`

const BeerAttribute = styled.Text`
  font-size: 13;
`

const DeleteButton = styled.TouchableOpacity`
  width: 20px;
  height: 30px;
  position: absolute;
  top: 0px;
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
        {[1, 2, 3, 4, 5].map((i) =>
          rating >= i ? (
            <AntDesign name={'star'} size={14} color={rating >= i ? '#000' : '#bbb'} key={i} />
          ) : null
        )}
      </RatingWrapper>
      <BeerAttribute>{brewery}</BeerAttribute>
      <BeerAttribute>{style}</BeerAttribute>
      <DeleteButton onPress={() => onDelete(id)}>
        <AntDesign name="close" size={20} color="black" />
      </DeleteButton>
    </Wrapper>
  )
}
