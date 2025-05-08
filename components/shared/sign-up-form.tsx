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


import { House } from "lucide-react"

// import LoadingPage from "../../lib/loadingpage1.gif";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"

import { SignUpSchema } from "@/schema/sign-up-schema"

import { registerApi } from "@/api"

import bgs from "../../public/image/testbg.png";
import Image from "next/image"
import Link from "next/link"

export function SignUpForm({ className, ...props }: React.ComponentProps<"div">) {

  //state
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      ho_va_ten: "",
      // sdt: "",
      email: "",
      password: "",
      // facebook: "",
      // noi_o: "",
      // ten_truong: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    setLoading(true);
    // setShowOverlay(false);
    // console.log("data", data)
    try {
      const res = await registerApi({
        ho_va_ten: data.ho_va_ten,
        // sdt: data.sdt,
        email: data.email,
        password: data.password,
        // facebook: data.facebook,
        // noi_o: data.noi_o,
        // ten_truong: data.ten_truong,
      });

      if (res) {
        // setShowOverlay(true);

        toast.success('🎉 Đăng ký thành công!', {
          duration: 1800,
        });
      }

      setTimeout(() => {
        router.push("/sign-in");
      }, 1800);
    } catch (error) {
      console.error(error);
      toast.error("😥 Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1800);
    }
  };


  return (

    <>
      {/* {loading && showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Image
            src={LoadingPage}
            alt="Loading"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      )} */}


      <div className={cn("relative flex flex-col gap-6 min-h-screen", className)} {...props}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgs}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content with relative positioning to appear above background */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-4 py-8 ">
          <Card className="overflow-hidden max-w-md w-full bg-blue-500/25 bg-opacity-80  bg-clip-padding backdrop-filter backdrop-blur-lg  dark:bg-gray-900/90  my-4 border border-gray-200 dark:border-gray-700">
            <CardContent className="grid p-0 ">
              <Form {...form}>
                <div className="flex flex-col items-center text-center p-6 pb-0 relative sticky top-0  dark:bg-gray-900/90 backdrop-blur-sm z-10">
                  <Link href="/">
                    <House className="p-1 absolute left-5 top-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out" />
                  </Link>
                  <h1 className="text-2xl font-bold text-black dark:text-white">CHÀO MỪNG ĐẾN VỚI</h1>
                  <p className="text-balance text-black dark:text-gray-400">HỆ THỐNG HỖ TRỢ TƯ VẤN TNUT</p>
                </div>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="max-w-md w-full flex flex-col gap-4 p-6 md:p-8"
                >
                  <FormField
                    control={form.control}
                    name="ho_va_ten"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-white dark:text-gray-200">
                          * HỌ VÀ TÊN
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-white dark:text-gray-200">
                          * TÀI KHOẢN (EMAIL)
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
                        <FormLabel className="flex items-center text-white  dark:text-gray-200">
                          * MẬT KHẨU (SỐ ĐIỆN THOẠI)
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
                    {loading ? "Đang xử lý" : "ĐĂNG KÝ"}
                  </Button>

                  <div className="text-center text-sm">
                    Bạn đã có tài khoản? {" "}
                    <a href="sign-in" className="underline underline-offset-4">
                      ĐĂNG NHẬP
                    </a>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="text-balance text-center text-xs text-white font-medium [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            © {new Date().getFullYear()} TNUT
          </div>
        </div>
      </div>
    </>
  )
}

