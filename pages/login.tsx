import { useContext, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Link,
  useToast,
  ToastMessage,
  ToastProps,
} from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";
import NextLink from "next/link";
import Head from "next/head";
import ShopContext from "lib/ShopContext";

function returnToast(response: any) {
  if (
    response.response.customerCreate.customerUserErrors[0]?.code === "TAKEN"
  ) {
    return {
      title: "Email address already exists.",
      description: "An account with this email address already exists",
      status: "error",
      isClosable: true,
    };
  }
  if (
    response.response.customerCreate.customerUserErrors[0]?.code ===
    "CUSTOMER_DISABLED"
  ) {
    return {
      title: "We've sent you an activation email!",
      description:
        "Looks like you've ordered with us before! We've sent you an email to activate your account.",
      status: "success",
      isClosable: true,
    };
  }
  if (response.response.customerCreate.customer?.id !== null) {
    return {
      title: "Welcome!",
      description: "Your account was successfully created! You may now login.",
      status: "success",
      isClosable: true,
    };
  }
}

export default function Login() {
  const [signIn, toggleSignIn] = useState(true);
  const router = useRouter();
  const toast = useToast();
  const { shop } = useContext(ShopContext);

  return (
    <Box pt={40} pb={20}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SHOP_NAME} | Account Login</title>
      </Head>
      <Container maxW="container.lg">
        {signIn ? (
          <SignIn shop={shop} router={router} toast={toast} />
        ) : (
          <SignUp toggleSignIn={toggleSignIn} shop={shop} router={router} toast={toast} />
        )}
        <Link onClick={() => toggleSignIn(!signIn)}>
          <Text>{signIn ? "Sign up" : "Sign in"} instead?</Text>
        </Link>
      </Container>
    </Box>
  );
}

function SignIn({
  shop,
  router,
  toast,
}: {
  shop: { name: string };
  router: NextRouter;
  toast: any;
}) {
  const [show, toggle] = useState(false);
  const [loginFailed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");

  async function handleAuth() {
    setFailed(false);

    const response = await fetch("/api/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => res.json());

    if (response.customerAccessToken) {
      console.log(response);
      window.localStorage.setItem(
        `${process.env.NEXT_PUBLIC_SHOP_NAME}:supershops:accessToken`,
        JSON.stringify({ ...response })
      );

      router.push("/account");

      return;
    }

    if (response.customerUserErrors) {
      console.log(response);
      setFailed(true);
      toast({
        title: "Login failed.",
        description: "Double check your email and password.",
        status: 'error'
      })

      return;
    }
  }

  return (
    <Stack direction={["column", "row"]} minH={250}>
      <Box minW="40%">
        <Heading>Log In to {shop.name}</Heading>
        <Text>Access past purchases and order information</Text>
      </Box>
      <Stack spacing={4} w="full">
        <Input
          isInvalid={loginFailed}
          placeholder="Enter your email"
          size="md"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            isInvalid={loginFailed}
            placeholder={"Enter your password"}
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => toggle(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button alignSelf={"flex-start"} onClick={handleAuth}>
          Sign In
        </Button>
        <NextLink href="/reset-password" passHref>
          <Link>
            <Text>Forgot Password?</Text>
          </Link>
        </NextLink>
      </Stack>
    </Stack>
  );
}

function SignUp({
  shop,
  router,
  toast,
  toggleSignIn
}: {
  shop: { name: string };
  router: NextRouter;
  toast: ToastMessage;
  toggleSignIn: any;
}) {
  const [show, toggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, handleEmail] = useState("");
  const [ name, handleName ] = useState("");
  const [surname, handleSurname ] = useState("");
  const [password, handlePassword] = useState("");
  const [ReEnterPassword, handleReEnterPassword] = useState("");

  async function handleAuth() {
    const response = await fetch("/api/create-account", {
      method: "POST",
      body: JSON.stringify({
        firstName: name,
        lastName: surname,
        email: email,
        password: password,
      }),
    }).then((res) => res.json());

    if(response.response.customerCreate.customer?.id !== null){
      toggleSignIn()
    }

    const toastOpts: any = returnToast(response);

    toast(toastOpts);

    return;
  }

  function passwordCompare() {
    //returns false, i.e, input is valid
    if (password === ReEnterPassword) return false;
    //return true if the passwords do not equal each other, i.e., input is invalid
    return true;
  }

  return (
    <Stack direction={["column", "row"]} minH={250}>
      <Box minW="40%">
        <Heading>Create Your {shop.name} Account</Heading>
      </Box>
      <Stack spacing={4} w="full">
        <Stack direction="row">
          <Input
            placeholder="Enter your first name"
            size="md"
            value={name}
            onChange={(e) => handleName(e.target.value)}
          />
          <Input
            placeholder="Enter your last name"
            size="md"
            value={surname}
            onChange={(e) => handleSurname(e.target.value)}
          />
        </Stack>
        <Input
          placeholder="Enter your email"
          size="md"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            isInvalid={passwordCompare()}
            placeholder={"Enter your password"}
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => toggle(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            isInvalid={passwordCompare()}
            placeholder={"Re-enter your password"}
            value={ReEnterPassword}
            onChange={(e) => handleReEnterPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => toggle(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button alignSelf={"flex-start"} onClick={handleAuth}>
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
}
