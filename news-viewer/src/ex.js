import React from 'react'

function ex(number) {
    const promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const result = number +10
            if (result>50){
                const e = new Error('NumberToobig')
                return reject(e)
            }
            resolve(result);
        }, 1000);
    })
    return promise
 
}

ex(0)
.then(number => {
    console.log(number)
    return ex(number);
})
.then(number => {
    console.log(number)
    return ex(number);
})
.then(number => {
    console.log(number)
    return ex(number);
})
.then(number => {
    console.log(number)
    return ex(number);
})
.then(number => {
    console.log(number)
    return ex(number);
})
.catch(e => {
    console.log(e);
})
export default ex