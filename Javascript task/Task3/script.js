function emi(){
    var amount= parseInt( document.getElementById('amount').value)
    var rate=parseInt(document.getElementById('rate').value)
    var time=parseInt(document.getElementById('time').value)
     
    var interest=(amount * (rate * 0.01)) / time
    var EMI = (amount / time + interest).toFixed(2);
    document.getElementById('emii').innerHTML= 'The EMI is '+EMI
    

}