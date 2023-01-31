import {createBrowserRouter} from "react-router-dom";
import MiniDrawer from "./components/Drawer";
import FarmCreatePage from "./pages/farms/create";
import * as React from "react";
import Themes from "./pages/themes";
import {Agriculture, Category} from "@mui/icons-material";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MiniDrawer/>,
        children: [
            {
                path: '/farms',
                element: <FarmCreatePage/>
            },
            {
                path: '/themes',
                element: <Themes/>
            },
        ]
    },
]);

export const menus = [
    {'name': '농장', 'link': '/farms', 'icon': <Agriculture/>},
    {'name': '테마', 'link': '/themes', 'icon': <Category/>},
]