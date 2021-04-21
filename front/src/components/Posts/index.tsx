import React, { FC } from 'react'
import Card from '@/components/Card'
import { CardsContainer } from './style'

interface Props{
  data:string
}
const Posts:FC<Props> = ({data}) => {
  return (
    <CardsContainer>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </CardsContainer>
  )
}

export default Posts




