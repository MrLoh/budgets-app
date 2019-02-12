import styled from 'styled-components'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { BEER_COLORS } from './theme'
import { BeerGlassIcon } from './BeerGlassIcons'

const Wrapper = styled.TouchableOpacity`
  background-color: ${(p) => BEER_COLORS[p.colorValue || 0]};
  padding: 10px;
  /* margin: 7.5px 15px; */
  /* border-radius: 1.5px; */
  flex-direction: row;
`

const ContentWrapper = styled.View`
  flex-direction: column;
`

const IconWrapper = styled.View`
  margin: 0 10px 0 0;
  justify-content: center;
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

const BeerAttributeLocation = styled.Text`
  font-size: 13;
  font-style: italic;
`

export const BeerListItem = ({
  id,
  name,
  brewery,
  location,
  style,
  rating,
  colorValue,
  glassType,
  onPress,
}) => {
  return (
    <Wrapper colorValue={colorValue} onPress={() => onPress(id)}>
      <IconWrapper>
        <BeerGlassIcon glassType={glassType} height={70} />
      </IconWrapper>
      <ContentWrapper>
        <Name>{name}</Name>
        <BeerAttribute>{brewery}</BeerAttribute>
        <BeerAttributeLocation>{location}</BeerAttributeLocation>
        <BeerAttribute>{style}</BeerAttribute>
        <RatingWrapper>
          {[1, 2, 3, 4, 5].map((i) =>
            rating >= i ? (
              <AntDesign name={'star'} size={14} color={rating >= i ? '#000' : '#bbb'} key={i} />
            ) : null
          )}
        </RatingWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
