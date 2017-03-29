$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var vowels = ["a","A","e","E","i","I","o","O","u","U"];
    var input = $("#textPig").val();
    var split = input.split(' ');
    var answer = [];

split - "love" "pigs"

    for(var i=0;i<split.length;i++){
      for(var j=0;j<split[i].length;j++){
        if((split[i][j]==="u"|| split[i][j]==="U") && (split[i][j-1]==="q"|| split[i][j-1]==="Q")){
          answer.push(split[i].slice(j+1)+split[i].substr(0,j+1)+"ay")
          j=split[i].length;
      }
      else if(vowels.indexOf(split[i][j])!=-1){
        answer.push(split[i].slice(j)+split[i].substr(0,j)+"ay");
        j=split[i].length;
      }else if(array.indexOf(split[i][j]) === -1){
        i=split.length-1;
        alert("Please no symbols");
        }
      }
    } alert(answer.join(' '));
  });
});




// if (input === "a" || input === "i" || input === "A" || input === "I"){
//   alert (input + "ay")
