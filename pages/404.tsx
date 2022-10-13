import {
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  GridItem,
  Divider,
} from '@chakra-ui/react';
import EventFeature from '../components/EventFeature';
import { GraphQLClient, gql } from 'graphql-request';

export default function Custom404({ collections }: {collections: any}) {
  return (
    <>
      <Container pt={40} pb={10} maxW="container.lg">
        <VStack spacing={4} w="full" align={'flex-start'}>
          <Heading as="h1" size="4xl">
            hmm...
          </Heading>
          <Text fontSize="2xl">We couldn&apos;t find that page :(</Text>
          <Text>
            What you&apos;re looking for may have moved. We can help you find
            it!
          </Text>
          {/* @ts-ignore */}
          <Button onClick={() => process.browser && window.Tawk_API.maximize()}>Chat Now</Button>
        </VStack>
      </Container>
    </>
  );
}