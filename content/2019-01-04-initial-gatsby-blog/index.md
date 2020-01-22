---
title: Creating initial Gatsby Blog
tags: [javascript]
date: 2019-01-04T08:25:44.226Z
path: blog/initial-gatsby-blog
cover: ./preview.png
excerpt: Creating my first Gatsby blog.
---

As part of the [#100daysofGatsby](https://developer.mozilla.org/en-US/docs/Glossary/Function) I started on my first lesson, creating a Gatsby blog. You can see the [initial steps here](https://www.gatsbyjs.org/blog/100days/start-blog/). After downloading everything via the command line, it was time to create a gatsby site from a starter blog. I went with the [gatsby-starter-developer-blog](https://www.gatsbyjs.org/starters/lgcolella/gatsby-starter-developer-blog/) by lgcolella. It was pretty easy to do

```typescript
$ gatsby new gatsby-starter-developer-blog https://github.com/lgcolella/gatsby-starter-developer-blog

$ cd gatsby-starter-developer-blog

$ gatsby develop
```

Now all I had to do was go to [http://localhost:8000/](http://localhost:8000/) and I could see a local version of the blog.

## Adding My Own Content

It was time to open up the code and see what I had gotten myself into. I use the Visual Studio Code editor for this. Seemed pretty apparent that I needed to go into the **content** section and start changing the examples to my own content.
