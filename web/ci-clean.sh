if [ ${PWD##*/} == "web" ]; then
  cd ..
fi
cd web
rm -rf teams
rm participants.json
rm photo-links.json
