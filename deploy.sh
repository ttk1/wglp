#!/bin/bash -eu

npm install
npm run dist

if [[ ! -d tmp ]]; then
  mkdir tmp
fi

rm -rf tmp/*
cp -r public/* tmp
cp -r dist/* tmp

git checkout --force gh-pages
ls -a | grep -E -v '^(\.|\.\.|\.gitignore|\.git|\.circleci|tmp|node_modules|CNAME)$' | xargs rm -r
mv tmp/* .
rm -r tmp

git config --global user.name 'CircleCi'
git config --global user.email "tama@ttk1.net"
git add -A

set +e
git commit -m 'gh-pages deploy'
result=$?
set -e

if [[ $result = 0 ]]; then
  git push origin gh-pages
else
  echo 'nothing to commit'
fi