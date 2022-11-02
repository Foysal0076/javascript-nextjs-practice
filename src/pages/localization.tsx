import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Localization = () => {

  const { t } = useTranslation()

  return (
    <Box>
      <Container>
        <Typography textAlign='center' component='h1' variant='h3'>{t('localization')}</Typography>
      </Container>
    </Box>
  )
}

export default Localization