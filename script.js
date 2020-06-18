function cekHuruf(string) {
    const validateName = new RegExp("[A-Z]");
    return validateName.test(string);
}

let tombol = document.getElementById("submit");

tombol.addEventListener("click", function () {
    const text = document.getElementById("addText").value;
    if (cekHuruf(text.charAt(0))) {
        document.getElementById("display").innerHTML =
            "Huruf Pertama adalah huruf besar";
    } else {
        document.getElementById("display").innerHTML =
            "Huruf Pertama adalah huruf kecil";
    }
});
