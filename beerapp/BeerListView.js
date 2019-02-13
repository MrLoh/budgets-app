import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Fuse from 'fuse.js'
import { AntDesign } from '@expo/vector-icons'
import sortBy from 'lodash/sortBy'
import { BlurView } from 'expo'

import { BeerListItem } from './BeerListItem'
import { useDebounce } from './utils'
import { getSafeAreaInsets } from './safe-area'

const Wrapper = styled.View`
  flex: 1;
  background-color: black;
`

const SEARCH_FIELD_HEIGHT = getSafeAreaInsets().top + 60

const SearchWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: ${SEARCH_FIELD_HEIGHT}px;
  shadow-color: black;
  shadow-offset: 0;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`

const SearchBlur = styled(BlurView).attrs({
  tint: 'dark',
  intensity: 100,
})`
  flex: 1;
  padding-top: ${getSafeAreaInsets().top}px;
  justify-content: center;
`

const SearchField = styled.TextInput.attrs({
  keyboardAppearance: 'dark',
})`
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin: 15px;
`

const ListWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: SEARCH_FIELD_HEIGHT,
    paddingBottom: getSafeAreaInsets().bottom,
  },
})`
  flex: 1;
`

const ADD_BUTTON_SIZE = 75

const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: ${ADD_BUTTON_SIZE}px;
  height: ${ADD_BUTTON_SIZE}px;
  border-radius: ${ADD_BUTTON_SIZE / 2}px;
  position: absolute;
  right: 15px;
  bottom: ${getSafeAreaInsets().bottom}px;
  shadow-color: black;
  shadow-offset: 0;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`

const AddButtonBlur = styled(BlurView).attrs({
  tint: 'dark',
  intensity: 100,
})`
  flex: 1;
  border-radius: ${ADD_BUTTON_SIZE / 2}px;
  padding-top: ${ADD_BUTTON_SIZE * 0.05}px;
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
      </ListWrapper>
      <SearchWrapper>
        <SearchBlur>
          <SearchField
            placeholder="Search"
            placeholderTextColor="white"
            onChangeText={onSetSearchTerm}
            value={searchTerm}
            clearButtonMode="while-editing"
            selectionColor="white"
          />
        </SearchBlur>
      </SearchWrapper>
      <AddButton onPress={onAddBeer}>
        <AddButtonBlur>
          <AntDesign name="plus" size={ADD_BUTTON_SIZE * 0.7} color="white" />
        </AddButtonBlur>
      </AddButton>
    </Wrapper>
  )
}
