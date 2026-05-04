module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        primaryLight: "Inter_300Light",
        primary: "Inter_400Regular",
        primaryMedium: "Inter_500Medium",
        primarySemibold: "Inter_600SemiBold",
        primaryBold: "Inter_700Bold",
        primaryExtraBold: "Inter_800ExtraBold",
        primaryBlack: "Inter_900Black",
        playfairBoldItalic: "PlayfairDisplay_700Bold_Italic",
      },
      colors: {
        primary: "#00F2FE",
        textGray: "#8E8E93",
        textBlack: "#000000",
        frostedBg: "rgba(255,255,255,0.08)",
        frostedBorder: "rgba(255,255,255,0.12)",
        frostedText: "rgba(255,255,255,0.75)",
        mattBlack: "#121212",
      },
    },
  },
  plugins: [],
};
