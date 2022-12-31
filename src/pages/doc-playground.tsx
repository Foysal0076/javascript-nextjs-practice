import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

const DocPlayground = () => {
  return (
    <Container>
      <Box py={5}>
        <Typography
          component='h1'
          variant='h2'
          textAlign='center'
          color='primary'>
          Download Word File
        </Typography>
        <Box display='flex' justifyContent='center' my={4}>
          <Link href='/create-word-file' passHref>
            <Button
              variant='outlined'
              color='success'
              sx={{
                width: '300px',
                textTransform: 'capitalize',
                color: 'GrayText',
                fontSize: '20px',
                marginBottom: '8px',
              }}>
              Template 1
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default DocPlayground
