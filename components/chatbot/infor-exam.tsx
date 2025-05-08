"use client";

import React, { useEffect, useState } from "react";

import { ExternalLink, PanelTopOpen, X } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

export default function InforExam() {


    const [isVisible, setIsVisible] = useState<boolean>(true);

    const toggleCarousel = () => {
        setIsVisible((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            // Kiểm tra nếu kích thước màn hình từ md trở lên (>= 768px)
            if (window.innerWidth >= 768) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Lắng nghe sự thay đổi kích thước cửa sổ
        window.addEventListener("resize", handleResize);

        // Kiểm tra kích thước khi component được render lần đầu
        handleResize();

        // Dọn dẹp sự kiện khi component bị unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const assistants = [
        {
            id: 1,
            name: "Hệ thống ôn thi toán cho 2k7",
            description: "Chuyên giải các bài toán, cung cấp lý thuyết và đề ôn tập toán học cho học sinh 2k7",
            link: "https://aitoan2k7.girc.edu.vn/home"
        },
        {
            id: 2,
            name: "Hệ thống hỗ trợ học tập cho 2k7",
            description: "Giải đáp câu hỏi đa môn và hỗ trợ học tập hiệu quả cho học sinh 2k7",
            link: "https://onthi2k7.girc.edu.vn/home"
        },
        {
            id: 3,
            name: "AI người bạn tâm giao",
            description: "Hỗ trợ luyện chuyên với về sức khỏe tinh thần, tâm lý và các vấn đề xã hội",
            link: "http://14.225.211.7:8503/"
        },
        {
            id: 4,
            name: "AI trợ lý học tập môn Sinh học",
            description: "Giải đáp các vấn đề lý thuyết và bài tập Sinh học cho học sinh",
            link: "http://14.225.211.7:8502/"
        },
        {
            id: 5,
            name: "Tiếng Anh luyện nói",
            description: "Hỗ trợ luyện phát âm, đối thoại và cải thiện kỹ năng nói tiếng Anh",
            link: "https://chatgpt.com/g/g-huBIQBYXM-speakpal-your-private-ai-language-teacher"
        },
        {
            id: 6,
            name: "Gia sư Triết",
            description: "Giải thích các khái niệm triết học và hỗ trợ học tập môn Triết",
            link: "https://chatgpt.com/g/g-CARRKfFMq-gia-su-triet-hoc"
        },
        {
            id: 7,
            name: "Tóm tắt nội dung và vẽ biểu đồ mindmap",
            description: "Tự động tóm tắt văn bản và tạo sơ đồ tư duy trực quan",
            link: "https://chatgpt.com/g/g-vI2kaiM9N-whimsical-diagrams"
        },
        {
            id: 8,
            name: "AI Lên kế hoạch",
            description: "Hỗ trợ lập kế hoạch cá nhân, học tập và công việc một cách khoa học",
            link: "https://chatgpt.com/g/g-l7Znuismb-ai-len-ke-hoach"
        }
    ];



    return (
        <div className="w-full md:w-1/4 bg-blue-500/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-lg p-4 shadow-md flex flex-col gap-2 relative dark:bg-slate-800">
            <Button
                onClick={toggleCarousel}
                size="icon"
                className="md:hidden absolute -top-1 -left-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
            >
                {isVisible ? (<X />) : (<PanelTopOpen />)}
            </Button>
            <div className="flex flex-col justify-between items-center mb-4">
                <h2 className="hidden md:flex text-white font-bold text-sm md:text-[17px] text-center mb-2 dark:text-white">CÁC TRỢ LÝ ẢO</h2>
                <h2 className="md:hidden flex text-white font-bold text-sm md:text-lg text-center mb-2 dark:text-white">CÁC TRỢ LÝ ẢO</h2>
            </div>

            <div className={`flex flex-col gap-2 md:h-[50+0px] h-[400px] overflow-hidden ${isVisible ? "block" : "hidden md:block"}`}>
                <ScrollArea className="flex-1 h-full w-full overflow-auto" type="always">
                    {assistants.map((assistant) => (
                        <div key={assistant.id} className="hover:bg-white/10 transition-colors p-4 duration-150 ease-in-out rounded-3xl flex flex-col gap-2 border-b border-blue-300/30 pb-3 last:border-0">
                            <h3 className="text-white font-semibold text-sm md:text-base dark:text-white">{assistant.name}</h3>
                            <p className="text-gray-300 text-xs md:text-sm dark:text-gray-400">{assistant.description}</p>
                            <a
                                href={assistant.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-blue-300 hover:text-blue-200 text-xs md:text-sm transition-colors"
                            >
                                <ExternalLink size={16} />
                                <span>Truy cập trợ lý</span>
                            </a>
                        </div>
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
}
