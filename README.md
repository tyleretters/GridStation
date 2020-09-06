# Perfect Bootstrap Jekyll

- Bootstrap JS is ready to be uncommented in javascript.html.
- Includes FontAwesome in head.html.
- Favicon stuff is ready to be uncommented in head.html.

## Setup Instructions

1. Clone repository to your computer.
2. Using terminal, navigate to the `perfect-jekyll` directory with `cd`.
3. In the directory type `bundle exec jekyll serve --baseurl ''`.
4. Visit [http://127.0.0.1:4000](http://127.0.0.1:4000) in your browser.
5. To work with the CSS: `cd assets/stylesheets` and run `sass --watch style.sass:style.css`.

## Adding Pages

Just add a new `your-page-name.md` file in the `_pages` directory. At the top of the file, add this "frontmatter":

```
---
layout: page
title: "your page name"
permalink: /your-page-name/
---
```

This is where you configure the page title and permalink. They can be anything you want.

## Adding Posts

Just add a new `YYYY-MM-DD-your-post-name.md` file in the `_posts` directory. Note that the name of the file will become the URL and you must follow the date convention. At the top of the file, add this frontmatter:

```
---
layout: post
title:  "Your Post Title"
date:   2020-05-02 14:54:38 -0500
---
```

## Collections

Collections allow for easily maintaining larges sets of similar data. Configure in `_config.yml` and chck out the `_collections` directory to see how these work. An example is also on the `_pages/collections.md` page.


## Navigation

Configure main navigation with `_data/nav.yml`.