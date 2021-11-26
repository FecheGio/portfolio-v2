import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Button,
  Divider,
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useState } from "react";

export default function Works() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab className="tab">One</Tab>
          <Tab className="tab">Two</Tab>
          <Tab className="tab">Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
