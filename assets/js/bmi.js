console.log("Hello world") ;
let button = document.getElementById("btn-submit-bmi"); //akses element button

button.addEventListener("click", function bmiCalculator(event){
    event.preventDefault()
    //mengambil input dari user
    const tinggiInput = parseInt (document.getElementById("tinggi-badan-input").value); //ubah string jadi num
    const beratInput = parseInt (document.getElementById("berat-badan-input").value); //ubah string jadi num
    const result = document.getElementById("result-bmi"); //untuk menampilkan hasil ke element output
    
    //untuk cek inputan user apakah angka atau bukan
     let tinggiStatus=false;
     let beratStatus=false;

    if(tinggiInput === '' || isNaN(tinggiInput) || (tinggiInput <= 0)){
        document.getElementById('tinggiError').innerHTML = "Mohon isi data dengan angka ";
    }else{
        document.getElementById('tinggiError').innerHTML = '';
        tinggiStatus=true;
    }

    if(beratInput === '' || isNaN(beratInput) || (beratInput <= 0)){
        document.getElementById('beratError').innerHTML = "Mohon isi data dengan angka ";
    }else{
        document.getElementById('beratError').innerHTML = '';
        beratStatus=true;
    }

    if(tinggiStatus && beratStatus){
        //menghitung nilai BMI
        const bmiResult = ( beratInput / (tinggiInput / 100 * tinggiInput/ 100)).toFixed(2);
        //menentukan status hasil BMI
        if(bmiResult <= 18.5){
            result.innerHTML = 'Underweight : ' + bmiResult;
        }else if(bmiResult >= 18.6 && bmiResult < 24.9){
            result.innerHTML = 'Normal : ' + bmiResult;
        }else if(bmiResult >= 25 && bmiResult < 29.9) {
            result.innerHTML = 'Overweight : ' + bmiResult;
        }else {
            result.innerHTML = 'Obesity : ' + bmiResult;
        }
    }else{
        alert('Calculator Error');
        result.innerHTML = '';
    }




});