import {Box} from "@mui/material";
import "./Header.css"
import NavigationToolBar from "../General/NavigationToolBar";
import NavigationMenu from "../General/NavigationMenu";
import {useState} from "react";

function Header({btnPopOutTiming = 0}) {
    const [menuOpen,setMenuOpen] = useState(false);
    return (
        <>
            <Box className={"header"}>
                <NavigationToolBar btnPopOutTiming={btnPopOutTiming} menuOpen={menuOpen} handleOpen={(e) => setMenuOpen(e)} />
                <NavigationMenu open={menuOpen}  handleOpen={(e) => setMenuOpen(e)} />
            </Box>
        </>
    )
}

export default Header;