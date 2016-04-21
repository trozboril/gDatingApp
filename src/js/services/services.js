app.service('memberService', [function () {

  return {
    getAge: function (date) {
      console.log(date);
      var pureDate = date.slice(0,10);
      return pureDate;
    }
  };
}]);

//1968-08-09T11:12:04.869Z