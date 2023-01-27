import {addItem, getItem, removeItem} from "./LocaleStorage";
import axios from "axios";

export function refreshToken(){
    const url =  `${process.env.REACT_APP_SERVER_DOMAIN}/auth/refresh-token?` + new URLSearchParams({access_token:getItem('access_token')});
    axios.get(url,{
        method: 'get'
    }).then((res) => {
        if (res.status === 200){
            removeItem('access_token');
            addItem('access_token',res.data.newToken);
        }
        else{
            window.location.href = "/";
        }
    });
}