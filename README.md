# latest-docs

Simple WebExtension to rewrite URLs to always point to the latest documentation.

## Motivation

Documentation of programming languages or libraries tend to get outdated very quickly.
Search engines or Stackoverflow will often show links to older versions. In most cases,
that is not what you want. Instead, it is in most situations better to read the latest
version of the documentation.

## How to install?

As is experimental, it is not available in the addon stores. What I do is to load it
manually (e.g. `about:debugging` in Cliqz/Firefox or `chrome://extensions` in Chrome).

## How does it work?

This extension examines all links and if it detects an outdated link, will update it
on the fly. The list of supported programming languages is still small, but it is
easy to add them (see `rewrite-urls.js`):

* Python
* Crystal
* Ruby
* C++ Boost libraries

## How to contribute

Pull requests to add more languages are welcome.

## Future ideas

* Support more languages
* Add an option to bump the currently loaded page
* Add an option to disable it (sometimes you need to read the old documentation)
