var teamLink = function (teamName) {
    return './portfolio/' + teamName + '.html'
}

$(document).ready(function () {
  $('#navbar').load('navbar.html');
  $.getJSON('./assets/json/teams.json', function (teamNames) {
    teamNames = teamNames['teamNames'];
    var teamLinkCols = [$(".tcol1"), $(".tcol2"), $(".tcol3")];
    for (var i = 0; i < teamNames.length; i++) {
      $(".tcol" + ((i % 3) + 1)).append($("<a href='" + teamLink(teamNames[i]) + "' target='_blank'>" + teamNames[i] + "</a><br>"));
    }
  });
});
