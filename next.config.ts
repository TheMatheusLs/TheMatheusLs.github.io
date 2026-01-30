import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true, // Ensures /em-breve becomes /em-breve/ which maps to /em-breve/index.html
    images: {
        unoptimized: true, // Required for static export
    },
    // If deploying to GitHub Pages with a custom domain, remove basePath
    // If deploying to username.github.io/repository-name, set:
    // basePath: '/repository-name',
}

export default nextConfig
