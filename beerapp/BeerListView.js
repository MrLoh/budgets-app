import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Fuse from 'fuse.js'
import { AntDesign } from '@expo/vector-icons'
import sortBy from 'lodash/sortBy'

import { BeerListItem } from './BeerListItem'
import { useDebounce } from './utils'

const BOTTOM_MARGIN = 50

const Wrapper = styled.SafeAreaView`
  flex: 1;
  margin-bottom: -${BOTTOM_MARGIN}px;
  background-color: black;
`

const SearchField = styled.TextInput`
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin: 15px;
`

const ListWrapper = styled.ScrollView`
  flex: 1;
`

const EndSpace = styled.View`
  background-color: black;
  height: ${BOTTOM_MARGIN}px;
  width: 100%;
`

const AddButton = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: black;
  position: absolute;
  right: 15px;
  bottom: 65px;
  padding-top: 5px;
  justify-content: center;
  align-items: center;
`

const filterBeers = (beerList, searchTerm) => {
  if (!searchTerm) {
    return sortBy(beerList, ['name'])
  }
  const options = { keys: ['name', 'brewery', 'style', 'location'], threshold: 0.3 }
  const fuse = new Fuse(beerList, options)
  return fuse.search(searchTerm)
}

export const BeerListView = ({ beerList, onAddBeer, onOpenBeer }) => {
  const [searchTerm, onSetSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const filteredBeerList = useMemo(() => filterBeers(beerList, debouncedSearchTerm), [
    beerList,
    debouncedSearchTerm,
  ])
  return (
    <Wrapper>
      <SearchField
        placeholder="Search"
        placeholderTextColor="white"
        onChangeText={onSetSearchTerm}
        value={searchTerm}
      />
      <ListWrapper>
        {filteredBeerList.map((beerItem) => {
          return (
            <BeerListItem
              key={beerItem.id}
              // id={beerItem.id}
              // name={beerItem.name}
              // brewery={beerItem.brewery}
              // style={beerItem.style}
              // rating={beerItem.rating}
              // colorValue={beerItem.colorValue}
              {...beerItem}
              onPress={onOpenBeer}
            />
          )
        })}
        <EndSpace />
      </ListWrapper>
      <AddButton onPress={onAddBeer}>
        <AntDesign name="plus" size={65} color="white" />
      </AddButton>
    </Wrapper>
  )
}
