import { Outlet } from "react-router-dom";
import FooterComponent from "../shared/FooterComponent";
import AdminHeaderComponent from "./layout/AdminHeader";
import AdminSidebarComponent from "./layout/AdminSidebar";


export default function AdminLayout() {
    return (<>
        <header>
            <AdminHeaderComponent />
        </header>
        <aside>
            <AdminSidebarComponent />
        </aside>
        <main>
            <h1>Admin Layout</h1>
            <Outlet />
        </main>
        <footer>
            <FooterComponent />
        </footer>
    </>
    )
}