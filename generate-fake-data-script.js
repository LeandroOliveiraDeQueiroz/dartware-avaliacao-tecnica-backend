const fs = require('fs');

var names = ['Leandro', 'Lucas', 'Lucio', 'Gabriel', 'Bohn',
              'Ruben', 'Arthur', 'Sant', 'Jairton', 'Diana',
              'Jamal', 'Cid', 'Felipe', 'Andressa', 'Luiz',
              'Túlio', 'Lorenna', 'Thomaz', 'Vitor', 'Lucca'];

console.log(names.length);

var users = [];
var articles = [];

names.forEach((name, i)=>{
  users.push({
		"name": name,
		"email": name + "@gmail.com",
		"image_url": "https//" +  name,
		"address": {
			"city": name + " City",
			"street": name + " Street"
    }
  });

  articles.push({
		"title": i + " Article",
		"body": "FAKE DATA TEXT."
	});
});


fs.writeFile('db.json', JSON.stringify({users, articles}), (err) => {
  if (err) throw err;
  console.log('Saved!');
});