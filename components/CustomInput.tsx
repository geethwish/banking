import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Control } from "react-hook-form";
import { Input } from "./ui/input";
import { z } from "zod";
import { formSchema } from "./AuthForm";

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="input-class"
              type={type}
            />
          </FormControl>

          <FormMessage className="form-message mt-2" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
