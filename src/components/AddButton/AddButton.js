import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const AddButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpenModal(true)}
        title="Add post"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { mobile: 'calc(50% - 25px)', tablet: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <Typography variant="h6" color="gray" sx={{ textAlign: 'center' }}>
            Create post
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            <Avatar src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203272/samples/woman-on-a-football-field.jpg" />
            <Typography fontWeight={500} variant="span">
              Olya
            </Typography>
          </Box>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What`s on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};
export default AddButton;
