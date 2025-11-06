import type { NextConfig } from "next";
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig: NextConfig = withNextra({
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
})


export default nextConfig;