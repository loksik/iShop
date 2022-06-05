import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {BASKET_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SELLERPANEL_ROUTE, SHOP_ROUTE} from "../urls/consts";
import {observer} from "mobx-react-lite";
import {Link, useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuthSeller(false)
        user.setisAuthBuyer(false)
    }

    console.log(user)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={SHOP_ROUTE}
                      className="logo"
                >
                    I-Shop
                </Link>

                <Nav className="ml-auto">
                    <Nav.Item><Button variant={"outline-light"} onClick={() => navigate(BASKET_ROUTE)}>Basket</Button></Nav.Item>

                    {user.isAuthSeller && user.isAuthBuyer && <>
                        <Nav.Item><Button variant={"outline-light"} onClick={() => navigate(SELLERPANEL_ROUTE)}>Profile</Button></Nav.Item>
                        <Nav.Item><Button variant={"outline-light"} onClick={() => logOut()}>Logout</Button></Nav.Item>
                    </>}

                    {user.isAuthBuyer && !user.isAuthSeller && <>
                        <Nav.Item><Button variant={"outline-light"} onClick={() => navigate(PROFILE_ROUTE)}>Profile</Button></Nav.Item>
                        <Nav.Item><Button variant={"outline-light"} onClick={() => logOut()}>Logout</Button></Nav.Item>
                    </>}

                    {!user.isAuthBuyer && !user.isAuthSeller && <>
                        <Nav.Item><Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Login</Button></Nav.Item>
                    </>}
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;