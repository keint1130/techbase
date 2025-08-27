var object = document.getElementById("greeting");
var name = prompt("Enter your name:");
var greetings = ['おはよう', 'こんにちは', 'こんばんは'];
var now = new Date();
if (now.getHours() < 12) {
    object.innerText = name + "さん、" + greetings[0];
} else if (now.getHours() < 18) {
    object.innerText = name + "さん、" + greetings[1];
} else {
    object.innerText = name + "さん、" + greetings[2];
}
function datetimeshow() {
    var datetime = new Date();
    var y = datetime.getFullYear();
    var m = datetime.getMonth() + 1;
    var d = datetime.getDate();
    var h = datetime.getHours();
    var min = datetime.getMinutes();
    var s = datetime.getSeconds();
    var object = document.getElementById("datetime");
    object.innerText = y + "年" + m + "月" + d + "日 " + h + "時" + min + "分" + s + "秒";
}
function fortuneshow() {
    var fortunes = ['大吉', '中吉', '小吉'];
    var randomIndex = Math.floor(Math.random() * fortunes.length);
    var object = document.getElementById("fortune");
    object.innerText = "今日の運勢は" + fortunes[randomIndex] + "です。";
}