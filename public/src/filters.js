app.filter('labelCase', function() {
	return function (input){
		input = input.replace(/([A-Z])/g, ' $1');
		return input[0].toUpperCase() + input.slice(1);
	};
});
app.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
  });