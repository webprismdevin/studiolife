import {
  Box,
  Stack,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Cart from "./Cart";
import { Search } from "./Search";
import NextLink from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  HiChevronDown,
  HiMenuAlt2,
  HiOutlineUser,
  HiUser,
} from "react-icons/hi";
import useSWR from "swr";
import { sanityClient } from "lib/sanity";
 
const fetcher = (query: string) => sanityClient.fetch(query);

const query = `*[ _type == "settings" ][0]{
  menu {
    links[] {
      ...,
      _type == "collectionGroup" => {
        collectionLinks[]-> {
          "title": store.title,
          "handle": store.slug.current
        }
      },
    }
  }
}`;

const Navbar = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const { data, error } = useSWR(query, fetcher);

  useEffect(() => {
    async function checkToken() {
      const token = JSON.parse(
        window.localStorage.getItem(
          `${process.env.NEXT_PUBLIC_SHOP_NAME}:supershops:accessToken`
        )!
      );
      if (token) setAuth(true);
    }

    checkToken();
  }, [window]);

  function handleLoginOrAccount() {
    if (auth) router.push("/account");
    else router.push("/login");
  }

  return (
    <Box
      pos="sticky"
      top={0}
      left={0}
      zIndex={2}
      background="white"
      shadow="sm"
    >
      <Stack
        direction={"row"}
        justify="space-between"
        px={[2, 8]}
        py={3}
        align="center"
      >
        <Stack direction="row" align="center" spacing={6}>
          {data && <MobileMenu data={data} />}
          <NextLink href="/" passHref>
            <Link fontFamily="Julietta" fontSize="4xl" pb={2}>
              StudioLife
            </Link>
          </NextLink>
          <Stack
            display={["none", "inherit"]}
            direction={"row"}
            align="center"
            spacing={6}
          >
            {data &&
              data.menu.links.map((links: any, index: number) => (
                <React.Fragment key={links._key}>
                  <MenuModules key={links._key} links={links} />
                  {index !== data.menu.links.length - 1 && (
                    <Divider orientation="vertical" height={"40px"} />
                  )}
                </React.Fragment>
              ))}
          </Stack>
        </Stack>
        <Stack direction={"row"} align="center" spacing={6}>
          <Stack direction={"row"} align="center" spacing={[2, 4]}>
            <IconButton
              aria-label={"Account Login"}
              onClick={handleLoginOrAccount}
              as={HiOutlineUser}
              boxSize={7}
              variant={"ghost"}
              display={["none", null, "inherit"]}
            />
            <Search router={router} />
            <Cart />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

function MenuModules({ links }: { links: any }) {
  switch (links._type) {
    case "collectionGroup":
      return (
        <CollectionGroup links={links.collectionLinks} title={links.title} />
      );
    case "linkGroup":
      return <LinkGroup links={links.links} title={links.title} />;
    default:
      return (
        <NextLink href={links.url}>
          <Link>{links.title}</Link>
        </NextLink>
      );
  }
}

function CollectionGroup({ links, title }: { links: any; title: string }) {
  return (
    <Menu>
      <MenuButton as={Link} rightIcon={<HiChevronDown />}>
        {title}
      </MenuButton>
      <MenuList>
        {links.map((link: any) => (
          <MenuItem key={link._key}>
            <NextLink href={`/collection/${link.handle}`} passHref>
              <Link>{link.title}</Link>
            </NextLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

function LinkGroup({ links, title }: { links: any; title: string }) {
  return (
    <Menu>
      <MenuButton as={Link} rightIcon={<HiChevronDown />}>
        {title}
      </MenuButton>
      <MenuList>
        {links.map((link: any) => (
          <MenuItem key={link._key}>
            <NextLink href={`${link.url}`} passHref>
              <Link>{link.title}</Link>
            </NextLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

function MobileMenu({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const [auth, setAuth] = useState(false);
  const btnRef = useRef<any>();

  function handleLoginOrAccount() {
    if (auth) router.push("/account");
    else router.push("/login");
  }

  return (
    <>
      <IconButton
        as={HiMenuAlt2}
        aria-label="Menu Button"
        display={["inherit", "none"]}
        variant={"ghost"}
        ref={btnRef}
        onClick={onOpen}
        boxSize={7}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading>menu</Heading>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              {data.menu.links.map((links: any, index: number) => (
                <React.Fragment key={links._key}>
                  <MobileMenuModules key={links._key} links={links} />
                  {index !== data.menu.links.length - 1 && (
                    <Divider orientation="horizontal" />
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Link onClick={handleLoginOrAccount} fontSize={"lg"}>Account</Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function MobileMenuModules({ links }: { links: any }) {
  switch (links._type) {
    case "collectionGroup":
      return (
        <MobileCollectionGroup
          links={links.collectionLinks}
          title={links.title}
        />
      );
    case "linkGroup":
      return <MobileLinkGroup links={links.links} title={links.title} />;
    default:
      return (
        <NextLink href={links.url}>
          <Link>{links.title}</Link>
        </NextLink>
      );
  }
}

function MobileCollectionGroup({
  links,
  title,
}: {
  links: any;
  title: string;
}) {
  return (
    <React.Fragment>
      {links.map((link: any) => (
        <NextLink key={link._key} href={`/collection/${link.handle}`} passHref>
          <Link fontSize="lg">{link.title}</Link>
        </NextLink>
      ))}
    </React.Fragment>
  );
}

function MobileLinkGroup({ links, title }: { links: any; title: string }) {
  return (
    <React.Fragment>
      {links.map((link: any) => (
        <NextLink key={link._key} href={link.url}>
          <Link fontSize="lg">{link.title}</Link>
        </NextLink>
      ))}
    </React.Fragment>
  );
}

export default Navbar;
