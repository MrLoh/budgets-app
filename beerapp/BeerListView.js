import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Fuse from 'fuse.js'

import { BeerListItem } from './BeerListItem'
import { useDebounce } from './utils'

const Wrapper = styled.SafeAreaView`
  flex: 1;
`

const SearchField = styled.TextInput`
  font-weight: 700;
  font-size: 15px;
  margin: 5px;
`

const ListWrapper = styled.ScrollView`
  flex: 1;
`

const AddButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: black;
  position: absolute;
  right: 30px;
  bottom: 40px;
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
      </ListWrapper>
      <AddButton onPress={onAddBeer} />
    </Wrapper>
  )
}