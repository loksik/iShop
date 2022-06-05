import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRoyter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        check().then(data => {
            user.setUser(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
       return  <Spinner nimation="border" variant="success"/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );

});

export default App;