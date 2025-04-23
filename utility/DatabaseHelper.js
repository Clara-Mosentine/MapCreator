import axios from 'axios';
const BASE_URL = 'https://texturedatabase-b0ae9-default-rtdb.firebaseio.com/';

//CREATE
export async function addItem(newItem){
    const response = await axios.post(BASE_URL+'/textureDB.json',newItem);
    console.log('added item: ', response.data);

}

//READ
export async function getItems(){
    const response = await axios.get(BASE_URL + '/textureDB.json');
    const items = [];
    for(const key in response.data){
        const p = {
            id: key,
            name: response.data[key].name,
            url: response.data[key].url,
            height: response.data[key].height,
            width: response.data[key].width
        };
        items.push(p);
    }
    return items;
}

//UPDATE
export async function editItem(itemID, updatedItemInfo){
    const response = await axios.put(BASE_URL+`/textureDB/${itemID}.json`, updatedItemInfo);
    console.log('edited item: ', response.data);
}

//DELETE
export async function deleteItem(itemID){
    const response = await axios.delete(BASE_URL+`/textureDB/${itemID}.json`);
    console.log('deleted item: ', response.data);
}