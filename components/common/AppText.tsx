import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";
import { Text } from "react-native";

type Props = {
  children: React.ReactNode;
  fontWeight?:
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black"
    | "mediumItalic";
  className?: ClassValue;
  fontFamily?: "primary" | "secondary";
};

const AppText = ({
  children,
  className,
  fontWeight = "normal",
  fontFamily = "primary",
}: Props) => {
  const fontStyle = {
    primary: {
      light: "font-primaryLight",
      normal: "font-primary",
      medium: "font-primaryMedium",
      semibold: "font-primarySemibold",
      bold: "font-primaryBold",
      extrabold: "font-primaryExtraBold",
      black: "font-primaryBlack",
      mediumItalic: "font-primaryMediumItalic",
    },

    // keeping an option for future
    secondary: {
      light: "font-secondaryLight",
      normal: "font-secondary",
      medium: "font-secondaryMedium",
      semibold: "font-secondarySemibold",
      bold: "font-secondaryBold",
      extrabold: "font-secondaryExtraBold",
      black: "font-secondaryBlack",
      mediumItalic: "font-secondaryMediumItalic",
    },
  };

  return (
    <Text
      className={cn(
        "text-base text-white",
        className,
        fontStyle[fontFamily][fontWeight],
      )}
    >
      {children}
    </Text>
  );
};

export default AppText;
