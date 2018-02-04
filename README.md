# News

> Built for personal usage and only tested on mac

Real simple Electron using React to show sites in a standalone app. It has a sidebar where you can choose from predefined sites.

It's important to create your own configuration file with sites, otherwise the application will not have any sites.

The configuration should be saved at `$HOME/.news.json`

Configuration example:

```js
{
  "menu": true, // show sidebar menu by default
  "sites": [
    {
      "title": "BBC",
      "url": "https://www.bbc.co.uk/",
      "default": true
    },
    {
      "title": "Google News",
      "url": "https://news.google.com/"
    }
  ]
}
```

## License

MIT © [Fredrik Forsmo](https://github.com/frozzare)
