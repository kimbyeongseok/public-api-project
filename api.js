$(document).ready(function () {
  var dataItems = [];
  function getTime(count) {
    $.ajax({
      url: "https://spaceweather.rra.go.kr/api/ace/sw",
      dataType: "jsonp",
      success: function (data) {
        var dataTime = data.data[count].time;
        var dataProtonDensity = data.data[count].protonDensity;
        var dataBulkSpeed = data.data[count].bulkSpeed;
        var dataIonTemp = data.data[count].ionTemp;
        dataItems = `
            <div class="solar_item">
            <p>수집시각</p>
            <p>${dataTime.substr(0, 4)}년 
                ${dataTime.substr(4, 2)}월 
                ${dataTime.substr(6, 2)}일 
                ${dataTime.substr(8, 2)}시 
                ${dataTime.substr(10, 2)}분</p>
            <p>태양풍 밀도</p>
            <p>${dataProtonDensity}</p>
            <p>태양풍 속도</p>
            <p>${dataBulkSpeed}</p>
            <p>태양풍 온도</p>
            <p>${dataIonTemp}</p>
            </div>
            `;
        $(".solar").append(dataItems);
      },
    });
  }
  for (var i = 1; i < 30; i++) {
    getTime(i);
  }
});
