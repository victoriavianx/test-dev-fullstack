import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2rem;

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
`;

export const Profile = styled.div`
  margin-right: 2rem;

  svg {
    width: 35px;
    height: 35px;
    padding: 1rem;

    :hover {
      color: var(--hover-color);
    }
  }
`;
