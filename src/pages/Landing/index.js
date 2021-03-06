import React, { Fragment } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import BkgIlust from './BkgIlust.svg';
import TrazPraMimBtn from './TrazPraMimBtn.svg';
import Icon1 from './Icon1.svg';
import Icon2  from './Icon2.svg';
import Icon3 from './Icon3.svg';
import BgkBlue from './BkgBlue.svg';
import FotoLand from './FotoLand.png';

const StyledLogo = styled.div`
  padding: 35px 0px 0px 140px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const MenuItens = styled.div`
  padding: 0px 140px 0px 0px;
`

const BkgGradient = styled.div`
  background: linear-gradient(#03505B, #00B7D1);
  width: 100vw; 
  height: 100vh;
`

const MenuItem = styled.div`
  padding: 35px 10px 0px 10px;
  font-weight: regular;
  font-size: 25px;
  color: #FFFFFF;
`

const Backgroundimg = styled.div`
  padding: 10px 0px 0px 0px;
`

const TrazPraMimBox = styled.div`
  position: absolute;
  top: 150px;
  left: 260px;
  color: #FFFFFF;
  width: 580px;
`

const Title = styled.div`
  color: #FFFFFF;
  font-size: 45px;
  font-weight: bold;
  padding: 0px 0px 5px 8px;
`

const Text = styled.div`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: regular;
  opacity: 0.8;
  padding: 0px 0px 10px 8px;
`

const SecondBkg = styled.div`
  background-color: #FFF5CC;
  width: 100vw;
  height: 88vh;
`

const ContentIcons = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  padding: 90px 0px 0px 0px;
`

const ColumnCont = styled.div`
  display: flex;
  flex-direction: column;
  padding:  0px 150px 0px 150px;
 `

 const ColumnCont2 = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 45px;
  padding: 60px 0px 0px 0px;
  `

const TextCont = styled.div`
  font-size: 30px;
  font-weight: regular;
  text-align: center;
  padding: 50px 0px 0px 0px;
`

const DescriptionBox = styled.div`
  position: absolute;
  bottom: -1100px;
  left: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const FotoLanding = styled.div`
  padding: 0px 0px 150px 150px;

`

const TextBox = styled.div`
  color: white;
  font-size: 30px;
  font-weight: lighter;
  padding: 55px 0px 0px 0px;
`

const Footer = styled.div`
  background-color: #1D2A2B;
  width: 100vw;
  height: 120px;
`

export const Landing = () => {
  return (
    <Fragment>
      <BkgGradient>
        <Row>
          <StyledLogo>
            <img src={logo} alt="" />
          </StyledLogo>
          <MenuItens>
            <Row>
              <MenuItem>home</MenuItem>
              <MenuItem>quem somos</MenuItem>
              <MenuItem>sobre</MenuItem>
            </Row>
          </MenuItens>
        </Row>
        <Backgroundimg>
          <img src={BkgIlust} alt="" />
        </Backgroundimg>
          
        <TrazPraMimBox>
          <Title>Trazendo cultura e história</Title>
          <Text>
            A <i>Traz Pra Mim</i> é um serviço que oferece a facilidade de <br/>
            encomendar produtos típicos de várias regiões do nosso <br/>
            Brasil por meio de viajantes cadastrados, com um método <br/> 
            fácil e prático de negociação
          </Text>
          <img src={TrazPraMimBtn} alt="" />
        </TrazPraMimBox>
      </BkgGradient> 
      <SecondBkg>
        <ContentIcons>
          <ColumnCont> 
            <img src={Icon1} alt=""></img> 
            <TextCont>
              Lorem ipsum<br/>
              dolor sit amet,<br/>
              consectetur 
            </TextCont>
          </ColumnCont>
          <ColumnCont> 
            <img src={Icon2} alt=""></img> 
            <TextCont>
              Lorem ipsum<br/>
              dolor sit amet,<br/>
              consectetur 
            </TextCont>
          </ColumnCont>
          <ColumnCont> 
            <img src={Icon3} alt=""></img> 
            <TextCont>
              Lorem ipsum<br/>
              dolor sit amet,<br/>
              consectetur 
            </TextCont>
          </ColumnCont>
        </ContentIcons>

        <img src={BgkBlue} alt="" width="100%"/>
        <DescriptionBox>
          <ColumnCont2>
            <strong>Quem Somos</strong>
            <TextBox>
            magna aliqua. Sed lectus vestibulum mattis ullamcorper <br/> 
            velit sed ullamcorper. Consequat interdum varius sit amet <br/>
             mattis vulputate enim nulla. Odio pellentesque diam <br/>
             volutpat commodo sed egestas egestas fringilla. Cursus <br/>
              risus at ultrices mi tempus imperdiet nulla. Faucibus purus. 
            </TextBox> 

          
          </ColumnCont2>
        <FotoLanding>
          <img src={FotoLand} alt="" />
        </FotoLanding>  
        </DescriptionBox>
      </SecondBkg>
    <Row>
      <Footer>

      </Footer>



    </Row>
        
    </Fragment> 
            
  );
};
