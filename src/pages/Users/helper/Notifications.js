import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { Divider } from "@mui/material";
const Notifications = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        mt: 3,
        width: 1,
      }}
    >
      <Stack spacing={2} marginY={4}>
        <Stack spacing={1}>
          <Typography
            sx={{ my: "auto" }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            DAILY INBOX EMAIL
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              Get a once-a-day reminder of overdue and upcoming tasks.
            </Typography>
            <Switch defaultChecked />
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          <Typography
            sx={{ my: "auto" }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            TASKS
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              When you are assigned to a task.
            </Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              When your task is due.
            </Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              When a hand-off occurs from a Stop Task.
            </Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              When someone @mentions you.
            </Typography>
            <Switch defaultChecked />
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          <Typography
            sx={{ my: "auto" }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            WORKFLOW RUNS
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              When you are assigned to a workflow run.
            </Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              When your workflow run is due.
            </Typography>
            <Switch defaultChecked />
          </Stack>
        </Stack>

        <Divider />
        <Stack spacing={1}>
          <Typography
            sx={{ my: "auto" }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            APPROVALS
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              When you receive an approval.
            </Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              When your work is approved/rejected.
            </Typography>
            <Switch defaultChecked />
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          <Typography
            sx={{ my: "auto" }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            UNSUBSCRIBE FROM ALL EMAILS
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Typography
              sx={{ my: "auto" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              If checked, you won't receive any emails except billing and
              security-related ones.
            </Typography>
            <Switch defaultChecked />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Notifications;
