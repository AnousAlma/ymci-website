import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Box,
  Button,
} from '@chakra-ui/react';
import deliveryKit from './images/deliverykits.png';
import blankets from './images/blanket.png';
import surgeon from './images/surgeon.png';
import medpack from './images/medpack.png';

const Feature = ({ text, iconBg, image }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        <Image
          src={image}
          alt={'Feature Image'}
          w={6}
          h={6}
        ></Image>
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Donate() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Donation Options</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            What the following donations options can provide:
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.100')}
              />
            }>
            <Feature
              iconBg={useColorModeValue('yellow.100', 'yellow.100')}
              text={'$50: 2 safe delivery kits'}
              image={deliveryKit}
            />
            <Feature
              iconBg={useColorModeValue('green.100', 'green.100')}
              text={'$100: 10 thermal blankets'}
              image={blankets}
            />
            <Feature
              iconBg={useColorModeValue('purple.100', 'purple.100')}
              text={'$175: Send a surgeon to work for a day'}
              image={surgeon}
            />
            <Feature
              iconBg={useColorModeValue('yellow.100', 'yellow.100')}
              text={'$525: Send two doctors to work for a day with medpacks'}
              image={medpack}
            />
          </Stack>
        </Stack>
        <Flex direction="column" justify='center'>
        <Box
              position={'relative'}
              height={'150px'}
              rounded={'xl'}
              boxShadow={'xl'}
              width={'70%'}
              overflow={'hidden'}>
              <a href='https://action.msf.ca/site/Donation2?df_id=5220&mfc_pref=T&5220.donation=form1&s_locale=en_CA&s_src=24-SEO&s_subsrc=DonateNow&_gl=1*e1ywhl*_gcl_au*OTUwNDM2NDc3LjE3MTY4MjExNzE.'
                target='_blank' rel='noreferrer'
              >
                <Button
                  width={'100%'}
                  height={'100%'}
                  bg={'red'}
                  color={'white'}
                  _hover={{
                    bg: 'red.500',
                  }}
                  _active={{
                    bg: 'red.700',
                    transform: 'scale(0.95)',
                  }}
                  _focus={{
                    boxShadow: 'outline',
                  }}
                  fontSize={'1.2rem'}
                >
                  Visit MSF to donate
                </Button>
              </a>
            </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}