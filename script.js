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
    document.getElementById("qrimg").src="https://api.qrserver.com/v1/create-qr-code/?size="+size.value+"&data="+data.value;
    console.log("Input text:",data.value);
    console.log("Size of Qr image:",size.value);
}

