import React, { useState } from 'react'
import styled from 'styled-components'
import { Dimensions, Slider, Alert, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { BlurView } from 'expo'

import { BEER_COLORS } from './theme'
import { BeerGlassIcon, glassPath } from './BeerGlassIcons'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const ModalWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;
`

const ModalBlur = styled(BlurView).attrs({
  tint: 'dark',
  intensity: 100,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ModalCard = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  background-color: ${(p) => BEER_COLORS[p.colorValue || 0]};
  shadow-color: black;
  shadow-offset: 0;
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
  color: #000;
`

const DeleteButton = styled.TouchableOpacity`
  width: 90px;
  height: 30px;
  position: absolute;
  bottom: 15px;
  left: 20px;
  padding: 5px;
  border-radius: 2px;
`

const Delete = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: darkred;
`

const BeerGlassIconWrapper = styled.View`
  /* margin: 5px 0px; */
  align-items: center;
  /* padding: 0 0 5px 0; */
`

const BeerAttribute = styled.TextInput.attrs({ keyboardAppearance: 'dark' })`
  font-weight: 300;
  font-size: 18px;
  margin: 5px;
`

const BeerAttributeName = styled.TextInput.attrs({ keyboardAppearance: 'dark' })`
  font-weight: 700;
  font-size: 18px;
  margin: 5px;
`

const BeerAttributeNotes = styled.TextInput.attrs({ keyboardAppearance: 'dark' })`
  font-weight: 400;
  font-size: 12px;
  margin: 5px;
  height: 60px;
  /* font-style: italic; */
`

const BeerAttributeDescription = styled.Text`
  font-weight: 400;
  font-size: 12px;
  margin: 0 5px;
  color: black;
  opacity: 0.5;
`

const RatingWrapper = styled.View`
  flex-direction: row;
  margin: 4px 0px;
  /* height: 20px; */
  align-items: center;
`

const Rating = styled.TouchableOpacity`
  /* width: 25px;
  height: 25px; */
  padding: 4px;
  justify-content: center;
  align-items: center;
`

export const BeerItemModal = ({ onDismiss, onSaveBeer, onDeleteBeer, activeBeerItem }) => {
  const [name, onSetName] = useState(activeBeerItem.name || '')
  const [brewery, onSetBrewery] = useState(activeBeerItem.brewery || '')
  const [location, onSetLocation] = useState(activeBeerItem.location || '')
  const [style, onSetStyle] = useState(activeBeerItem.style || '')
  const [rating, onSetRating] = useState(activeBeerItem.rating || 0)
  const [colorValue, onSetColorValue] = useState(activeBeerItem.colorValue || 0)
  const [notes, onSetNotes] = useState(activeBeerItem.notes || '')
  const [glassType, onSetGlassType] = useState(activeBeerItem.glassType || 0)
  return (
    <ModalWrapper onPress={onDismiss}>
      <ModalBlur>
        <ModalCard colorValue={colorValue} onPress={Keyboard.dismiss}>
          <SaveButton
            onPress={() =>
              onSaveBeer({ name, brewery, location, style, rating, colorValue, notes, glassType })
            }
          >
            <Save>SAVE</Save>
          </SaveButton>
          <DeleteButton
            onPress={() =>
              Alert.alert(
                'Delete Beer?',
                'This action cannot be undone.',
                [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Delete', onPress: () => onDeleteBeer(activeBeerItem.id) },
                ],
                { cancelable: true }
              )
            }
          >
            <Delete>DELETE</Delete>
          </DeleteButton>
          <BeerGlassIconWrapper>
            <BeerGlassIcon glassType={glassType} height={80} />
          </BeerGlassIconWrapper>
          <BeerAttributeName placeholder="Name" onChangeText={onSetName} value={name} />
          <BeerAttribute placeholder="Brewery" onChangeText={onSetBrewery} value={brewery} />
          <BeerAttribute placeholder="Location" onChangeText={onSetLocation} value={location} />
          <BeerAttribute placeholder="Style" onChangeText={onSetStyle} value={style} />
          <BeerAttributeNotes
            placeholder="Notes"
            multiline={true}
            maxLength={160}
            numberOfLines={4}
            onChangeText={onSetNotes}
            value={notes}
          />
          <BeerAttributeDescription>Beer Rating:</BeerAttributeDescription>
          <RatingWrapper>
            {[1, 2, 3, 4, 5].map((i) => (
              <Rating active={rating >= i} onPress={() => onSetRating(i)} key={i}>
                <AntDesign
                  name={'star'}
                  size={20}
                  color={rating >= i ? '#000' : '#C7BEB8'}
                  key={i}
                />
              </Rating>
            ))}
          </RatingWrapper>
          <BeerAttributeDescription>Set Glass:</BeerAttributeDescription>
          <Slider
            value={glassType}
            onValueChange={onSetGlassType}
            maximumValue={glassPath.length - 1}
            step={1}
            maximumTrackTintColor="#C7BEB8"
            minimumTrackTintColor="#C7BEB8"
          />
          <BeerAttributeDescription>Set Color:</BeerAttributeDescription>
          <Slider
            value={colorValue}
            onValueChange={onSetColorValue}
            maximumValue={BEER_COLORS.length - 1}
            step={1}
            maximumTrackTintColor="#C7BEB8"
            minimumTrackTintColor="#C7BEB8"
          />
        </ModalCard>
      </ModalBlur>
    </ModalWrapper>
  )
}
