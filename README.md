# icons-alumni-network.github.io

This repo contains the entire site configuration for [iconsalumni.org](iconsalumni.org).
The site is built using [Jekyll](https://jekyllrb.com/docs/) and is automatically deployed whenever a valid new commit is pushed to the master branch of this repository.

## Running locally

Local development requires an up-to-date ruby installation.
On OSX, it should be sufficient to install homebrew and 
```bash
brew install ruby
```

If you run into ruby version issues, it can helpful to install 
[rvm](https://rvm.io/rvm/install) and select the newest stable version of ruby.

Once that's working, install the `bundler` ruby gem, which is a tool that knows how to manage ruby dependencies.
```bash
gem install bundle
```

Then install the dependencies required by this repo:
```bash
bundle install
```

Finally, you can bring the site up locally on port 4000 by running the `serve` script at the top level of this repo:
```bash
#If script does not have run permissions, run chmod +x ./serve
./serve
```

A build server will start, watch files in this folder for changes, and automatically publish any changes you make to the local instance.

## Posts

All posts to the site are encoded as markdown in the `_posts` folder. The `posts` folder (no underscore) just contains the markup for post category pages.

To add a new post, all one has to do is add a new file to `_posts` that follows the conventions laid out by the existing post files.
Files should be named like `YYYY-MM-DD-name-of-event.md`, and any images pertaining to that post should go into a new folder `/img/YYYY-MM-DD-name-of-event`.

The metadata of the post appears at the top of the markdown file, e.g.
```
---
title:  iCAN Summer Happy Hours
layout: post
author: <a href="https://www.linkedin.com/in/seanrmcgrath/" target="_blank">Sean McGrath</a>
date: '2020-11-19'
category_display: Community Event
category: community
---
```

All fields here are important and should be attended to carefully.
All posts should have `layout: post`.
`author` can contain arbitrary HTML - please only use this to link to the personal sites or profile pages of contributing authors.

Posts can be categorized - the two categories currently supported are `community` and `service`.

Please ensure all images are prepended with the `{: .image}` flag and have a `width=800` attribute set - this ensures correct formatting.

Finally, make sure all markdown links are set with `target=_blank` so that when visitors click the links, they open in new tabs.