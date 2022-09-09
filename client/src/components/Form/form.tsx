import RegisterInfo from "../RegisterInfo/registerInfo";
import { Container } from "./styles";

const Form = () => {
  return (
    <Container>
      <h1>Cadastre seu produto</h1>
      <div>
        <RegisterInfo />
      </div>
    </Container>
  );
};

export default Form;
