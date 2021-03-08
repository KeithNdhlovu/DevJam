
## OLD School

```css
block-1 {
    height: 100px;
}

block-2 {
    height: 400px;
}

/* Block 3  height is  the sum of the height of block 1  and 2 */
block-3 {
    height: 500px;
    width: 500px/2
}

/* Height is the sum of block 1 and 2, minus the width of block 3 */
navbar-hero {
    height: 500px - 500px/2
}
```

## New  kid  on the block

```scss
.block {
    &-1{}
}
```






## Working with CSS the smart way

Install SASS from here https://sass-lang.com/install

## Introduction

CSS - Cascading Stylesheets since its inception has paved a way for the general web to be very presentable and beautiful

But using css can be tedious and clunky, because we end up getting stuck with having to write code in this one huge file and that starts to be confusing and thats not a nice feeling for a UI Developer

Now in recent years, there has been a lot of tools created to aid developers to focus more on creating the unique and beautiful the 

## Basic CSS

```css
.black-title {
    color: black;
    text-decoration: underline:
}

.description-text {
    font-size: 12px;
    color: grey;
}

nav {
    height: 70px;
    width: 100%;
}
```

The above css looks good and neat, but i dont suppose you imagine having an entire website with about 10 pages, could be styled using those few lines, so its much more worse than that.

The average number of lines in a css file for any good website could range from a few hundred lines to maybe a thousand, if you dont believe me, well lets look at what our subject of interest "Facebook" and check how many lines their css has, unfortunately i could not use one of Facebook's CSS to check since when using the unminifier it broke because the css file was too big. So since we are infatuated with Facebook we turned to Instagram to check on of their css files just to see the number of lines int the file

CSS Link `https://www.instagram.com/static/bundles/es6/ConsumerUICommons.css/0d6179b194eb.css`

NB: THESE FILES ARE MINIFIED, SO WE NEEDED TO UNMINIFY USING THE WEBSITE `https://unminify.com/`

The conclusion we came to was that this file had `5809` lines of code

So this is the reality of writing CSS
****

## SCSS (SASS) to the rescue

### SCSS Basics

```scss

// Define Variable
$nav-height: 80px;
$black: #000000;
$general-text-size: 12px;

// Basic calculations
$button-height: calc($nav-height/2px);
$button-width: $button-height + 300px;

.black-title {
    color: $black;
    text-decoration: underline;
}

.description-text {
    font-size: $general-text-size;
    color: grey;
}

nav {
    font-size: $general-text-size;
    height: $nav-height;
    width: 100%;

    .black-title {
        color: green;

        p {
            font-weight: bold;

            div {
                color: blue;
            }
        }
    }

    .description-text {
        font-size: $general-text-size;
        color: grey;
    }
}

```

## How do i use SCSS in my HTML?

And the short answer is, You don't

But why is that, maybe now we need to get into the details of what SCSS is.

### What is SCSS (SASS) ?

This is what Sass is, in their own words

`Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.`

### Getting started
`
Before you can use Sass, you need to set it up on your project. If you want to just browse here, go ahead, but we recommend you go install Sass first. Go here if you want to learn how to get everything setup.
`

#### Preprocessing

CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

Once you start tinkering with Sass, it will take your preprocessed Sass file and save it as a normal CSS file that you can use in your website.

The most direct way to make this happen is in your terminal. Once Sass is installed, you can compile your Sass to CSS using the sass command. You'll need to tell Sass which file to build from, and where to output CSS to. For example, running `sass input.scss output.css` from your terminal would take a single Sass file, input.scss, and compile that file to output.css.

You can also watch individual files or directories with the `--watch` flag. The watch flag tells Sass to watch your source files for changes, and re-compile CSS each time you save your Sass. If you wanted to watch (instead of manually build) your input.scss file, you'd just add the watch flag to your command, like so:

```shell
sass --watch input.scss output.css
```
You can watch and output to directories by using folder paths as your input and output, and separating them with a colon. In this example:

```shell
sass --watch app/sass:public/stylesheets
```

Sass would watch all files in the `app/sass` folder for changes, and compile CSS to the `public/stylesheets` folder.