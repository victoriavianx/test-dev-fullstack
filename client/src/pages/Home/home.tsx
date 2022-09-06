import Header from "../../components/Header/header";
import { Container, Content, Main, TitleBox } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <TitleBox>
            <h2>Meus produtos</h2>
          </TitleBox>
          <hr />
          <Content></Content>
        </Container>
      </Main>
    </>
  );
};

export default Home;
