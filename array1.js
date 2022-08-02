var money = [12, 14, 23, 34, 45, 67, 78, 63, 45, 56, 67, 65, 54,];

// for (var i = 0; i < money.length; i++) {
//     var num = money[i];
//     console.log(num);
// }

// var items = ['mouch', 'pen', 'mobaui', 'loptop'];
// for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     console.log(item);
// }
/********************************************************************/
// for (var i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i > 3) {
//         break;
//     }

// }



var items = [12, 23, 34, 90, 98, 76];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item > 50) {
        continue;
    }
    console.log(item);
}