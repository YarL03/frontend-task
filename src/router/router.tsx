import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Discover from "../pages/Discover";

const router = createBrowserRouter(
     createRoutesFromElements(
          <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Discover/>}/>
              <Route path="*" element={<Discover/>}/>
          </Route>
        )
    )


export default router