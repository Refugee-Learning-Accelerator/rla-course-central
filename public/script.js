var getTeamContainer = function (teamName) {
  return $('<div class="container">\
    <div class="row">\
      <div class="col-lg-12 text-center">\
        <hr class="primary">\
        <h2 class="section-heading">' + teamName + '</h2>\
      </div>\
    </div>\
  </div>')
}

var getMemberColumn = function (name, username) {
  return $('<div class="col-lg-3 col-md-6 text-center">\
    <div class="service-box">\
      <!-- <img src="path_to_photo"> -->\
      <h3>' + name + '</h3>\
      <p>@' + username + '</p>\
    </div>\
  </div>');
}

var addTeam = function (team) {
  var teamSection = $('<section></section>');
  var memberContainer = $('<div class="container"></div>')
  var memberRow = $('<div class="row"></div>');

  team['members'].forEach(function (member) {
    memberRow.append(getMemberColumn(member['name'], member['username']));
  });
  memberContainer.append(memberRow);
  teamSection.append(getTeamContainer(team['teamName']));
  teamSection.append(memberContainer);
  $('#teams').append(teamSection);
}

$(document).ready(function () {
  $.getJSON('./participants.json', function (teams) {
    teams.forEach(function (team) {
      addTeam(team);
    });
  });
});
