"use client";

import { useState } from 'react';
import {  BookOpen, Users, HelpCircle, Settings } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/image/logoKyThuatCongNghiep.png";
import Footer from '@/components/shared/footer';
export default function Home() {
    const [showFullInfo, setShowFullInfo] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-blue-500 text-white p-4 shadow-md">
                <div className="container mx-auto flex items-center">
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

                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-4 md:p-6">
                {/* Welcome Section */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-center mb-4">Chào mừng đến với ChatBot AI Tutorial GVCN TNUT</h2>
                    <p className="text-gray-700 text-center mb-4">
                        Chatbot AI hỗ trợ công tác cố vấn giáo viên chủ nhiệm tại trường Đại học Kỹ thuật Công nghiệp Thái Nguyên
                    </p>

                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                            onClick={() => setShowFullInfo(!showFullInfo)}
                        >
                            {showFullInfo ? "Thu gọn thông tin" : "Xem thêm thông tin"}
                        </button>
                    </div>
                </section>

                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Mục tiêu */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 rounded-lg p-2 mr-4">
                                <BookOpen className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Mục tiêu của ChatBot AI GVCN</h3>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Hỗ trợ quản lý hàng trăm sinh viên cùng lúc</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Automatize attention cùng lúc nhiều sinh viên</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Personalize attend từng sinh viên</span>
                            </li>
                        </ul>
                    </div>

                    {/* Tính năng chính */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 rounded-lg p-2 mr-4">
                                <Settings className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Tính năng chính</h3>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Tư vấn học tập</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Giải đáp quy chế - chính sách</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Phản hồi tình hình học tập</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Phân tích dữ liệu sinh viên</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Conditional Extended Information */}
                {showFullInfo && (
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Dành cho ai */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 rounded-lg p-2 mr-4">
                                    <Users className="text-blue-500" size={24} />
                                </div>
                                <h3 className="text-xl font-bold">Dành cho ai?</h3>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>Giáo viên chủ nhiệm - Trợ cố vấn học tập</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>Cán bộ phòng đào tạo - CTSV, Hỗ trọng sinh viên</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>Giáo vụ khoa và báo cáo hỗ trợ</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cách sử dụng */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 rounded-lg p-2 mr-4">
                                    <HelpCircle className="text-blue-500" size={24} />
                                </div>
                                <h3 className="text-xl font-bold">Cách sử dụng</h3>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>Đăng nhập với tài khoản TNUT</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>Đặt câu hỏi hoặc chọn chủ đề để gợi mở các chức năng có sẵn</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>Chatbot sẽ phản hồi tự động dựa trên nhu cầu của bạn</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                {/* Call to Action */}
                <section className="bg-blue-500 text-white rounded-lg shadow-md p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Bắt đầu sử dụng ngay hôm nay</h2>
                    <p className="mb-6">Tăng cường hiệu quả công tác chủ nhiệm và cố vấn học tập với Chatbot AI GVCN TNUT</p>
                    <button className="bg-white text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-md font-bold transition-colors">
                        <Link href="/sign-in">Đăng nhập</Link>
                    </button>
                </section>
            </main>

            {/* Footer */}
        
            <Footer className='' css='container' />
        </div>
    );
}