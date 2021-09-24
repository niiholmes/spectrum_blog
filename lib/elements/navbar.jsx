import { useState } from "react";
import Link from "next/link";
import { Container, Input, Menu } from "semantic-ui-react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("myBlog");
  return (
    <>
      {/* <Container fluid style={navBarContainer}> */}
      <Menu pointing secondary style={menu}>
        <Link href="/">
          <Menu.Item
            name="spectrum"
            active={activeMenu === "spectrum"}
            onClick={() => setActiveMenu("spectrum")}
          />
        </Link>
        <Link href="/blogs/myBlog">
          <Menu.Item
            name="myBlog"
            active={activeMenu === "myBlog"}
            onClick={() => setActiveMenu("myBlog")}
          />
        </Link>
        <Link href="/portfolio/Portfolio">
          <Menu.Item
            name="portfolio"
            active={activeMenu === "portfolio"}
            onClick={() => setActiveMenu("portfolio")}
          />
        </Link>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" style={searchBar} />
          </Menu.Item>

          <Link href="#">
            <Menu.Item
              name="me"
              active={activeMenu === "me"}
              onClick={() => setActiveMenu("me")}
            />
          </Link>
          <Link href="#">
            <Menu.Item
              name="logout"
              active={activeMenu === "logout"}
              onClick={() => setActiveMenu("logout")}
            />
          </Link>
        </Menu.Menu>
      </Menu>
      {/* </Container> */}
    </>
  );
}

const nh = {
  marginLeft: "1em",
};

const searchBar = {
  display: "absolute",
  marginRight: "40em",
};

const navBarContainer = {};

const menu = {
  padding: "2em",
  border: "none",
};
