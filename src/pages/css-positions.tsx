import { Box, Container, Grid, Typography } from '@mui/material'
import { green, grey, red } from '@mui/material/colors'

const CssPosition = () => {
  return (
    <Box>
      <Container maxWidth='lg'>
        <Box
          sx={{
            p: 4,
            border: '4px solid green',
            backgroundColor: 'white',
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
          }}>
          <Typography textAlign='center'>
            I am fixed div, I don&apos;t care about your container 😏
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: red[400],
                height: '1500px',
              }}>
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: grey[400],
                  height: '100px',
                  width: '100px',
                }}>
                <Box
                  sx={{
                    position: 'absolute',
                    right: '-100%',
                    bottom: '-100%',
                    backgroundColor: green[400],
                    height: '100px',
                    width: '100px',
                  }}>
                  <Typography textAlign='center'>I am absolute</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'sticky',
                top: '0',
                p: 4,
                backgroundColor: green[400],
              }}>
              <Typography textAlign='center'>I am sticky</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CssPosition
