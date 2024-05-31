


function getData() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                const data = [1, 2, 3, 4, 5];
                resolve(data); 
            } else {
                reject(new Error('Failed to fetch data')); 
            }
        }, 5000); 
    });
}

getData()
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });