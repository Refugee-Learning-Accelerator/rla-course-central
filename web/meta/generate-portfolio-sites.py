from shutil import copyfile
import json
import os

teams = json.load(open('../assets/json/teams.json', 'r'))['teamNames']
submissions = json.load(open('./submissions.json', 'r'))['submissions']

def copy_submission(submission):
    src_path = '../../teams/' + submission[0] + submission[2]
    dst_path = '../teams/' + submission[0] + submission[2]

    dst_folder = '/'.join(dst_path.split('/')[:-1])
    if not os.path.exists(dst_folder):
        try:
            os.makedirs(dst_folder)
        except Exception as e:
            print 'FAILED!', src_path
            return False

    try:
        copyfile(src_path, dst_path)
    except Exception as e:
        print 'FAILED!', src_path
        return False

    return True

for team in teams:
    f = open('../portfolio/' + team + '.html', 'w')
    teamSubmissions = filter(lambda x: (x[0] == team) and copy_submission(x), submissions)
    injectedScript = 'var teamName = "' + team + '";\nvar submissions = ' + json.dumps(teamSubmissions) + ';'
    html = open('../portfolio-template.html', 'r').read()
    html = html.replace("INJECTED_SCRIPT_HERE", injectedScript)
    f.write(html)
    f.close()
