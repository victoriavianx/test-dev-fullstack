import Header from "../../components/Header/header";
import ProductShowcase from "../../components/Showcase/showcase";
import { Main } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <ProductShowcase />
      </Main>
    </>
  );
};

export default Home;
