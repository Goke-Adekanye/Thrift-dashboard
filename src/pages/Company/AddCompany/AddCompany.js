import React, { useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Add, Publish, Check, Close } from "@material-ui/icons";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Alert,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  section: {
    ...theme.section,
  },
  container: {
    ...theme.container,
  },
  formTitle: {
    ...theme.formTitle,
  },
  icon: {
    ...theme.icon,
  },
  formText: {
    ...theme.formText,
  },
  form: {
    ...theme.form,
  },
  label: {
    ...theme.label,
  },
  uploadIcon: {
    ...theme.uploadIcon,
  },
  root: {
    ...theme.root,
  },
}));

export default function AddCompany() {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.formTitle}>
          <Add className={classes.titleIcon} />
          <h1 className={classes.formText}>Add New Company</h1>
        </div>

        <form name="contact" method="POST">
          <Grid container spacing={4} className={classes.form}>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="firstname"
                label="First Name"
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="lastname"
                label="Last Name"
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="email"
                name="email"
                label="Email"
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="phone"
                label="Phone"
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="address"
                label="Address"
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <label htmlFor="file" className={classes.label}>
                <Publish className={classes.uploadIcon} /> Upload Photo
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth className={classes.root}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                  >
                    <MenuItem value={10}>Active</MenuItem>
                    <MenuItem value={20}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} lg={12}>
              <Button
                style={{
                  marginRight: 15,
                  backgroundColor: "rgb(0, 171, 85)",
                  fontWeight: 600,
                  color: "#FFF",
                  padding: "5px 15px",
                }}
                onClick={() => setOpenAlert(true)}
                startIcon={<Check />}
              >
                Create
              </Button>
              <Button
                style={{
                  backgroundColor: "rgb(243, 62, 62)",
                  fontWeight: 600,
                  color: "#FFF",
                  padding: "5px 15px",
                }}
                startIcon={<Close />}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success">
          Company created successfully!
        </Alert>
      </Snackbar>
    </section>
  );
}
