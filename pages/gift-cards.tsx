import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Stack,
  Select,
  Button,
} from "@chakra-ui/react";
import { GraphQLClient, gql } from "graphql-request";
import CartContext from "lib/CartContext";
import { useState, useContext } from "react";

export default function GiftCard({ product }: any) {
  const { variant, selectedVariant, selectedVariantImage, handleOptionChange } =
    useVariant(product);

  const { cart, setCart } = useContext(CartContext)

  async function addToCart() {
    const response = await fetch("/api/addtocart", {
      method: "POST",
      body: JSON.stringify({
        variantId: variant.id,
        cartId: cart.id,
      }),
    }).then((res) => res.json());

    setCart({
      ...cart,
      status: "dirty",
      lines: response.response.cartLinesAdd.cart.lines,
    });
  }

  return (
    <Container>
      <Stack spacing={4}>
        <Box>
          <Image src={selectedVariantImage.url} alt={selectedVariantImage.altText} />
        </Box>
        <Heading size={"2xl"}>Gift Cards</Heading>
        <Box>
          <Text mb={2}>Select A Gift Value</Text>
          <Select onChange={handleOptionChange} name={"Denominations"}>
            {product.options[0].values.map((option: any) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </Select>
        </Box>
        <Button width="full" onClick={addToCart}>Add To Cart</Button>
        <Box 
          dangerouslySetInnerHTML={{
            __html: product.descriptionHtml
          }}
        />
      </Stack>
    </Container>
  );
}

const useVariant = (product: any) => {
  const [variant, setVariant] = useState(product.variants.edges[0].node);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.edges[0].node
  );
  const [selectedVariantImage, setSelectedVariantImage] = useState(
    product.variants.edges[0].node.image
  );

  const handleOptionChange = (e: any) => {
    const selectedValue = e.target.value;

    const selectedVariant = product.variants.edges.find(
      (variant: any) => variant.node.selectedOptions[0].value === selectedValue
    );

    console.log(selectedVariant);

    setSelectedVariant(selectedVariant.node);
    setSelectedVariantImage(selectedVariant.node.image);
  };

  return {
    variant,
    selectedVariant,
    selectedVariantImage,
    handleOptionChange,
  };
};

export async function getStaticProps() {
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
      product(handle: "gift-cards") {
        id
        title
        descriptionHtml
        options {
          name
          values
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price
              selectedOptions {
                name
                value
              }
              image {
                url
                height
                width
                altText
              }
            }
          }
        }
      }
    }
  `;

  const product_data = await graphQLClient.request(query);

  return {
    props: {
      product: product_data.product,
    },
  };
}
