import { Container } from "./styles";

interface IForm {
  title: string;
  component: JSX.Element;
}

const Form = ({ title, component }: IForm) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{component}</div>
    </Container>
  );
};

export default Form;
