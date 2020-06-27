# SilverStripe 4 Bootstrap 4 Mix

Fork of [eolant/silverstripe-bootstrap-mix](https://github.com/eolant/silverstripe-bootstrap-mix) as an example for using [silverstripe-mix](https://github.com/cjsewell/silverstripe-mix)

This is a boilerplate base theme for SilverStripe 4 that you can use for all your custom Boostrap 4 themes.  
It uses Laravel Mix for assets compilation and hot module reloading for quick and easy development allowing you to focus on the task at hand, not worrying about front end tools.   
Includes a SASS and React example, but can easily be replaced for anything else such as SASS, LESS, Stylus, Vue, etc.  
Refer to the [laravel-mix](https://github.com/JeffreyWay/laravel-mix) documentation for more details.

## Installation

```
composer require ssmix/bootstrap-theme
```

* Update themes in `app/_config/theme.yml`
  ```yaml
  SilverStripe\View\SSViewer:
    themes:
      - ssmix-bootstrap
      - '$public'
      - '$default'
  ```
* Run `yarn install` from the theme directory

## Usage

* `yarn hot watch` for development
* `yarn build` for production build

###### Please refer `package.json` for all commands.

## Renaming theme

If you want to rename the theme, create extras.expose key in your root composer.json   
Replace &lt;theme-name&gt; with the new name   
```
"extra": {
  "expose": [
      "themes/<theme-name>/dist",
      "themes/<theme-name>/css"
    ]
}
```
Then run vendor expose to generate the correct symlinks. See [silverstripe/vendor-plugin](https://github.com/silverstripe/vendor-plugin) and the [SilverStripe Requirements docs](https://docs.silverstripe.org/en/4/developer_guides/templates/requirements/#configuring-your-project-exposed-folders) for more information on vendor expose.
```
composer vendor-expose
```
