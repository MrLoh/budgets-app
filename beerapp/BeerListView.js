import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Fuse from 'fuse.js'
import { AntDesign } from '@expo/vector-icons'

import { BeerListItem } from './BeerListItem'
import { useDebounce } from './utils'

const Wrapper = styled.SafeAreaView`
  flex: 1;
  margin-bottom: -50;
`

const SearchField = styled.TextInput`
  font-weight: 700;
  font-size: 20px;
  margin: 15px;
`

const ListWrapper = styled.ScrollView`
  flex: 1;
`

const EndSpace = styled.View`
  background-color: white;
  height: 50px;
  width: 100%;
`

const AddButton = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: lightgray;
  position: absolute;
  right: 15px;
  bottom: 65px;
  padding-top: 5px;
  justify-content: center;
  align-items: center;
`

const filterBeers = (beerList, searchTerm) => {
  if (!searchTerm) {
    return beerList
  }
  const options = { keys: ['name', 'brewery', 'style'] }
  const fuse = new Fuse(beerList, options)
  return fuse.search(searchTerm)
}

export const BeerListView = ({ beerList, onDeleteBeer, onAddBeer, onOpenBeer }) => {
  const [searchTerm, onSetSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const filteredBeerList = useMemo(() => filterBeers(beerList, debouncedSearchTerm), [
    beerList,
    debouncedSearchTerm,
  ])
  return (
    <Wrapper>
      <SearchField placeholder="Search" onChangeText={onSetSearchTerm} value={searchTerm} />
      <ListWrapper>
        {filteredBeerList.map((beerItem) => {
          return (
            <BeerListItem
              key={beerItem.id}
              {...beerItem}
              onDelete={onDeleteBeer}
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
