(function(global) {
    'use strict';
// j'ai changé le fichié
    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
      return i%2 === 0;
    };

    JS_BASICS.getFileExtension = function(str) {

        if(str.indexOf('.')=== -1){ return false;}
        else{ return str.split(".")[str.split(".").length-1]; }

        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
    };

    JS_BASICS.longestString = function(arr) {
      var maxS=0, imax = 0 ;
      for(var i = 0; i < arr.length; i++ ){
        if(arr[i].length > maxS && typeof arr[i]=="string"){
           maxS = arr[i].length;
           imax = i;
       }
      }
    return arr[imax];
    };

    JS_BASICS.reverseString = function(str) {
        var word='';
        for(var i = str.length-1; i >= 0; i-- ){
         word = word.concat(str.charAt(i));
        }
        return word;
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
    };

    JS_BASICS.isPalindrome = function(str) {
        var word = JS_BASICS.reverseString(str);
        word = word.toLowerCase();
        str = str.toLowerCase();
        word = word.replace(" ","");
        str = str.replace(" ","");
        if(word === str){return true; } else return false;
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
    };

    JS_BASICS.nestedSum = function(arr) {
       var sum =0;
       for(var i = 0; i < arr.length; i++){
         if(typeof arr[i] == "object"){
           sum += JS_BASICS.nestedSum(arr[i]);
         }
        else if(Number.isInteger(arr[i])){
        sum += arr[i];
         }
       }

      return sum;
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
    };

    global.JS_BASICS = JS_BASICS;
}(this));
