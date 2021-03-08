# Using Existing Templates to aid in development

Its always good to start something from scratch, but its never a good idea to re-invent the wheel.

## We are going Materializecss 

https://materializecss.com/getting-started.html

# 
# Deploying our progress to github-pages

[https://pages.github.com/](https://pages.github.com/)

Considering that all the steps were taken to create your pages website, we will now have to copy our  project's source code, into the newly create pages repository


### 1. Clone the gh-pages repo 
```
git clone https://github.com/username/username.github.io
```
Take note of the placeholder "username" because this is now your Github username, you can  find your username by logging into GitHub and on the top right menu, click the dropdown and there  should be an option "Your Profile", once you click on that, you  will now see your GitHub username on the  URL bar of your browser, now you can  just copy that

So for example, mine would be https://github.com/KeithNdhlovu, then my  username is "KeithNdhlovu"

Meaning i will be cloning the repository 
```
git clone https://github.com/KeithNdhlovu/keithndhlovu.github.io
```
Mine has a special case where the repository is not capitalised, but  that should not be a big deal  for you.

Now gonna goto my project root folder, and clone this repository there

```
cd /Projects
```

```
git clone https://github.com/KeithNdhlovu/keithndhlovu.github.io
```

Now once this is done, you should  now have a new folder in your `Projects` folder called `username.github.io` mine being  `keithndhlovu.github.io`

This is the folder where we will  be copying our project data into

### 2. Copy the  contents  of "Season 1, Episode 6" into the username.github.io folder

```
cp -fr "/DevJam/Season 1 - (Let there be light)/E6 - Facebook cover page (Continued)/*" "/Projects/username.github.io/"
```

or you could just do this  manually, i mean now everyone loves CMD ;P

Once you have managed to copy everything into the "username.github.io" folder, now commit everything and push your new changes

```
1. cd  /Projects/username.github.io/

2. git add .

3. git commit  -m "DevJam updates"

4. git push
```

Now that our updates are pushed, lets check what our repository has for us by visiting https://github.com/KeithNdhlovu/keithndhlovu.github.io

so our GH-Pages website should be under the link 

https://keithndhlovu.github.io
