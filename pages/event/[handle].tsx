import {
  Heading,
  Box,
  Flex,
  Stack,
  Text,
  AspectRatio,
  Image,
  Select,
  Button,
  Tag,
  TagLeftIcon,
  TagLabel,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";
import { useState, useContext } from "react";
import CartContext from "lib/CartContext";
import formatter from "lib/formatter";
import { FaBox, FaClock, FaUserGraduate, FaUsers } from "react-icons/fa";
import dayjs from "dayjs";
import PhotoCarousel from "components/PhotoCarousel";
import MultiText from "lib/MultiText";
import { useRouter } from "next/router";

var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

//to-do: add "associated products" so that they can add additional kits like with Lettering for Light

const Product = ({ handle, product }: { handle: string; product: any }) => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [variantId, setVariantId] = useState(() => {
    if (!product) return null;

    return product.variants.edges[0].node.id;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const variants = product?.variants.edges;

  async function addToCart() {
    const response = await fetch("/api/addtocart", {
      method: "POST",
      body: JSON.stringify({
        variantId: variantId,
        cartId: cart.id,
      }),
    }).then((res) => res.json());

    setCart({
      ...cart,
      status: "dirty",
      lines: response.response.cartLinesAdd.cart.lines,
    });
  }

  function checkPrice(id: string) {
    const cv = variants.filter((v: any) => v.node.id === id);
    return formatter.format(cv[0].node.priceV2.amount);
  }

  const more_than_one_image = product.images?.edges?.length > 1;

  if (!product) return null;

  return (
    <>
      <Head>
        <title>
          {product.on_page_title?.value
            ? product.on_page_title.value
            : product.title}
          | StudioLife Seattle
        </title>
        <meta name="description" content={product.short_description} />
        <meta
          property="og:title"
          content={`${
            product.on_page_title?.value
              ? product.on_page_title.value
              : product.title
          } | StudioLife Seattle`}
        />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:image" content={product.images.edges[0].node.url} />
        <meta property="og:description" content={product.short_description} />
        <meta property="og:type" content="website" />
      </Head>
      <Flex
        flexDirection={["column", "row"]}
        align={["center", null, "flex-start"]}
        overflow={["visible"]}
      >
        <Box flexGrow={1} maxW={["full", null, "50%"]}>
          <Stack
            direction={["row", null, "column"]}
            overflow={["scroll", null, "hidden"]}
            h={[360, null, "auto"]}
          >
            {product.images.edges.map((i: any) => (
              <Image
                maxW={["100%", null, "100%"]}
                maxH={["100%", null, "auto"]}
                key={i.node.url}
                src={i.node.url}
                alt={i.node.altText}
              />
            ))}
          </Stack>
        </Box>
        {InformationATC(
          product,
          checkPrice,
          variantId,
          onOpen,
          variants,
          setVariantId,
          addToCart
        )}
      </Flex>

      {DescriptionModal(isOpen, onClose, product)}
    </>
  );
};

export default Product;

function InformationATC(
  product: any,
  checkPrice: (id: string) => string,
  variantId: any,
  onOpen: () => void,
  variants: any,
  setVariantId: any,
  addToCart: () => Promise<void>
) {
  return (
    <Stack
      position={["static", null, "sticky"]}
      top={[0, 110]}
      direction={["column"]}
      spacing={8}
      p={[4, 16]}
      maxW={["full", "50%"]}
    >
      {ProductHeader(product, checkPrice, variantId)}
      {/* buy now, mobile */}
      <Box display={["block", null, "none"]}>
        {BuyNow(variants, variantId, setVariantId, checkPrice, addToCart)}
      </Box>
      <Divider />
      <MultiText
        text={
          product.short_description?.value
            ? product.short_description.value
            : ""
        }
        mapKey={"desc"}
      />
      <Button variant="outline" onClick={onOpen}>
        Read Full Description
      </Button>
      {/* buy now, desktop */}
      <Box display={["none", null, "block"]}>
        {BuyNow(variants, variantId, setVariantId, checkPrice, addToCart)}
      </Box>
    </Stack>
  );
}

function BuyNow(
  variants: any,
  variantId: any,
  setVariantId: any,
  checkPrice: (id: string) => string,
  addToCart: () => Promise<void>
) {
  return (
    <Stack spacing={4}>
      {variants.length > 1 && (
        <Select
          value={variantId}
          onChange={(e) => {
            setVariantId(e.target.value);
            checkPrice(e.target.value);
          }}
        >
          {variants.map((v: any, i: number) => (
            <option key={v.node.id} value={v.node.id}>
              {v.node.title}
            </option>
          ))}
        </Select>
      )}
      <Button display={["hidden", null, "block"]} size="lg" onClick={addToCart}>
        Add To Cart
      </Button>
    </Stack>
  );
}

function ProductHeader(
  product: any,
  checkPrice: (id: string) => string,
  variantId: any
) {

  // @ts-ignore
  const zoned = dayjs(product.date?.value).tz("America/Los_Angeles");

  return (
    <Stack direction={"column"} spacing={2} alignItems={"flex-start"}>
      <HStack>
        <Text>
          {zoned.format("dddd, MMMM DD, YYYY")}
        </Text>
        <Text>
          {zoned.format("hh:mm A PST")}
        </Text>
      </HStack>
      <Stack
        direction={["column", null, "row"]}
        justify={"space-between"}
        w="full"
      >
        <Heading size="lg">
          {product.on_page_title?.value
            ? product.on_page_title.value
            : product.title}
        </Heading>
        <Text fontSize={24} fontWeight={600}>
          {checkPrice(variantId)}
        </Text>
      </Stack>
      <Stack direction={["row"]} justify={"flex-start"} spacing={2}>
        <Tag size={["sm", null, "lg"]}>
          <TagLeftIcon boxSize={4} as={FaUserGraduate} />
          <TagLabel>{product.teacher?.value}</TagLabel>
        </Tag>
        <Tag size={["sm", null, "lg"]}>
          <TagLeftIcon boxSize={4} as={FaClock} />
          <TagLabel>{product.duration?.value}</TagLabel>
        </Tag>
        {product.is_virtual?.value === "false" ? (
          <>
            <Tag size={["sm", null, "lg"]}>
              <TagLeftIcon boxSize={4} as={FaUsers} />
              <TagLabel>In Studio</TagLabel>
            </Tag>
          </>
        ) : (
          <>
            <Tag size={["sm", null, "lg"]}>
              <TagLeftIcon boxSize={4} as={FaBox} />
              <TagLabel>Virtual</TagLabel>
            </Tag>
          </>
        )}
      </Stack>
    </Stack>
  );
}

function DescriptionModal(isOpen: boolean, onClose: () => void, product: any) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Description</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            className="class_desc_outer_box"
            dangerouslySetInnerHTML={{
              __html: product.descriptionHtml,
            }}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export async function getStaticPaths() {
  const graphQLClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_SHOPIFY_URL!,
    {
      headers: {
        "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_TOKEN!,
      },
    }
  );

  const query = gql`
    {
      products(first: 200) {
        edges {
          node {
            id
            title
            handle
            description
            tags
            variants(first: 100) {
              edges {
                node {
                  id
                  title
                  priceV2 {
                    amount
                  }
                }
              }
            }
            images(first: 10) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
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
    paths: res.products.edges.map((edge: any) => ({
      params: { handle: edge.node.handle },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const handle = context.params.handle;

  const graphQLClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_SHOPIFY_URL!,
    {
      headers: {
        "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_TOKEN!,
      },
    }
  );

  // Shopify Request
  const query = gql`{
    product(handle: "${handle}") {
      id
      title
      descriptionHtml
      tags
      teacher: metafield(namespace: "my_fields", key: "teacher") {
        value
      }
      duration: metafield(namespace: "my_fields", key: "duration") {
        value
      }
      date: metafield(namespace: "my_fields", key: "date") {
        value
      }
      is_virtual: metafield(namespace: "product", key: "is_virtual") {
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
      variants(first: 100) {
        edges {
          node {
            id
            title
            priceV2 {
              amount
            }
          }
        }
      }
      images(first: 10) {
        edges {
          node {
            url
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
    }
  }`;

  const res = await graphQLClient.request(query);

  if (res.errors) {
    console.log(JSON.stringify(res.errors, null, 2));
    throw Error("Unable to retrieve Shopify Products. Please check logs");
  }

  return {
    props: {
      handle: handle,
      product: res.product,
    },
  };
}
