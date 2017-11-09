import json
import os

teams = json.load(open('./participants.json', 'r'))
links = {}
for team in teams:
	directory = './teams/' + team['teamName'] + '/photos'
	if not os.path.exists(directory):
		continue
	files = os.listdir(directory)
	for member in team['members']:
		if not member['username']:
			continue
		filtered_files = filter(lambda x: member['username'].lower() == x.split('.')[0].lower(), files)
		links[member['username']] = filtered_files[0] if len(filtered_files) > 0 else ''
	json.dump(links, open('./photo-links.json', 'w'))

