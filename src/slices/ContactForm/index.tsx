"use client";
import React from "react";
import { createClient } from "@/prismicio";
import { SectionTitle } from "@/components/Typography";
import { Container, Grid, Stack, Box } from "@mui/material";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { styled, useTheme } from "@mui/material/styles";
import { GreenArrowButton } from "@/components/Buttons";
import {
  Form,
  Label,
  Input,
  ErrorAlert,
  TextArea,
} from "@/components/Form";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useSearchParams } from "next/navigation";

const client = createClient();

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */

export interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
  [key: string]: string | number;
}
interface ContactFormError {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
  [key: string]: string | number;
}
const errorMessages: ContactFormError = {
  firstName: "First name is reqired",
  lastName: "Last name is required",
  email: "Email is required",
  phone: "Phone number is required",
  comment: "Comment is required",
};

const SectionContainer = styled(Stack)(({ theme }) => ({
  paddingTop: "20px",
  paddingBottom: "60px",
  backgroundColor: "#252525",
  [theme.breakpoints.up("md")]: {
    paddingTop: "50px",
    paddingBottom: "100px",
  },
}));

const CLabel = styled(Label)(({ theme }) => ({
  marginBottom: "5px",
  display: "inline-block",
  fontSize: "13px",
  [theme.breakpoints.up("md")]: {
    marginBottom: "15px",
  }
}));

const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  const theme = useTheme();
  const searchParams = useSearchParams();
  const referrer = searchParams.get("source");
  const [settings, setSettings] = React.useState<
    Content.SettingsDocument<string> | undefined
  >(undefined);
  const [formData, setFormData] = React.useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [error, setError] = React.useState<ContactFormError>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [validationStarted, setValidationStarted] =
    React.useState<boolean>(false);
  const [processing, setProcessing] = React.useState(false);
  const [result, setResult] = React.useState<string>("none");
  const [resultMessage, setResultMessage] = React.useState<string>("");

  React.useEffect(() => {
    const getSettings = async () => {
      const settings = await client.getSingle("settings");
      setSettings(settings);
    };

    getSettings();
  }, []);

  React.useEffect(() => {
    if (validationStarted) validate();
  }, [formData]);

  React.useEffect(() => {
    if (referrer) {
      localStorage.setItem('referrer', referrer);
    }
  }, [referrer]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationStarted(true);

    if (!validate()) return;
    if (processing) return;

    setProcessing(true);

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          referrer: localStorage.getItem('referrer'),
        }),
      });

      if (response.ok) {
        setResult("success");
        setResultMessage(
          "Thank you for filling out this contact form. We have been notified and will respond within 1 business day."
        );
      } else {
        setResult("fail");
        setResultMessage(
          `I'm sorry. It looks like your message failed to send. Please refresh the page and try again.`
        );
      }
    } catch (error) {
      console.error(error);
      setResult("fail");
      setResultMessage(
        `I'm sorry. It looks like your message failed to send. Please refresh the page and try again.`
      );
    } finally {
      setProcessing(false);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    let success = true;

    for (const key in formData) {
      if (formData[key] === "") {
        success = false;
        setError((error) => ({
          ...error,
          [key]: errorMessages[key],
        }));
      } else {
        if (key === "email") {
          if (!isValidEmail(formData.email)) {
            setError((error) => ({
              ...error,
              [key]: "Please enter a valid email address",
            }));
            success = false;
            continue;
          }
        }
        success = true;
        setError((error) => ({
          ...error,
          [key]: "",
        }));
      }
    }

    return success;
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionContainer>
        <Container fixed maxWidth="xl">
          <SectionTitle
            variant="h2"
            sx={{
              marginBottom: "10px",
              position: "relative",
              textAlign: "center!important",
              [theme.breakpoints.up("md")]: {
                marginBottom: "30px",
              }
            }}
          >
            {slice.primary.title}
          </SectionTitle>
          <Form
            onSubmit={handleSubmit}
            sx={{
              border: "1px solid #DFBB75",
              padding: "19px 19px 36px",
              position: "relative",
              [theme.breakpoints.up("sm")]: { padding: "50px" },
              [theme.breakpoints.up("md")]: { maxWidth: "744px", padding: "50px 110px" },
            }}
          >
            <Grid container rowSpacing={{ xs: "8px", sm: "8px", md: "25px"}} columnSpacing="23px">
              <Grid item xs={12} sm={6}>
                <CLabel htmlFor="firstName">
                  First name<span>*</span>
                </CLabel>
                <Input
                  placeholder=""
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(12, 12, 12, 0.4)",
                  }}
                />
                <ErrorAlert display={error.firstName === "" ? "none" : "block"}>
                  {error.firstName}
                </ErrorAlert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CLabel htmlFor="lastName">
                  Last name<span>*</span>
                </CLabel>
                <Input
                  placeholder=""
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(12, 12, 12, 0.4)",
                  }}
                />
                <ErrorAlert display={error.lastName === "" ? "none" : "block"}>
                  {error.lastName}
                </ErrorAlert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CLabel htmlFor="phone">
                  Phone<span>*</span>
                </CLabel>
                <Input
                  placeholder=""
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(12, 12, 12, 0.4)",
                  }}
                />
                <ErrorAlert display={error.phone === "" ? "none" : "block"}>
                  {error.phone}
                </ErrorAlert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CLabel htmlFor="email">
                  Email<span>*</span>
                </CLabel>
                <Input
                  placeholder=""
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(12, 12, 12, 0.4)",
                  }}
                />
                <ErrorAlert display={error.email === "" ? "none" : "block"}>
                  {error.email}
                </ErrorAlert>
              </Grid>
              <Grid item xs={12} sm={12}>
                <CLabel htmlFor="comment">
                  Comment<span>*</span>
                </CLabel>
                <TextArea
                  placeholder=""
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  rows={4}
                  onChange={handleChange}
                />
                <ErrorAlert display={error.comment === "" ? "none" : "block"}>
                  {error.comment}
                </ErrorAlert>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                justifyContent="center"
                display="flex"
                marginTop="10px"
              >
                {result === "none" ? (
                  <GoogleReCaptchaProvider
                    reCaptchaKey={
                      settings?.data?.recaptcha_public_key?.toString() as string
                    }
                  >
                    <GreenArrowButton type="submit">Submit</GreenArrowButton>
                  </GoogleReCaptchaProvider>
                ) : (
                  <ErrorAlert
                    sx={
                      result === "success"
                        ? { color: "green", fontSize: "14px" }
                        : { color: "red", fontSize: "14px" }
                    }
                  >
                    {resultMessage}
                  </ErrorAlert>
                )}
              </Grid>
            </Grid>
            <Box
              position="absolute"
              width="100%"
              height="100%"
              left="0"
              top="0"
              zIndex="50"
              sx={{
                background: "rgba(0, 0, 0, 0.7)",
                "& img": { margin: "auto" },
              }}
              display={processing ? "flex" : "none"}
            >
              <img src="/images/loading.svg" alt="Loading" />
            </Box>
          </Form>
        </Container>
      </SectionContainer>
    </section>
  );
};

export default ContactForm;
