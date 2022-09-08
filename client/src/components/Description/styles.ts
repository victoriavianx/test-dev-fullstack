import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-family: var(--body-font);
  }
`;

export const Input = styled.input`
  margin: 1rem 0;
  height: 30px;
  border: 1px solid var(--contour-color);
  border-radius: 5px;
  padding-left: 1rem;
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
  padding-left: 1rem;
  font-size: 12px;
  font-family: var(--body-font);
`;

export const Textarea = styled.textarea`
  margin: 1rem 0;
  height: 90px;
  border: 1px solid var(--contour-color);
  border-radius: 5px;
  padding: 1rem;
  font-size: 12px;
  font-family: var(--body-font);
`;
