import { z } from "zod";
import { FieldErrors, UseFormRegister } from 'react-hook-form';

// กำหนดชนิดของฟิลด์ที่ใช้สำหรับการตรวจสอบความถูกต้อง
export type ValidationFields = "email" | "url" | "exp" | "pass" | "confirmPass";

// กำหนดชนิดของข้อมูลที่ฟอร์มจะรับ
export type FormData = {
    email: string;
    url: string;
    exp: number;
    pass: string;
    confirmPass: string;
};

// สร้าง Schema สำหรับการตรวจสอบข้อมูลในฟอร์ม
export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    url: z.string().url({ message: "Invalid URL" }),
    exp: z.number().positive({ message: "Experience must be a positive number" }),
    pass: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPass: z.string().min(6, { message: "Password must be at least 6 characters long" }),
}).refine(data => data.pass === data.confirmPass, {
    path: ['confirmPass'],
    message: "Passwords do not match",
});

// กำหนดชนิดของพร็อพสำหรับคอมโพเนนต์ฟอร์มฟิลด์
export type FormFieldProps = {
    register: UseFormRegister<FormData>;
    name: ValidationFields;
    error?: FieldErrors<FormData>[ValidationFields]; 
    type: string;
    placeholder: string;
    valueAsNumber?: boolean;
    required?: boolean;
};
