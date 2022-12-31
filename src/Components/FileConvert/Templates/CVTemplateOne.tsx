import { Box, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const CVTemplateOne = () => {
  return (
    <Box
      id='divToPrint'
      sx={{
        width: '1000px',
        height: '1414px',
        'p, h1, h2, h3, h4, h5, h6': {
          fontFamily: 'Open Sans',
        },
      }}>
      <Grid container sx={{ height: '100%', width: '100%' }}>
        <Grid item xs={4}>
          {/* Left Side */}
          <Box
            display='flex'
            height='100%'
            flexDirection='column'
            gap='2'
            padding={2}
            bgcolor='#496267'
            sx={{
              p: {
                color: 'white',
                fontFamily: 'Poppins',
              },
              h2: {
                fontSize: '20px !important',
                fontWeight: 'bold !important',
              },
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                mb: 2,
                img: {
                  borderRadius: '50%',
                },
              }}>
              <Image
                src={`https://source.unsplash.com/random/?portrait`}
                height={200}
                width={200}
                objectFit='cover'
                alt=''
              />
            </Box>
            <Box width='100%'>
              <Divider
                sx={{ borderColor: 'white', borderBottomWidth: '2px' }}
              />
            </Box>
            <Typography
              component='h2'
              variant='h5'
              color='white'
              textTransform='uppercase'
              mb={1}>
              Contact
            </Typography>
            <Box display='flex' gap={2} mb={0.5}>
              <Image
                src='/assets/images/icons/icon-location-pin.png'
                height={20}
                width={20}
                objectFit='scale-down'
              />
              <Typography component='p' variant='body1' color='white'>
                46 Roman Rd, Leeds LS2 3ZR
              </Typography>
            </Box>
            <Box display='flex' gap={2} mb={0.5}>
              <Image
                src='/assets/images/icons/icon-smartphone.png'
                height={20}
                width={20}
                objectFit='scale-down'
              />
              <Typography component='p' variant='body1' color='white'>
                07912345 678
              </Typography>
            </Box>
            <Box display='flex' gap={2}>
              <Image
                src='/assets/images/icons/icon-paper-plane.png'
                height={20}
                width={20}
                objectFit='scale-down'
              />
              <Typography component='p' variant='body1' color='white'>
                dom.webster@example.co.uk
              </Typography>
            </Box>
            <Box width='100%' mt={3}>
              <Divider
                sx={{ borderColor: 'white', borderBottomWidth: '2px' }}
              />
            </Box>
            <Typography
              component='h2'
              variant='h5'
              color='white'
              textTransform='uppercase'>
              SKILLS
            </Typography>

            <Box
              sx={{
                ul: {
                  m: 0,
                  pl: 2.5,
                  'li p': {
                    my: 1,
                  },
                },
              }}>
              <ul>
                <li>
                  <p>Strong Verbal Communication</p>
                </li>
                <li>
                  <p>Attention to Details</p>
                </li>
                <li>
                  <p>Community Activities</p>
                </li>
                <li>
                  <p>Medication Administration</p>
                </li>
                <li>
                  <p>Client safety and First Aid</p>
                </li>
                <li>
                  <p>Compassionate client care</p>
                </li>
              </ul>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={8}>
          {/* Right Side */}
          <Box
            display='flex'
            flexDirection='column'
            gap='2'
            px={2}
            sx={{
              p: {
                color: '#404040',
              },
              h2: {
                color: '#111',
                fontWeight: 'bold !important',
                fontSize: '20px !important',
              },
              h3: {
                color: '#404040',
                fontWeight: 'bold !important',
              },
            }}>
            <Typography
              component='h1'
              sx={{
                fontSize: '56px',
                color: '#496267',
                fontWeight: 'bold',
              }}>
              John Doe
            </Typography>
            <Box width='100%' mb={4}>
              <Divider
                sx={{ borderColor: 'black', borderBottomWidth: '5px' }}
              />
            </Box>
            <Typography component='h2' textTransform='uppercase' mb={1}>
              {' '}
              Professional Summary
            </Typography>
            <Typography component='p' color='#404040' mb={3}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              esse explicabo numquam reiciendis tempore cumque in sit,
              voluptates illo sunt dolorum pariatur. Suscipit, reiciendis
              debitis enim doloribus magni laboriosam sed fugiat ratione
              reprehenderit harum accusamus excepturi, animi sequi quo dolor a
              totam soluta quis cupiditate. Corporis delectus rerum cum esse.
            </Typography>

            <Box width='100%'>
              <Divider
                sx={{ borderColor: 'black', borderBottomWidth: '2px' }}
              />
            </Box>
            <Typography component='h2' textTransform='uppercase' mb={1}>
              {' '}
              Work History
            </Typography>
            <Box
              sx={{
                ul: {
                  pl: 2.5,
                  'li p': {
                    my: 1,
                  },
                },
              }}>
              <Box display='flex' justifyContent='space-between'>
                <Typography component='h3' fontWeight={600}>
                  Senior care assistant
                </Typography>
                <Typography component='p'>01/14 - Current</Typography>
              </Box>
              <Typography component='h3' fontWeight={600}>
                Private Care Home{' '}
                <Typography component='span' variant='body1'>
                  {' '}
                  Edinburgh
                </Typography>{' '}
              </Typography>
              <ul>
                <li>
                  <p>
                    Met with patients and families to discuss care and plan of
                    action future
                  </p>
                </li>
                <li>
                  <p>
                    Implemented new team onboarding programme, reducing training
                    time from four weeks to two
                  </p>
                </li>
                <li>
                  <p>
                    Administrated all necessary medications as directed by care
                    plan
                  </p>
                </li>
              </ul>
            </Box>
            <Box
              sx={{
                ul: {
                  pl: 2.5,
                  'li p': {
                    my: 1,
                  },
                },
              }}>
              <Box display='flex' justifyContent='space-between'>
                <Typography component='h3' fontWeight={600}>
                  Senior care assistant
                </Typography>
                <Typography component='p'>09/10 - 09/14</Typography>
              </Box>
              <Typography component='h3' fontWeight={600}>
                Ideal Care Homes{' '}
                <Typography component='span' variant='body1'>
                  {' '}
                  Edinburgh
                </Typography>{' '}
              </Typography>
              <ul>
                <li>
                  <p>
                    Charted daily information such as mood changes, mobility
                    activities, eating percentage and daily inputs and outputs
                  </p>
                </li>
                <li>
                  <p>
                    Developed strong and trusting rapport with each client to
                    facilitate vest care possible
                  </p>
                </li>
                <li>
                  <p>
                    Worked to improve patient outlook and daily living through
                    compassionate care
                  </p>
                </li>
              </ul>
            </Box>
            <Box width='100%'>
              <Divider
                sx={{ borderColor: 'black', borderBottomWidth: '2px' }}
              />
            </Box>
            <Typography component='h2' textTransform='uppercase'>
              {' '}
              Education
            </Typography>
            <Typography component='h3' fontWeight={600}>
              NVQ Level 3{' '}
              <Typography component='span' variant='body1'>
                {' '}
                : Health and Social Care, 2013
              </Typography>{' '}
            </Typography>
            <Typography component='h3' fontWeight={600}>
              Edinburgh College
              <Typography component='span' variant='body1'>
                {' '}
                Edinburgh
              </Typography>{' '}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CVTemplateOne
