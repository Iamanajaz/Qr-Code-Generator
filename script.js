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
    document.getElementById("qrimg").src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+data.value;
    console.log(data.value);
    // console.log(size.value);
}

