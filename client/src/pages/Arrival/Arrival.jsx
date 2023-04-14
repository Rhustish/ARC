import {useEffect} from "react";
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
import './Arrival.css'
import arrbg from '../../assets/arrbg.jpg'


const Arrival = () => {
  const {isLoading, response, submit} = useSubmit();
  const passwordreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const formik = useFormik({
    initialValues: {
      logemail:"",
      firstName:"",
      logpassword:"",
      signpassword:'',
      signemail:''

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(50, 'Must be at most 50 characters long')
      .required('Required'),

      logemail: Yup.string()
      .email("Please enter a valid email address.")
      .required('Required'),

      logpassword: Yup.string()
       
      .required("Required"),

      signpassword: Yup.string()
      .matches(passwordreg, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number') 
      .required("Required"),

      signemail: Yup.string()
      .email("Please enter a valid email address.")
      .required('Required')
    }),
    onSubmit: (values) => {
      submit(values);
    },
    
  });

  const [show, setShow] = useState(false)
  const handleClickpass = () => setShow(!show)
  const [signup, setsignup] = useState(true)
  const handlesignup = () => setsignup(!signup)
  const [enter, setenter] = useState(true)
  const handelClickfr = () => setenter(!enter)


  
  return (
    <div className="auth">
      {enter && <div className="front-page">
        <div className="front-page-content">
          <button onClick={handelClickfr} className="enter-button">Enter</button>
        </div>
      </div>}
      <div className="auth-box">
      {signup?<div className="login-auth">
      <VStack color='#9452f7'  alignItems="center">
            <Heading as="h1" id="auth-section">
              Log In
            </Heading>
            <Box p={5} rounded="md" w="100%">
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!formik.errors.logemail & formik.touched.logemail}>
                    <FormLabel htmlFor="logemail">Email Address</FormLabel>
                    <Input
                      borderColor='#9452f7'
                      id="logemail"
                      name="logemail"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.logemail}
                    />
                    <FormErrorMessage>{formik.errors.logemail}</FormErrorMessage>
                  </FormControl>
                  <FormControl >
                    <FormLabel htmlFor="logpassword">Password</FormLabel>
                    <InputGroup size='md'>
                      <Input
                        id='logpassword'
                        name='logpassword'
                        borderColor='#9452f7'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.logpassword}
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClickpass}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full" isDisabled={isLoading}>
                  {signup?isLoading? "Logging In" : "Log In":isLoading? "Signing up" : "Sign Up"}
                  </Button>
                  <HStack className="switcher">
                    <div className="switchtext">
                      <Heading size='md'>Don't have an account?</Heading>
                    </div>
                    <Button onClick={handlesignup} className="switch-btn" colorScheme="purple" variant='outline'>Sign Up</Button>
                  </HStack>
                </VStack>
              </form>
            </Box>
          </VStack>
      </div> : 
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
                    {signup?isLoading? "Logging In" : "Log In":isLoading? "Signing up" : "Sign Up"}
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
        </div>}
        </div>
    </div>
  );
};

export default Arrival;
