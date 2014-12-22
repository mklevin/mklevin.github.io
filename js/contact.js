$("#contact_form").delegate('form', 'submit', function(event) {
	alert("Got this far!");
	event.preventDefault();
});