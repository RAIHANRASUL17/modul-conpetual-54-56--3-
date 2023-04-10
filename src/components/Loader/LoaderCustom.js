import { getAllDb } from "../Utilities/FakeDb";


const loaderWithFetch = async() =>{
    const loadedItems= await fetch('products.json')
    const fetchItems= await loadedItems.json()
    // return fetchItems

    // step-4.0
    let savedInArray= []


    // step-0
    const storedFromDb= getAllDb();
    // console.log(storedFromDb)

    // step-1
    for(const ID in storedFromDb){
        // step-2
        const addedItem = fetchItems.find(item => item.id === ID)
        if(addedItem){
            // step-3
            addedItem.quantity= storedFromDb[ID]
            
            // const quantity2= storedFromDb[ID]
            // addedItem.quantity= quantity2
            // step-4.1
            savedInArray.push(addedItem)
        }
        console.log('-----SavedIn Array', savedInArray)
        return {savedInArray, fetchItems}
        
        
    }
}

export default loaderWithFetch;