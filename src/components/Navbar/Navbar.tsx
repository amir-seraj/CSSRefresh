import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  @media (max-width: 600px) {
  }
`;
const UlNav = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LiNav = styled.li`
  margin: 0 1rem;
`;
const Navbar = () => {
  return (
    <>
      <Nav>
        <UlNav>
          <LiNav>
            <Link to="/">Home</Link>
          </LiNav>
          <LiNav>
            <Link to="/FirstRefresher">StyleSheet</Link>
          </LiNav>
          <LiNav>
            <Link to="/CAC">CAC</Link>
          </LiNav>
        </UlNav>
      </Nav>
    </>
  );
};

export default Navbar;
