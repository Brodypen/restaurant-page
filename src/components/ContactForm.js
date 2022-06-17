import { FormControl, FormHelperText, FormLabel, Input, Flex, Stack, Checkbox, PinInput, PinInputField, Select, Text, Button } from '@chakra-ui/react'
import React from 'react'

const ContactForm = () => {
  return (
    <Flex direction="column" gap={4}>
      <Flex gap={3}>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">First Name</FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last-name">Last Name</FormLabel>
          <Input id="last-name" placeholder="Last name" />
        </FormControl>
      </Flex>

      <FormControl>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>Sign up for OnlyDonuts!</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="SSN">Social Sercuity Number</FormLabel>
        <Stack spacing={5} direction="row">
          <Checkbox colorScheme="red">No</Checkbox>
          <Checkbox colorScheme="green">No (but green)</Checkbox>
          <Checkbox colorScheme="yellow">Bob</Checkbox>
        </Stack>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="FavNum">Favorite 2-Digit Number</FormLabel>
        <Stack spacing={5} direction="row">
          <PinInput>
            <PinInputField />
            <PinInputField />
          </PinInput>
        </Stack>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="FavNum">
          Pick your favorite Hot-dog catchphrase!
        </FormLabel>
        <Select>
            <option value="option1">Wild Whopping Weiner</option>
            <option value="option2">Giant Glizzer Globber</option>
            <option value="option3">Sly Succulent Sausage</option>
        </Select>
      </FormControl>
      <Button colorScheme="purple" type='submit'>Submit</Button>
      <Text fontSize='sm'>(Pretend I put effort into the button)</Text>
     <Text fontSize='2xl'>Thank you for looking at my website!</Text>
    </Flex>
  );
}

export default ContactForm