"use client";
import React from "react";
import Script from "next/script";
import { Content } from "@prismicio/client";
import { repositoryName, createClient } from "@/prismicio";

const client = createClient();

export default function NotFound() {
  const [settings, setSettings] = React.useState<
    Content.SettingsDocument<string> | undefined
  >(undefined);

  React.useEffect(() => {
    const getSettings = async () => {
      const settings = await client.getSingle("settings");
      setSettings(settings);
    };

    getSettings();
  }, []);

  React.useEffect(() => {
    document.body.classList.add("error-page");

    return () => {
      document.body.classList.remove("error-page");
    };
  }, []);

  return (
    <>
      <Script
        async
        defer
        id="script-prismic"
        src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${repositoryName}`}
        strategy="lazyOnload"
      />

      {settings && settings.data.is_enabled && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${settings.data.gtag_api_key}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.data.gtag_api_key}');
              `,
            }}
          ></script>
        </>
      )}

      <div className="notfound-page">
        <div>
          <h1 className="next-error-h1">404</h1>
          <div className="error-div">
            <h2>This page could not be found.</h2>
          </div>
        </div>
      </div>
    </>
  );
}
