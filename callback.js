// ==================================================FUNCTION INJECTION==========================================================


/*
function calculate(param1, param2, callback) {
    //default operation
    result = param1 + param2;

    //check if callback is function
    if(typeof callback == 'function') {
        result = callback(param1, param2);
    }
    return result;
}

//execution
a = calculate(20, 30, function(x,y) {
    return `Rp. ${x * y}` 
});

b = calculate(20,30, function(x,y) {
    return `Jumlah ${x + y}`
});
console.log(a);
console.log(b);
*/
// ==================================================CALLBACK==========================================================

console.log('Start');

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('Now we have the data');
        callback({userEmail:email});
    },1000);
}

function getUserData(email, callback) {
    setTimeout(() => {
        callback(['data1', 'data2', 'data3'])
    },2000);
}

function dataDetail(data, callback) {
    setTimeout(() => {
        callback("title of the video");
    },3000);
}

const user = loginUser('sinatrio@gmail.com', '12345', user => {
    console.log(user);
    getUserData(user.userEmail, data => {
        console.log(data);
        dataDetail(data, title => {
            console.log(title);
        })
    })
});

console.log('End');
