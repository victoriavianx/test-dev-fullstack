import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Content = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1400px;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;

  h1 {
    font-size: 2.3rem;
    font-weight: var(--font-semibold);
    margin: 0.1rem;

    :nth-child(1) {
      color: var(--first-title-color);
    }

    :nth-child(2) {
      padding-top: 0.7rem;
      color: var(--second-title-color);
    }

    :nth-child(3) {
      color: var(--third-title-color);
    }
  }

  @media (min-width: 700px) {
    margin-left: 6rem;
  }

  @media (min-width: 1200px) {
    margin-left: 10rem;
  }
`;

export const Button = styled.button`
  width: 40vw;
  height: 30px;
  max-width: 100px;
  border: 1px solid var(--contour-color);
  border-radius: 5px;
  background-color: transparent;
  font-family: var(--body-font);

  :hover {
    transition: 0.4s;
    background-color: var(--hover-color);
    border: 1px solid var(--hover-color);
    color: var(--font-hover-color);
  }

  @media (min-width: 500px) {
    height: 34px;
    margin-right: 2rem;
  }
`;

export const Profile = styled.div`
  margin-right: 2rem;

  svg {
    width: 35px;
    height: 35px;
    padding: 1.2rem 1rem 1rem 1rem;

    :hover {
      color: var(--hover-color);
      transition: 0.4s;
    }
  }

  @media (min-width: 700px) {
    margin-right: 6rem;
  }

  @media (min-width: 1200px) {
    margin-right: 10rem;
  }
`;
