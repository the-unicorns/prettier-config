# The Unicorns Prettier Shareable Config React

[![CircleCI](https://circleci.com/gh/the-unicorns/prettier-shareable-config.svg?style=svg)](https://circleci.com/gh/the-unicorns/prettier-shareable-config)

A Prettier [Shareable Config](https://prettier.io/docs/en/configuration.html#sharing-configurations) for Javascript based projects

## Installation

Use the package manager [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/) to install it.

### Peer Dependencies

Peer dependencies need to be installed in order to make it work properly

```javascript
"prettier": "^1.19.1"
```

After that you should install the plugin without any problem

```bash
yarn add -D @the-unicorns/prettier-shareable-config
```

## Usage

Once the `@the-unicorns/prettier-shareable-config` package is installed, you can use it by specifying `@the-unicorns/prettier-shareable-config` in the your `.prettierrc` file.

```js
module.exports = {
  ...require("@the-unicorns/prettier-shareable-config"),
  semi: false
};
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributors

- [View Contributors](https://github.com/the-unicorns/prettier-shareable-config/graphs/contributors)

## License

[MIT](https://choosealicense.com/licenses/mit/)
