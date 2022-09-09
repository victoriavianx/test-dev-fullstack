import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-family: var(--body-font);
  }

  div {
    margin-top: 0.8rem;

    button {
      width: 50px;
      height: 35px;
      background-color: var(--second-title-color);
      border: 1px solid var(--second-title-color);
      border-radius: 5px;
      font-weight: var(--font-medium);

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
        color: #fff;
      }
    }
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 25px;

  p {
    font-size: 14px;
    color: var(--first-title-color);
    margin-left: 0.3rem;
  }
`;

export const Input = styled.input`
  margin: 1rem 0;
  height: 30px;
  border: 1px solid var(--contour-color);
  border-radius: 5px;
  padding-left: 0.8rem;
  font-size: 12px;
  font-family: var(--body-font);
`;

export const Select = styled.select`
  margin: 1rem 0;
  height: 35px;
  background-color: var(--contour-color);
  color: #fff;
  border: 1px solid var(--contour-color);
  border-radius: 5px;
  padding-left: 0.8rem;
  font-size: 12px;
  font-family: var(--body-font);
`;

export const Textarea = styled.textarea`
  margin: 1rem 0;
  height: 90px;
  border: 1px solid var(--contour-color);
  border-radius: 5px;
  padding: 0.8rem;
  font-size: 12px;
  font-family: var(--body-font);
`;
