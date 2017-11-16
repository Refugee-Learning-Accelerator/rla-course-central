if [ ${PWD##*/} == "web" ]; then
  cd ..
fi
cp participants.json web/
cp -R teams web/
cd web; python generate-photo-links.py
python -m SimpleHTTPServer
