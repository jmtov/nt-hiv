module.exports = {
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "~assets": "./src/app/assets",
          "~components": "./src/app/components",
          "~screens": "./src/app/screens",
          "~config": "./src/config",
          "~constants": "./src/constants",
          "~redux": "./src/redux",
          "~services": "./src/services",
          "~utils": "./src/utils"
        }
      }
    ]
  ]
}
