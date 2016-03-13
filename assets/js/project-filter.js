'use strict';
// Assumes .mentor-card and .mentor-description classes
// Assumes #mentor-filter select element
// only supports one category at a time for now
function filterProjectsBy(evt) {
  var category = evt.target.value;
  $('.project-filterable').hide();
  if (category) {
    $('.' + category).show();
  } else {
    $('.project-filterable').show();
  }
}
$(function () {
  $('#project-filter').change(filterProjectsBy);
});

