import React, { useState, useEffect } from 'react'
import shortid from 'shortid'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'

import { BeerListView } from './BeerListView'
import { BeerItemModal } from './BeerItemModal'
import { usePersistedState } from './utils'

// const defaultBeerList = [
//   {
//     id: shortid.generate(),
//     name: 'Lakefront IPA',
//     brewery: 'Lakefront',
//     style: 'IPA',
//     rating: 5,
//     colorValue: 5,
//   },
//   {
//     id: shortid.generate(),
//     name: 'Gumballhead',
//     brewery: 'Three Floyds',
//     style: 'wheat',
//     rating: 4,
//     colorValue: 2,
//   },
// ]

const ActivityWrapper = styled.View`
  width: 200px;
  height: 200px;
  background-color: gray;
  align-items: center;
  justify-content: center;
`

const App = () => {
  const [beerList, setBeerList, initialized] = usePersistedState('BeerList', [])
  const [activeBeerItem, setActiveBeerItem] = useState()
  return initialized ? (
    <>
      <BeerListView
        beerList={beerList}
        onDeleteBeer={(id) => {
          const itemIndex = beerList.findIndex((item) => item.id === id)
          setBeerList([...beerList.slice(0, itemIndex), ...beerList.slice(itemIndex + 1)])
        }}
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
