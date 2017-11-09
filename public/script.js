/* Original (working) gallery container)
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
*/

/* New experimental */
var getTeamContainer = function (teamName) {
  return $('<div class="container gallery-container">\
  <div class="tz-gallery">\
    <div class="row">\
      <div class="col-lg-12 text-center">\
        <hr class="primary">\
        <h2 class="section-heading">' + teamName + '</h2>\
      </div>\
    </div>\
  </div>')
}
        

var urlExists = function (url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status != 404;
}

var pathToPhoto = function (username, teamName) {
  var pathBase = './teams/' + teamName + '/photos/' + username + '.';
  if (urlExists(pathBase + 'jpg')) return pathBase + 'jpg';
  if (urlExists(pathBase + 'jpeg')) return pathBase + 'jpeg';
  if (urlExists(pathBase + 'png')) return pathBase + 'png';
  if (urlExists(pathBase + 'gif')) return pathBase + 'gif';
  return './placeholder.png'
}

/* Original (working) individual person photo generator 
var getMemberColumn = function (name, username, teamName) {
  return $('<div class="col-lg-3 col-md-6 text-center">\
    <div class="service-box">\
      <img width="200px" src="' + pathToPhoto(username, teamName) + '" alt="no photo">\
      <h3>' + name + '</h3>\
      <p>@' + username + '</p>\
    </div>\
  </div>');
}
*/

/* New Gallery (experimental) */
var getMemberColumn = function (name, username, teamName) {
  return $('<div class="col-lg-3 col-md-6 text-center">\
    <div class="thumbnail">\
      <a class="lightbox" href="ENTER LINK TO USER PROFILE">\
      <img width="200px" src="' + pathToPhoto(username, teamName) + '" alt="no photo">\
      </a>\
    </div>\
    <div class="caption">\
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
    memberRow.append(getMemberColumn(member['name'], member['username'], team['teamName']));
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
