import { Container, Navbar } from "react-bootstrap"
import logo from "../AILogo.png"

function TopBar() {

  function onBrandClick(){
    window.location.reload(false);
  }

  return (
    <Container fluid>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#" onClick={onBrandClick}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <h2 className="d-inline-block align-items-cente">
              AI Ad Generator
            </h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}


export default TopBar