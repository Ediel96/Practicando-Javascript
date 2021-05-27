

const getNombre = (idPoint) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPoint}`)
    .then(res => {
        return res.json()
    })
    .then(post => {
        console.log(post)
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(users => {
            return users.json()
        })
        .then(users =>{
            console.log(users)
        })
    })
}

const getNombreAsync = async (idPost) =>{
    
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const post = await resPost.json();

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resUser.json();
        console.log(user)

    } catch (error) {
        console.log(error)
    }

}


const getNombreAxion = async (idPost) =>{
    
    try {
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser.data)
    } catch (error) {
        console.log(error)
    }

}
getNombreAxion(2);