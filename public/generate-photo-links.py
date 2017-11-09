import json

teams = json.load(open('./participants.json', 'r'))
links = {}
for team in teams:
	files = os.listdir('./teams/' + team['teamName'] + '/photos')
	for member in team['members']:
		if member['username']:
			filtered_files = filter(lambda x: member['username'].toLower() == x.split('.')[0].toLower(), files)
			if len(filtered_files) > 0:
				links[member['username']] = filtered_files[0]
			else:
				links[member['username']] = ''
json.dump(links, open('./photo-links.json', 'w'))

