import React from 'react'
import { HeaderConatiner } from '@/components/Header/style'

export default function Header() {
  return (
    <HeaderConatiner>
        <div>boblog</div>
        <div className="header-right-side">
          <div>돋보기</div>
          <button>새글작성</button>
          <div>이미지</div>
          <div>토글버튼</div>
        </div>
    </HeaderConatiner>
  )
}
