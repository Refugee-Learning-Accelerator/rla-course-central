if [ ${PWD##*/} == "web" ]; then
  cd ..
fi
if [ ${PWD##*/} == "meta" ]; then
  cd ../..
fi
rm -rf web/teams
rm -rf web/assets/md
rm -rf web/assets/json
rm -rf web/portfolio
