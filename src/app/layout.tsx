import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, createClient } from "@/prismicio";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export async function generateMetadata(): Promise<Metadata> {
  if (process.env.NEXT_PUBLIC_DEPLOYMENT_MODE === "production") {
    return {
      title: "SureClaims",
      description: "Sure Claims website",
    };
  } else {
    return {
      title: "SureClaims",
      description: "Sure Claims website",
      robots: "noindex",
    };
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const isUsingGtag = settings.data.is_enabled;
  const gKey = settings.data.gtag_api_key;

  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${repositoryName}`}
        ></script>
        {isUsingGtag && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gKey}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gKey}');
                `,
              }}
            ></script>
          </>
        )}
      </head>
      <body>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <PrismicPreview repositoryName={repositoryName} />
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
