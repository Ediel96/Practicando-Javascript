let XMLHttpRequest =  require('xmlhttprequest').XMLHttpRequest;


const fetchData = (ulr_api) => {
    return new Promise((resolver, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', ulr_api, true);
        xhttp.onreadystatechange = (() =>{
            if(xhttp.readyState === 4){
            (xhttp.readyState === 200)
                ? resolver(JSON.parse(xhttp.responseText))
                : reject(new Error('Error',ulr_api))
            }
        });
        xhttp.send();
    });
};

module.exports = fetchData;