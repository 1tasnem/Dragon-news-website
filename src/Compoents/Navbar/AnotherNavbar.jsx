import NavbarLeft from "./NavbarLeft";
import RightNavbar from "./RightNavbar";
import { Outlet } from "react-router";

const AnotherNavbar = () => {
    return (
        <div>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
   <aside className='left col-span-3'>
    <NavbarLeft></NavbarLeft>
   </aside>
   <section className='col-span-6 mx-10'>    
    <Outlet></Outlet>
   </section>
   <aside className='col-span-3'>
    <RightNavbar></RightNavbar>
   </aside>
        </main>
        </div>
    );
};

export default AnotherNavbar;