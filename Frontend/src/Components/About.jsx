import React from 'react'
import {
    Box,
    Heading,
    Text,
    Button,
    Container,
    HStack,
    Grid,
    GridItem,
    Image,
    Flex,
    Link,
  } from "@chakra-ui/react";
  import {BsDash} from "react-icons/bs";
  import { FaWhatsapp } from "react-icons/fa";
  import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./About.css";
import { Navigation } from "swiper";

function About() {
  return (
    <Container
        // height={450}
        marginTop="7rem"
        maxW="container.2xl"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        // backgroundImage="https://images.pexels.com/photos/4269492/pexels-photo-4269492.jpeg"
      >
        <Box paddingTop="6%" paddingLeft="10%" width="auto" backgroundImage="https://images.pexels.com/photos/4269492/pexels-photo-4269492.jpeg" backgroundSize="cover" backgroundRepeat="no-repeat" marginTop="7rem" maxW="container.2xl" height={450}>
          <Heading fontSize={48} color="#86E5FF" margin={5}>
           Everyday is precious
          </Heading>
          <Text fontSize={24} color="black" margin={5}>
          Let the young know they will never find a more interesting, more instructive book than the patient himself.
          </Text>
          <Button margin={5} color="#4C829C" variant="solid">
            Book an Appointment
          </Button>
        
        </Box>

      <Heading padding={5} textAlign="center" fontSize="30px" justifyContent="center">
        What is A+ Health?
      </Heading>
      <Text textAlign="center" fontSize="20px" justifyContent="center">
      A+ Hospitals was established in 1999 by Dr. Govind Kumar, renowned as the architect of modern healthcare in India. As the nation’s first corporate hospital, A+ Hospitals is acclaimed for pioneering the private healthcare revolution in the country.

      A+ Hospitals has emerged as Asia’s foremost integrated healthcare services provider and has a robust presence across the healthcare ecosystem, including Hospitals, Pharmacies, Primary Care & Diagnostic Clinics and several retail health models. The Group also has Telemedicine facilities across several countries, Health Insurance Services, Global Projects Consultancy, Medical Colleges, Medvarsity for E-Learning, Colleges of Nursing and Hospital Management and a Research Foundation. In addition, ‘ASK A+’ – an online consultation portal and A+ Home Health provide the care continuum.


        <br /> The cornerstones of A+ legacy are its unstinting focus on clinical excellence, affordable costs, modern technology and forward-looking research & academics.A+ Hospitals was among the first few hospitals in the world to leverage technology to facilitate seamless healthcare delivery. The organization embraced the rapid advancement in medical equipments across the world, and pioneered the introduction of several cutting edge innovations in India. Recently, South East Asia’s first Proton Therapy Centre commenced operations at the A+ Centre in Chennai.

        Since its inception,A+ Hospitals has been honoured by the trust of over 150 million individuals who came from 140 countries. At the core of Apollo’s patient-centric culture is TLC (Tender Loving Care), the magic that inspires hope amongst its patients. <br /> 
      </Text>


        <Heading mt={"20"} mb={"10"} color={"#444444"} textAlign={"center"} size={"3xl"}>We provide everything you need</Heading>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={"5"}
        width={"100%"}
        m={"auto"}
      >
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/QNpXN2Lt/payout.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"} size={"md"}>Payout</Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"} >
              This is your money, you can withdraw it at any point before the process.
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/7YJ7sPj6/internet.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>payment support</Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"}>
              We accept multiple currencies from anywhere in the
              world.
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"30%"}>
            <Image
              w={"75%"}
              src="https://i.postimg.cc/C1DTrqC7/fundraisers.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Multiple people </Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"}>Multiple people manage for your cause</Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"60%"}>
            <Image
              w={"90%"}
              src="https://i.postimg.cc/Jhw6h2Cr/webApp.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Personalized Web App</Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"}>
              Get instant updates on your Health progress via instant
              alerts, email and track everything realtime on A+ web app
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"70%"}
              src="https://i.postimg.cc/63q9pqXx/expert.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Dedicated expert</Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"}>
              A dedicated expert guides you through your Health Issue
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/pXXmnWJr/raised-Amount.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Keep the raised amount</Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"}>
              You will receive all the raised amount after the transactional,
              processing fee.
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/1XFRkr2Y/support.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>24/7 support</Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"}>
              We offer you 24*7 assistance via call, WhatsApp, Email, SMS and
              our Instant Chatting Interface
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/zvPHG6M0/ad-Support.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Advertising support</Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"}>
              We provide marketing and promotional support for your Health
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"}>
          <Box w={"40%"}>
            <Image
              w={"80%"}
              src="https://i.postimg.cc/65h4qH2r/tools-1.png"
            ></Image>
          </Box>
          <Box>
            <Heading color={"#909090"} fontWeight={"500"}  size={"md"}>Marketing tool</Heading>
            <BsDash size={"1.9rem"}  color={"#5BC0F8"} />
            <Text color={"#86E5FF"}>
              A highly intelligent marketing tool, which provides all insights based
              on your Health
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <HStack
        style={{ marginLeft: "2rem", padding: "10px ", marginTop: "3rem" }}
      ></HStack>
      <Heading padding={5} textAlign="center" fontSize="30px">
        Customer Appreciation
      </Heading>

