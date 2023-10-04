import { Box } from '@mui/material';
import Post from './Post';

const Feed = () => {
  return (
    <Box
      flex={4}
      p={2}
      sx={{
        display: 'flex',
        gap: 3,
        flexDirection: 'column',
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
