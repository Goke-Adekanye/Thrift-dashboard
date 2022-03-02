import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  //ADMIN FORM
  section: {
    maxWidth: 1000,
    margin: "0 auto",
    backgroundColor: "#fafafa",
  },
  container: {
    backgroundColor: "#fff",
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    borderRadius: "10px",
  },
  formTitle: {
    height: "2.25rem",
    padding: ".6rem",
    display: "flex",
    alignItems: "center",
    borderBottom: ".0625rem solid #e8e8e8",
  },
  icon: {
    marginRight: "1rem",
    verticalAlign: "middle",
  },
  formText: {
    fontSize: "16px",
    fontWeight: "700",
    margin: "0 auto 0 0",
    padding: 0,
  },
  form: {
    padding: "1rem",
  },
  label: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    cursor: "pointer",
  },
  uploadIcon: {
    marginRight: "5px",
  },
  root: {
    marginBottom: "2rem",

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#555",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#555",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#555",
    },
  },
});
