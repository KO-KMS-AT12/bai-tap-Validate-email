function checkMail() {
    let txtMail = document.getElementById('txtMail');
    let txtResult = document.getElementById('txtResult');

    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(regexp.test(txtMail.value));

    if (regexp.test(txtMail.value)) {
        txtResult.innerHTML = 'Mail hop le';
    } else {
        txtResult.innerHTML = 'Mail khong hop le';
    }

}