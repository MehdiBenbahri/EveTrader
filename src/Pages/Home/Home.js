import "./Home.css";
import {Box} from "@mui/material";
import Header from "../../UI/Home/Header";
import Main from "./Main";
import Prime from "./Prime";
import {useEffect, useState} from "react";

function Home() {

    const loadingTime = 500 //100 ms default loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, loadingTime);
    }, [loadingTime, isLoading])

    return (
        <Box>
            {
                !isLoading
                    ?
                    <Header btnPopOutTiming={loadingTime}/>
                    :
                    ('')
            }
            <Prime className={"home"}/>
            <Main/>
        </Box>
    )
}

export default Home;