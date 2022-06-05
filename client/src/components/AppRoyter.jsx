import {Route, Routes} from "react-router-dom";
import {authBuyerRoutes, authSellerRoutes, publicRoutes} from '../routes';
import Shop from "../pages/Shop";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    
    return (
        <Routes>
            {user.isAuthSeller === true && user.isAuthBuyer === true
                && authSellerRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )
            }

            {user.isAuthSeller === false && user.isAuthBuyer === true
                && authBuyerRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )
            }

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}

            {/* Defaults url */}
            <Route path="*" element={<Shop/>}/>
        </Routes>
    );
});

export {AppRouter};
