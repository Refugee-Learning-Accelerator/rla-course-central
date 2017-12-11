if [ ${PWD##*/} == "web" ]; then
  cd ..
fi
if [ ${PWD##*/} == "scripts" ]; then
  cd ../..
fi
cp participants.json web/assets/json/
cp -R teams web/
cp challenge1/README.md web/assets/md/challenge1.md
cp challenge2/README.md web/assets/md/challenge2.md
cp challenge3/README.md web/assets/md/challenge3.md
cd web/scripts; python generate-photo-links.py; cd ..
python -m SimpleHTTPServer
