import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { Navbar } from "../../Navbar";
import { PageTemplateProps } from "./interface";

export function PageTemplate({ children, section }: PageTemplateProps): JSX.Element {
  return (
    <Box>
      <Navbar />
      <Box
        mx="auto"
        py="8"
        px="4"
        maxWidth={1200}
        >
          {section?.title && (
            <Flex align="center" mb="8">
              <Icon fontSize="3xl" color="purple.600" as={FiChevronRight} />
              <Heading fontSize="2xl">{section.title}</Heading>
            </Flex>
          )}

        {children}
      </Box>
    </Box>
  )
}