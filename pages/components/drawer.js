
import { useDisclosure } from "@chakra-ui/react"
import React from 'react'
import { Input, Flex, Spacer, Grid, GridItem, Button,  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,} from "@chakra-ui/react"


  export default function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          size={"sm"}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }