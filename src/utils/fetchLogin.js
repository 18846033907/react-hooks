const fetchLogin=(username,password)=>{
    return new Promise((resolve, reject)=>{
            if (username === 'admin' && password === 'admin') {
                resolve('login');
            } else {
                reject('logout');
            }
        }); 
}
export default fetchLogin;