import React from "react";
import {
  Avatar,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { grey } from "@mui/material/colors";
const Profile = () => {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <Box
      sx={{
        width: 1 / 2,
        mx: "auto",
        mt: 4,
        // backgroundColor: "success.dark",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Box
        sx={{
          mx: "auto",
          width: 1,
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              Photo
            </Typography>

            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button
                variant="outlined"
                startIcon={<PhotoCamera />}
                component="span"
              >
                Change Photo
              </Button>
            </label>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              Name
            </Typography>
            <TextField
              // label="Name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              What I Do
            </Typography>
            <TextField
              // label="Name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              Contact Number
            </Typography>
            <TextField
              // label="Name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              Time Zone
            </Typography>
            <TextField
              // label="Name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
            />
          </Stack>

          <Button sx={{ width: 1 / 2 }} style={{marginLeft: 'auto', marginRight: 'auto'}} variant="contained">
            Update
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Profile;
