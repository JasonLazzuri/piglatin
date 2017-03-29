$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var array = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var vowels = ["a","A","e","E","i","I","o","O","u","U"];

    var input = $("#textPig").val();
    var split = input.split('');



    for(var i = 0; i<split.length; i++){
      if(array.indexOf(split[i]) === -1){
        i=split.length-1;
        alert("Please no symbols");
      }
    }

    if (input === "a" || input === "i" || input === "A" || input === "I"){
      alert (input + "ay")
  };

  });
});
