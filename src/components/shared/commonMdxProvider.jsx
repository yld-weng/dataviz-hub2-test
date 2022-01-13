import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { commonMdxComponents } from "../style/commonMdxComponents";

export default function commonMdxProvider(props) {
  return (
    <MDXProvider
      components={{
        ...commonMdxComponents,
        ...props.components
      }}
    >
      <MDXRenderer className={props.className} {...props}>
        {props.mdx.body}
      </MDXRenderer>
    </MDXProvider>
  );
}
