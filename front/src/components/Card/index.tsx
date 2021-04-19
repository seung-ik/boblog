/** @jsxImportSource @emotion/react */
import React from 'react'
import {css} from '@emotion/react'
import {Button} from './style'



const Card = () => {

  const style = css`
    color : hotpink;
  `

  return (
    
    <div css={style}>
      카드
      <Button>emotionButton</Button>
    </div>
  )
}

export default Card
