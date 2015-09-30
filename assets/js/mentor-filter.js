'use strict';
// Assumes .mentor-card and .mentor-description classes
// Assumes #mentor-filter select element
// only supports one category at a time for now
function filterMentorsBy(evt) {
  var category = evt.target.value;
  $('.mentor-filterable').hide();
  if (category) {
    $('.' + category).show();
  } else {
    $('.mentor-filterable').show();
  }
}
$(function () {
  $('#mentor-filter').change(filterMentorsBy);
  $('#mentor-filter').select2({
    minimumResultsForSearch: Infinity
  });
});

