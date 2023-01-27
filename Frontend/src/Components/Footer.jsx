import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  faFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
  FaWhatsapp,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bgColor={"#0081C9"} color={"white"} mt={"30"}>
      <Container
        as={Stack}
        maxW={"8xl"}
        py={10}
        borderBottom={"2px solid"}
        borderColor={"gray.600"}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box borderBottom={"2px solid"} borderColor={"gray.600"} pb={"5"}>
              <Image
                w={"18rem"}
                src="https://i.ibb.co/CszNkQW/A-1.png"
              ></Image>
            </Box>
            <HStack>
              <FaFacebookSquare size={"2rem"} />
              <FaTwitter size={"2rem"} />
              <FaLinkedinIn size={"2rem"} />
              <FaYoutube size={"2rem"} />
              <FaInstagram size={"2rem"} />
              <FaWhatsapp size={"2rem"} />
            </HStack>
            <Text fontSize={"lg"} fontWeight={"600"}>
              1.5M +
              <Text fontSize={"sm"} color={"#01bfbd"}>
                Followers
              </Text>
            </Text>
            <Stack>
              <Text fontSize={"md"} fontWeight={"500"}>
                For any queries
                <Text fontSize={"md"} fontWeight={"500"}>
                  Email: info@A+.org
                  <Text fontSize={"md"} fontWeight={"500"}>
                    Contact No.: +91 8219189058
                  </Text>
                </Text>
              </Text>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Department</ListHeader>
            <Link href={"#"}>Cardiology</Link>
            <Link href={"#"}>Pulmonology</Link>
            <Link href={"#"}>Gastroenterology</Link>
            <Link href={"#"}>Endocrinology</Link>
            <Link href={"#"}>Infectious Diseases</Link>
            <Link href={"#"}>Neurology</Link>
            <Link href={"#"}>COVID-19</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>How it works?</ListHeader>
            <Link href={"#"}>Support</Link>
            <Link href={"#"}>Faster Response</Link>
            <Link href={"#"}>Best Suggestion</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Best Services</Link>
            <Link href={"#"}>Immense Hardwork</Link>
            <Link href={"#"}>Trustful & Safety</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About Us</ListHeader>
            <Link href={"#"}>Team A+</Link>
            <Link href={"#"}>In The News</Link>
            <Link href={"#"}>Our Partners</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>A+ Health Blog</Link>
            <Link href={"#"}>Success Stories</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Medical Finance</Link>
            <Link href={"#"}>FAQs & Help Center</Link>
            <Link href={"#"}>Are A+ Health Campaigns Genuine?</Link>
            <Link href={"#"}>Fundraiser Video</Link>
            <Link href={"#"}>Trust & Safety</Link>
            <Link href={"#"}>Plans & Pricing</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>
        </SimpleGrid>
          <Flex justifyContent={"right"}>
            <Image src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.0"></Image>
          </Flex>
      </Container>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Text textAlign={"center"} fontSize={"sm"}>
          Copyright © 2022 A+ Health Online Ventures Pvt Ltd. All Rights Reserved.
          Terms of Use | Privacy Policy | AML Policy | Use of cookies{" "}
        </Text>
      </Container>
    </Box>
  );
}