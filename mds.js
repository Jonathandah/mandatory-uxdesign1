 const mds = {
    textField: function(value){
      console.log("funktionen körs");
      let textFieldInput = document.querySelector(".mds-text-field__input").value; 
      let textFieldLabel = document.querySelector(".mds-text-field__label");
      console.log(textFieldInput);
      textFieldLabel.setAttribute("style","");
      if(textFieldInput){
        textFieldLabel.setAttribute("style", "top:12px; font-size: 12px;");  
      }
    },
    switch: function(value){

    },

    checkBox: function(value){  
    },

    radio: function(value){
      
    }
 }
