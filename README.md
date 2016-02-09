# `npm-check-exact`

The truth is developers do not respect semantic versioning. When working in a team, the only way to guarantee a uniform experience is to use exact versions. Each version update should be a conscious decision. 

Otherwise things will break. Consider this scenario: Developer A creates a new project `npm install --save` some modules and `git push` to deploy. A few weeks later Developer B wants to update the project, so `git clone` and `npm install` except the package authors pushed breaking changes by mistake, so now it doesn't work. 

You can avoid all of this with `npm-check-exact`. It works great in a [git `pre-commit` hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#Client-Side-Hooks). 

```sh
$ npm-check-exact
```

To avoid going in and deleting the leading `^` every time, set the default [npm `save-exact` option](https://docs.npmjs.com/misc/config#save-exact).

```sh
$ npm config set save-exact true
```

**MIT License**
