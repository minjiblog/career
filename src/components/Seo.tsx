"use client";
import { DefaultSeo } from "next-seo";
import seoConfig from "../../next-seo.config";

export default function Seo() {
  return <DefaultSeo {...seoConfig} />;
}
