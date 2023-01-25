// use local storage to manage cart data
const addToDb = value =>{
    
    let profileCart = {};

    //get the profile cart from local storage
    const storedCart = localStorage.getItem('profile-cart');
    if(storedCart){
        profileCart = JSON.parse(storedCart);
    }
       
    profileCart['time'] = value;
   
    localStorage.setItem('profile-cart', JSON.stringify(profileCart));
}

const getDb=()=>{
    
    let profileCart = {};
    
    //get the profile cart from local storage
    let storedCart = localStorage.getItem('profile-cart');
    if (storedCart) {
        
        profileCart = JSON.parse(storedCart);
        
    } 
    return profileCart;
}


export {
    addToDb, 
    getDb
    
}