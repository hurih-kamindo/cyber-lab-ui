const { response } = require("express");

let input = document.querySelector("input");
let button = document.querySelector("btn-netcraft");

input.addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')

    .then((response) => response.json())
    .then((response) => 
        function () {
        let result = document.querySelector(".result");
            

    }

});

