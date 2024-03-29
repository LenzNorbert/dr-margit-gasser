/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'src',
  assetsBuildDirectory: 'build/public/assets',
  serverBuildPath: 'build/index.js',
  publicPath: '/build/',
  port: 8002,
  serverMinify: false,
  tailwind: true,
  serverModuleFormat: 'cjs',
  serverDependenciesToBundle: ['chalk'],
  future: {
    v2_dev: true,
    v2_meta: true,
    v2_headers: true,
    v2_errorBoundary: true,
    v2_routeConvention: true,
    v2_normalizeFormMethod: true,
  },
};
