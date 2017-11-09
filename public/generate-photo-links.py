import json

participants = json.load(open('./participants.json', 'r'))
members = reduce(lambda x,y: x+y, map(lambda x: x['members'], participants))
links = {}
for member in members:
	if member['username']:
		links[member['username']] = ''
json.dump(open('./photo-links.json', 'w'))
