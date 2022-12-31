import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { UNSPLASH_ACCESS_KEY } from '../constants/constants'
import Image from 'next/image'
import FavoriteIcon from '@mui/icons-material/Favorite'

const InfiniteScroll = () => {
  const [photos, setPhotos] = useState<any[]>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [perPageItems, setPerPageItems] = useState(8)
  const pageEnd = useRef<HTMLElement>(null)
  const fetchPhotos = async (page: number, perPage: number) => {
    const res = fetch(
      `https://api.unsplash.com/photos/?client_id=${UNSPLASH_ACCESS_KEY}&page=${page}&per_page=${perPage}`
    )
    const data = await (await res).json()
    setPhotos((photos) => [...photos, ...data])
    setIsLoading(true)
  }

  useEffect(() => {
    fetchPhotos(pageNumber, perPageItems)
  }, [perPageItems, pageNumber])

  useEffect(() => {
    if (isLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchMore()
          }
        },
        { threshold: 1 }
      )
      observer.observe(pageEnd.current as HTMLElement)
    }
  }, [isLoading])

  const fetchMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1)
  }

  return (
    <Container sx={{ p: 4 }}>
      <Typography variant='h4' textAlign='center'>
        Infinite Scroll
      </Typography>
      <Box py={2}>
        {photos.map((photo, index) => (
          <Box
            key={index}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            my={2}
            sx={{
              border: '2px solid grey',
            }}>
            <Box display='flex' alignItems='center'>
              <Image
                src={photo.urls.small}
                alt={photo.alt_description}
                width={100}
                height={100}
                objectFit='cover'
              />
              <Typography variant='h6' marginLeft={10}>
                {photo.user.first_name} {photo.user.last_name}
              </Typography>
            </Box>
            <Box display='flex' alignItems='center' p={4}>
              <FavoriteIcon sx={{ color: 'red' }} fontSize='large' />
              <Typography component='span' fontSize={26}>
                {photo.user.total_likes}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display='flex' justifyContent='center'>
        {isLoading && <CircularProgress />}
      </Box>
      <Box ref={pageEnd} display='flex' justifyContent='center'>
        <Button onClick={fetchMore}>Load More</Button>
      </Box>
    </Container>
  )
}

export default InfiniteScroll
