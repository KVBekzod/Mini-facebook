

var database = [

{

username:'Bek',
password:'Slifer',
Age:25,
hobby:'IT'
},

{


username:'Diyor',
password:'Obelix',
Age:17,
hobby:'soccer'

},

{

username:'Shakhlo',
password:'magicienne',
Age:25,
hobby:'danse'

}];



var newsfeed = [

{

username:'Bek',
timeline:'Programmation',
},

{

username:'Shakhlo',
timeline:'Anniversaire',

},

{

username:'Diyor',
timeline:'Kichkina',

}


];



function signin (username, pass) {
   for (var i=0; i<database.length; i++) {
   	if (database[i].username === username && 
		database[i].password === pass)
	{
		console.log(newsfeed);
		return;
	}
 
	}
	
		alert("Sorry, wrong username and password");


}




var usernamep = prompt("Quel est votre nom d'utilisateur : ");
var passp = prompt("Quel est votre mot de passe : ");



signin(usernamep, passp);

