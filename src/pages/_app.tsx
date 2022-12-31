import Layout from '@components/_Common/Layout/Layout'
import i18next from 'i18next'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import HttpApi from 'i18next-http-backend'
import { initReactI18next, useTranslation } from 'react-i18next'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { useEffect } from 'react'
import { languages } from '@constants/languages'
import { useRouter } from 'next/router'
import LanguageDetector from 'i18next-browser-languagedetector'
import theme from 'shared/theme'

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'fr'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translations.json',
    },
  })

const loadingMarkup = (
  <Box>
    <Typography textAlign='center'>Loading...</Typography>
  </Box>
)

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any

  //#region Language Change
  // const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguageCode = useRouter().locale || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  console.log(currentLanguage)
  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage?.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  //#endregion

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <AnyComponent {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
