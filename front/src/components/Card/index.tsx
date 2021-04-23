/** @jsxImportSource @emotion/react */
import React from 'react'
import {CardBox} from '@/components/Card/style'
import img4 from '@/img/img4.jpg'
import img2 from '@/img/img2.jpg'
import img6 from '@/img/img6.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';



const Card = () => {

  return (
    <CardBox>
      <div style={{width:"100%", position:"relative", paddingTop:"50%"}}>
        <img src={img6} alt="" style={{display:"block", position:"absolute", top:0, left:0,width:"100%", height:"100%",objectFit:"cover",borderTopLeftRadius:"6px",borderTopRightRadius:"6px"}}/>
      </div>
      <div style={{flex:"1 1 0%", padding:"1rem" , border:"none"}}>
        <h4 style={{margin:"0 0 0.25rem"}}>나는 주식으로 5000만원을 모은다.</h4>
        <p style={{margin:"0 0 1.5rem", wordBreak:"break-word", overflowWrap:"break-word", height:"3.95rem", overflow:"hidden", textOverflow:"ellipsis" , color:"rgb(73, 80, 87)",fontSize:"0.875rem", lineHeight:"1.5"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt perspiciatis provident impedit, id dolores voluptatibus temporibus doloremque voluptas reprehenderit nesciunt corporis. Earum vero enim odit ipsam, esse facilis illo iusto nobis a blanditiis harum hic? Adipisci autem neque sit a!</p>
        <div className="sub-info" 
        style={{fontSize: "0.75rem",
                lineHeight: 1.5,
                color: "rgb(134, 142, 150)"}}>
          <span>2021년 04월 23일</span>
          <span className="separator" style={{margin:"0 0.2rem"}}>•</span>
          <span>300개의 댓글</span>
        </div>
      </div>
      <div style={{padding:"0.625rem 1rem",display:"flex" , justifyContent:"space-between",borderTop:"1px solid rgb(248, 249, 250)", alignItems:"center", fontSize:"0.75rem", lineHeight:"1.5"}}>
        <div style={{display:"flex", alignItems:"center"}}>
          <img id="profile-img" src={img2} alt="" style={{width:"1.5rem",height:"1.5rem", objectFit:"cover",borderRadius:"50%", display:"block", marginRight:"0.5rem"}}/>
          <span style={{color:"rgb(134, 142, 150)"}}>by <b style={{color:"black"}}> 오승익</b></span>
        </div>
        <div style={{display:"flex", alignItems:"center"}}> 
          <FavoriteIcon style={{width:"16px", height:"16px",marginRight:"0.25rem",marginTop:"-1.5px"}}/>
          <span style={{color:"rgb(134, 142, 150)"}}>555</span>
        </div>

      </div>
    </CardBox>
  )
}

export default Card
