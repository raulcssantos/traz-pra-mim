import React, { Fragment } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import BkgIlust from './BkgIlust.svg';
import TrazPraMimBtn from './TrazPraMimBtn.svg';

const StyledLogo = styled.div`
  padding: 35px 0px 0px 140px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
  padding: 20px 0px 0px 0px;
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
    </Fragment> 
            
  );
};
