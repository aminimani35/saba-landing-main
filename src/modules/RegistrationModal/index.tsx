"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format as formatJalali } from "date-fns-jalali";
import { format as formatGregorian } from "date-fns";
import { faIR } from "date-fns-jalali/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";

const formSchema = z.object({
  FirstName: z
    .string()
    .min(2, { message: "نام باید حداقل ۲ کاراکتر باشد" })
    .max(50, { message: "نام نباید بیشتر از ۵۰ کاراکتر باشد" }),
  LastName: z
    .string()
    .min(2, { message: "نام خانوادگی باید حداقل ۲ کاراکتر باشد" })
    .max(50, { message: "نام خانوادگی نباید بیشتر از ۵۰ کاراکتر باشد" }),
  MobileNumber: z
    .string()
    .regex(/^09[0-9]{9}$/, { message: "شماره موبایل معتبر نیست" }),
  EmergencyMobileNumber: z
    .string()
    .regex(/^09[0-9]{9}$/, { message: "شماره موبایل اضطراری معتبر نیست" }),
  NationalCode: z
    .string()
    .regex(/^[0-9]{10}$/, { message: "کد ملی باید ۱۰ رقم باشد" }),
  DateOfBirth: z.date({ message: "لطفا تاریخ تولد را انتخاب کنید" }),
  Degree: z.string().min(1, { message: "لطفا مدرک تحصیلی را انتخاب کنید" }),
  Avatar: z
    .instanceof(File, { message: "لطفا تصویر پروفایل را انتخاب کنید" })
    .refine((file) => file.size <= 5000000, { message: "حجم فایل باید کمتر از ۵ مگابایت باشد" })
    .refine(
      (file) => ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      { message: "فقط فایل‌های JPG، JPEG و PNG مجاز هستند" }
    ),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationModalProps {
  children: React.ReactNode;
}

export default function RegistrationModal({ children }: RegistrationModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      MobileNumber: "",
      EmergencyMobileNumber: "",
      NationalCode: "",
      Degree: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("FirstName", data.FirstName);
      formData.append("LastName", data.LastName);
      formData.append("MobileNumber", data.MobileNumber);
      formData.append("EmergencyMobileNumber", data.EmergencyMobileNumber);
      formData.append("NationalCode", data.NationalCode);

      // Convert date to YYYY-MM-DD format (Gregorian calendar) for API
      const formattedDate = formatGregorian(data.DateOfBirth, "yyyy-MM-dd");
      formData.append("DateOfBirth", formattedDate);

      formData.append("Degree", data.Degree);
      formData.append("Avatar", data.Avatar);

      const response = await fetch("http://87.107.165.10:3000/api/student/register", {
        method: "POST",
        headers: {
          accept: "*/*",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      console.log("Registration successful:", result);

      // Success message
      toast({
        title: "✅ ثبت نام موفق",
        description: "ثبت نام شما با موفقیت انجام شد!",
        variant: "success",
      });

      // Close modal and reset form
      setOpen(false);
      form.reset();
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "❌ خطا در ثبت نام",
        description: error instanceof Error ? error.message : "خطا در ثبت نام. لطفا دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const RegistrationForm = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-4 md:px-0">
        {/* First Name */}
        <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-right block">نام *</FormLabel>
              <FormControl>
                <Input
                  placeholder="نام خود را وارد کنید"
                  className="text-right"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="LastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-right block">نام خانوادگی *</FormLabel>
              <FormControl>
                <Input
                  placeholder="نام خانوادگی خود را وارد کنید"
                  className="text-right"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        {/* National Code */}
        <FormField
          control={form.control}
          name="NationalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-right block">کد ملی *</FormLabel>
              <FormControl>
                <Input
                  placeholder="کد ملی ۱۰ رقمی"
                  className="text-right"
                  dir="ltr"
                  maxLength={10}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        {/* Mobile Number */}
        <FormField
          control={form.control}
          name="MobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-right block">شماره موبایل *</FormLabel>
              <FormControl>
                <Input
                  placeholder="09123456789"
                  className="text-right"
                  dir="ltr"
                  maxLength={11}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        {/* Emergency Mobile Number */}
        <FormField
          control={form.control}
          name="EmergencyMobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-right block">شماره موبایل اضطراری *</FormLabel>
              <FormControl>
                <Input
                  placeholder="09123456789"
                  className="text-right"
                  dir="ltr"
                  maxLength={11}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        {/* Date of Birth */}
        <FormField
          control={form.control}
          name="DateOfBirth"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-right block">تاریخ تولد *</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      type="button"
                      className={cn(
                        "w-full flex items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50 text-right",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        formatJalali(field.value, "yyyy/MM/dd", { locale: faIR })
                      ) : (
                        <span>تاریخ تولد را انتخاب کنید</span>
                      )}
                      <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    locale={faIR}
                    dir="rtl"
                    captionLayout="dropdown"
                    fromYear={1900}
                    toYear={new Date().getFullYear()}
                    formatters={{
                      formatMonthDropdown: (date) =>
                        formatJalali(date, "LLLL", { locale: faIR }),
                      formatYearDropdown: (date) =>
                        formatJalali(date, "yyyy", { locale: faIR }),
                      formatDay: (date) =>
                        formatJalali(date, "d", { locale: faIR }),
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        {/* Degree */}
        <FormField
          control={form.control}
          name="Degree"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-right block">مدرک تحصیلی *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full text-right">
                    <SelectValue placeholder="مدرک تحصیلی را انتخاب کنید" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0">نامشخص</SelectItem>
                  <SelectItem value="1">پیش دبستانی</SelectItem>
                  <SelectItem value="2">ابتدایی</SelectItem>
                  <SelectItem value="3">متوسطه اول</SelectItem>
                  <SelectItem value="4">متوسطه دوم</SelectItem>
                  <SelectItem value="5">دیپلم</SelectItem>
                  <SelectItem value="6">فوق دیپلم</SelectItem>
                  <SelectItem value="7">کارشناسی</SelectItem>
                  <SelectItem value="8">کارشناسی ارشد</SelectItem>
                  <SelectItem value="9">دکتری</SelectItem>
                  <SelectItem value="10">فوق دکتری</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        {/* Avatar */}
        <FormField
          control={form.control}
          name="Avatar"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel className="text-right block">تصویر پروفایل *</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      onChange(file);
                    }
                  }}
                  className="text-right"
                />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex justify-end gap-3 pt-4 pb-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            انصراف
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "در حال ثبت..." : "ثبت نام"}
          </button>
        </div>
      </form>
    </Form>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-right text-2xl font-bold">
              فرم ثبت نام
            </DialogTitle>
            <DialogDescription className="text-right">
              لطفا اطلاعات خود را برای ثبت نام وارد کنید
            </DialogDescription>
          </DialogHeader>
          <RegistrationForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-right">
          <DrawerTitle className="text-2xl font-bold">فرم ثبت نام</DrawerTitle>
          <DrawerDescription>
            لطفا اطلاعات خود را برای ثبت نام وارد کنید
          </DrawerDescription>
        </DrawerHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <RegistrationForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
