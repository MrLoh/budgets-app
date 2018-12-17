import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'

import Button from './Button'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: seagreen;
`

const App = () => {
  return (
    <Wrapper>
      <Text>Hello, Anika</Text>
      <Button label="my button" onPress={() => alert('Hello')} />
      <Button label="my other button" onPress={() => alert('Hello too')} color="red" />
    </Wrapper>
  )
}

export default App
