import {Box, Container} from "@mui/material";
import {Link} from "react-router-dom";
import '../styles/baseStyle.css'


const KioskTemplate = () => {
    return (
        <Container maxWidth="lx" className="KioskTemplate">
            <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}}>
                <button>
                    <Link to="/kiosk/add">영화 추가</Link>
                </button>
                <button className="test" >
                    <Link to="/kiosk/reservation" >영화 예매</Link>
                </button>
            </Box>
        </Container>
    )
}


export default KioskTemplate;