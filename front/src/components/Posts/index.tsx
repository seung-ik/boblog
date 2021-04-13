import React, { FC } from 'react'

interface Props{
  data:string
}
const Posts:FC<Props> = ({data}) => {
  return (
    <div>
      {data}
    </div>
  )
}

export default Posts




