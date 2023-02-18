import { Outlet } from "react-router-dom";
import FooterComponent from "../shared/FooterComponent";
import DashHeaderComponent from "./layout/HeaderComponent";
import DashSidebarComponent from "./layout/SidebarComponent";


export default function DashboardLayout() {
    return (<>
        <header>
            <DashHeaderComponent />
        </header>
        <aside>
            <DashSidebarComponent />
        </aside>
        <main>
            <h1>Dashboard Layout</h1>
            <Outlet />
        </main>
        <footer>
            <FooterComponent />
        </footer>
    </>
    )
}