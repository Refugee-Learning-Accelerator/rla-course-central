rm -rf web/teams
rm -rf web/assets/md
rm -rf web/assets/json
rm -rf web/portfolio

mkdir web/teams
for D in teams/*/; do
  mkdir web/$D
  cp -R $D'photos' web/$D
done

mkdir web/assets/md
cp challenge1/README.md web/assets/md/challenge1.md
cp challenge2/README.md web/assets/md/challenge2.md
cp challenge3/README.md web/assets/md/challenge3.md

mkdir web/assets/json
cp participants.json web/assets/json/
cp web/meta/teams.json web/assets/json/
cd web/meta; python generate-photo-links.py; cd ../..

mkdir web/portfolio
cd web/meta; python generate-portfolio-sites.py; cd ../..
