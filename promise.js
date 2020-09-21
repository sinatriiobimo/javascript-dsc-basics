/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('got the user')
        // resolve({user: 'sinatrio'})
        reject(new Error('User not logged in'))
    },2000);
})

promise.then(user => {
    console.log(user)
}).catch(err => console.log(err.message))
*/

// ==================================================PROMISE==========================================================
/*

console.log('Start');

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the data');
            resolve({userEmail:email});
        },1000);
    })
}

function getUserData(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['data1', 'data2', 'data3'])
        },2000);
    })
}

function dataDetail(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video");
        },3000);
    })
}

// loginUser('sinatrio@gmail.com', '12345')
//     .then(user => getUserData(user.userEmail))
//     .then(data => dataDetail(data))
//     .then(title => console.log(title));

    async function displayUser() {
        const loggedUser = await loginUser('sinatrio@gmail.com', '12345');
        const data = await getUserData(loggedUser.userEmail);
        const title = await dataDetail(data[0]);
        console.log(title);
    }

    displayUser();

console.log('End');

*/
// ==================================================PROMISE ALL==========================================================
/*
const yt = new Promise(resolve => {
    setInterval(() => {
        console.log('stuff from youtube');
        resolve({videos: [1,2,3,4,5]})
    },1000)
})
const fb = new Promise(resolve => {
    setInterval(() => {
        console.log('stuff from facebook');
        resolve({user: 'Sinatrio'})
    },1000)
})

Promise.all([yt, fb]).then(result => console.log(result));
*/

// ==================================================FETCH API==========================================================

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(user => console.log(user));


// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'user 2'
//     })
// }).then(res => {
//     return res.json() })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
