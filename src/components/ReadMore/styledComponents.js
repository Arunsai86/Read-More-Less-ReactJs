import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  width: 100vw;
  padding: 35px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
`
export const SubHeading = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  text-align: center;
`
export const ImageEl = styled.img`
  width: 100%;
`
export const Description = styled.p`
  font-size: 15px;
  color: #334155;
`
export const ButtonContainer = styled.div`
  @media (min-width: 576px) {
    text-align: center;
  }
`
export const CustomButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #1f81ff;
  border-radius: 5px;
  font-family: 'Roboto';
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  margin-bottom: 30px;
`
