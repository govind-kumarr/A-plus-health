import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  HStack,
  Container,
  Select,
  Grid,
  GridItem,
  Spinner,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { Filter } from "../Components/FilterCategory";
import { useSelector, useDispatch } from "react-redux";
import { SearchIcon, ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { changeloadin, getdata } from "../Redux/AppReducer/app.actions";
import { BrowserFundingCard } from "../Components/BrowserFundingCard";
import SupprortChatBox from "../Components/SupprortChatBox";
const About = () => {
  const [filter, setFilter] = useState("");

  const [searchinpage, setsearchinpage] = useState("");
  const [seacheddata, setsearcheddata] = useState(null);

  const [offlimit, setofflimit] = useState(false);
  const [limit, setlimit] = useState(5);
  const [location, setlocation] = useState("");
  const dispatch = useDispatch();
  const funds = useSelector((state) => state.AppReducer.funds);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
 
  const loadingState = useSelector((state) => state.AppReducer.loadingState);

  const handlepagination = () => {
    if (limit >= 19) {
      setofflimit(true);
      setlimit(19);
    } else {
      setofflimit(false);
      setlimit(limit + 2);
    }
  };
  const handleofflimit = () => {
    setlimit(5);
    setofflimit(false);
  };
  useEffect(() => {
    dispatch(getdata(filter, location, limit));
    
    // setloadingstate(true)
    dispatch(changeloadin(true));
  }, [filter, location, limit]);

  const searchInpage = (e) => {
    setsearchinpage(e.target.value);
  };
  useEffect(() => {
    if (!searchinpage) {
      setsearcheddata([]);
    } else {
      let newlistofsuggestions = funds
        ?.filter((item) =>
          item.title?.toLowerCase().indexOf(searchinpage) !== -1 ? true : false
        )
        .map((item) => item);

      setsearcheddata(newlistofsuggestions);
    }
  }, [searchinpage]);

  return (
    <>
      <Container
        height={450}
        maxW="container.2xl"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage="data:image/jpeg;base64,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"
      >
        <Box paddingTop="6%" paddingLeft="10%" width="auto">
          <Heading fontSize={48} color="white" margin={5}>
            Everyday is precious for us
          </Heading>
          <Text fontSize={24} color="white" margin={5}>
          Wear the white coat with dignity and pride—it is an honor and privilege to get to serve the public as a physician.
          </Text>
          <Button margin={5} color="#4C829C" variant="solid">
            Book an Appointment
          </Button>
        </Box>
      </Container>
      <Container maxW="container.xl" display="flex">
        {/* <HStack > */}
        <Filter onChange={(value) => setFilter(value)} />
        <Box width="80%" marginTop={10}>
          {/* <Input variant='outline' placeholder='Search for fundraisers' onChange={searchInpage}/> */}
          <InputGroup>
            <Input
              outline={false}
              outlineColor="#30C9C8"
              placeholder="Book an Appointment"
              onChange={searchInpage}
            />

            <SearchIcon marginTop={3} marginLeft={-10} color="#30C9C8" />
          </InputGroup>

          <HStack marginTop={10}>
            <label htmlFor="cat">Showing fundaraisers for </label>
            <Select
              outline={false}
              outlineColor="#30C9C8"
              id="cat"
              placeholder="All Categories"
              width="30%"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option
                selected={filter == "education" ? true : false}
                value="education"
              >
                Education
              </option>
              <option
                selected={filter == "medical" ? true : false}
                value="medical"
              >
                Medical
              </option>
              <option
                selected={filter == "Women_girls" ? true : false}
                value="Women_girls"
              >
                {" "}
                Women & Girls
              </option>
              <option
                selected={filter == "animals" ? true : false}
                value="animals"
              >
                Animals
              </option>
              <option
                selected={filter == "creative" ? true : false}
                value="creative"
              >
                Creative
              </option>
              <option
                selected={filter == "food_&_hunger" ? true : false}
                value="food_&_hunger"
              >
                Food & Hunger
              </option>
              <option
                selected={filter == "environment" ? true : false}
                value="environment"
              >
                Environment
              </option>
              <option
                selected={filter == "memorial" ? true : false}
                value="memorial"
              >
                Memorial
              </option>
              <option
                selected={filter == "community_development" ? true : false}
                value="community_development"
              >
                Community Development
              </option>
              <option
                selected={filter == "others" ? true : false}
                value="others"
              >
                Others
              </option>
            </Select>

            <label htmlFor="city">from </label>
            <Select
              outline={false}
              outlineColor="#30C9C8"
              id="city"
              placeholder="All Locations"
              width="30%"
              onChange={(e) => setlocation(e.target.value)}
            >
              <option value="mumbai">Mumbai</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="delhi"> Delhi</option>
              <option value="noida">Noida</option>
              <option value="hyderbad">Hyderbad</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
              <option value="jaipur">Jaipur</option>
              <option value="lucknow">Lucknow</option>
              <option value="others">Others</option>
            </Select>
            <Button
              colorScheme="red"
              variant="ghost"
              onClick={() => setFilter("")}
            >
              Reset Filter
            </Button>
          </HStack>
          {loadingState && isLoading == true ? (
            <Box margin="auto">
              <Spinner width={10} height={10} textAlign="center" />
            </Box>
          ) : null}

          {seacheddata?.length > 0 ? (
            <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={10}>
              {seacheddata?.map((el) => {
                return (
                  <GridItem key={el.id}>
                    <BrowserFundingCard {...el} />
                  </GridItem>
                );
              })}
            </Grid>
          ) : funds?.length == 0 ||
            (searchinpage && seacheddata.length == 0) ? (
            <Text>No results found</Text>
          ) : (
            <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={10}>
              {funds?.map((el) => {
                return (
                  <GridItem key={el.id}>
                    <BrowserFundingCard key={el.id} {...el} />
                  </GridItem>
                );
              })}
            </Grid>
          )}

          <Stack bottom={0} padding={50} margin="auto" textAlign="center">
            <Button
              rightIcon={<ArrowRightIcon />}
              _hover={{ background: "white" }}
              background="none"
              variant="ghost"
              color="#30C9C8"
              onClick={handlepagination}
            >
              Load more
            </Button>
          </Stack>

          {offlimit ? (
            <Container>
              <HStack bottom={0} padding={5} textAlign="center">
                <Text>No more fundraiser available</Text>
                <Button
                  leftIcon={<ArrowLeftIcon />}
                  _hover={{ background: "white" }}
                  background="none"
                  variant="ghost"
                  color="#30C9C8"
                  onClick={handleofflimit}
                >
                  Go to start ?
                </Button>
              </HStack>
            </Container>
          ) : null}
          <HStack spacing="auto" margin={5}>
            <Text>
              Have a question? Check out our FAQs page or chat with us on
              Facebook or WhatsApp.
            </Text>

            <HStack>
              <Button
                leftIcon={<AiFillFacebook color="white" />}
                colorScheme="blue"
              >
                Chat with us
              </Button>
              <Button leftIcon={<ImWhatsapp />} colorScheme="green">
                Chat with us
              </Button>
            </HStack>
          </HStack>
        </Box>

        {/* // pagination ends here */}

        {/* </HStack> */}
      </Container>
    </>
  );
};

export default About;