import React, { FC } from 'react';
import { FormFieldProps } from './types';

// คอมโพเนนต์สำหรับฟอร์มฟิลด์
const FormField: FC<FormFieldProps> = ({
    register,
    name,
    error,
    type,
    placeholder,
    valueAsNumber,
    required,
}) => {
    return (
        <>
            <input
                type={type} // ชนิดของ input เช่น text, password ฯลฯ
                placeholder={placeholder} // ข้อความแสดงแทน
                required={required} // กำหนดว่าจำเป็นต้องกรอกหรือไม่
                {...register(name, { valueAsNumber })} // เชื่อมต่อกับ react-hook-form
            />
            {error && <span>{error.message}</span>}  // แสดงข้อความข้อผิดพลาดหากมี
        </>
    );
};

export default FormField;
