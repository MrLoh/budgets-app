import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${(p) => p.color || 'white'};
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
`

const Label = styled.Text`
  font-weight: bold;
`

const Button = ({ label, onPress, color }) => (
  <ButtonWrapper onPress={onPress} color={color}>
    <Label>{label}</Label>
  </ButtonWrapper>
)

export default Button
