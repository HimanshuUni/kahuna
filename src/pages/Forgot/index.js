import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import AuthrizationLayout from "../../components/AuthrizationLayout";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <AuthrizationLayout>
      <Typography component="h1" variant="h5">
        Forgot Your Password?
      </Typography>
      <p style={{opacity: 0.6}}>
        Don't worry, it happens! Tell us your email address and we'll send you a
        password reset link.
      </p>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, width: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Request New Password
        </Button>
        <Grid container>
          <Grid item>
            <Typography>
              Don't have an account?
              <Link
                sx={{ ml: 2 }}
                component={RouterLink}
                to="/signup"
                variant="body2"
              >
                Create an account.
              </Link>{" "}
            </Typography>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </AuthrizationLayout>
  );
}
