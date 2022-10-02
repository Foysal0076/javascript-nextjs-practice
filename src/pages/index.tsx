import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Javascript Practice</title>
      </Head>

      <Typography variant='h1' textAlign='center'>Index</Typography>

      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/create-word-file' passHref>
          <Button variant='outlined' color='success' sx={{ width: '300px', textTransform: 'capitalize', color: 'GrayText', fontSize: '20px', marginBottom: '8px' }}>
            Create Word File
          </Button>
        </Link>
      </Box>

      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/drag-and-reorder-list' passHref>
          <Button variant='outlined' color='success' sx={{ width: '300px', textTransform: 'capitalize', color: 'GrayText', fontSize: '20px', marginBottom: '8px' }}>
            Drag and Reorder List
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/infinite-scroll' passHref>
          <Button variant='outlined' color='success' sx={{ width: '300px', textTransform: 'capitalize', color: 'GrayText', fontSize: '20px', marginBottom: '8px' }}>
            Infinite Scroll
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/chat-layout' passHref>
          <Button variant='outlined' color='success' sx={{ width: '300px', textTransform: 'capitalize', color: 'GrayText', fontSize: '20px', marginBottom: '8px' }}>
            Chat Layout
          </Button>
        </Link>
      </Box>
    </div>
  )
}

export default Home
