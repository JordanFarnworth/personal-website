#!/bin/bash
# first arg (all|stream) - get all code, or only what is in the git stream
# second arg (commit message) - the commit message for heroku
# third arg (name of remote) - ex: origin or heroku
# fourth arg (branch name) - ex: master, production, test
echo 'clearing buildpack'
heroku buildpacks:clear
echo 'adding buildpack'
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git
if [ $1 = "all" ]; then
   echo 'adding all'
   git add -A
fi
if [ $1 = "stream" ]; then
   echo 'updating stream'
   git add -u
fi
echo 'commiting'
echo "$2"
git commit -m "$2"
echo 'pushing..'
git push $3 $4
