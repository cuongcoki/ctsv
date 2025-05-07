"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { useState } from "react"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SignInSchema } from "@/schema/sign-in-schema"
import { Eye, EyeOff, House } from "lucide-react"
import { loginApi } from "@/api"
import toast from "react-hot-toast"
import { useAuthStore } from "@/store/authStore"
import { useChatStore } from "@/store/chatStore"

import bgs from "../../public/image/Back 2.jpg";

import Image from "next/image"

import LoadingPage from "../../lib/loadingpage1.gif";

interface User {
  sub: number;
  ho_va_ten: string;
  // noi_o: string;
}

interface Login {
  user: User;
  access_token: string;
  token_type: string;
  session_id: number;
  session_title: string;
}


export function SignInForm({ className, ...props }: React.ComponentProps<"div">) {
  //state
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    setLoading(true);
    try {
      const res = await loginApi({
        email: data.email,
        password: data.password,
      });

      const login: Login = res as Login;

      useAuthStore.getState().setAccessToken(login.access_token);
      useAuthStore.getState().setUser(login.user);
      useChatStore.getState().setSessionId(login.session_id);
      localStorage.setItem("sessionId", login.session_id.toString());

      toast.success("Đăng nhập thành công");

      // Giữ loading một chút để tạo cảm giác mượt
      setTimeout(() => {
        setLoading(false);
        router.push("/chatbot");
      }, 1900);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Lỗi đăng nhập! Hãy kiểm tra lại thông tin.", error.message);
        toast.error("Lỗi đăng nhập hãy kiểm tra lại thông tin");
      } else {
        console.log("Lỗi không xác định!", error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1900);
    }
  };

  return (
    <>{
      loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Image
            src={LoadingPage}
            alt="Loading"
            fill
            className="object-cover w-full h-full"
            priority
          />

        </div>
      )
    }


      <div className={cn("relative flex flex-col gap-6 min-h-screen", className)} {...props}>

        <div className="absolute inset-0 z-0">
          <Image
            src={bgs}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Nội dung chính */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-4 py-8 overflow-auto">
       

          <Card className="overflow-hidden max-w-md w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm my-4 border border-gray-200 dark:border-gray-700">
            <CardContent className="grid p-0 ">
              <Form {...form}>
                <div className="flex flex-col items-center text-center p-6 pb-0 relative sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-10">
                  <Link href="/">
                    <House className="p-1 absolute left-5 top-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out" />
                  </Link>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">CHÀO MỪNG ĐẾN VỚI</h1>
                  <p className="text-balance text-muted-foreground dark:text-gray-400">HỆ THỐNG HỖ TRỢ TƯ VẤN TNUT</p>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4 p-6 md:p-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700 dark:text-gray-200">
                          TÀI KHOẢN (EMAIL)
                        </FormLabel>
                        <FormControl>
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700 dark:text-gray-200">
                          MẬT KHẨU
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type={passwordVisible ? "text" : "password"}
                              {...field}
                            />
                          </FormControl>
                          <Button
                            type="button"
                            size="icon"
                            variant="ghost"
                            className="absolute bottom-0 right-0 h-full px-3 text-gray-400 hover:text-gray-600"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                          >
                            {passwordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md px-6 py-2 shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
                    disabled={loading}
                  >
                    {loading ? "Đang xử lý" : "ĐĂNG NHẬP"}
                  </Button>

                  <div className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Bạn chưa có tài khoản?{" "}
                    <a href="sign-up" className="underline underline-offset-4">
                      ĐĂNG KÝ
                    </a>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="text-center text-xs text-white font-medium [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            © {new Date().getFullYear()} TNUT
          </div>
        </div>
      </div>
    </>
  )
}

