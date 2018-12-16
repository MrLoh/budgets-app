import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Text, Alert } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => count && Alert.alert(`you clicked ${count} times`))
  return (
    <Wrapper>
      <Text>Test Counter</Text>
      <Text onPress={() => setCount(count + 1)}>{count}</Text>
    </Wrapper>
  )
}

export default App
