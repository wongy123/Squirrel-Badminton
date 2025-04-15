import { InstagramEmbed } from 'react-social-media-embed';
import { Box, Typography } from '@mui/material';

const InstagramFeed = () => {
  return (
    <Box
    sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <Typography variant="h1" sx={{ my: 2 }}>Latest Updates</Typography>
    <InstagramEmbed url='https://www.instagram.com/squirrel.badminton/' style={{ width: '100%', maxWidth: '900px' }}/>
    </Box>

  )
}

export default InstagramFeed