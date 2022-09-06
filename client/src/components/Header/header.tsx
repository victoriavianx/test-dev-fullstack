import { Button, Container, Content, Logo, Profile } from "./styles";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <h1>V</h1>
          <h1>L</h1>
          <h1>X</h1>
        </Logo>
        <Button>Anunciar</Button>
        <Profile>
          <FaUserCircle />
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
