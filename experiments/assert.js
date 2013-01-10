(function() {

	var resultDiv = document.createElement('div');
	resultDiv.innerHTML = 'All tests passed.';

	document.body.appendChild(resultDiv);
	
	assert = function(e) {
		if (!e) {
			resultDiv.innerHTML = 'A test failed.';
			resultDiv.style.color = 'red';
		}
	};

})();
