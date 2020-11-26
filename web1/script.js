console.log ("bitch!!!");
function say(){
console.log("1st line");
}
say();
function song(s){
	console.log(s);
}
song("avvddddd");

function multiply(a,b){
	// console.log("this is multiply " + a*b);
	return a*b;
}
	var aa=multiply(3,6);
	console.log(aa);

function sum(a,b){
	var s=( a+b);
	alert(s);
}
var list=["tiger","giraffe","lion","1233",785757];
console.log(list[2]);

var database=[
			{
				name: "yash",
				pass:"abcd" 
			},
			{
				name:"pranav",
				pass:"1234"
		}
	];

var name=prompt("whats ur name");
var pass=prompt("password?");

// var	 n=database.length;
// for(var i=0;i<n;i++){
// 	if(database[i].name==name && database[i].pass==pass){
// 		console.log("found!!!");
// 		break;
// 	}
// }
// if(i==n)
// console.log("not found");

var button = document.getElementById("enter");
var input= document.getElementById("userinput");

button.addEventListener("click",call);
function call(){
	alert(input.value);
}


