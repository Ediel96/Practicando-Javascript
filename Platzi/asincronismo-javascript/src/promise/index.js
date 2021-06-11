const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!')
        }else{
            reject('Whooops !!')
        }
    })
}

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() =>{
                resolve('True');
            },3000)
        }else{
            const error = new Error('whooop!')
        }
    })
}

somethingWillHappen2()
.then(res => console.log(res))
.catch(err => console.error(err))

Promise.all([somethingWillHappen2() , somethingWillHappen()])
.then(response => {
    console.log('Array of result', response)
})
.catch(err =>{
    console.error(err)
})