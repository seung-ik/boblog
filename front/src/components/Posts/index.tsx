import React, { FC } from 'react'
import Card from '@/components/Card'

interface Props{
  data:string
}
const Posts:FC<Props> = ({data}) => {
  return (
    <div>
      <Card/>
      <div>{data}</div>
      <Card/>
    </div>
  )
}

export default Posts




