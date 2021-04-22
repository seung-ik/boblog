/** @jsxImportSource @emotion/react */
import React from 'react'
import {CardBox} from '@/components/Card/style'
import img4 from '@/img/img4.jpg'
import img2 from '@/img/img2.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';



const Card = () => {

  return (
    <CardBox>
      <div>
        <img src={img4} alt="" style={{width:"100%", height:"100%",objectFit:"cover"}}/>
      </div>
      <div style={{border:"1px solid black", flex:"1 1 0%", padding:"1rem"}}>
        <h4 style={{margin:"0"}}>나는 주식으로 5000만원을 모은다.</h4>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, earum.</div>
        <div>날짜•댓글 20개</div>
      </div>
      <div style={{padding:"0.625rem 1rem",display:"flex" , justifyContent:"space-between"}}>
        <div style={{display:"flex"}}>
          <img id="profile-img" src={img2} alt="" style={{width:"1.5rem",height:"1.5rem", objectFit:"cover",borderRadius:"50%", display:"block"}}/>
          <span>by 오승익</span>
        </div>
        <div>
          <FavoriteIcon/>
          <span>50,000,000</span>
        </div>

      </div>
    </CardBox>
  )
}

export default Card
