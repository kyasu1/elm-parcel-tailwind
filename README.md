This is a boilerplate for bundling Elm codes including css, js and [tailwindcss](https://tailwindcss.com/).

# How it works

[Parceljs](https://parceljs.org/) will take care all of the burden for bundling all assets and start a dev server. Just clone this repository to a local directory.

```
# git clone https://github.com/kyasu1/elm-parcel-tailwind
```

In that directory,

```
# parcel index.html
```

All done, a dev server starts at `localhost:1234`, browse to there then you will see the result. If you change any of js, css or elm files, `parceljs` will recompile and reload the browser.

## Adding ports and flags

If you want to write a code for the ports and flags, just edit `js/index.js` as normal. 

## Adding some css

Just write some css at the end of `css/style.css`. Since this repository includes `sass` library, you can `@import` from another file.

## Limitations

Not sure what is wrong but it sometimes fails to recompiling upon file change, in that case just restart the `parcel` process.
