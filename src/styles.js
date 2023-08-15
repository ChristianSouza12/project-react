import styled from "styled-components"
import Background from "./assets/background.svg"


export const Container = styled.div`
    background: url("${Background}");
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:40px;
   height:100vh;

`

export const Image = styled.img`
 margin-top:30px;



`
export const Container2 = styled.div`

background: linear-gradient(
    157.44deg,
     rgba(255, 255, 255, 0.6) 0.84%,
     rgba(255, 255, 255, 0.6) 0.85%,
     rgba(255, 255, 255, 0.15) 100%);

  border-radius:61px 61px 0px 0px;
    padding:50px 36px;
    display:flex;
    flex-direction:column;
    height:100vh;
    



`

export const H1 = styled.h1`
font-style:normal;
font-weight:bold;
font-size:34px;
line-height:40px;
text-align:center;
color:white;
margin-bottom:80px;


`
export const InputLabel = styled.p`
letter-spacing: -0.408px;
font-style:normal;
font-weight:bold;
font-size:18px;
line-height:22px;
color:white;
margin-bottom:1px;
margin-left:25px;
letter-spacing:1px;


`

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border-radius:14px;
border:none;
width: 342px;
height: 58px;
outline:none;
padding-left:25px;
color:#ffffff;
font-size: 20px;
font-weight: 400;
line-height: 28px;
font-style:normal;
margin-bottom:35px;




`

export const Button = styled.button`
width: 342px;
height: 74px;
border-radius: 14px;
background: rgba(0, 0, 0, 0.8);
border:none;
font-size: 17px;
font-weight: 700;
line-height: 28px;
color: rgba(255, 255, 255, 1);
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
gap:20px;

&:hover{
    opacity:0.9;
    transform:scale(1.02);
    transition:0.3s;
}
&:active{
    opacity:0.7;
}


`

export const User = styled.li`
display:flex;
justify-content:space-around;
align-items:center;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border-radius:14px;
border:none;
width: 342px;
height: 58px;
outline:none;
margin-top:19px;


p{
    color:white;
font-style:normal;
font-weight:normal;
font-size:22px;
line-height:28px;
gap:18px;
}


button{
    background:none;
    border:none;
    cursor:pointer;
}
&:hover{
    opacity:0.9;

}
&:active{
    opacity:0.7;
}


img:hover{
    
    transform:scale(1.06);
    transition:0.2s;
}
img:active{
    opacity:0.7;
}




`

