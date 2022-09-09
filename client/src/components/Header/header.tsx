import { useHistory } from "react-router-dom";
import { Button, Container, Content, Logo, Profile } from "./styles";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const history = useHistory();

  const handleClick = (path: string) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <Logo onClick={() => handleClick("/")}>
          <h1>V</h1>
          <h1>L</h1>
          <h1>X</h1>
        </Logo>
        <Button onClick={() => handleClick("/anunciar")}>Anunciar</Button>
        <Profile>
          <FaUserCircle />
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
