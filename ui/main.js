var button = document.getElementById('counter');

    var request = new XMLHttpResuest();
    button.onclick = function(){
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpREquest.DONE){
        if(request.staus === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        }
};
request.open('GET','http://tivyaruppa93.imad.hasura-app.io/counter',true);
request.send(null);
};   