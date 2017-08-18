//Counter code
var button = document.getElementById('counter');

button.onclick = function() { 
    
    //Make a request to the counter endpoint
 var request = new XMLHttprequest();
    //capture the response and store it ina variable
 request.onreadystatechange = function() {
     if(request.readystate === XMLHttprequest.DONE)
     if(request.status===200) {
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
     }
 };
request.open (Get)
var name = document.getElementById('Name');
var submit = document.getElementById('submitbtn');