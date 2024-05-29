import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import logo from './images/logo_no_text.png';

export default function Home() {
  return (
    <Container maxW={'7xl'}>
      <Text
        align={'center'}
        marginTop={'3rem'}
        fontSize={'7xl'}
        fontWeight={'bold'}
        color={useColorModeValue('gray.800', 'gray.800')}
      >
        About Us
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
              Welcome to the	 
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              Yemen Malnutrition Crisis Initiative
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          At YMCI, we are a dedicated non-profit organization committed to combating the severe malnutrition crisis in Yemen. Established in response to the escalating humanitarian emergency, our mission is to deliver life-saving nutrition support and healthcare services to the most vulnerable populations in Yemen.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}>
          <Box
            position={'relative'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'75%'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                logo
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}