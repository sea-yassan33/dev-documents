import type { NextConfig } from "next";
import nextMDX from "@next/mdx";
import rehypePrismPlus from "rehype-prism-plus";

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/, // .mdと.mdx両方を対象にする
  options: {
    rehypePlugins: [
      rehypePrismPlus,
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

export default withMDX(nextConfig);
