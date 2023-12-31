'use client'
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
const UserMenu = () => {
    const registerModal = useRegisterModal();
    const [open, setOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return(
        <div className="relative">
            <div className="flex items-center gap-3">
                <div onClick={()=>{}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition course-pointer">
                    Airbnb Your Home
                </div>
                <div onClick={toggleMenu} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition">
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar/>
                    </div>
                </div>
            </div>
            {
                open && (
                    <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                        <div className="flex flex-col cursor-pointer">
                            <>
                                <MenuItem  onClick={()=>{}}
                                label="Login"
                                />
                                  <MenuItem  onClick={registerModal.onOpen}
                                label="Sign Up"
                                />
                            </>
                            </div>
                        </div>
                )
            }

        </div>
    )
}
export default UserMenu;