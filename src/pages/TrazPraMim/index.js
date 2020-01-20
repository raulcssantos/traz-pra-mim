import React, { Fragment } from 'react';
import LandingMaster from './LandingMaster.svg';
import TrazPraMimBtn from './TrazPraMimBtn.svg';
import logo from './logo.svg';
import FotoLand from './FotoLand.png';
import styled from 'styled-components';






const Logo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 35px;
  left: 140px;
`

const TextHeader = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  top: -5px;
  left: 1850px;
  color: white;
  font-weight: regular;
  font-size: 25px;
`

const MenuItem = styled.div`
  padding: 35px 10px 0px 10px;
  `

const CalltoAction = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 465px;
  left: 330px;
`

const StaffPhoto = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 1980px;
  left: 1350px;
`

const FooterInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  top: 2510px;
  left: 190px;
  color: #B2B2B2;
  font-size: 20px;
  font-weight: lighter;
  opacity: 40%;
`

const FooterInfo2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  top: 2510px;
  right: 190px;
  color: #B2B2B2;
  font-size: 20px;
  font-weight: lighter;
  opacity: 40%;
`



export const TrazPraMim = () => {
  return (
    <Fragment>
      <Logo>
        <img src={logo} alt=""/>
      </Logo>
      <TextHeader>
        <MenuItem>home</MenuItem>
        <MenuItem>quem somos</MenuItem>
        <MenuItem>sobre</MenuItem>
      </TextHeader>
      <CalltoAction>
        <img src={TrazPraMimBtn} alt=""/>
      </CalltoAction>
      <StaffPhoto>
        <img src={FotoLand} alt="" width="120%" height="120%"/>
      </StaffPhoto>
      <FooterInfo>
         contato:<br/> 
         +55(xx)xxxxx-xxxx<br/>
         trazpramim@site.dev.com
      </FooterInfo>
      <FooterInfo2>
        Políica de Privacidade <br/>
        SAC 
      </FooterInfo2>


    
    
    
    <img src= {LandingMaster} alt=""></img>
    </Fragment>

  
  
  
  );
};
