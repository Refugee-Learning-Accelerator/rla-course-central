if [ ${PWD##*/} == "web" ]; then
  cd ..
fi
if [ ${PWD##*/} == "scripts" ]; then
  cd ../..
fi
cp participants.json web/assets/json/
cp -R teams web/
cd web/scripts; python generate-photo-links.py; cd ..
python -m SimpleHTTPServer
