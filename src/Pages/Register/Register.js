import {Box, Typography} from "@mui/material";
import Header from "../../UI/Home/Header";
import "../../index.css";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import {useState} from "react";
import {addItem} from "../../Services/LocaleStorage";

function Register() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    useState(() => {
        addItem('access_token',urlParams.get('access_token'));
        addItem('name',urlParams.get('name'));
        addItem('player_id',urlParams.get('player_id'));
        setTimeout(() => {
            window.location = '/'
        },1500)
    })

    return (
        <Box className={"home d-flex justify-content-center align-items-center"}>
            <Header/>
            {
                urlParams.get('access_token') ?
                    (
                        <Box className={"d-flex justify-content-center align-items-center transparent-card p-3 rounded"}>
                            <Typography className={"text-light"}>
                                Chargement...
                            </Typography>
                            <AutorenewIcon fontSize={"medium"}
                                           className={"text-light animate__animated animate__infinite animate__rotateIn mx-1"}/>
                        </Box>
                    )
                    :
                    window.location = '/home'
            }
        </Box>
    )
}

export default Register;