import Form from "../../components/Form/form";
import Header from "../../components/Header/header";
import UpdateInfo from "../../components/UpdateInfo/updateInfo";

import { Main } from "../Register/styles";

const UpdateProduct = () => {
  return (
    <>
      <Header />
      <Main>
        <section>
          <Form title={"Atualize seu produto"} component={<UpdateInfo />} />
        </section>
      </Main>
    </>
  );
};

export default UpdateProduct;
