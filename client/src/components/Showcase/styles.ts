import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;

  hr {
    width: 85vw;
    opacity: 0.8;
    max-width: 1024px;
  }
`;

export const TitleBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-top: 4rem;
  margin-left: 2rem;

  h2 {
    font-family: var(--body-font);
    font-size: 28px;
    font-weight: var(--font-regular);
    margin-bottom: 1rem;
  }

  @media (min-width: 500px) {
    margin-left: 4rem;
  }

  @media (min-width: 1200px) {
    margin-left: 0;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 50vw;
    margin: 2.5rem;
    max-width: 500px;
  }

  p {
    width: 50%;
    font-size: 16px;
    font-family: var(--body-font);
    text-align: center;
  }

  @media (min-width: 600px) {
    p {
      width: 100%;
      font-size: 18px;
    }
  }
`;
