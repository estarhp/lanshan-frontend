console.log("桂花鸭围月季红");

setTimeout(function set1(){
    console.log("陈皮牛肉干");
    new Promise((resolve) => {
        console.log("红椒米熏鸡");
        resolve();
    }).then(function pro7()  {
        console.log("八宝菠菜炝鱼片");
    });
}, 0);

new Promise((resolve) => {
    console.log("黄瓜烤去皮虾");
    resolve();
});

Promise.resolve().then(function pro1() {
    console.log("果藕");
    Promise.resolve().then(function pro4() {
        console.log("红烧鱼翅");
    });
    setTimeout(function set3()  {
        console.log("清汤燕菜");
    }, 0);
});

console.log("口蘑白菜卷");

Promise.resolve().then(function pro2() {
    Promise.resolve().then(function pro5() {
        console.log("炸鸡腿");
        Promise.resolve().then(function pro6() {
            console.log("鸡油兰笋");
        });
    });
});

setTimeout(function set2()  {
    console.log("樟茶去骨鸭");
    console.log("烧四素");
}, 0);

Promise.resolve().then(function pro3() {
    console.log("核桃酪");
});
