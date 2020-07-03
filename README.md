# Vue Twackbar

A Vue.JS plugin for creating and displaying [snackbars](https://material.io/design/components/snackbars.html) styled using [TailwindCSS](https://tailwindcss.com).

Heavily inspired by [zerodois/vue-snack](https://github.com/zerodois/vue-snack) (Thank you!)

# Install

Install from npm:
```console
npm install --save vue-twack
```
```javascript
import Vue from 'vue'
import VueTwack from 'vue-twack' 
import 'vue-twack/dist/vue-twack.min.css'

Vue.use(VueTwack, options = { position: 'bottom-right', time: 3000 })
```

# Use
The plugin provides the `$twack` property in all components, this property contains all the methods configured to display the desired snackbar.

By default, the plugin contains three main display methods: `success`,` danger` and `show`. These methods present snackbars with preconfigured colors for success messages, error messages and standard messages, respectively. The text of the message in all cases have the same color, but the action button present in the snackbar varies in color depending on the method called.

Each method receives as a parameter a message string, or a configuration object. In case a string is received, the snackbar is only displayed with the text entered, without displaying an action button.

```javascript
/**** Using ****/

vm.$twack.metodo('My Message') // Displays a snackbar without action button

vm.$twack.metodo(config) // Displays a snackbar according to the given object

```

## Configure

The configuration object used in the presentation is simple and has the following structure:
```javascript
config = {
  text: String, // default ''
  button: String, // Default null
  action: Function // default null
}
```

## Personalize

### Creating methods

During the installation of the plugin, a configuration object is optional. The object in question can contain the `"methods"` key, which has the methods that can be executed from the `$snack` in each component. Each method in array must contain an associated color.

In addition, it is possible to inform the location that the snackbar will appear. Another configuration parameter is `"time"`, which specifies how many milliseconds the snackbar should be displayed. According to Google, a snackbar should last at least 5 and at most 10 seconds. The default value is 7.5 seconds.

Based on the new Gmail layout, the option to close the snackbar was made available. To the close icon be displayed, the `"close"` key must be set to `true` (the default is `false`).

The following is an example of a configuration object. If the `"methods"` key is undefined, the available methods are ` show`, `success` and` danger`, as previously stated.


```javascript
{
  // Possible values: 'top', 'top-left', 'top-right', 'bottom', 'bottom-left'
  // default 'bottom'
  position: String,
  // default 7500
  time: Number,
  // default false
  close: Boolean,
  // default []
  methods: [
    {
      // default ''
      name: String,
      // Any valid HTML color
      // default '#ecf0f1'
      color: String
    }
  ]
}
```