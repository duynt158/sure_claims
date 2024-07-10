"use client";
import React from "react";
import { createClient } from "@/prismicio";
import {
  ContactFormTitle,
  SectionDescriptionContainer,
  PageTitle,
} from "@/components/Typography";
import { Container, Grid, Stack, Box } from "@mui/material";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useTheme } from "@mui/material/styles";
import { GreenArrowButton, YellowArrowButton } from "@/components/Buttons";
import { Form, Label, Input, Select, ErrorAlert } from "@/components/Form";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { SnakeIcon } from "@/components/Icons";
import { PrismicNextLink } from "@prismicio/next";
import { useSearchParams } from "next/navigation";

const client = createClient();

/**
 * Props for `HomepageContact`.
 */
export type HomepageContactProps =
  SliceComponentProps<Content.HomepageContactSlice>;

/**
 * Component for "HomepageContact" Slices.
 */

export interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  restoreCount: string;
  [key: string]: string | number;
}
interface ContactFormError {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  [key: string]: string | number;
}
const errorMessages: ContactFormError = {
  firstName: "First name is reqired",
  lastName: "Last name is required",
  email: "Email is required",
  phone: "Phone number is required",
};

const HomepageContact = ({ slice }: HomepageContactProps): JSX.Element => {
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
    restoreCount: "0-10",
  });
  const [error, setError] = React.useState<ContactFormError>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      | React.ChangeEvent<HTMLSelectElement>
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
      const response = await fetch("/api/contact", {
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
      if (key === "restoreCount") continue;
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
      <Stack
        paddingTop="124px"
        paddingBottom="42px"
        sx={{
          backgroundSize: "cover",
          background: `url('${slice.primary.mobile_background.url}')`,
          [theme.breakpoints.up("md")]: {
            background: `url('${slice.primary.desktop_background.url}')`,
            backgroundSize: "cover",
            paddingTop: "224px",
            paddingBottom: "84px",
          },
        }}
      >
        <Container fixed maxWidth="xl">
          <Grid
            container
            columnSpacing={{ md: "40px", lg: "100px" }}
            rowSpacing="30px"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <PageTitle
                variant="h1"
                sx={{ marginBottom: "15px", position: "relative" }}
              >
                <span className="green">{slice.primary.title_green}</span>{" "}
                <span>{slice.primary.title_white_1}</span>{" "}
                <span className="yellow">{slice.primary.title_yellow}</span>{" "}
                <span>{slice.primary.title_white_2}</span>
                <br />
                <span>{slice.primary.title_white_3}</span>
                <SnakeIcon
                  sx={{
                    color: "white",
                    position: "absolute",
                    top: "35px",
                    left: "350px",
                    fontSize: "155px",
                    [theme.breakpoints.down("md")]: { display: "none" },
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "100px",
                      left: "230px",
                      top: "50px",
                    },
                  }}
                />
              </PageTitle>
              <SectionDescriptionContainer
                sx={{
                  maxWidth: "520px",
                  marginBottom: "10px",
                  [theme.breakpoints.up("md")]: { marginBottom: "30px" },
                }}
              >
                <PrismicRichText field={slice.primary.description} />
              </SectionDescriptionContainer>
              <PrismicNextLink field={slice.primary.button_link}>
                <YellowArrowButton>
                  {slice.primary.button_text}
                </YellowArrowButton>
              </PrismicNextLink>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                maxWidth={{ sm: "100%", md: "440px" }}
                border="1px solid #DFBB75"
                padding="20px"
                sx={{
                  backgroundColor: "#000000",
                  boxShadow: "0px 4px 54px 0px #00000073",
                  position: "relative",
                }}
              >
                <ContactFormTitle
                  marginBottom="20px"
                  sx={{
                    [theme.breakpoints.up("md")]: { marginBottom: "25px" },
                  }}
                >
                  {slice.primary.form_title}
                </ContactFormTitle>
                <Form onSubmit={handleSubmit}>
                  <Grid container rowSpacing="5px" columnSpacing="14px">
                    <Grid item xs={6} sm={6}>
                      <Label htmlFor="firstName">
                        First name<span>*</span>
                      </Label>
                      <Input
                        placeholder=""
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <ErrorAlert
                        display={error.firstName === "" ? "none" : "block"}
                      >
                        {error.firstName}
                      </ErrorAlert>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Label htmlFor="lastName">
                        Last name<span>*</span>
                      </Label>
                      <Input
                        placeholder=""
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      <ErrorAlert
                        display={error.lastName === "" ? "none" : "block"}
                      >
                        {error.lastName}
                      </ErrorAlert>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Label htmlFor="email">
                        Email<span>*</span>
                      </Label>
                      <Input
                        placeholder=""
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <ErrorAlert
                        display={error.email === "" ? "none" : "block"}
                      >
                        {error.email}
                      </ErrorAlert>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Label htmlFor="phone">
                        Phone Number<span>*</span>
                      </Label>
                      <Input
                        placeholder=""
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <ErrorAlert
                        display={error.phone === "" ? "none" : "block"}
                      >
                        {error.phone}
                      </ErrorAlert>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Label htmlFor="restoreCount">
                        How many restoration projects do you do a month?
                      </Label>
                      <Select
                        id="restoreCount"
                        name="restoreCount"
                        value={formData.restoreCount}
                        onChange={handleChange}
                      >
                        <option value="0-10">0-10</option>
                        <option value="11-20">11-20</option>
                        <option value="21-50">21-50</option>
                        <option value="50+">50+</option>
                      </Select>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
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
                          <GreenArrowButton
                            type="submit"
                            sx={{
                              [theme.breakpoints.up("md")]: { width: "100%" },
                            }}
                          >
                            Submit
                          </GreenArrowButton>
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </section>
  );
};

export default HomepageContact;
