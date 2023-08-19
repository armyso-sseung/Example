import {Link} from "react-router-dom";
import {Box, Container} from "@mui/material";

const Layout = ({children}) => {
    return (
        <Container maxWidth="lx" className="KioskRegisterPage">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/kiosk/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/kiosk/delete">Delete</Link>
                    </li>
                    <li>
                        <Link to="/kiosk/reservation">Reservation</Link>
                    </li>
                </ul>

                {children}
            </Box>
        </Container>
    )
}


export default Layout;