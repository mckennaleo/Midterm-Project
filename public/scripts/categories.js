

//get the ressource by categories
$(document).ready(function() {
  $('.search-form').submit(function(e) {
    e.preventDefault();
    let input = $('.category-search').val();
    $.ajax({
      url: "/api/categories/search",
      data: { s: input },
      type: "GET"
    }).done(function(data) {
      //prepend or whatever
      console.log('Done', data);
    });
  });
});

//toggle the search menu when clicked
$(document).ready(function() {
  $('#nav-products .dropdown ul').width(0);
  $('#search').on("click", function() {
    console.log('done');
    const searchBox = $(this).find('ul');
    if (searchBox.is(":hidden")) {
      console.log("show");
      searchBox.show().animate({
        'width': '180px'
      }, 175);
    } else {
      console.log("hide");
      searchBox.hide();
    }
  });
});

