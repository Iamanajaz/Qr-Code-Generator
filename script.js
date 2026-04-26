// let qrbox = document.getElementById("imgbox");
// let qrimg = document.getElementById("qrimg");
// let qrtext = document.getElementById("data");
// let ze = document.getElementById("size");


// function go(){
//     document.getElementById("qrimg").src="https://api.qrserver.com/v1/create-qr-code/?size="+size.value+"&data="+data.value;
//     console.log("Input text:",data.value);
//     console.log("Size of Qr image:",size.value);
// }



function go(){
    
    let dataval=data.value;
    if(dataval != NaN && dataval.trim() != ""){
       document.getElementById("qrimg").src="https://api.qrserver.com/v1/create-qr-code/?size="+size.value+"&data="+dataval;
        console.log("Input text:",dataval);
        console.log("Size of Qr image:",size.value); 
    }
    else{
        alert("Text box is empty");
    }
}

function reset(){
    document.getElementById("qrimg").src="";
    data.value="";
    size.value="150x150";
}
