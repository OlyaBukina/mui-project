import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { mobile: 'none', tablet: 'block' } }}>
      <Box
        position="fixed"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          marginRight: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="h6" fontWeight={200} marginBottom={2}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            <Avatar
              alt="Remy Sharp"
              src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203270/samples/man-portrait.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203267/samples/smile.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203269/samples/outdoor-woman.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203273/cld-sample.jpg"
            />
            <Avatar alt="Trevor Henderson" src="" />
            <Avatar
              alt="Harry Potter"
              src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203241/samples/people/smiling-man.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203238/samples/people/kitchen-bar.jpg"
            />
            <Avatar alt="Trevor Henderson" src="" />
            <Avatar alt="Trevor Henderson" src="" />
            <Avatar alt="Trevor Henderson" src="" />
          </AvatarGroup>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={200} marginBottom={2}>
            Latest Photos
          </Typography>
          <ImageList colm={3} rowHeight={100} sx={{ display: 'flex' }}>
            <ImageListItem>
              <img
                alt=""
                src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203238/samples/food/dessert.jpg"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                alt=""
                src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203251/samples/landscapes/nature-mountains.jpg"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                alt=""
                src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203268/samples/breakfast.jpg"
              />
            </ImageListItem>
          </ImageList>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={200} marginBottom={2}>
            Latest Conversations
          </Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203270/samples/man-portrait.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203267/samples/smile.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://res.cloudinary.com/dcyhs4y7r/image/upload/v1695203269/samples/outdoor-woman.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
