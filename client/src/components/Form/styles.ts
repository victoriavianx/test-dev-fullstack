import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 20px;
    font-family: var(--body-font);
    font-weight: var(--font-medium);
  }

  div {
    width: 80%;
    max-width: 400px;
  }

  /* div {
    margin-top: 0.8rem;

    button {
      width: 50px;
      height: 30px;
      background-color: var(--second-title-color);
      border: 1px solid var(--second-title-color);
      border-radius: 5px;

      :nth-child(1) {
        margin-right: 1rem;
      }

      svg {
        padding-top: 0.2rem;
      }

      :hover {
        background-color: var(--hover-color);
        border: 1px solid var(--hover-color);
        transition: 0.4s;
      }
    }
  } */
`;
