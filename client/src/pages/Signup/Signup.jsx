import React from 'react'
import { useFormik} from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  HStack
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../hooks/useSubmit";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './Signup.css'
import {useAlertContext} from "../../context/alertContext";


const Signup = () => {

  const navigate=useNavigate();

  const [show, setShow] = useState(false)
  const handleClickpass = () => setShow(!show)
  const handlesignup = () => {
    navigate('/')
  }

  const {onOpen} = useAlertContext();
  
  const {isLoading, response, submit} = useSubmit();
  const passwordreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const formik = useFormik({
    initialValues: {
      firstName:"",
      signpassword:'',
      signemail:'',
      isSignUp:false

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(50, 'Must be at most 50 characters long')
      .required('Required'),

      signpassword: Yup.string()
      .matches(passwordreg, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number') 
      .required("Required"),

      signemail: Yup.string()
      .email("Please enter a valid email address.")
      .required('Required'),

      isSignUp: Yup.bool()
    }),
    onSubmit: (values) => {
      console.log(values)
      submit(values);
      onOpen(response.type, response.message);
    },
    
  });

  return (
    <div className="auth">
    <div className="auth-box">
      <div className="signup-auth">
        <VStack alignItems="center" color='#9452f7'>
            <Heading as="h1" id="auth-section">
              Sign Up
            </Heading>
            <Box p={6} rounded="md" w="100%">
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!formik.errors.firstName & formik.touched.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      borderColor='#9452f7'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.signemail & formik.touched.signemail}>
                    <FormLabel htmlFor="signemail">Email Address</FormLabel>
                    <Input
                      id="signemail"
                      name="signemail"
                      type="signemail"
                      borderColor='#9452f7'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.signemail}
                    />
                    <FormErrorMessage>{formik.errors.signemail}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.signpassword & formik.touched.signpassword}>
                    <FormLabel htmlFor="signpassword">Password</FormLabel>
                    <InputGroup size='md'>
                      <Input
                        id='signpassword'
                        name='signpassword'
                        pr='4.5rem'
                        borderColor='#9452f7'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.signpassword}
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClickpass}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{formik.errors.signpassword}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full" isDisabled={isLoading}>
                    {isLoading? "Signing up" : "Sign Up"}
                  </Button>
                  <HStack className="switcher">
                    <div className="switchtext">
                      <Heading size='md'>Already have an account?</Heading>
                    </div>
                    <Button onClick={handlesignup} className="switch-btn" colorScheme="purple" variant='outline'>Login</Button>
                  </HStack>
                </VStack>
              </form>
            </Box>
          </VStack>
        </div>
      </div>
    </div>
  )
}

export default Signup
