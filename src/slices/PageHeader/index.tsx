"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { styled, useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { PageTitle } from "@/components/Typography";

/**
 * Props for `PageHeader`.
 */
export type PageHeaderProps = SliceComponentProps<Content.PageHeaderSlice>;

const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "275px",
  display: "flex",
  [theme.breakpoints.up("md")]: {
    height: "480px",
  },
}));
/**
 * Component for "PageHeader" Slices.
 */
const PageHeader = ({ slice }: PageHeaderProps): JSX.Element => {
  const theme = useTheme();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionContainer
        sx={{
          background: `url('${slice.primary.mobile_background.url}')`,
          backgroundSize: "cover",
          [theme.breakpoints.up("md")]: {
            background: `url('${slice.primary.desktop_background.url}')`,
            backgroundSize: "cover",
          },
        }}
      >
        <PageTitle variant="h1" margin="auto">
          {slice.primary.title}
        </PageTitle>
      </SectionContainer>
    </section>
  );
};

export default PageHeader;
