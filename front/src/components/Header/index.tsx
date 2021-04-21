import React from 'react'
import { HeaderConatiner, LoginButton } from '@/components/Header/style'
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
  return (
    <HeaderConatiner>
        <div>Boblog</div>
        <div className="header-right-side">
          <SearchIcon className="header-search-icon"/>
          <LoginButton>로그인</LoginButton>
        </div>
    </HeaderConatiner>
  )
}
