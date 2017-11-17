$(document).ready(function () {
  $('#navbar').load('navbar.html');
  $.getJSON('./assets/json/participants.json', function (teams) {
    $.getJSON('./assets/json/photo-links.json', function (links) {

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
      
      teams.forEach(function (team) {
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
      });
    });
  });
});
