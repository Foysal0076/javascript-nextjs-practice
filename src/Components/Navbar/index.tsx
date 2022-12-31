import LocalizationMenu from "@components/Navbar/LanguageChangeMenu"
import { Box, Container } from "@mui/material"
import Link from "next/link"
import HomeIcon from '@mui/icons-material/Home'

const Navbar = () => {
  return (
    <Box>
      <Container>
        <Box display='flex' alignItems='center'>
          <Link href='/'>
            <a>
              <HomeIcon color="primary" />
            </a>
          </Link>
          <Box
            display='flex'
            flexGrow={1}
            justifyContent='flex-end'
            alignItems='center'
          >
            <LocalizationMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar