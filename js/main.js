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
    
    var cardType = $('#cardType');
    var cardNumber = $('#cardNumber');
    var cardName = $('#cardName');
    var cardMonth = $('#cardDate-month');
    var cardYear = $('#cardDate-year');
    var cardCvv = $('#cardSecurity');
    
    if(cardType == null || cardType == 0 ){
        alert("No haz seleccionado un tipo de tarjeta");
        user.focus();
        todo_correcto = false;
    };
    
   if(cardNumber.value=="")
    {
         alert("No haz ingresado un número de tarjeta");
         user.focus();
         todo_correcto = false;
    };
    
    if(cardName.value=="")
    {
         alert("No haz ingresado un Nombre para la tarjeta");
         user.focus();
         todo_correcto = false;
    };

    if(cardMonth == null || cardType == 0 ){
        alert("No haz seleccionado el mes");
        user.focus();
        todo_correcto = false;
    };    
    
    if(cardYear == null || cardType == 0 ){
        alert("No haz seleccionado el año");
        user.focus();
        todo_correcto = false;
    };
    
    if(cardCvv == null || cardType == 0 ){
        alert("No haz ingresado tu CVV");
        user.focus();
        todo_correcto = false;
    };    

    return todo_correcto;
};
    
$( "#checkoutSubmit" ).click(function () {
   Validar($("#cardForm"));
});