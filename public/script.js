$(document).ready(function () {
  $.getJSON('./participants.json', function (teams) {
    $.getJSON('./photo-links.json', function (links) {

      var getTeamContainer = function (teamName) {
        return $('<div class="container gallery-container">\
          <div class="row">\
            <div class="col-lg-12 text-center">\
              <hr class="primary">\
              <h2 class="section-heading">' + teamName + '</h2>\
            </div>\
          </div>\
        </div>')
      }
      
      var getMemberColumn = function (name, username, teamName) {
        var photoPath = './placeholder.png';
        if (username && links[username]) {
          photoPath = './teams/' + teamName + '/photos/' + links[username];
        }
        return $('<div class="col-sm-6 col-md-4">\
          <div class="thumbnail">\
            <a class="lightbox" href="ENTER LINK TO USER PROFILE">\
            <img width="200px" src="' + photoPath + '" alt="no photo">\
            </a>\
          </div>\
          <div class="caption">\
            <h3>' + name + '</h3>\
            <p>@' + username + '</p>\
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
