$( "#trigger" ).click(function() {
    $( "#menu" ).toggleClass( "show" );
});


$( "#cardInput" ).click(function() {
    $( "#cardForm" ).toggleClass( "show" );
});

$( "#paypalInput" ).click(function() {
    $( "#cardForm" ).removeClass( "show" );
});
                          
$( "#efectivoInput" ).click(function() {
    $( "#cardForm" ).removeClass( "show" );
});

function Validar(formulario){
    
    var todo_correcto = true;
    
    var cardType, cardNumber, cardName,  cardMonth, cardYear, cardCvv;
    
    cardType = document.getElementById('cardType').value;
    cardNumber = document.getElementById('cardNumber').value;
    cardName = document.getElementById('cardName').value;
    cardMonth = document.getElementById('cardDate-month').value;
    cardYear = document.getElementById('cardDate-year').value;
    cardCvv = document.getElementById('cardSecurity').value;
    
    if(cardType == null || cardType == 0 ){
        alert("No haz seleccionado un tipo de tarjeta");
        cardType.focus();
        cardType.className = "show";
        todo_correcto = false;
    };
    
   if(cardNumber == "")
    {
         alert("No haz ingresado un número de tarjeta");
         todo_correcto = false;
    };
    
    if(cardName == "")
    {
         alert("No haz ingresado un Nombre para la tarjeta");
         todo_correcto = false;
    };

    if(cardMonth == null || cardMonth == 0 ){
        alert("No haz seleccionado el mes");
        todo_correcto = false;
    };    
    
    if(cardYear == null || cardYear == 0 ){
        alert("No haz seleccionado el año");
        todo_correcto = false;
    };
    
    if(cardCvv == null || cardCvv == 0 ){
        alert("No haz ingresado tu CVV");
        todo_correcto = false;
    };    

    return todo_correcto;
};


function tarjeta(){
 
    var cardType;
    cardType = document.getElementById('cardSecurity');
    
    if(cardType.checked = true){
        console.log("prueba");
       $( "#checkoutSubmit" ).click(function () {
           Validar($("#cardForm"));
        });
    };    
    
};

$( document ).ready(function() {
    tarjeta();
});