import { useRef } from "react";
import {
  Box,
  chakra,
  Flex,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect
} from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun, FaWikipediaW } from "react-icons/fa";
import NextLink from "next/link";

import type { FC } from "react";
import type { IconType } from "react-icons";

export interface HeaderContentProps {
  icon?: IconType;
}

export const HeaderContent: FC<HeaderContentProps> = props => {
  const {} = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const mobileNavBtnRef = useRef<HTMLButtonElement>(null);

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [isOpen]);

  return (
    <>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex align="center">
          <NextLink href="/" passHref>
            <chakra.a display="block" aria-label="Chakra UI, Back to homepage">
              <Icon display={{ base: "none", md: "block" }} as={FaWikipediaW} />
              <Box minW="3rem" display={{ base: "block", md: "none" }}>
                <Icon as={FaWikipediaW} />
              </Box>
            </chakra.a>
          </NextLink>
        </Flex>
        <Flex
          justify="flex-end"
          w="100%"
          align="center"
          color="gray.400"
          maxW="1100px"
        >
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            ml={{ base: "0", md: "3" }}
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
          <IconButton
            ref={mobileNavBtnRef}
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }}
            fontSize="20px"
            color={useColorModeValue("gray.800", "inherit")}
            variant="ghost"
            icon={<FaBars />}
            onClick={onOpen}
          />
        </Flex>
      </Flex>
      {/* <MobileNavContent isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
};
