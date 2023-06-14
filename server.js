const express = require('express');
const app = express();

app.use(express.static('public_html'));

app.get('/', (req, res) => {
	res.send('<h1>Yummi</h1>');
});

app.listen(3000, () => {
	console.log('http://localhost:3000');
});
