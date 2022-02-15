module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  // webpackFinal: async (config, { configType }) => {
  //   // apply any global webpack configs that might have been specified in .storybook/main.js
  //   if (rootMain.webpackFinal) {
  //     config = await rootMain.webpackFinal(config, { configType });
  //   }

  //   // add your own webpack tweaks if needed

  //   return config;
  // },
}