import React from 'react'
import styled from 'styled-components'
import css from 'styled-css/native'

import { BeerListItem } from './BeerListItem'

const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: css`
    align-items: stretch;
  `,
})`
  flex: 1;
`

export const BeerListView = ({ beerList }) => {
  return (
    <Wrapper>
      {beerList.map(({ name, brewery, style, rating }) => {
        return (
          <BeerListItem name={name} brewery={brewery} style={style} rating={rating} key={name} />
        )
      })}
    </Wrapper>
  )
}
