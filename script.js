let name = "Alex";
let money = 10000;
let account = 7777;

if (name === "Alex") {

    if (account === 7777) {

        let payment = 4000; 
        if (money >= payment) {
            console.log("Всё отлично!");
        } else {
            console.log("Недостаточно средств");
        }
    } else {
        console.log("Номер счёта не совпадает");
    }
} else {
    console.log("Пользователь не найден. До свидания.");
}
