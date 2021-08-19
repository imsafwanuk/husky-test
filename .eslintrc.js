module.exports = {
  extends: [
    "react-app",
    "@react-native-community",
    "react-app/jest",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
