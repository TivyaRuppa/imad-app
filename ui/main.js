//Counter code
var button = document.getElementById('counter');

button.onclick = function() { 
        //Create a request to the counter endpoint
 var request = new XMLHttpRequest();
    //capture the response and store it ina variable
 request.onreadystatechange = function() {
     if (request.readystate === XMLHttpRequest.DONE) {
     //take some action
     if (request.status===200) {
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
     }
     }
  };
        request.open('GET','http://tivyaruppa93.imad.hasura-app.io/counter', true);
        request.send(null);
};
