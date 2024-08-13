import React, { FC } from 'react';
import FormField from './FormField';
import { FormData, LoginSchema } from './types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// คอมโพเนนต์สำหรับฟอร์มหลัก
const Form: FC = () => {
  const {
    register, // ฟังก์ชันสำหรับเชื่อมต่อฟิลด์กับ react-hook-form
    handleSubmit, // ฟังก์ชันสำหรับจัดการการส่งฟอร์ม
    formState: { errors }, // จัดการข้อผิดพลาดในฟอร์ม
  } = useForm<FormData>({ resolver: zodResolver(LoginSchema) }); // ใช้ zod สำหรับตรวจสอบความถูกต้องของฟอร์ม

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data); // ฟังก์ชันเมื่อฟอร์มส่งสำเร็จ
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Staff Register</h1>
          
          <FormField
            type="url"
            placeholder="URL"
            name="url"
            register={register}
            required
            error={errors.url}
          />
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            required
            error={errors.email}
          />
          <FormField
            type="number"
            placeholder="Exp year(S)"
            name="exp"
            valueAsNumber
            register={register}
            required
            error={errors.exp}
          />
          <FormField
            type="password"
            placeholder="Password"
            name="pass"
            register={register}
            required
            error={errors.pass}
          />
          <FormField
            type="password"
            placeholder="Confirm Password"
            name="confirmPass"
            register={register}
            required
            error={errors.confirmPass}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
