// import "@fontsource/roboto";
// import "@popperjs/core";
// import "react-dates/initialize";
// import "react-dates/lib/css/_datepicker.css";
import '../src/tailwind.css'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}