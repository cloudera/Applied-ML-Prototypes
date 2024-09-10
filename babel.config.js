// Copyright (c) 2019 Cloudera, Inc. All rights reserved.

module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime',
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-transform-numeric-separator',
    ['babel-plugin-styled-components', { displayName: true }]
  ]
};
