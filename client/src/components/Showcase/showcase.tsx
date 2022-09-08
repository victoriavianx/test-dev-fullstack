import { Container, Content, TitleBox } from "./styles";
import NoProductImage from "../../assets/images/undraw_post_re_mtr4.svg";

const ProductShowcase = () => {
  return (
    <Container>
      <TitleBox>
        <h2>Meus produtos</h2>
      </TitleBox>
      <hr />
      <Content>
        <img src={NoProductImage} alt="" />
        <p>Você ainda não tem produtos publicados</p>
      </Content>
    </Container>
  );
};

export default ProductShowcase;
