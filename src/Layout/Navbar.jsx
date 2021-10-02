import styles from "../Layout/Navbar.module.css";
import logo from "../Assets/Images/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className={styles.navContainer}>
      <Navbar expand="lg" className={`navbar-dark ${styles.navMargin}`}>
        <Navbar.Brand
          href="#"
          className={`text-light ${styles.navImgContainer}`}
        >
          <img className={styles.navImg} src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className={`text-light ${styles.navButtons}`}
            >
              Categories <ArrowDropDownIcon />
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={`text-light ${styles.navButtons}`}
            >
              Scroll n' Search <ArrowDropDownIcon />
            </Nav.Link>
          </Nav>
          <Form className={`d-flex ${styles.searchContainer}`}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button
              variant="outline-bs-cyan"
              className={`text-light bg-seconday   ${styles.navSearch}`}
            >
              Search
            </Button>
            <div className={styles.iconsDiv}>
              <ShoppingCartIcon className={styles.navIcons} fontSize="large" />
              <AccountCircleIcon
                className={styles.navIcons}
                fontSize="large"
              ></AccountCircleIcon>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
