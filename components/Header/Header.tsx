import { useEffect } from "react";
import { useState } from "react";
import * as _ from "lodash";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLinks } from "../../utils/navLinks";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    let isSticky = window.scrollY > 180;
    setSticky(isSticky);
  };
  return (
    <Navbar
      color="light"
      light
      container
      expand="md"
      sticky={sticky ? "top" : ""}
    >
      <NavbarBrand href="/">
        <Image
          src="/images/Slinnggy Apps.svg"
          alt="SlinggyApps"
          className="img-fluid mx-auto d-block"
          width={80}
          height={80}
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <Nav className="m-auto" navbar>
            {_.keys(NavLinks).map((link, i) => {
              return (
                <NavItem key={i}>
                  <Link href={link} scroll={false}>
                    {NavLinks[link]}
                  </Link>
                </NavItem>
              );
            })}
          </Nav>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
