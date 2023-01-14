import {Box, Drawer, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function NavigationMenu({open,handleOpen}){
    return (
        <Box>
            <Drawer
                variant="temporary"
                open={open}
                onClose={() => handleOpen(false)}
                sx={{
                    width: 300,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: 300,
                        boxSizing: 'border-box',
                        backgroundColor: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(15px)"
                    },
                }}
            >
                <Box className={"dark-background-blur p-2"}>
                    <IconButton aria-label="menu-opener" color="inherit" onClick={(e) => handleOpen(false)}>
                        <CloseIcon className={"text-light"} />
                    </IconButton>
                </Box>
            </Drawer>
        </Box>
    )
}
export default NavigationMenu;