import Link from "next/link";
import { Button, Input, Navbar, Text } from "@nextui-org/react";
export default function Navigation() {
  return (
    <div className="">
      <Navbar>
        <Navbar.Brand>
          <Link href="/">
            <Text
              h1
              size={30}
              weight={"bold"}
              css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}
            >
              Interactive Learning Tool
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          <Input clearable bordered placeholder="Courses"></Input>
          <Navbar.Link href="/classroom">Classroom's</Navbar.Link>
          <Navbar.Link href="/classroom">Logout</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </div>
  );
}
