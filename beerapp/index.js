import React, { useState } from 'react'
import shortid from 'shortid'
import { ActivityIndicator, StatusBar } from 'react-native'
import styled from 'styled-components'

import { BeerListView } from './BeerListView'
import { BeerItemModal } from './BeerItemModal'
import { usePersistedState } from './utils'

const ActivityWrapper = styled.View`
  background-color: #fff8c3;
  align-items: center;
  justify-content: center;
`

const App = () => {
  const [beerList, setBeerList, initialized] = usePersistedState('BeerList', [])
  const [activeBeerItem, setActiveBeerItem] = useState()
  return initialized ? (
    <>
      <StatusBar barStyle="light-content" />
      <BeerListView
        beerList={beerList}
        onAddBeer={() => {
          setActiveBeerItem({})
        }}
        onOpenBeer={(id) => {
          setActiveBeerItem(beerList.find((item) => item.id === id))
        }}
      />
      {activeBeerItem ? (
        <BeerItemModal
          onDismiss={() => {
            setActiveBeerItem(undefined)
          }}
          onSaveBeer={(beerValues) => {
            if (activeBeerItem.id) {
              const updatedBeerItem = { id: activeBeerItem.id, ...beerValues }
              const itemIndex = beerList.findIndex((item) => item.id === activeBeerItem.id)
              setBeerList([
                ...beerList.slice(0, itemIndex),
                updatedBeerItem,
                ...beerList.slice(itemIndex + 1),
              ])
            } else {
              const newBeerItem = { id: shortid.generate(), ...beerValues }
              setBeerList([...beerList, newBeerItem])
            }
            setActiveBeerItem(undefined)
          }}
          onDeleteBeer={(id) => {
            const itemIndex = beerList.findIndex((item) => item.id === id)
            if (itemIndex >= 0)
              setBeerList([...beerList.slice(0, itemIndex), ...beerList.slice(itemIndex + 1)])
            setActiveBeerItem(undefined)
          }}
          activeBeerItem={activeBeerItem}
        />
      ) : null}
    </>
  ) : (
    <ActivityWrapper>
      <ActivityIndicator size="large" color="white" />
    </ActivityWrapper>
  )
}

export default App
