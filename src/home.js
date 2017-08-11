import './style.css';

console.log('this is home');

var User = require('./user');
var user1 = new User('kongxx');
console.log("Hi, I am " + user1.getName());

var user2 = new User('ken');
console.log('running in electron:', require('is-electron-renderer'));