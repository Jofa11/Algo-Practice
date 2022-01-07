// Either takes a string which is a name, empty string or null. If it's a name return 
// 'Hello, <name>!' else return 'Hello, World!

const hello = (name) => {
	if (name) {
		return (
			'Hello, ' +
			name.charAt(0).toUpperCase() +
			name.slice(1).toLowerCase() +
			'!'
		);
	} else {
		return 'Hello, World!';
	}
};

console.log(hello('johN'));