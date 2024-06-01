import { Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Users/User.action";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

      const {auth , token, loading , error} = useSelector((state) =>state.userReducer);
        console.log(auth, token);
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const dispatch = useDispatch()
        const nav = useNavigate()
        localStorage.setItem("userEmail", email);
        useEffect(() => {
            if (auth) {
                nav("/");
            }
        }, [auth, nav]);

       const handleLogin = ()=> {
               dispatch(getUser(email,password))
       }

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
                            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} type="email" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input value={password} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} type="password" />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: "column", sm: "row" }}
                                        align={"start"}
                                        justify={"space-between"}
                                    >
                                        <Checkbox>Remember me</Checkbox>
                                        <Link color={"blue.400"}>Forgot password?</Link>
                                    </Stack>
                                    <Button
                                        onClick={handleLogin}
                                        bg={"blue.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                    >
                                      Sign in
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

export default LoginPage;
