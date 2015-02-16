//increment.js 
var add = require('./math.js').add;
exports.increment = function (a){
	return add(a,1);
	};
