import {Box, Typography} from "@mui/material";
import Header from "../../UI/Home/Header";

function NotFound() {
    return (
        <Box>
            <Header/>
            <Box sx={{marginTop: "15rem"}} className={"h-100 d-flex justify-content-center align-items-center"}>
                <Typography className={"text-center text-light"} variant={"h3"}>
                    404 Not Found
                </Typography>
            </Box>

        </Box>
    )
}

export default NotFound;