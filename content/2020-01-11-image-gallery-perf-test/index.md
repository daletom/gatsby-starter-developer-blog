---
title: 'Testing Web Performance with Image Galleries'
path: blog/image-gallery-perf-test
tags: [javascript, gatsby, imgix, githubpages]
cover: ./preview.png
date: 2020-01-11
excerpt: Best Performance for an Image Gallery.
---

If you’re familiar working with SCSS in Angular CLI 1.x before and now you’re wondering how to use it in version 6, a brand new version that comes with Angular 6, I’m here to help.

![Sass logo](./sass-image.png 'The Sass logo')

This is how the style config in the CLI v1.x looks like in .angular-cli.json file.

```
"defaults": {
  "styleExt": "scss",
  "component": {}
}
```

But if you take a look into a config schema of **angular.json** file in version 6, you will no longer find this config anymore. But don’t worry, Angular CLI team got it cover in much easier way. To use SCSS, simply import you scss files (the default value is `src/styles.scss`) in your project level in an **angular.json** file like this.

```
{
  ...
  projects: {
    [your_project_name]: {
      ...
      architect: {
        build: {
          ...
          options: {
            styles:{
              "src/styles.scss"
            }
          }
        }
      }
    }
  }
}
```

That’s it, you’re good to go with SCSS! No any other config needed because CLI team just got it covered so you don’t have to tell the config which CSS-preprocessor is gonna be used anymore. By dig deeper in their build script (`node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/styles.js`), I’m pretty sure that you can include any type of _.css_, _.sass_, _.scss_, _.less_ or _.styl (stylus)_ and start your CSS coding right away. I’ve tried it, very easy!

Plus, they also provide the way to config target browsers for autoprefixer easily. You can find a file name browserslist in src folder and change the target browsers for your autoprefixer. I haven’t tried that yet, let me know your result if you already tried it.

This is just an example of a post. The original is here: https://medium.com/@vissanu_s/quick-tip-how-to-use-scss-in-angular-cli-6-63d263b3481c
