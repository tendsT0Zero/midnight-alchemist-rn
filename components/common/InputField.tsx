import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { Controller, FieldValues, Path, Control, RegisterOptions } from "react-hook-form";
import Feather from "@expo/vector-icons/Feather";

type InputType = "text" | "password" | "email" | "number" | "textarea";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: InputType;
  icon?: keyof typeof Feather.glyphMap;
  maxChar?: number;
  rules?: RegisterOptions<T, Path<T>>;
  isRequired?: boolean;
};

const InputField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  icon,
  maxChar,
  rules,
  isRequired = false,
}: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="mb-2 w-full">
      {label && (
        <Text className="text-zinc-400 text-sm font-medium mb-2 ml-1">
          {label} {isRequired && <Text className="text-cyan-400">*</Text>}
        </Text>
      )}

      <Controller
        name={name}
        control={control}
        rules={{
          ...rules,
          required: isRequired ? "This field is required" : false,
          pattern: type === "email" ? {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          } : type === "number" ? {
            value: /^\d+$/,
            message: "Please enter only numbers"
          } : undefined
        }}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View>
            <View
              className={`
                flex-row bg-zinc-950 rounded-2xl px-4 py-3 border-2 transition-all
                ${error ? "border-red-500" : isFocused ? "border-cyan-400" : "border-zinc-800"}
                ${type === "textarea" ? "h-40 items-start" : "h-16 items-center"}
              `}
            >
              {/* Optional Leading Icon */}
              {icon && (
                <View className={type === "textarea" ? "mt-1 mr-3" : "mr-3"}>
                  <Feather name={icon} size={20} color={isFocused ? "#22d3ee" : "#52525b"} />
                </View>
              )}

              <TextInput
                className=" text-white text-base text-start"
                placeholder={placeholder}
                placeholderTextColor="#52525b"
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                  setIsFocused(false);
                  onBlur();
                }}
                onChangeText={(text) => {
                   if (maxChar && text.length > maxChar) return;
                   onChange(text);
                }}
                value={value}
                secureTextEntry={type === "password" && !showPassword}
                multiline={type === "textarea"}
                keyboardType={type === "number" ? "numeric" : "default"}
                textAlignVertical={type === "textarea" ? "top" : "center"}
              />

              {/* Password Toggle Visibility */}
              {type === "password" && (
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Feather 
                    name={showPassword ? "eye" : "eye-off"} 
                    size={20} 
                    color="#52525b" 
                  />
                </Pressable>
              )}
            </View>

            {/* Error Message & Character Counter */}
            <View className="flex-row justify-between mt-2 px-1">
              <View className="flex-1">
                {error && (
                  <Text className="text-red-500 text-xs font-semibold">
                    {error.message}
                  </Text>
                )}
              </View>
              
              {maxChar && (
                <Text className="text-zinc-500 text-xs">
                  {value?.length || 0} / {maxChar}
                </Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default InputField;