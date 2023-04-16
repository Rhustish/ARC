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
import './Arrival.css'
import {useAlertContext} from "../../context/alertContext";


const Arrival = () => {

  const navigate=useNavigate();

  const [show, setShow] = useState(false)
  const handleClickpass = () => setShow(!show)
  const handlesignup = () => {
    navigate('/Signup')
  }
  const [enter, setenter] = useState(true)
  const handleClickfr = () => setenter(!enter)



  const {isLoading, response, submit} = useSubmit();
  const passwordreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const formik = useFormik({
    initialValues: {
      logemail:"",
      logpassword:"",
      isSignUp:false

    },
    validationSchema: Yup.object({

      logemail: Yup.string()
      .email("Please enter a valid email address.")
      .required('Required'),

      logpassword: Yup.string()       
      .required("Required"),

      isSignUp: Yup.bool()
    }),
    onSubmit: (values) => {
      console.log(values)
      submit(values);
    },
    
  });





  
  return (
    <div className="auth">
      {enter && <div className="front-page">
        <div className="front-page-content">
          <button onClick={handleClickfr} className="enter-button">Enter</button>
        </div>
      </div>}
      <div className="auth-box">
        <div className="login-auth">
      <   VStack color='#9452f7'  alignItems="center">
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
                  {isLoading? "Logging In" : "Log In"}
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
      </div> 
      
      </div>
    </div>
  );
};

export default Arrival;
