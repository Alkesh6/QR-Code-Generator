const wrapper = document.querySelector(".wrapper");
QRInput = wrapper.querySelector(".form input")
generateBtn = wrapper.querySelector(".form button");
QRImg = wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click", ()=>{
    let QRValue = QRInput.value;
    if(!QRValue) return;
    console.log(QRValue);
    generateBtn.innerText = "Generating QR Code..."
    QRImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${QRValue}`;
    QRImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR"
    })
    
})

QRInput.addEventListener("keyup",()=>{
    if(!QRValue.value){
        wrapper.classList.remove("active")
    }
})