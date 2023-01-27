import {Box, Button, IconButton, MenuItem, Select, Tooltip, Typography} from "@mui/material";
import "./NavigationToolBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect, useState} from "react";
import {getItem} from "../../Services/LocaleStorage";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header({handleOpen, btnPopOutTiming = 0}) {

    const [menuItemsShowed, setMenuItemsShowed] = useState([]);

    useEffect(() => {
        const menuItems = [
            (
                <Button key={"navigation-btn-" + 0} color={"inherit"}
                        className={"mx-2 animate__animated animate__fadeIn animate__faster"}>
                    <Typography variant={"overline"}>
                        Home
                    </Typography>
                </Button>
            ),
            (
                <Button key={"navigation-btn-" + 1} color={"inherit"}
                        className={"mx-2 animate__animated animate__fadeIn animate__faster"}>
                    <Typography variant={"overline"}>
                        Item 1
                    </Typography>
                </Button>
            ),
            (
                <Button key={"navigation-btn-" + 2} color={"inherit"}
                        className={"mx-2 animate__animated animate__fadeIn animate__faster"}>
                    <Typography variant={"overline"}>
                        Item 2
                    </Typography>
                </Button>
            ),
            (
                <Button key={"navigation-btn-" + 3} color={"inherit"}
                        className={"mx-2 animate__animated animate__fadeIn animate__faster"}>
                    <Typography variant={"overline"}>
                        Item 3
                    </Typography>
                </Button>
            ),
            (
                <Button key={"navigation-btn-" + 4} color={"inherit"}
                        className={"mx-2 animate__animated animate__fadeIn animate__faster"}>
                    <Typography variant={"overline"}>
                        Item 4
                    </Typography>
                </Button>
            ),
        ]
        setTimeout(() => {
            setMenuItemsShowed([...menuItemsShowed, menuItems[menuItemsShowed.length]]);
        }, btnPopOutTiming + (menuItemsShowed.length * 2))
    }, [menuItemsShowed, btnPopOutTiming])

    return (
        <Box
            className={"navigation-top d-flex justify-content-between align-items-center px-sm-0 px-md-1 px-lg-3"}>
            <Box className={"text-light fw-bold d-flex justify-content-between align-items-center"}>
                <IconButton aria-label="menu-opener" color="inherit" onClick={(e) => handleOpen(true)}>
                    <MenuIcon className={"text-light"}/>
                </IconButton>
                <Box className={"d-flex justify-content-between align-items-center d-none d-lg-block"}>
                    {
                        menuItemsShowed
                            ?
                            menuItemsShowed.map((el) => {
                                return (
                                    el
                                )
                            })
                            : ('')
                    }
                </Box>
            </Box>
            <Box className={"d-flex justify-content-evenly align-items-center "}>
                <Select
                    labelId="demo-simple-select-label"
                    color={"error"}
                    className={"bg-neutral-25 px-2 rounded"}
                    variant={"standard"}
                    id="demo-simple-select"
                    value={0}
                    label="Lang"
                >
                    <MenuItem value={0}>
                        <Tooltip title="English" placement="left">
                            <img alt={"UK flag"} src={"../../country/united-kingdom.png"} width={"20rem"}/>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem value={1}>
                        <Tooltip title="Français" placement="left">
                            <img alt={"France flag"} src={"../../country/france.png"} width={"20rem"}/>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem disabled={true} value={2}>
                        <Tooltip title="Ping Pong Ching Chong" placement="left">
                            <img alt={"China flag"} src={"../../country/china.png"} width={"20rem"}/>
                        </Tooltip>
                    </MenuItem>
                </Select>
                {
                    getItem('name') && getItem('player_id') && getItem('access_token') ?
                        (
                            <Button className={"mx-1 text-light"}
                                    color={"inherit"}
                            >
                                <img alt={"eve-sso logo"}
                                     className={"ms-2 rounded"}
                                     width={"30rem"}
                                     src={`https://images.evetech.net/characters/${getItem('player_id')}/portrait`}/>
                                <Typography className={"ms-2"}
                                            variant={"caption"}
                                            color={"inherit"}
                                >
                                    {getItem('name')}
                                </Typography>
                                <ArrowDropDownIcon></ArrowDropDownIcon>
                            </Button>
                        ) :
                        (
                            <Button href={process.env.REACT_APP_SERVER_DOMAIN + "/auth/sso"} color={"inherit"}>
                                <img alt={"eve-sso logo"}
                                     src={"https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-small.png"}/>
                            </Button>
                        )
                }

            </Box>
        </Box>
    )
}

export default Header;