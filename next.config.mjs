/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reactの厳格モードを有効化（開発時のエラーメッセージ強化）
  reactStrictMode: true,

  // SWCでのJavaScript/TypeScriptの高速なコンパイルを有効化
  swcMinify: true,

  // webpack: (config, { dev }) => {
  //   if (dev) {
  //     config.watchOptions = {
  //       poll: 1000,
  //       aggregateTimeout: 300,
  //     };
  //   }
  //   return config;
  // },

  // キャッシュ設定やビルド関連の設定
  // experimental: {
  //   appDir: true,  // App Routerを有効化（Next.js 13+）
  // },

  // 画像の最適化設定（オプション）
  // images: {
  //   domains: ['example.com'], // 画像のホストドメインを設定
  // },
};

export default nextConfig;
