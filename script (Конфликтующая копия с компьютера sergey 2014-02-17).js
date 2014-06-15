"use strict";


function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n-1);
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function getKeysCount(obj) {
    var counter = 0;
    for (var key in obj) {
        counter++;
    }
    return counter;
}
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
function clone(obj) {
    var obj2 = {};
    for(var key in obj)
        obj2[key] = obj[key];
    return obj2;
}
if ( [].indexOf ) {
    var find = function(array, value) {
        return array.indexOf(value);
    }
} else {
    var find = function(array, value) {
        for(var i=0; i<array.length; i++) {
            if (array[i] === value) return i;
        }
        return -1;
    }
}

//var val1 = +prompt('x:', '');
var ff = 'abcdifghiklmnopqrstuvwxyz';
var nmb = 1986;
var key = 'age';
var obj = { id: 1 }; // or = new Object();
obj.name = 'Sergey';
obj.age = 28;
obj['birth day'] = '10.01.1986'; // reason to use []
var arr = ['a', 's', 'd', obj, 'end' ];
arr[arr.length] = 'компьютер';

alert( arr[arr.length - 1] );
if ( [].indexOf ){
    alert('indexOf is ok');
}
alert( new Array(40).join("ля") );
arr.length = 0;

/*
var user = { name: 'Вася' };
var admin = user;
alert( 'user.name ' + user.name + '\nadmin.name ' + admin.name);
admin.name = 'Петя';
alert( 'user.name ' + user.name + '\nadmin.name ' + admin.name);
*/
/*
alert( obj.id + '. ' + obj.name + '\'s age is ' + obj.age );
alert( obj.name + '\'s birthday is ' + obj['birth day'] );

delete obj.name;

if ('name' in obj ){
    alert('there is name!!!');
}else{
    alert('there isn\'t name');
}
alert(obj.name === undefined);
alert( obj['age'] ); // == obj.age
alert( obj[key] ); // == obj.age

for ( var key in obj ){
    alert('Key |' + key + '| value |' + obj[key] + '|' );
}
*/
//alert( sumTo(val1) );
//alert( '\"hello\nworld\' \u00A9'.toUpperCase() );
//if (ff.charAt(25) === '' ) alert( ff.charAt(25) );
//if (ff[25] === undefined ) alert( ff[25] );
//alert( ff.indexOf('cy', 2) );
//alert( isFinite(0/0) );
//alert( parseInt('111', 2) );
//alert(isNumeric(null));
//alert(nmb.toString(16)); //7c2 - 1986(16)
//alert(Math.round(3.49)); alert(~~3.14); alert(3.14^0);
//alert(Math.round(Math.random()*100));
//alert( String(null) === "null" ); // true
//alert( Number("123") === 123 ); // true
//alert( !!"0" ); // true
//alert( Boolean(2) ); // true
//alert( false == " " ); // true
//alert( 4 + 5 + "1"  ); // automaticly convert to string

/*
var val1 = prompt('x:', '');
var val2 = prompt('y:', '');

function pow( v1, v2 )
{
	var count;
	var tmp = 1;
	for( count = 1; count <= v2; count++ )
	{
		tmp *= v1;
	}
	return tmp;
}
alert(pow(val1, val2));
*/
/*    
var val1 = prompt('enter number:', 10);
 
var tmp;

for (var i = 1; i <= val1; i++ )
{
	tmp = 0;
	for ( var j = 1; j <= i; j++)
	{
		if( (i % j) == 0 ) tmp++;
	}
	if(tmp < 3) 
		alert(i);
}
*/