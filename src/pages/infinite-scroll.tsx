import { Box, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { UNSPLASH_ACCESS_KEY } from "../constants/constants"
import Image from 'next/image'
import FavoriteIcon from '@mui/icons-material/Favorite'

const InfiniteScroll = () => {
    const [photos, setPhotos] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [perPageItems, setPerPageItems] = useState(5)

    const fetchPhotos = async (page, perPage) => {
        const res = fetch(`https://api.unsplash.com/photos/?client_id=${ UNSPLASH_ACCESS_KEY }&page=${ page }&per_page=${ perPage }`)
        const data = await (await res).json()
        setPhotos([...photos, ...data])
    }

    useEffect(() => {
        fetchPhotos(pageNumber, perPageItems)
    }, [perPageItems, pageNumber])

    return (
        <Container>
            <Typography variant="h4" textAlign='center'>Infinite Scroll</Typography>

            <Box py={2}>
                {photos.map((photo, index) => (
                    <Box key={index} display='flex' alignItems='center' justifyContent='space-between' my={2} sx={{
                        border: '2px solid grey'
                    }}>
                        <Box display='flex' alignItems='center'>
                            <Image src={photo.urls.small} alt={photo.alt_description} width={200} height={200} />
                            <Typography variant="h6" marginLeft={10}>{photo.user.first_name}{' '}{photo.user.last_name}</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' p={4}>
                            <FavoriteIcon sx={{ color: 'red' }} fontSize='large' />
                            <Typography component='span' fontSize={26}>{photo.user.total_likes}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default InfiniteScroll