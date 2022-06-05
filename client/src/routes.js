import SellerPage from "./pages/SallerPage";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import Authorization from "./pages/Authorization";
import Basket from "./pages/Basket";
import ProductPage from "./pages/ProductPage";
import SellerPanel from "./pages/SellerPanel";
import {
    BASKET_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SELLERPAGE_ROUTE, SELLERPANEL_ROUTE,
    SHOP_ROUTE,
    STATISTICS_ROUTE,
    PRODUCT_ROUTE,
    ORDER_ROUTE
} from "./urls/consts";


export const authSellerRoutes = [
    {
        path: STATISTICS_ROUTE,
        Component: <SellerPanel/>
    },
    {
        path: SELLERPANEL_ROUTE,
        Component: <SellerPanel/>
    },
    {
        path: PROFILE_ROUTE,
        Component: <Profile/>
    },
]
export const authBuyerRoutes = [
        {
        path: PROFILE_ROUTE,
        Component: <Profile/>
    },
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Authorization/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Authorization/>
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: <ProductPage/>
    },
    {
        path: SELLERPAGE_ROUTE + '/:id',
        Component: <SellerPage/>
    },
    {
        path: ORDER_ROUTE,
        Component: <Basket/>
    },

]