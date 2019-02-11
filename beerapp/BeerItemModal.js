import React, { useState } from 'react'
import styled from 'styled-components'
import { Dimensions, Slider } from 'react-native'

import { BEER_COLORS } from './theme'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const ModalWrapper = styled.TouchableOpacity`
  position: absolute;
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
`

const ModalCard = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  background-color: ${(p) => BEER_COLORS[p.colorValue || 0]};
  shadow-color: black;
  shadow-offset: 1px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  width: ${SCREEN_WIDTH - 60}px;
  height: ${SCREEN_HEIGHT - 300}px;
  border-radius: 10px;
  padding: 20px;
`

const SaveButton = styled.TouchableOpacity`
  width: 60px;
  height: 30px;
  position: absolute;
  bottom: 15px;
  right: 10px;
  padding: 5px;
  border-radius: 2px;
`

const Save = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: red;
`

const BeerAttribute = styled.TextInput`
  font-weight: 700;
  font-size: 15px;
  margin: 5px;
`

const RatingWrapper = styled.View`
  flex-direction: row;
  margin: 5px 0px;
  height: 15px;
  align-items: center;
`

const Rating = styled.TouchableOpacity`
  width: 14px;
  height: 14px;
  background-color: ${(p) => (p.active ? '#000' : '#bbb')};
  border-radius: 7px;
  margin: 5px 5px;
`

export const BeerItemModal = ({ onDismiss, onSaveBeer, activeBeerItem }) => {
  const [name, onSetName] = useState(activeBeerItem.name || '')
  const [brewery, onSetBrewery] = useState(activeBeerItem.brewery || '')
  const [style, onSetStyle] = useState(activeBeerItem.style || '')
  const [rating, onSetRating] = useState(activeBeerItem.rating || 0)
  const [colorValue, onSetColorValue] = useState(activeBeerItem.colorValue || 0)
  return (
    <ModalWrapper onPress={onDismiss}>
      <ModalCard colorValue={colorValue}>
        <SaveButton onPress={() => onSaveBeer({ name, brewery, style, rating, colorValue })}>
          <Save>Save</Save>
        </SaveButton>
        <BeerAttribute placeholder="Name" onChangeText={onSetName} value={name} />
        <BeerAttribute placeholder="Brewery" onChangeText={onSetBrewery} value={brewery} />
        <BeerAttribute placeholder="Style" onChangeText={onSetStyle} value={style} />
        <RatingWrapper>
          {[1, 2, 3, 4, 5].map((i) => (
            <Rating active={rating >= i} onPress={() => onSetRating(i)} key={i} />
          ))}
        </RatingWrapper>
        <Slider
          value={colorValue}
          onValueChange={onSetColorValue}
          maximumValue={BEER_COLORS.length - 1}
          step={1}
        />
      </ModalCard>
    </ModalWrapper>
  )
}