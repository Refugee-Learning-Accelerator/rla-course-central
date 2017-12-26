$(document).ready(function () {
  $('#home-heading').text(teamName);
  $('#header-link').attr('href', 'https://gitlab.refugeelearning.site/rla/' + teamName + '/team-template');

  for (var i = 0; i < submissions.length; i++) {
    $('#submissions-list').append($('<li class="nav-item">\
      <a class="nav-link" data-toggle="tab" data-chal="' + i + '" role="tab">' + submissions[i][1] + '</a>\
    </li>'));
  }

  $('.nav-link').click(function(e) {
    e.preventDefault;
    var submission = submissions[$(e.target).data('chal')];
    var path = '/teams/' + teamName + submission[2];
    if (submission[2].endsWith('.md')) {
      $.get(path, function(resp) {
        $(".challenge-data").html(marked(resp));
      });
    } else {
      $(".challenge-data").html($('<iframe width="100%" height="600px" src="' + path + '"></iframe>'));
    }
  });
});
