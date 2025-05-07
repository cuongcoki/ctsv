"use client"

import type React from "react"

import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { AutoResizeTextarea } from "../ui/AutoResizeTextarea"

import { useEffect } from "react"


interface ChatInputProps {
    input: string
    setInput: (input: string) => void
    handleSubmit: (e: React.FormEvent) => void
    isLoading: boolean
}

interface ChatInputProps {
    input: string;
    setInput: (input: string) => void; // KHÔNG phải setState kiểu callback
}


export function ChatInput({ input, setInput, handleSubmit, isLoading }: ChatInputProps) {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (!isLoading) {
                handleSubmit(e);
            }
        }
    }


    useEffect(() => {
        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            const activeElement = document.activeElement;
            const isTypingField = activeElement instanceof HTMLTextAreaElement ||
                activeElement instanceof HTMLInputElement;

            if (isTypingField) return;

            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (!isLoading) {
                    handleSubmit(e as unknown as React.FormEvent);
                }
            }
        };

        window.addEventListener('keydown', handleGlobalKeyDown);
        return () => {
            window.removeEventListener('keydown', handleGlobalKeyDown);
        };
    }, [handleSubmit, isLoading]);

    return (
            <form onSubmit={handleSubmit}>
                <div className="relative shadow-xl w-full ">
                    <div className="relative z-20 w-full  mx-auto bg-blue-700 rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 md:p-4  ">
                        <div className="relative flex flex-col items-center gap-3">
                            <AutoResizeTextarea
                                onKeyDown={handleKeyDown}
                                onChange={(v) => setInput(v)}
                                value={input}
                                placeholder="Hỏi bất kỳ điều gì"
                                className={`w-full  px-3 sm:px-4 py-2 sm:py-3 rounded-3xl bg-white/20 text-white shadow-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-200 text-sm sm:text-base `}
                            />
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        type="submit"
                                        className="absolute bottom-2 right-1 rounded-full text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                                    >
                                        <ArrowUpIcon size={18} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent sideOffset={12}>Gửi tin nhắn</TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                    {/* <div className="absolute -inset-1 bg-blue-500 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 z-10"></div> */}
                </div>
            </form>
    )
}




