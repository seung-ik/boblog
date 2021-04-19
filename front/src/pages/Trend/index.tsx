import React from 'react'
import Header from '@/components/Header'
import { Link } from 'react-router-dom'
import Posts from '@/components/Posts'
import {Container} from '@/pages/Trend/style'


export default function Trend() {
  const sampleTrendData="트렌드데이터"
  return (
    <Container>
      <Header/>
      <div id="buttons">
        <Link to="/">트렌드</Link>
        <Link to="/recent">최신</Link>
      </div>
      <div id="post-container">
        <Posts data={sampleTrendData}/>
      </div>
    </Container>
  )
}
