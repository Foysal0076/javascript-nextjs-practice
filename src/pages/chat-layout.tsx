import { Box, Container, Typography } from "@mui/material"

const ChatLayout = () => {
    return (
        <Box height='100%'>
            <Container sx={{ height: '100vh' }}>
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{ height: '65px', border: '2px solid grey' }}>
                        <Typography px={4}>TOOLBAR</Typography>
                    </Box>
                    <Box sx={{
                        border: '2px solid green',
                        flex: "1 1 0",
                        overflow: 'auto',
                        px: 4,
                        py: 1,
                    }}>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                        <Typography mb={3} border='1px solid grey' p={1}>Scroll me</Typography>
                    </Box>
                    <Box sx={{ height: '65px', border: '2px solid grey', justifySelf: 'flex-end' }}>
                        I AM ALWAYS AT BOTTOM
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ChatLayout