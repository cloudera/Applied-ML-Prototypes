const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
    config.module.strictExportPresence = false;
    config.module.rules[0] = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules\/(?!cdp-js|cuix|cloud-common|whatwg-fetch|micromark-util-sanitize-uri|micromark-util-decode-numeric-character-reference|common-console|@cloudera-internal\/cuix-core|yaml)/,
        include: [
          /node_modules(.*[/\\])+react\//,
          /node_modules(.*[/\\])+react-native/,
          /node_modules(.*[/\\])+react-freeze/, // <---- this line here
          /node_modules(.*[/\\])+@react-native/,
          /node_modules(.*[/\\])+@react-navigation/,
          /node_modules(.*[/\\])+@react-native-community/,
          /node_modules(.*[/\\])+@expo/,
          /node_modules(.*[/\\])+pretty-format/,
          /node_modules(.*[/\\])+metro/,
          /node_modules(.*[/\\])+abort-controller/,
          /node_modules(.*[/\\])+@callstack\/repack/,
        ],
        use: 'babel-loader',
      };
    return config;
};