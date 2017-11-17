if [ ${PWD##*/} == "web" ]; then
  cd ..
fi
if [ ${PWD##*/} == "scripts" ]; then
  cd ../..
fi
cd web
rm -rf teams
rm assets/json/participants.json
rm assets/json/photo-links.json
