$(document).ready(function () {
  $('#navbar').load('navbar.html');
  $.getJSON('./assets/json/participants.json', function (teams) {
    $.getJSON('./assets/json/photo-links.json', function (links) {
      $.getJSON('./assets/json/teams.json', function (teams_filter) {
        teams_filter = teams_filter['teamNames'];
        teams = teams.filter(function (team) { return teams_filter.indexOf(team['teamName']) >= 0; });

        var getTeamContainer = function (teamName) {
          return $('<div class="row">\
              <div class="col-lg-12 text-center">\
                <hr class="primary">\
                <div class="team-name">' + teamName + '</h2>\
              </div>\
            </div>')
        }

        var getMemberColumn = function (name, username, teamName) {
          var profilePath = 'https://gitlab.refugeelearning.site/' + username;
          var photoPath = './assets/img/placeholder.png';
          if (username && links[username]) {
            photoPath = './teams/' + teamName + '/photos/' + links[username];
          }

          return $('<div class="col-sm-6 col-md-3 text-center">\
            <div class="member-card">\
              <div class="member-card-top">\
                <a href="' + profilePath + '">\
                  <img class="member-photo" src="' + photoPath + '" alt="photo unavailable">\
                </a>\
              </div>\
              <div class="member-card-bottom">\
                <div class="member-name">' + name + '</div>\
                <a href=' + profilePath + ' class="member-username">@' + username + '</a>\
              </div>\
            </div>\
          </div>');
        }

        // teams.forEach(function (team) {
        console.log(teams_filter)
        console.log(teams)
        for (i = 0; i < teams_filter.length; i++) {
          team = teams.filter(function (team) { return team['teamName'] == teams_filter[i]; })[0];
          console.log(team);

          var teamSection = $('<section></section>');
          var memberContainer = $('<div class="container"></div>')
          var memberRow = $('<div class="row"></div>');

          team['members'].forEach(function (member) {
            memberRow.append(getMemberColumn(member['name'], member['username'], team['teamName']));
          });
          memberContainer.append(memberRow);
          teamSection.append(getTeamContainer(team['teamName']));
          teamSection.append(memberContainer);
          $('#teams').append(teamSection);
        }
      });
    });
  });
});
