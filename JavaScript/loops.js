/*
    JAVASCRIPT LOOPING
    ------------------
    for
    do
    while
    forEach (new in ECMAScript 5)
 */

 var todos = [
     "clean room",
     "brush teeth",
     "exercise",
     "study javascript",
     "eat healthy"
 ];

 var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

// for
 var todosLength = todos.length;
 for (var i = 0; i < todosLength; i++) {
     console.log(i);
 }

 // forEach
 function logTodos(todo, i) {
     console.log(todo, i);
 }

 todos.forEach(logTodos);
 todosImportant.forEach(logTodos);

 // while - we check the condition first and then do things
 var counterOne = 10;
 while (counterOne > 10) {
     console.log("while", counterOne);
     counterOne--;
 }

 // do while - first we do things and then check conditon
 var counterTwo = 10;
 do {
     console.log("do while", counterTwo);
     counterTwo--;
 } while (counterTwo > 10);



