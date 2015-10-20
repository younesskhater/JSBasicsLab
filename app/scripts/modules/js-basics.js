(function(global) {
    'use strict';
// j'ai changé le fichié
    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
      return i%2 === 0;
    };

    JS_BASICS.getFileExtension = function(str) {
        
        var index = str.indexOf('.');
        if(index === null){ return false;}
        else{  res = str.split("."); 
               return res[2];      }   
         
               

        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
    };

    JS_BASICS.longestString = function(arr) {
        // arr will be an array.
        // Return the longest string in the array
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
    };

    global.JS_BASICS = JS_BASICS;
}(this));
