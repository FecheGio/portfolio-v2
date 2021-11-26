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
          <nav className="header">
            <ul>
              <li>
                <a>INICIO</a>
              </li>
              <li>
                <a>PUBLICACIONES</a>
              </li>
              <li>
                <a>EL JUGLAR</a>
              </li>
              <li>
                <a>CONTACTO</a>
              </li>
            </ul>
          </nav>
        </header>
      </Flex>
    </>
  );
}
