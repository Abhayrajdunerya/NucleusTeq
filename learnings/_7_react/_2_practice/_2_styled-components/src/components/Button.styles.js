import styled, { keyframes } from 'styled-components'

export const StyledButton = styled.button`
  border: 5px solid #4caf90;
  background-color: ${(props) => 
    props.variant === 'outline' ? '#FFF' : '#4caf50'};
  color: ${(props) => (
    props.variant === 'outline' ? '#4caf50' : '#FFF'
  )};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5 all ease-out;

  &:hover {
    background-color: ${(props) => 
        props.variant !== 'outline' ? '#FFF' : '#4caf50'};
    color: ${(props) => (
        props.varient !== 'outline' ? '#4caf50' : '#FFF'
    )};
  }
`

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #F6D365 0%, #FDA085 100%);
    border: none;
`

export const SubmitButtom = styled(StyledButton).attrs((props_) => ({
    type: 'submit',
}))`
    box-shadow: 0 9px #999;
    &:hover {
        background-color: ${(props) => 
            props.variant !== 'outline' ? '#FFF' : '#4caf50'};
        box-shadow: 0 5px #666;
        transform: translateY(4px)
    }

`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const AnimatedLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 20s linear;
`

export const DarkButton = styled(StyledButton)`
    border: 2px solid ${(props) => props.theme.dark.primary};
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
`