<div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        // loopFillGroupWithBlank={true}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <Flex
            width={"90%"}
            justifyContent={"space-evenly"}
            boxShadow={"3xl"}
            _hover={{ cursor: "pointer" }}
          >
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size="12px">
                You are the reason Suraj gets to live his dream
              </Heading>
              <Text fontSize="15px" mt={"5"} mb={"5"}>
                “Our son’s cancer had relapsed after 2.5 years of chemotherapy &
                we knew we couldn’t afford his life-saving treatment. But thanks
                to your team & prayers, he underwent successful treatment &
                is recovering well. May God bless you all for saving his life!”
                -Dhanasar (Father)
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize="12px"color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex width={"90%"} justifyContent={"space-evenly"} boxShadow={"3xl"}>
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/96/image/0717875196afb641172a631c282e1875d76b8930.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size="12px">
                Heroes like you helped my son win his battle.
              </Heading>
              <Text fontSize="15px" mt={"5"} mb={"5"}>
                “May Allah bless you all! Thanks to your generous efforts,
                Afzal underwent a successful BMT to treat thalassemia major. We
                are eternally grateful to you all for gifting our little bundle
                of joy a second chance at life!” -Reshma (Mother)
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize="12px" color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex width={"90%"} justifyContent={"space-evenly"} boxShadow={"3xl"}>
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/95/image/bc5ae443b8da492ff0c97082e2981ada078e385d.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size="12px">
                My daughter finally gets to enjoy her childhood
              </Heading>
              <Text fontSize="15px" mt={"5"} mb={"5"}>
                "My daughter was suffering from Budd Chiari syndrome with a
                recurrent gastrointestinal bleed and needed an urgent liver
                transplant to survive, but sadly we couldn't afford it. However,
                your donations gave her a new lease on life! She underwent a
                successful liver transplant and is now enjoying her childhood.
                Words cannot express how grateful I am to you angels!" -
                Prajakta (Mother)
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize="12px" color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex width={"90%"} justifyContent={"space-evenly"} boxShadow={"3xl"}>
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/94/image/26fe5c8a80fe779e091bd15f4de3c80224ca7c5b.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size="12px">
                Your support gave my son a second chance at life
              </Heading>
              <Text fontSize="15px" mt={"5"} mb={"5"}>
                I express my heartfelt gratitude towards you all for saving my
                son, Vedant's life! He was suffering from CLD Budd Chiari
                Syndrome, and a liver transplant was his only hope at survival,
                but we couldn't afford it. We would've lost him had it not been
                for your generosity and prayers. Thank you for lighting up our
                lives. He is doing better than ever post his liver transplant.
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize="12px" color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex width={"90%"} justifyContent={"space-evenly"} boxShadow={"3xl"}>
            <Box width={"40%"}>
              {" "}
              <Image
                borderTopLeftRadius={"lg"}
                borderBottomLeftRadius={"lg"}
                src="https://kettocdn.gumlet.io/media/banner/0/79/image/d0ab9b0b9bcc30ced6574c54d6b216ab895f90d5.jpg?w=auto&dpr=1.0"
              ></Image>{" "}
            </Box>
            <Box
              width={"43%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading size="12px">
                Amit and the world’s toughest cycling expedition
              </Heading>
              <Text fontSize="15px" mt={"5"} mb={"5"}>
                At 38, Dr. Amit Samarth is the first Asian to qualify, contest
                and complete the Trans-Siberian Extreme Endurance Race. It is
                the world's longest and the toughest cycling race - starting
                from Moscow, traversing 9100 kms through Russia, to finally end
                in Vladivostok. Amit was one of the only six people who finished
                the race. He successfully raised the amount needed for this once
                in a lifetime adventure on Ketto, where
              </Text>
              <Link href="#" _hover={{ color: "blue" }} color={"#01bfbd"}>
                Read more
              </Link>
              <Container
                display={"flex"}
                w={"90%"}
                alignItems={"center"}
                gap={"2"}
                mt={"10"}
              >
                <Text fontSize="12px" color={"gray"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </div>
      </Container>
      
     
  )
}

export default About