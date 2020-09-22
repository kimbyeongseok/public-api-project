$(document).ready(function () {
  var dataItems = [];

  $.ajax({
    url: "http://spaceweather.rra.go.kr/api/ace/sw",
    dataType: "jsonp",
    success: function (data) {
      dataItems = `<p>${["data"][1]["time"]}</p>
        <p>${data[1].protonDensity}</p>
        <p>${data[1].bulkSpeed}</p>
        <p>${data[1].ionTemp}</p>`;
      $(".solar").append(dataItems);
    },
  });
});
