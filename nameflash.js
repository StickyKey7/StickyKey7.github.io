var list = ["Hello, I'm StickyKey<span>&nbsp;&nbsp;</span>", "Hello, I'm StickyKey<span>7</span>"];
var index = 0;

function nameflash() {
    var nameF = document.getElementById("nameflash");
    var spanElement = document.querySelector('#nameflash span');
    spanElement.id = 'red';

    if (index === 1) {
        nameF.innerHTML = list[index];
        index = (index + 1) % list.length;
        var randomTimeout1 = Math.floor(Math.random() * (500 - 200) + 200);
        var spanElement = document.querySelector('#nameflash span');
        spanElement.id = 'red';
        setTimeout(nameflash, randomTimeout1)
    } else {
        nameF.innerHTML = list[index];
        index = (index + 1) % list.length;
        var randomTimeout2 = Math.floor(Math.random() * (2000 - 200) + 200);
        setTimeout(nameflash, randomTimeout2)
    }

}

nameflash()