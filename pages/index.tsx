import {
  Stack,
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
  SimpleGrid,
  GridItem,
  Icon,
  Link,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import { groq } from "next-sanity";
import { getClient, imageBuilder } from "lib/sanity";
import { gql, GraphQLClient } from "graphql-request";
import { HiUserGroup, HiDesktopComputer, HiOutlineFilm } from "react-icons/hi";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import MultiText from "lib/MultiText";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const EventCard = dynamic<any>(
  () => import("https://framer.com/m/Event-Card-p1O7.js@MFkLMZojOIAAfuSB3sN2"),
  { ssr: false }
);

const MotionBox = motion(Box);

var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone')

dayjs.extend(utc)
dayjs.extend(timezone)



function HomePage({
  homepageData,
  collections,
}: {
  homepageData: any;
  collections: any;
}) {
  const router = useRouter();
  const featuredEvents = useRef<any>(null);
  const featuredWorkshops = useRef<any>(null);

  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, homepageData.carousel.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    let interval: any;

    if (homepageData.carousel.length > 1) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [page]);

  const aboutImageSrc = imageBuilder(homepageData.about.image)
    .width(1800)
    .url();

  return (
    <>
      <Head>
        <title>{homepageData.basicSEO?.title}</title>
        <meta name="description" content={homepageData.basicSEO?.description} />
        <meta property="og:title" content={homepageData.basicSEO?.ogTitle} />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:image" content={homepageData.basicSEO?.ogImage} />
        <meta property="og:description" content={homepageData.basicSEO?.ogDescription} />
        <meta property="og:type" content="website" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <MotionBox
          key={index}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          exit={{
            opacity: 0,
          }}
          py={"200px"}
          pos="relative"
        >
          <Box
            pos="absolute"
            top={0}
            left={0}
            width={"100%"}
            height={"100%"}
            zIndex={-1}
            opacity={0.8}
          >
            <NextImage
              src={imageBuilder(homepageData.carousel[index].image).url()}
              layout="fill"
              objectFit="cover"
              blurDataURL={imageBuilder(homepageData.carousel[index].image)
                .height(40)
                .url()}
            />
          </Box>
          <Container maxW="container.lg" centerContent textAlign={"center"}>
            <Heading as="h1" size="4xl" mt={1}>
              {homepageData.carousel[index].title}
            </Heading>
            <Text>{homepageData.carousel[index].text}</Text>
            <Stack direction={["column", "row"]} mt={6}>
              {homepageData.carousel[index].buttons.map(
                (
                  button: { link: string; text: string; _key: string },
                  index: number
                ) => (
                  <NextLink href={button.link} key={button._key}>
                    <Button>{button.text}</Button>
                  </NextLink>
                )
              )}
            </Stack>
          </Container>
        </MotionBox>
      </AnimatePresence>
      {/* product features */}
      <Container maxW="container.lg" pt={20} pb={20}>
        <Stack spacing={6} textAlign="center" alignItems={"center"}>
          <Heading size="xl" as="h2">
            {homepageData.belowTheFold.title}
          </Heading>
          <Text pb={4} maxW={["full", "50%"]}>
            {homepageData.belowTheFold.text}
          </Text>
          <SimpleGrid
            templateColumns={["repeate(1, 1fr)", "repeat(3, 1fr)"]}
            gap={6}
            px={[2, 0]}
          >
            <GridItem
              shadow="md"
              border={"1px solid"}
              borderColor={"brand.border"}
              borderRadius={"10px"}
              p={8}
            >
              <Stack spacing={2} alignItems={"center"}>
                <Icon
                  as={HiDesktopComputer}
                  boxSize={8}
                  color={"brand.secondary"}
                />
                <Heading size="lg" lineHeight={1.1}>
                  live classes
                </Heading>
                <Text>{homepageData.belowTheFold.live}</Text>
              </Stack>
            </GridItem>
            <GridItem
              shadow="md"
              border={"1px solid"}
              borderColor={"brand.border"}
              borderRadius={"10px"}
              p={8}
            >
              <Stack spacing={2} alignItems={"center"}>
                <Icon
                  as={HiOutlineFilm}
                  boxSize={8}
                  color={"brand.secondary"}
                />
                <Heading size="lg" lineHeight={1.1}>
                  recorded workshops
                </Heading>
                <Text>{homepageData.belowTheFold.workshop}</Text>
              </Stack>
            </GridItem>
            <GridItem
              shadow="md"
              border={"1px solid"}
              borderColor={"brand.border"}
              borderRadius={"10px"}
              p={8}
            >
              <Stack spacing={2} alignItems={"center"}>
                <Icon as={HiUserGroup} boxSize={8} color={"brand.secondary"} />
                <Heading size="lg" lineHeight={1.1}>
                  private events
                </Heading>
                <Text>{homepageData.belowTheFold.private}</Text>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Stack>
      </Container>
      {/* featured events */}

      {collections.edges[0]?.node.products.edges.length > 0 && (
        <Container pt={10} pb={40} maxW="container.lg" ref={featuredEvents}>
          <VStack spacing={6} alignItems={"center"} w="full">
            <Heading size="xl">upcoming live events</Heading>
            <Box
              maxW={["full", "80%"]}
              textAlign="center"
              dangerouslySetInnerHTML={{
                __html: collections.edges[0].node.descriptionHtml,
              }}
            />
            <Divider />
            <Stack
              direction={["column", "row"]}
              justify="center"
              align="center"
              spacing={6}
              w="full"
            >
              {collections.edges[0].node.products.edges.map(
                ({ node }: { node: any }) => (
                  <Box key={node.id}>
                    <EventCard
                      date={dayjs(node.date?.value).format("MMMM DD, YYYY")}
                      duration={node.duration?.value}
                      eventName={node.on_page_title.value}
                      eventType={node.productType}
                      image={node.images.edges[0].node.transformedSrc}
                      style={{
                        minHeight: "100%"
                      }}
                      shortDesc={
                        node.short_description?.value
                          ? node.short_description?.value
                          : "No description found. Click Sign Up to learn more."
                      }
                      teacher={node.teacher.value}
                      //@ts-ignore
                      time={dayjs(node.date?.value).tz("America/Los_Angeles").format("hh:mm A PST")}
                      tap={() => router.push(`/event/${node.handle}`)}
                      variant="LiveEvent"
                      cta="Sign Up"
                    />
                  </Box>
                )
              )}
            </Stack>
            <NextLink href="/collection/live-events">
              <Link>see all</Link>
            </NextLink>
          </VStack>
        </Container>
      )}

      {/* about studiolife */}
      <Box
        bgImage={aboutImageSrc}
        bgSize={"cover"}
        bgPos={"center"}
        bgAttachment={["scroll", "fixed"]}
      >
        <Container py={40} maxW="container.lg" pos="relative">
          <VStack
            bgColor={"whiteAlpha.900"}
            boxShadow="md"
            borderRadius={"10px"}
            border={"1px solid rgba(0,0,0,0.05)"}
            spacing={4}
            p={8}
            ml={"auto"}
            maxW={["100%", "50%"]}
            alignItems="flex-start"
          >
            <Heading as="h2" size="xl">
              we are <span className="studiolife sl-heading">StudioLife</span>
            </Heading>
            <Text textAlign="justify">{homepageData.about.text}</Text>
            <NextLink href="/about" passHref>
              <Button>about us</Button>
            </NextLink>
          </VStack>
        </Container>
      </Box>
      {/* event features */}
      <Container pt={20} pb={20} maxW="container.lg" ref={featuredWorkshops}>
        {collections.edges[1]?.node.products.edges.length > 0 && (
          <VStack spacing={6} alignItems={"center"} w="full">
            <Heading size="xl">recorded workshops</Heading>
            <Box
              maxW={["full", "80%"]}
              textAlign="center"
              dangerouslySetInnerHTML={{
                __html: collections.edges[1].node.descriptionHtml,
              }}
            />
            <Stack
              direction={["column", "row"]}
              justify="center"
              align="stretch"
              spacing={6}
              w="full"
            >
              {collections.edges[1].node.products.edges.map(
                (product:any, index:number) => {
                  if(index < 3){
                    return (
                      <Box key={product.node.id} minH="100%">
                        <EventCard
                          style={{
                            minHeight: "100%",
                          }}
                          date={dayjs(product.node.date?.value).format("MMMM DD, YYYY")}
                          duration={product.node.duration?.value}
                          eventName={product.node.on_page_title?.value}
                          eventType={"Recorded Workshop"}
                          image={product.node.images.edges[0].node.transformedSrc}
                          shortDesc={
                            product.node.short_description?.value
                              ? product.node.short_description?.value
                              : "No description found. Click Sign Up to learn more."
                          }
                          teacher={product.node.teacher.value}
                          // time={dayjs(product.node.date?.value).tz("America/Los_Angeles").format("hh:mm A PST")}
                          tap={() => router.push(`/workshop/${product.node.handle}`)}
                          variant="Workshop"
                          cta={"learn more"}
                        />
                      </Box>
                    )
                  }
                }
              )}
            </Stack>
            <NextLink href="/collection/recorded-workshops">
              <Button variant="solid">see all workshops</Button>
            </NextLink>
          </VStack>
        )}
      </Container>
      {/* partner with studiolife */}
      <Box
        bgImage={"/photos/partner-with-studiolife.jpg"}
        bgSize="cover"
        bgAttachment={["scroll", "fixed"]}
      >
        <Container maxW="container.lg" py={20}>
          <Stack
            p={10}
            spacing={4}
            alignItems={"flex-start"}
            bgColor="whiteAlpha.900"
            maxW={["full", "50%"]}
            borderRadius={"10px"}
            shadow="md"
          >
            <Box>
              <Text fontSize="sm">{homepageData.partner.supertext}</Text>
              <Heading as="h2" size="xl">
                partner with{" "}
                <span className="studiolife sl-heading">StudioLife</span>
              </Heading>
            </Box>
            <Text>{homepageData.partner.text}</Text>
            <NextLink href="/partner">
              <Button>learn more</Button>
            </NextLink>
          </Stack>
        </Container>
      </Box>
      {/* private & corp events */}
      <Container maxW="container.lg" pt={40} pb={40}>
        <SimpleGrid
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gap={6}
        >
          <GridItem
            borderRadius={"10px"}
            border="1px solid"
            borderColor="brand.border"
            shadow="md"
            p={8}
          >
            <Stack spacing={4} alignItems={"flex-start"}>
              <Heading>private events</Heading>
              <MultiText
                text={homepageData.private}
                mapKey={"private_events"}
              />
              <NextLink href="/private-events#space-rentals">
                <Button>book now</Button>
              </NextLink>
            </Stack>
          </GridItem>
          <GridItem
            borderRadius={"10px"}
            border="1px solid"
            borderColor="brand.border"
            shadow="md"
            p={8}
          >
            <Stack spacing={4} px={[2, 0]} alignItems={"flex-start"}>
              <Heading>corporate events</Heading>
              <MultiText
                text={homepageData.corporate}
                mapKey={"private_events"}
              />
              <NextLink href="/private-events#corporate-events" passHref>
                <Button>learn more</Button>
              </NextLink>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  const homepageQuery = groq`*[_type == "homepage"][0]`;

  const homepageData = await getClient(false).fetch(homepageQuery, {});

  const graphQLClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_SHOPIFY_URL!,
    {
      headers: {
        "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_TOKEN!,
      },
    }
  );

  // Shopify Request
  const query = gql`
    {
      collections(first: 100, query: "homepage", sortKey: TITLE) {
        edges {
          node {
            id
            title
            descriptionHtml
            products(first: 6) {
              edges {
                node {
                  id
                  title
                  description
                  handle
                  productType
                  teacher: metafield(namespace: "my_fields", key: "teacher") {
                    value
                  }
                  duration: metafield(namespace: "my_fields", key: "duration") {
                    value
                  }
                  date: metafield(namespace: "my_fields", key: "date") {
                    value
                  }
                  short_description: metafield(
                    namespace: "product"
                    key: "short_description"
                  ) {
                    value
                  }
                  on_page_title: metafield(
                    namespace: "product"
                    key: "on_page_title"
                  ) {
                    value
                  }
                  variants(first: 1) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                  images(first: 2) {
                    edges {
                      node {
                        altText
                        transformedSrc
                      }
                    }
                  }
                  priceRange {
                    maxVariantPrice {
                      amount
                    }
                  }
                  compareAtPriceRange {
                    maxVariantPrice {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await graphQLClient.request(query);

  if (res.errors) {
    console.log(JSON.stringify(res.errors, null, 2));
    throw Error("Unable to retrieve Shopify Products. Please check logs");
  }

  return {
    props: {
      homepageData,
      collections: res.collections,
    },
    revalidate: 10,
  };
}
