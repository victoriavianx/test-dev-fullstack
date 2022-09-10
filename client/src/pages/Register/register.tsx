import Form from "../../components/Form/form";
import Header from "../../components/Header/header";
import { Main } from "./styles";

const RegisterProduct = () => {
  return (
    <>
      <Header />
      <Main>
        <section>
          <Form
            title={"Cadastre seu produto"}
            component={<RegisterProduct />}
          />
        </section>
      </Main>
    </>
  );
};

export default RegisterProduct;
