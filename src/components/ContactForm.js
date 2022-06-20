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
        <FormHelperText>Free Donuts with Signup!</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="SSN">Do you like donuts?</FormLabel>
        <Stack spacing={5} direction="row">
          <Checkbox colorScheme="green">Yes</Checkbox>
          <Checkbox colorScheme="red">Yes (but red)</Checkbox>
        </Stack>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="FavNum">How much is in a Dozen?</FormLabel>
        <Stack spacing={5} direction="row">
          <PinInput>
            <PinInputField />
            <PinInputField />
          </PinInput>
        </Stack>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="FavNum">
          Pick your favorite Donut catchphrase!
        </FormLabel>
        <Select>
            <option value="option1">Dearly Delicious Donuts</option>
            <option value="option2">Donut Donut...</option>
            <option value="option3">Good Donut catchphrase...</option>
        </Select>
      </FormControl>
      <Button colorScheme="purple" type='submit'>Submit</Button>
      <Text fontSize='sm'>(Pretend the Form is sent to a website)</Text>
     <Text fontSize='2xl'>Thank you for looking at my website!</Text>
    </Flex>
  );
}

export default ContactForm