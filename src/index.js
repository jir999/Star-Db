const getResource = async (url) => {
    const res = await fetch(url);
    
    if(!res.ok){
        throw new Error(`${url, res.status}`)
    }

    const body = await res.json();
    return body;
};

getResource('https://swapi.dev/api/people/1/123')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error(err)
    })

// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body)
//     });