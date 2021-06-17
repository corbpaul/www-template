import { merge } from 'webpack-merge';
import { Request, Response } from 'express';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';

import { common } from './common';

const outputDirectory = 'static';

const config: webpack.Configuration = merge(common, {
  mode: 'development',

  entry: {
    bundle: ['./src/client/index.tsx'],
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/${outputDirectory}`,
    publicPath: '/static/',
  },

  optimization: {
    moduleIds: 'named',
  },

  plugins: [new ReactRefreshWebpackPlugin()],

  devServer: {
    compress: true,
    hot: true,
    port: 3000,
    proxy: {
      '*': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
        onError: (err: NodeJS.ErrnoException, req: Request, res: Response) => {
          if (err.code === 'ECONNREFUSED') {
            res.writeHead(503, {
              'Content-Type': 'text/html; charset=utf-8',
              Refresh: '3',
            });
            res.end(
              '<p style="font-family:sans-serif;">Connecting to server. One moment...<br/><progress style="width:300px;"></progress></p>',
            );
          } else {
            throw err;
          }
        },
      },
    },
  },

  devtool: 'inline-cheap-module-source-map',
});

export default config;
