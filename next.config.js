/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
const path = require('path')

module.exports = {
  images: {
    loader: 'imgix',
    path: '',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

