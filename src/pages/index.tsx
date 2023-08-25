import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>Javascript Practice</title>
      </Head>

      <Typography variant='h1' textAlign='center'>
        Index
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
            {t('create-word-file')}
          </Button>
        </Link>
      </Box>

      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/drag-and-reorder-list' passHref>
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
            {t('drag-and-reorder-list')}
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/infinite-scroll' passHref>
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
            {t('infinite-scroll')}
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/chat-layout' passHref>
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
            {t('chat-layout')}
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/context-menu' passHref>
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
            {t('context-menu')}
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/context-menu-with-hook' passHref>
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
            {t('context-menu-with-hook')}
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/localization' passHref>
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
            {t('localization')}
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/doc-playground' passHref>
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
            {t('doc-playground')}
          </Button>
        </Link>
      </Box>
      <Box display='flex' justifyContent='center' my={4}>
        <Link href='/hooks' passHref>
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
            Hooks
          </Button>
        </Link>
      </Box>
    </div>
  )
}

export default Home
