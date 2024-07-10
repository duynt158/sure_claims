import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import React from "react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

const client = createClient();

export default async function Page() {
  const page = await client.getSingle("homepage");
  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
