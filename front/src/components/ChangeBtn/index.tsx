import React from 'react'
import { NavLink } from 'react-router-dom'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const ChangeBtn = () => {
  return (
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
  )
}

export default ChangeBtn
