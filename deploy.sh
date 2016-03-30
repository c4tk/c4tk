#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the out directory
rm -rf dist || exit 0;
MESSAGE=$(git log -1 HEAD --pretty=format:%s)
git clone "https://${GH_TOKEN}@${GH_REF}" dist --branch gh-pages

# run our compile script, discussed above
grunt build

# copy travis for whitelisting only master branch
cp .travis.yml dist

# go to the out directory and create a *new* Git repo
cd dist

echo 'codeforthekingdom.org' > CNAME

git init

# inside this git repo we'll pretend to be a new user
git config user.name "Build bot by Kamil"
git config user.email "galuszkak@gmail.com"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "${MESSAGE}"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" gh-pages:gh-pages > /dev/null 2>&1
