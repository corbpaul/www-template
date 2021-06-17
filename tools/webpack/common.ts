import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const outputDirectory = 'public';

const vendor = ['react', 'react-dom', 'react-router', 'react-router-dom'];

const isProduction = process.env.NODE_ENV === 'production';

const common: webpack.Configuration = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                !isProduction && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000'],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: new RegExp(vendor.join(`${path.sep}|${path.sep}`)),
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(process.cwd(), `/${outputDirectory}`),
      ],
    }),
  ],
};

export { common };
