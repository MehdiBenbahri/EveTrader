import {getItem} from "./LocaleStorage";
import axios from "axios";

export function getCharacterMining(){
    const url =  `${process.env.REACT_APP_SERVER_DOMAIN}/mining/character-mining?` + new URLSearchParams({access_token:getItem('access_token')});
    axios.get(url,{
        method: 'get'
    }).then((res) => {
        if (res.status === 200){
            console.log(res)
        }
        else{
            //window.location.href = "/";
        }
    });
}