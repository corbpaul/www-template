import { merge } from 'webpack-merge';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';

import { common } from './common';

const outputDirectory = 'public';

const config: webpack.Configuration = merge(common, {
  mode: 'production',

  entry: {
    bundle: ['./src/client/index.tsx'],
  },

  output: {
    path: path.join(process.cwd(), `/${outputDirectory}`),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  optimization: {
    concatenateModules: true,
    runtimeChunk: 'single',
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 2019,
        },
      }),
    ],
  },

  performance: { hints: false },

  plugins: [
    new webpack.ids.HashedModuleIdsPlugin(),
    new WebpackManifestPlugin(),
  ],

  devtool: 'source-map',
});

export default config;
