import { IBackgroundProps } from '../../Types'
import { StyledBackground } from './style'

export const Background = ( { image }: IBackgroundProps ) => {
  return (
    <StyledBackground /* user={user} */>
      <img src={image} />
      <span className='first'></span>
      <span className='second'></span>
      <span className='third'></span>
      <span className='fourth'></span>
    </StyledBackground>
  )
}