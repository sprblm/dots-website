set -e
git submodule update --init
cd dots-patterns
git pull --ff-only
