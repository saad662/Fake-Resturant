import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import cart from './cart2.gif'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Navbar';
import './style.css'
import { DELETE } from '../redux/actions/action'
// import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    const dispatch = useDispatch();
    const dlt = (id) => {
        dispatch(DELETE(id))
    }

    const [price, setPrice] = useState(0)
    const total = () => {
        let price = 0;
        getdata.map((iteam) => {
            return (

                price = iteam.price * iteam.qnty + price

            )
        });
        setPrice(price);
    }

    useEffect(() => {
        total();
    }, [total])
    // console.log(price);    

    const getdata = useSelector((state) => state.cartReducer.carts);
    // console.log(getdata);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
            <Container>
                <NavLink className='text-decoration-none text-light' to="/">Fake-Store</NavLink>
                <Nav className="me-auto">
                    <Link className='text-decoration-none text-light mx-3' to="/">Home</Link>
                    <Link className='text-decoration-none text-light' to="/about">About</Link>
                </Nav>
                <Badge badgeContent={getdata.length} color="primary"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <i className='fa-solid fa-cart-shopping text-light' style={{ fontSize: "25px", cursor: "pointer" }}></i>
                </Badge>
            </Container>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    getdata.length ?
                        <div className='card_details' style={{ width: "21rem", paddingTop: 4 }}>
                            <span style={{ paddingLeft: "3rem" }}><strong>Photos</strong></span><span style={{ paddingLeft: "6rem" }}><strong>Resturant</strong></span>
                            <i onClick={handleClose} className='fas fa-close smallclose' style={{ position: "absolute", top: "14px", right: 20, fontSize: 23, cursor: "pointer" }}></i>
                            <Table>
                                <tbody style={{ borderTop: "2px solid" }}>
                                    {
                                        getdata.map((e, id) => {
                                            return (
                                                <div key={id}>
                                                    <p style={{ borderBottom: "1px solid" }}></p>
                                                    <tr>
                                                        <td style={{ paddingLeft: "1rem" }}>
                                                            <p>(Tap on the picture for details)</p>
                                                            <Link onClick={handleClose} to={`/cart/${e.id}`}>
                                                                <img src={e.imgdata} style={{ borderRadius: 2, width: "9rem", height: "6rem" }} alt="#" />
                                                            </Link>
                                                        </td>
                                                        <td style={{ paddingLeft: "2rem" }}>
                                                            <p>{e.rname}</p>
                                                            <p>Price : {e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{ color: "red", cursor: "pointer", fontSize: 20 }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </p>
                                                        </td>
                                                        <td onClick={() => dlt(e.id)} className='mt-5' style={{ color: "red", cursor: "pointer", fontSize: 20 }}>
                                                            <i className='fas fa-trash smalltrash'></i>
                                                        </td>
                                                    </tr >
                                                </div>
                                            )
                                        })
                                    }
                                    <p className='text-center'><strong>Total</strong> : <u>{price} pkr</u></p>
                                </tbody>
                            </Table>
                        </div>
                        :
                        <div className='card_details d-flex justify-content-center align-items-center' style={{ position: "relative", padding: 10, width: "24rem" }}>
                            <i onClick={handleClose} className='fas fa-close smallclose' style={{ position: "absolute", top: 1, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                            <p>Your Cart is empty</p>
                            <img src={cart} style={{ width: "5rem", padding: 10 }} alt="cart_image" />
                        </div>
                }

            </Menu>
        </Navbar>
    )
}
export default Header