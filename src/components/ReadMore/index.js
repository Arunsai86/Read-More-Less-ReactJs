import {useState} from 'react'
import {
  MainContainer,
  Heading,
  SubHeading,
  ImageEl,
  Description,
  CustomButton,
  ButtonContainer,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [btnStatus, setBtnStatus] = useState(false)
  const changeBtnStatus = () => {
    setBtnStatus(prevState => !prevState)
  }
  const displayText = btnStatus
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const btnText = btnStatus ? 'Read Less' : 'Read More'
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <SubHeading>Hooks are a new addition to React</SubHeading>
      <ImageEl
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{displayText}</Description>
      <ButtonContainer>
        <CustomButton type="button" onClick={changeBtnStatus}>
          {btnText}
        </CustomButton>
      </ButtonContainer>
    </MainContainer>
  )
}
export default ReadMore
