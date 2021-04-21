import React from 'react'
import Header from '@/components/Header'
import { Link, NavLink } from 'react-router-dom'
import Posts from '@/components/Posts'
import {Container} from '@/pages/Trend/style'

import ChangeBtn from '@/components/ChangeBtn'


export default function Recent() {
  const sampleRecentData="최신데이터"
  
  return (
    <Container>
      <Header/>
      <div className="main-body">
        <ChangeBtn/>
        <div id="post-container">
          <Posts data={sampleRecentData}/>
        </div>
      </div>
    </Container>
  )
}
