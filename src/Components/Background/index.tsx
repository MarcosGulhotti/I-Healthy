import { IBackgroundProps } from '../../Types'
import { StyledBackground } from './style'

export const Background = ( { image, children}: IBackgroundProps ) => {
  return (
    <StyledBackground /* user={user} */>
      <img src={image} alt = "" />
      <span className='first'></span>
      <span className='second'></span>
      <span className='third'></span>
      <span className='fourth'></span>
      {children}
    </StyledBackground>
  )
}