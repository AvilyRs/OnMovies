import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Navbar } from "../../Navbar";
import { PageTemplateProps } from "./interface";

export function PageTemplate({ children, section, isDetails = false }: PageTemplateProps): JSX.Element {
  const router = useRouter();

  return (
    <Box>
      <Navbar />
      <Box
        mx="auto"
        py="8"
        px="4"
        maxWidth={1200}
        >
          {isDetails ? (
            section?.title && (
              <Flex align="center" mb="8">
                <Button
                  variant="ghost"
                  mr="8"
                  borderRadius="none"
                  borderColor="gray.700"
                  borderEndWidth={1}
                  _hover={{
                    background: "gray.800"
                  }}
                  _active={{
                    background: "gray.700"
                  }}
                  onClick={() => router.back()}
                >
                  <Icon fontSize="3xl" color="purple.600" as={FiChevronLeft} />
                  <Heading fontSize="2xl" mr="6">Voltar</Heading>
                </Button>
                <Heading fontSize="2xl">{section.title}</Heading>
              </Flex>
            )
          ) : (
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