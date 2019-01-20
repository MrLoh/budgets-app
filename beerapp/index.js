import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { BeerListView } from './BeerListView'

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
`

const beerList = [
  { name: 'Lakefront IPA', brewery: 'Lakefront', style: 'IPA', rating: 5 },
  { name: 'Gumballhead', brewery: 'Three Floyds', style: 'wheat', rating: 4 },
  { name: 'Pilsner Urquell', brewery: 'Pilsner Urquell', style: 'pilsner', rating: 3 },
]

const App = () => {
  // const [beerList, setBeerList] = useState([])

  return (
    <Wrapper>
      <BeerListView beerList={beerList} />
    </Wrapper>
  )
}

export default App
