import React from 'react'
import Header from '@/components/Header'
import { Link, NavLink } from 'react-router-dom'
import Posts from '@/components/Posts'
import {Container} from '@/pages/Trend/style'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


export default function Trend() {
  const sampleTrendData="트렌드데이터"
  return (
    <Container>
      <Header/>
      <div className="main-body">
        <div id="buttons">
          <NavLink style={{textDecoration:"none"}} activeClassName="click-main-button" exact to="/">
            <div className="main-pick-button">
              <span>
                <TrendingUpIcon/>
              </span>
              <span>트렌드</span>
            </div>
          </NavLink>
          <NavLink style={{textDecoration:"none"}} activeClassName="click-main-button" to="/recent">
            <div className="main-pick-button">
              <span>
                <AccessTimeIcon/> 
              </span>
              <span>최신</span>
            </div>
          </NavLink>
        </div>
        <div id="post-container">
          <Posts data={sampleTrendData}/>
        </div>
      </div>
    </Container>
  )
}
