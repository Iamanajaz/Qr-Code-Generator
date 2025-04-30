// function go() {
//     const data = document.getElementById("data");
//     const size = document.getElementById("size");
//     const qrimg = document.getElementById("qrimg");
    
//     const dataval = data.value.trim();
//     if (dataval) {
//         qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=" + size.value + "&data=" + encodeURIComponent(dataval);
//         console.log("Input text:", dataval);
//         console.log("Size of QR image:", size.value);
//     } else {
//         alert("Please enter text to generate a QR code!");
//     }
// }

function go() {
    const data = document.getElementById("data").value.trim();
    const size = document.getElementById("size").value;
    const qrimg = document.getElementById("qrimg");

    if (data) {
        const formData = new FormData();
        formData.append("data", data);
        formData.append("size", size);

        fetch('generate_qr.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                qrimg.src = result.image;
            } else {
                alert("Failed to generate QR Code.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error generating QR Code.");
        });
    } else {
        alert("Please enter text to generate a QR code!");
    }
}
