import Navbar from '@components/Navbar'
import { Box } from '@mui/material'
import React from 'react'

interface Props {
  children: React.ReactNode
}

// This Layout will always keep the footer at the bottom of the page regardless of the content
const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Box sx={{
        position: 'relative',
        minHeight: '100vh'
      }}>
        <Box sx={{
          position: 'relative',
          paddingBottom: '100px' //This is the height of the footer
        }}>
          {/* Navbar */}
          <Navbar />
          {/* Main Page content */}
          {children}
        </Box>
        <Box sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '100px' //This is the height of the footer
        }}>

        </Box>
      </Box>
    </Box>
  )
}

export default Layout