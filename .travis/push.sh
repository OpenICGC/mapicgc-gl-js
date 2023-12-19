#!/bin/sh
# Push the commit with the updated package.json back to the repo

# Enabling this causes a build loop until the following issue is fixed:
# https://github.com/travis-ci/travis-ci/issues/8051

# git branch travis-temp
# git checkout master
# git merge travis-temp
# git push https://geostarters:${GITHUB_TOKEN}@github.com/geostarters/icgc-js-common.git
git push --tags https://geostarters:${GITHUB_TOKEN}@github.com/geostarters/icgc-js-common.git