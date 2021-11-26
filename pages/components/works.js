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
          <Tab className="tab">MI TRABAJO</Tab>
          <Tab className="tab">UI</Tab>
          <Tab className="tab">UX</Tab>
          <Tab className="tab">REDACCIÓN</Tab>
          <Tab className="tab">EL JUGLAR</Tab>
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
