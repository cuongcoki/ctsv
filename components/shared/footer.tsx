"use client"
import { useEffect, useState } from "react";
import { Phone, User, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "@/public/image/imageTNUT/logoft.jpg";

interface TrakingData {
    Active_user: number;
    Total_visit: number;
}

interface FooterClassName {
    css: string;
    className: string;
}

export default function Footer({ css, className }: FooterClassName) {
    const [tracking, setTracking] = useState<TrakingData>();

    const fetchTracking = async () => {
        try {
            const response = await fetch(`https://aitoan.girc.edu.vn/tracking`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Lá»—i khi láº¥y dá»¯ liá»‡u.");
            }

            const data = await response.json();
            setTracking(data);
        } catch (error) {
            console.error("Lá»—i API:", error);
        }
    };
    // console.log("tracking", tracking)
    useEffect(() => {
        fetchTracking();
    }, []);
    return (
        <div className={` ${className} bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg`}>
            <div className={` mx-auto  py-6 ${css}`}>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-start mb-3 md:mb-0 w-[400px]">
                        <Image src={logo} alt="Logo" width={70} height={70} className="mr-2" />
                        <div className="ml-2  md:text-left">
                            <h2 className="text-white text-xl font-bold">AI Stack</h2>
                            <p className="text-blue-100 mt-1 text-sm">Viện Nghiên cứu Phát triển Công nghệ cao về Kỹ thuật Công nghiệp</p>
                        </div>
                    </div>

                    <div className=" flex  flex-col justify-between items-center  gap-3">
                        <div className=" flex md:flex-row flex-col justify-between items-center  gap-3">
                            <div className="flex items-center text-white">
                                <User className="h-5 w-5 mr-3 text-blue-200" />
                                <span className="font-medium">Đoàn Thanh Hải</span>
                            </div>

                            <div className="flex items-center text-white">
                                <Phone className="h-5 w-5 mr-3 text-blue-200" />
                                <span>0984063567</span>
                            </div>

                            <div className="flex items-center text-white">
                                <Mail className="h-5 w-5 mr-3 text-blue-200" />
                                <span>doanthanhhai@tnut.edu.vn</span>
                            </div>
                        </div>

                        <div className="flex items-center text-white">
                            <MapPin className="h-5 w-5 mr-3 text-blue-200" />
                            <span>Số 666 Đường 3-2, P.Tích Lương, TP Thái Nguyên - Tỉnh Thái Nguyên</span>
                        </div>
                    </div>

                </div>

                <div className="border-t border-blue-500 mt-4 pt-2 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-blue-100 text-sm">
                        © {new Date().getFullYear()} TNUT. Tất cả các quyền được bảo lưu.
                    </div>

                    <div className="text-white flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center sm:text-left space-y-1 sm:space-y-0">
                        <span> Đang online: {tracking?.Active_user}</span>
                        <span>👥 Tổng lượt truy cập: {tracking?.Total_visit}</span>
                    </div>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-blue-200 hover:text-white transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>
                       
                        <a href="#" className="text-blue-200 hover:text-white transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}