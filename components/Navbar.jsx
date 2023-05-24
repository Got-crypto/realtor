import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import Realtor from '../assets/images/logo.svg'
import Image from 'next/image'

export default function Navbar() {
    return (
        <Flex
            p="2"
            borderBottom={"1px"}
            borderColor={"gray.100"}
        >
            <Box fontSize={"3xl"} color={"blue.400"} fontWeight={"bold"}>
                <Link href="/" paddingLeft="2">
                    <Image 
                        src={Realtor}
                        height={50}
                        width={110}
                        alt='logo'
                        style={{
                            transform: "translate( 0, 50% )"
                        }}
                    />
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant={"outline"} color={"red.400"} />
                    <MenuList>
                        <Link href='/' passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href='/search' passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <MenuItem icon={<FiKey />}>Rent</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}