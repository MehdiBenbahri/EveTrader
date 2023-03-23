import Header from "../../UI/Home/Header";
import {Box, Button} from "@mui/material";
import {getCorporationStructure} from "../../Services/StructureService";

function Scheduler() {
    return (
        <>
            <Header/>
            <Box>
                <Button
                    sx={{marginTop: "10rem"}}
                    onClick={() => {
                        getCorporationStructure();
                    }}>
                    FETCH
                </Button>
            </Box>
        </>
    )
}

export default Scheduler;