import { Route, Routes } from "react-router-dom";
import Solutions from "../pages/Solutions";
import Organization from "../pages/Organization";
import Vendors from "../pages/Vendors";
export const MyRoutes = ()=>{

    return (
<Routes>
            <Route path="/" element={<Solutions />} />
            <Route path="/solutions/:tab" element={<Solutions />} />
            <Route path="/vendors/:tab" element={<Vendors />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/organization" element={<Organization />} />
          </Routes>
    );
}