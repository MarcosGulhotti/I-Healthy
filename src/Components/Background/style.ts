import styled from 'styled-components'

export const StyledBackground = styled.div`
  height: 100vh;
  background-color: var(--Background);
  z-index: -1;
  width: 100%;

  img {
    position: relative;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    top: 5%;
  }

  span {
    width: 200px;
    height: 200px;
    background-color: var(--Second-Blue);
    overflow: hidden;
    position: absolute;
    border-radius: 100%;
    z-index: 0;
  }

  .first {
    top: -120px;
    left: -115px;
  }

  .second {
    top: 100px;
    left: 55px;
  }

  .third {
    bottom: 100px;
    left: -110px;
  }

  .fourth {
    bottom: -120px;
    left: 115px;
  }
`