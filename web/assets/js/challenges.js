$(document).ready(function () {
  var data = {};
  var BASE = "/assets/md/";

  $('#navbar').load('navbar.html');
  $('.nav-link').click(function(e) {
    e.preventDefault;
    var challenge = $(e.target).data("chal");
    if (!(challenge in data)) {
      $.get(BASE + challenge + ".md", function(resp) {
        $(".challenge-data").html(marked(resp));
      })
    }
  })
});
