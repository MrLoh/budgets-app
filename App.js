import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Image, StatusBar } from 'react-native'

import { Button, Title, Polaroid } from './components'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`

const getRandomKitty = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search')
  const data = await response.json()
  const url = data[0].url
  await Image.prefetch(url)
  return url
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [uri, setUri] = useState(null)

  useEffect(async () => {
    const url = await getRandomKitty()
    setUri(url)
    setLoading(false)
  }, [])

  return (
    <Wrapper>
      <StatusBar barStyle="light-content" />
      <Title>KitKats</Title>
      <Polaroid uri={uri} loading={loading} />
      <Button
        label="Next"
        onPress={async () => {
          setLoading(true)
          const url = await getRandomKitty()
          setUri(url)
          setLoading(false)
        }}
      />
    </Wrapper>
  )
}

export default App
