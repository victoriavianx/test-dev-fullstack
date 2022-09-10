import styled from "styled-components";

export const Card = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-family: var(--body-font);
  width: 100%;

  background-color: var(--third-title-color);
  border-radius: 10px;
  margin: 2rem 0;

  h3 {
    font-size: 16px;
    margin: 2rem 2rem 0 2rem;
    font-weight: var(--font-semibold);
    color: var(--contour-color);
  }

  span {
    width: 80%;
    margin: 0 0 0 2rem;
    font-size: 10px;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    max-width: 250px;
    height: 250px;
    margin: 2rem 2rem;
  }
`;

export const DetailBox = styled.div`
  width: 70%;
  height: 20px;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 2rem;

  h4 {
    margin-right: 0.5rem;
    font-size: 12px;
    color: var(--first-title-color);
  }

  p {
    margin-left: 0.5rem;
    text-align: start;
    font-size: 12px;
  }
`;

export const ButtonBox = styled.div`
  width: 100px;
  margin: 1rem 2rem;

  button {
    background-color: transparent;
    border: 0;

    svg {
      width: 20px;
      height: 20px;

      :hover {
        color: var(--second-title-color);
      }
    }

    :nth-child(2) {
      margin-left: 0.5rem;
    }
  }
`;
