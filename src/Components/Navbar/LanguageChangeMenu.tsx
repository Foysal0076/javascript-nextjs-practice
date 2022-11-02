import React from 'react'
import { LanguageTwoTone } from '@mui/icons-material'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { languages } from '@constants/languages'
import i18next from 'i18next'

const LocalizationMenu = () => {

  const router = useRouter()

  const changeLanguage = (locale: string) => {
    i18next.changeLanguage(locale)
    router.push(router.pathname, router.asPath, { locale })
  }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const currentLanguage = languages.find((l) => l.code === router.locale) || languages[0]

  const renderMenu = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages?.length > 0 && languages.map((language) => (
          <MenuItem disabled={false} key={language.code} onClick={() => changeLanguage(language.code)}>
            {language.name}
          </MenuItem>
        ))}
      </Menu>
    )
  }

  return (
    <Box display='flex' alignItems='center' p={1}>
      <IconButton
        onClick={handleClick}
        sx={{ minWidth: 0, p: 0 }}
      >
        <LanguageTwoTone />
      </IconButton>
      <Typography>{currentLanguage.name}</Typography>
      {renderMenu()}
    </Box>
  )
}

export default LocalizationMenu