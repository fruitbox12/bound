import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Center,
  Wrap,
  Flex,
  Stack,
  Button,
  HStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { DropImage } from './DropImage';
import { BiLayerPlus } from 'react-icons/bi';
import ModalRequirementMint from './ModalRequirementMint';
import ModalDescriptionMint from './ModalDescriptionMint';
import ModalPerkMint from './ModalPerkMint';

export default function RightSideMint({
  details,
  setDetails,
  perks,
  setPerks,
}: any) {
  return (
    <Box maxH={590} width='auto'>
      {/* <FormControl id='file'>
        <FormLabel fontWeight='semibold'>Upload Project Images</FormLabel>
        <Text>Further describe the Campaign</Text>
        <DropImage />
      </FormControl> */}
      <FormLabel fontWeight='semibold'>Give a description</FormLabel>
      <Text>Further describe the Project</Text>

      <Stack mt={5} spacing={3}>
        <ModalRequirementMint />
        <ModalDescriptionMint value={details} setter={setDetails} />
        <ModalPerkMint value={perks} setter={setPerks} />
      </Stack>

      <Button
        backgroundColor='#7727f3'
        color='white'
        width={'100%'}
        size='md'
        borderRadius='lg'
        mt={15}
        fontSize='xl'
        variant='outline'
        disabled={true}
      >
        <Box mx={1}>
          <BiLayerPlus size={25} />
        </Box>
        Add an SBT
      </Button>
    </Box>
  );
}

// to do in future:
// 1. Create RightSideMintDescription.tsx
// 2. Copy paste code into the file
// 3. Make it so if you click on the plus sign (Button), it will add a new RightSideMintDescription.tsx to the VStack (Box)
