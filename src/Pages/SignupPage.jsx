import { Image, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constants/config";

const SignupPage = () => {
  const nav = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");


  const handleSignUp = async() => {
    // dispatch(getUser(name,email, password));
    let data = await axios.post(BASE_URL+"/user/register",{
          name, email , password, location
    })

    let {message , status} = data.data
    if(status==1)
    {
        alert(message)
        nav("/login")

    }else{
        alert(message);
    }
  };

  // if (loading) return <h1 style={{ marginTop: "80px" }}>loading...</h1>
  // if (error) return <h1 style={{ marginTop: "80px" }}>Error</h1>
  return (
    <Flex w={"100%"}>
      <Image
        width={"50%"}
        src={
          "https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1713804410~exp=1713805010~hmac=c574ebc85eebf51e60f6b36f7d1c8abe2b0cc4c36d320c194c57ece7f5be633b"
        }
      ></Image>
      <VStack w={"50%"}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign Up to </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link color={"blue.400"}>features</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                  />
                </FormControl>
                <FormControl id="location">
                  <FormLabel>Location</FormLabel>
                  <Input
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    type="location"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    {/* <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link> */}
                  </Stack>
                  <Button
                    onClick={handleSignUp}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default SignupPage;
