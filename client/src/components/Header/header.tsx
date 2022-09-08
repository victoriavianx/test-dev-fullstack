import { useHistory } from "react-router-dom";
import { Button, Container, Content, Logo, Profile } from "./styles";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    return history.push("/anunciar");
  };

  return (
    <Container>
      <Content>
        <Logo>
          <h1>V</h1>
          <h1>L</h1>
          <h1>X</h1>
        </Logo>
        <Button onClick={handleClick}>Anunciar</Button>
        <Profile>
          <FaUserCircle />
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
