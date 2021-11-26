import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

export default function NavBar() {
  return (
    <>
      <Flex justifyContent="flex-end">
        <header
          style={{
            marginBottom: `1.45rem`,
          }}
        >
          <nav class="header">
            <ul>
              <li>
                <a href="/">INICIO</a>
              </li>
              <li>
                <a href="/publicaciones/">PUBLICACIONES</a>
              </li>
              <li>
                <a href="/el-juglar/">EL JUGLAR</a>
              </li>
              <li>
                <a href="/contact/">CONTACTO</a>
              </li>
            </ul>
          </nav>
        </header>
      </Flex>
    </>
  );
}
