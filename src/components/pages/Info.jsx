import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  createIcon,
  IconProps,
  useColorModeValue,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

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
          color={useColorModeValue('gray.800', 'white')}
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
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/images/child.png'
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
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/images/child2.png'
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
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/images/houthis.png'
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
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/images/un.png'
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
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/images/meeting.png'
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
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/images/person.png'
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

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});