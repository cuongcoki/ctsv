"use client";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
// import { useCountdownStore } from "@/store/countdownStore";
import { useState, useEffect } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import Image from "next/image";
import logo from "@/public/image/logoKyThuatCongNghiep.png";
export default function Header() {
    const { userData, clearAccessToken } = useAuthStore();
    // const [checkRed, setCheckRed] = useState(false);

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const router = useRouter();




    const handleLogout = () => {
        clearAccessToken();
        toast.success("Đăng xuất thành công!");
        router.push("/sign-in");
    };

    const handleSignUp = () => {
        router.push("/sign-up");
    };

    const handleSignIn = () => {
        router.push("/sign-in");
    };

    // console.log(checkRed)

    return (
        <div className="w-full h-auto ">
            <div className="bg-gradient-to-r rounded-md mx-4 px-4 py-2 from-blue-600 to-blue-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 justify-between items-center">

                <div className="flex items-center mb-3 md:mb-0">
                    <Image src={logo} alt="Logo" width={40} height={40} className="mr-2" />
                    <div className="ml-2 text-center md:text-left">
                        <div className={`text-xs sm:text-sm text-center text-white`}>ĐẠI HỌC THÁI NGUYÊN</div>
                        <h1 className={`text-sm text-center sm:text-lg md:text-xl font-bold text-white `}>
                            TRƯỜNG ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP
                        </h1>
                        <div className={`text-xs text-center text-white`}>
                            THAINGUYEN UNIVERSITY OF TECHNOLOGY
                        </div>
                    </div>
                </div>
                {mounted && (
                    <h1 className="md:text-xl text-sm text-white text-center">
                        {`Họ và tên: ${userData?.firstName ?? "..."}`}
                    </h1>
                )}


                {userData === null ? (
                    <div className="flex gap-2">
                        <Button
                            onClick={handleSignUp}
                            className="w-[120px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md px-6 py-2 shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
                        >
                            ĐĂNG KÝ
                        </Button>
                        <Button
                            onClick={handleSignIn}
                            className="w-[120px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md px-6 py-2 shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
                        >
                            ĐĂNG NHẬP
                        </Button>
                        <ModeToggle />
                    </div>
                ) : (
                    <div className="flex justify-center items-center gap-2">
                        <Button
                            onClick={handleLogout}
                            className="bg-gradient-to-r rounded-3xl from-blue-500 to-blue-700 text-white font-semibold  px-6 py-2 shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
                        >
                            ĐĂNG XUẤT
                        </Button>

                        {/* <ModeToggle /> */}
                    </div>
                )}
            </div>
        </div>
    );
}
