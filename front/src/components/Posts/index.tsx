import React, { FC } from 'react'
import Card from '@/components/Card'

interface Props{
  data:string
}
const Posts:FC<Props> = ({data}) => {
  return (
    <div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Posts




