// function go(){
    // var txtdata = document.getElementById("data").value;
    // document.getElementById("qrimg").src="https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg";
    // alert(txtdata);
    // 
// };      
 
// let qrbox = document.getElementById("imgbox");
// let qrimg = document.getElementById("qrimg");
// let qrtext = document.getElementById("data");
// let ze = document.getElementById("size");


function go(){
    
    let dataval=data.value;
    if(dataval != null ){
       document.getElementById("qrimg").src="https://api.qrserver.com/v1/create-qr-code/?size="+size.value+"&data="+dataval;
        console.log("Input text:",dataval);
        console.log("Size of Qr image:",size.value); 
    }
    else{
        alert("Text box is empty");
    }
}
