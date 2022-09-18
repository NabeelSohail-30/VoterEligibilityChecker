function check() {
    let age = Number(document.querySelector("#age").value);
    let nic = document.querySelector('#isNic').checked;
    let result;

    if(age >= 18 && nic == true){
        result = "you are eligible to cast vote";
    }
    else{
        result = "you are not eligible to cast vote";
    }

    console.log("\nage: ", age, "\nnic: ", nic, "\nResult: ", result);
    document.querySelector("#result").value = result;
}