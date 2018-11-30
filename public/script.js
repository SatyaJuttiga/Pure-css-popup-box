function calc(){
    var result=document.getElementById("result");
    var popup=document.getElementById("popup1");
   popup.style="visibility:hidden; opacity:0"
    
    var c1=parseInt(getRadioVal("c1"));
    
    var c2=parseInt(getRadioVal("c2"));
    
    var total=document.getElementById("total");
    total.innerHTML=c1+c2;
    
    result.style="visibility:visible"
  }
  
  function getRadioVal(name) {
      var val;
      var radios = document.getElementsByName(name);
  
      for (var i=0, len=radios.length; i<len; i++) {
          if ( radios[i].checked ) { 
              val = radios[i].value; 
              break;
          }
      }
      return val;
  }
  
  function popup(){
    var result=document.getElementById("result");
    result.style="visibility:hidden";
    
    var popup=document.getElementById("popup1");
   popup.style="visibility:visible; opacity:1";
  }
  
  function clrscr(){
    var result=document.getElementById("result");
    result.style="visibility:hidden";
    
     var popup=document.getElementById("popup1");
   popup.style="visibility:hidden; opacity:0";
  }