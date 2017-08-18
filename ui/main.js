//Counter code
var button = document.getElementById('counter');

button.onclick = function() { 
        //Create a request to the counter endpoint
 var request = new XMLHttprequest();
    //capture the response and store it ina variable
 request.onreadystatechange = function() {
     if(request.readystate === XMLHttprequest.DONE) {
     //take some action
     if(request.status===200) {
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
     }
     }
  };
        request.open('GET','http://tivyaruppa93.imad.hasura-app.io/counter', true);
        request.send(null);
};
var nameinput = document.getElementById('Name');
var name = nameinput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    var names = [Name1,Name2,Name3,Name4];
    var list = '';
    for(var i=0;i<name.length;i++){
        list == '<li>'+names[i]+'</li>';
    }
var ul = document.getElementById('namelist');
ul.innerHTML = list;
};    
