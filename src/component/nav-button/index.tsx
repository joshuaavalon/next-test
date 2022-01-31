import { forwardRef } from "react";
import { Box, Flex, Icon, Link, useMultiStyleConfig } from "@chakra-ui/react";

import type { ReactText } from "react";
import type { IconType } from "react-icons";

export interface NavButtonProps {
  href?: string;
  icon?: IconType;
  children: ReactText;
  onClick?: () => void;
  colorScheme?: string;
  variant?: "modern" | "compact";
}

// eslint-disable-next-line react/display-name
export const NavButton = forwardRef<HTMLAnchorElement, NavButtonProps>(
  (props, ref) => {
    const { icon, children, href = "#", onClick, colorScheme, variant } = props;
    const styles = useMultiStyleConfig("NavButton", { colorScheme, variant });
    return (
      <Link href={href} onClick={onClick} ref={ref} sx={styles.link}>
        <Flex cursor="pointer" align="center" role="group" sx={styles.button}>
          {icon && (
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              sx={styles.iconBox}
            >
              <Icon as={icon} sx={styles.icon} />
            </Box>
          )}
          <Box
            as="span"
            display="inline-block"
            sx={styles.label}
            data-hover={children}
          >
            {children}
          </Box>
        </Flex>
      </Link>
    );
  }
);
