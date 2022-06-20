import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import HomeSwiper from '../components/HomeSwiper'

const Home = () => {
  return (
    <Flex direction="column" gap={10}>
      <HomeSwiper />
      <Flex direction="column" justifyContent="center" align="center">
        <Heading margin="0 50px">
          {' '}
          Donuts! Donuts! Donuts!{' '}
        </Heading>
        <Text margin="20px 10vw" fontSize="2xl" textAlign='center'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eligendi, voluptatum illum iste quam nisi perspiciatis quidem, similique officia, iusto repellendus eaque esse. Repellat temporibus cum sit repudiandae officiis, reprehenderit at! Non minus tempore natus veniam eligendi libero quas animi sit earum rerum nemo delectus quod exercitationem, a architecto sequi vitae provident illum esse dolore sed autem vel blanditiis soluta! Officiis dolor culpa esse laborum odio animi ullam expedita tenetur adipisci distinctio vel quaerat, fuga harum rerum porro molestias voluptatum omnis obcaecati laudantium, voluptate et asperiores excepturi alias accusantium! Quasi, dolore. Esse eligendi, perspiciatis earum natus aspernatur alias enim mollitia quo! Laborum ipsa corrupti magnam, facilis cupiditate esse recusandae odio unde distinctio culpa aut nobis natus dicta commodi doloremque alias.
        </Text>
      </Flex>
    </Flex>
  );
}

export default Home