import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${(p) => p.color || 'white'};
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
`

const Label = styled.Text`
  font-weight: 800;
  font-size: 20px;
  color: lightcoral;
`

export const Button = ({ label, onPress, color }) => (
  <ButtonWrapper onPress={onPress} color={color}>
    <Label>{label.toUpperCase()}</Label>
  </ButtonWrapper>
)

export const Title = styled.Text`
  font-size: 40px;
  font-weight: 900;
  color: lightcoral;
`

const PictureFrame = styled.View`
  margin: 20px;
  border-bottom-width: 50px;
  border-width: 15px;
  border-color: white;
`

const Picture = styled.Image`
  width: 200px;
  height: 200px;
`

const ActivityWrapper = styled.View`
  width: 200px;
  height: 200px;
  background-color: gray;
  align-items: center;
  justify-content: center;
`

export const Polaroid = ({ uri, loading }) => (
  <PictureFrame>
    {loading ? (
      <ActivityWrapper>
        <ActivityIndicator size="large" color="white" />
      </ActivityWrapper>
    ) : (
      <Picture source={{ uri: uri }} />
    )}
  </PictureFrame>
)
