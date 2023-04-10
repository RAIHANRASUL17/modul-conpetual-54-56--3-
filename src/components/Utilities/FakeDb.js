/*________________________________________________________*/ 
const getAllDb = () => {
    let emptyCart = {};

    //getAllDb from local storage
    const storedInLocal = localStorage.getItem('local-storage-is');
    if (storedInLocal) {
        emptyCart = JSON.parse(storedInLocal);
    }
    return emptyCart;
}
/*________________________________________________________*/ 
const addToDb = (id) =>{
//    let emptyCart ={};
   let emptyCart = getAllDb();
//    console.log('-----15', emptyCart)
//    get cart
const storedInLocal= localStorage.getItem('local-storage-is')
if(storedInLocal){
    emptyCart=JSON.parse(storedInLocal);
}
   
//    add cart
    const quantity = emptyCart[id]
    if(quantity){
        // console.log('already exist')
        const newQuantity = parseInt(quantity) +1;
        // localStorage.setItem(id, newQuantity)
        emptyCart[id]= newQuantity
    }
    else{
        // console.log('new item')
        // localStorage.setItem(id, 1)
        emptyCart[id]= 1
    }
    localStorage.setItem('local-storage-is', JSON.stringify(emptyCart))
    console.log('----empty cart', emptyCart)
}

// Remove from db
const removeFromDb = (id) =>{
    const storedInLocal = localStorage.getItem('local-storage-is')
    if(storedInLocal){
        const storedInLocal2= JSON.parse(storedInLocal)
        if(id in storedInLocal2){
            delete storedInLocal2[id]
            localStorage.setItem('local-storage-is', JSON.stringify(storedInLocal2))
        }
    }
}

// Clear From Db
const deleteDb = () =>{
    localStorage.removeItem('local-storage-is')
}

export {
    addToDb,
    removeFromDb,
    getAllDb,
    deleteDb,
}