import { Button, Container } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";

import { Sidebar } from "../../component";

import type { NextPage } from "next";

const page: NextPage = () => (
  <Sidebar>
    <Container maxWidth="5xl">
      <div>
        <Button leftIcon={<FiHome />} variant="ghost">
          1sdfs
        </Button>
      </div>
    </Container>
  </Sidebar>
);

export default page;
