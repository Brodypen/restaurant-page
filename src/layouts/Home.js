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
          Telling a gamer to 'touch grass' is not an insult, rather it is advice{' '}
        </Heading>
        <Text margin="20px 10vw" fontSize="2xl">
          "Touch grass" is not an insult towards gamers, rather it is advice for
          them. When participating in intense periods of gaming, the human hand
          has a tendency to get sweaty. The sweat causes the hand to become
          slick, and it becomes more difficult to retain a grip on the gamers
          gaming mouse, thus making it more difficult to perform well in intense
          gaming moments. By touching grass with the gamers hand, the grass will
          impart a layer of particulate onto the gamers hand, the particulate
          can be made of a variety of dusts, dirts and other natural matter.
          This particulate will then act in a similar form to climbers chalk,
          absorbing the sweat and drying out the gamers hand. With dry hands,
          the gamer can now perform to their maximum when gaming. This is why
          when an enemy or teammate tells you to touch grass, they are simply
          trying to assist you in performing better.
        </Text>
      </Flex>
    </Flex>
  );
}

export default Home