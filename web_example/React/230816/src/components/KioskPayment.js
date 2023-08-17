import {Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {MdAdd} from "react-icons/md";
import {RiSubtractFill} from "react-icons/ri";
import {useMemo} from "react";


const KioskPayment = ({cartList, handleClickAmount}) => {
    const totalCount = useMemo(() => {
        let sum = 0
        cartList.map(cart => {
            sum += ( cart.price * cart.count)
        })

        return sum
    }, [cartList])

    return (
        <Box className="KioskPayment">
            <Box height="75vh">
                <List xs={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {cartList.map(cart => (
                        <ListItem key={cart.id}>
                            <ListItemAvatar>
                                <Avatar src={cart.path} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={cart.title}
                                secondary={
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            예매 수 : {cart.count}
                                            <Button onClick={() => handleClickAmount(cart.id, 1)}>
                                                <MdAdd />
                                            </Button>
                                            <Button onClick={() => handleClickAmount(cart.id, -1)}>
                                                <RiSubtractFill />
                                            </Button>
                                        </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            총 : {totalCount} 원
        </Box>
    )
}


export default KioskPayment;