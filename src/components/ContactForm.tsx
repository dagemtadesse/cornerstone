import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { sendContactEmail } from "../functions/sendContactEmail";
import { useState } from "react";
import { sendContactEmail } from "#/functions/sendContactEmail";

const CustomTextField = styled(TextField)({});

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  note: string;
};

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  company: yup.string().required("Company is required"),
  note: yup.string().required("Note is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (data: FormData) => {
    try {
      await sendContactEmail({ data });
      setSnackbar({
        open: true,
        message: "Contact form submitted successfully!",
        severity: "success",
      });
      reset(); // Clear the form on success
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to submit contact form. Please try again.",
        severity: "error",
      });
    }
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <section className="bg-[#8C4404] ">
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ mb: 4 }} color="primary">
          Ready to talk?{" "}
          <span className="font-bold">We’re ready to listen.</span>
        </Typography>
        <Typography variant="body2" color="primary">
          Request a meeting and a member of our team will be in touch to see
          what we can do to meet your needs.
        </Typography>

        <ThemeProvider theme={theme}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <CustomTextField
                  label="First Name *"
                  id="firstName"
                  type="text"
                  fullWidth
                  variant="outlined"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  {...register("firstName")}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <CustomTextField
                  label="Last Name *"
                  id="lastName"
                  type="text"
                  fullWidth
                  variant="outlined"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  {...register("lastName")}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <CustomTextField
                  label="Email *"
                  id="email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register("email")}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <CustomTextField
                  label="Company *"
                  id="company"
                  type="text"
                  fullWidth
                  variant="outlined"
                  error={!!errors.company}
                  helperText={errors.company?.message}
                  {...register("company")}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <CustomTextField
                  label="Note *"
                  id="note"
                  type="text"
                  placeholder="Note"
                  fullWidth
                  variant="outlined"
                  multiline={true}
                  rows={4}
                  error={!!errors.note}
                  helperText={errors.note?.message}
                  {...register("note")}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="outlined"
              size="large"
              sx={{ mt: 2 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </ThemeProvider>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default ContactForm;
