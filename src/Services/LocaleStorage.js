import jwtDecode from "jwt-decode";
import moment from "moment";
export function removeItem(itemToRemove) {
    window.localStorage.removeItem(itemToRemove);
}

export function getItem(item) {
    return window.localStorage.getItem(item);
}

export function addItem(localeStorageName, newItem) {
    window.localStorage.setItem(localeStorageName, newItem);
}


export function getToken(token){
    try{
        return jwtDecode(token);
    }
    catch (ex){
        console.log('Error while checking the token');
        console.log(ex);
    }
}

//return false if the token is invalid or doesn't exit or is expired
export function checkApiAccess(){
    if (getItem('access_token')){
        const token = getToken(getItem('access_token'));
        return moment.unix(token.exp) >= moment();
    }
    else{
        return false;
    }
}