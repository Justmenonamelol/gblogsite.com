var moment = require("moment");

var myDate = new Date();
var myDateFormat = moment(myDate).format("LL");

console.log(myDateFormat);
