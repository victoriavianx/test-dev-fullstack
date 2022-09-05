import { Container, Logo, Profile } from "./styles";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <Logo>
        <h1>V</h1>
        <h1>L</h1>
        <h1>X</h1>
      </Logo>
      <Profile>
        <FaUserCircle />
      </Profile>
    </Container>
  );
};

export default Header;
