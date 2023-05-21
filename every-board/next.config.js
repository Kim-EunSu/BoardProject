/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: { styledComponents: true },
  experimental: {
    appDir: true,
  },
  // Next.js에서 Css-in-js 오류 해결
  // https://velog.io/@motive05/Next.js%EC%97%90%EC%84%9C-styled-components-%EC%82%AC%EC%9A%A9%EB%A9%B4%EC%84%9C-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%ED%95%98%EB%A9%B4-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%B4-%EC%82%AC%EB%9D%BC%EC%A7%80%EB%8A%94-%EC%97%90%EB%9F%AC
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
