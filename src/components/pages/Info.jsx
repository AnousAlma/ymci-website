import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import child from './images/child.png';
import child2 from './images/child2.png';
import houthis from './images/houthis.png';
import un from './images/un.png';
import meeting from './images/meeting.png';
import person from './images/person.png';

export default function Info() {
  const navigate = useNavigate();
  return (
    <>
      <Container maxW={'7xl'}>
        <Text
          align={'center'}
          marginTop={'3rem'}
          fontSize={'7xl'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.800', 'gray.800')}
        >
          Learn More About The Crisis
        </Text>
        <Divider 
          marginTop={'1rem'}
        />
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                What's happening in
              </Text>
              <br />
              <Text as={'span'} color={'red.400'}>
                Yemen?
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            This conflict has thrown Yemen into a complex and overwhelming situation since 2014, marking one of the worst humanitarian crises in the world. The situation is one of many factions, but the main opposition is the Houthi rebel group who control much of the north, including the capital Sana'a, while their opponents are the internationally recognized government, however forced out from the capital in 2014. Its efforts have been supported by a coalition of countries led by Saudi Arabia, starting from March 2015.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Image of a starved Yemini child'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  child
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      {/* New Container */}

      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          // py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Image of another starved Yemini child'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  child2
                }
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text color={'gray.500'}>
            It goes well beyond the Arab Spring of 2011, which rocked the region and ultimately ousted Yemen's long-term autocrat, President Ali Abdullah Saleh. His successor, Abdrabbuh Mansur Hadi, has struggled to quell a separatist movement in the south, jihadist attacks, and problems ranging from corruption to unemployment and food security.
            </Text>
          </Stack>
        </Stack>
      </Container>

      {/* New Container */}

      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Group of Houthis in a destroyed landscape'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  houthis
                }
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text color={'gray.500'}>
            The Houthi movement is officially called Ansar Allah. They exploited the weakness of the new president and captured Sana'a in September 2014. However, it would be in March 2015 that the conflict would flare up, when a Saudi-led coalition would launch military operations against the Houthis in a bid to restore the government of Hadi. It is in the given period that the situation starts transforming into a regional proxy war between Saudi Arabia and Iran, who are accused of supporting the Houthis.
            </Text>
          </Stack>
        </Stack>
      </Container>

      {/* New Container (3 Imgs) */}
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text color={'gray.500'}>
            The humanitarian outcome from this conflict has been catastrophic. The United Nations has also spoken of millions of people hovering on the brink of famine, overwhelming malnutrition, a health system that has crumbled, and outbreaks of cholera and other diseases. Scores of civilians, besides killing and wounding tens of thousands of civilians, have also forced millions to flee due to the fighting, airstrikes, and blockades. Infrastructures within the country have been left in a dilapidated state, and organizations have been hampered from offering their much-needed support.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'UN logo'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  un
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text color={'gray.500'}>
              The two sides had been trying to reach a peaceful solution for a long time; even though efforts were made by both sides, the outcome was never sustainable. The UN and other international organizations called for an involvement of regional powers and the complexities of Yemen's internal divisions make the conflict hard to settle.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'UN meeting in a big hall'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  meeting
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text color={'gray.500'}>
            The situation, as of my last update in April 2023, is that the war rages on; people continue to suffer, with a comprehensive and inclusive peace process urgently needed. One may refer to the most recent sources of the news report or reports from the international bodies.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Distraught Yemini person sitting on a ruble'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  person
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      {/* New Container (Donate) */}
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                How can we help?
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            In an effort to provide meaningful assistance and make a tangible difference in the lives of individuals in Yemen, we are calling upon your generosity and compassion. The situation in Yemen requires urgent support, and every contribution, no matter the size, can have a significant impact on the ground. We welcome donations ranging from $1 to $575, acknowledging that the value of your gift is not measured in the amount but in the spirit of solidarity and kindness it represents.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'150px'}
              rounded={'xl'}
              boxShadow={'xl'}
              width={'70%'}
              overflow={'hidden'}>
              <Button
                width={'100%'}
                height={'100%'}
                bg={'gray.900'}
                color={'white'}
                _hover={{
                  bg: 'gray.700',
                }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)',
                }}
                _focus={{
                  boxShadow: 'outline',
                }}
                fontSize={'4.2rem'}
                onClick={() => navigate('/donate')}
              >
                Donate
              </Button>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}