import { Badge, Box, Flex, Heading, IconButton, Text, useMediaQuery } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { MovieCardProps } from "./interface";

export function MovieCard({
  title,
  poster,
  releaseDate,
  voteAverage
}: MovieCardProps): JSX.Element {
  const [isMaxWidth420] = useMediaQuery("(max-width: 420px)");

  return (
    <Flex
      as="button"
      height={320}
      width="100%"
      position="relative"
      maxWidth={isMaxWidth420 ? "100%" : 200}
      align="flex-end"
      borderRadius={8}
      textAlign="left"
      backgroundImage={poster}
      backgroundSize="cover"
      transition="0.2s"
      boxShadow="xl"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "dark-lg"
      }}
    >
      <IconButton
        position="absolute"
        top={15}
        left={15}
        colorScheme="white"
        background="blackAlpha.700"
        _hover={{
          background: "blackAlpha.600"
        }}
        _active={{
          background: "blackAlpha.800"
        }}
        variant="ghost"
        borderRadius="100%"
        aria-label="like button"
        icon={<FiHeart />}
      />
      <Box
        height={150}
        width="100%"
        px="4"
        pt="12"
        pb="8"
        borderBottomRadius={8}
        bgGradient="linear(to-b, transparent, blackAlpha.800, blackAlpha.900)"
      >
        <Heading
          fontSize="large"
          display="block"
          color="gray.300"
        >
          {title}
        </Heading>
        <Flex align="center" py="2">
          <Text as="span" fontWeight="bold" fontSize="md">{releaseDate}</Text>
          <Badge
            maxWidth={80}
            background="yellow.500"
            ml="3"
          >
            {voteAverage}
          </Badge>
        </Flex>
      </Box>
    </Flex>
  );
}
