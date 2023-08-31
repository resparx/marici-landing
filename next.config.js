/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './custom/imageLoader.js',
      },
}

module.exports = nextConfig
