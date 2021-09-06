import styled from 'styled-components'

export const StyledBackground = styled.div`
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
    width: 400px;
    height: 400px;
    background-color: var(--Second-Blue);
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
    border-radius: 100% 0 0 100%;
    max-width: 265px;

    @media (min-width: 375px) {
      max-width: 325px;
    }

    @media (min-width: 425px) {
      max-width: 365px;
    }
  }

  .third {
    bottom: 100px;
    left: -110px;
  }

  .fourth {
    bottom: 0px;
    left: 115px;
    border-radius: 100% 0 0 100%;
    max-width: 205px;
    max-height: 250px;

    @media (min-width: 375px) {
      max-width: 255px;
    }

    @media (min-width: 425px) {
      max-width: 305px;
    }
  }
`