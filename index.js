function fan() {
    let a = document.getElementById("massege");
    let b = document.getElementById("input");
    console.log(a);
    if (b.value == "") {
        a.innerText = "User";
    }
    a.innerText = b.value;
    if (b.value.trim() == "") {
        a.innerText = "User";
    }

}