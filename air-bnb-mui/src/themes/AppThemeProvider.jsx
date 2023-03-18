import {createTheme, ThemeProvider} from "@mui/material/styles"

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: "Raleway",
        }
    }
});

const AppThemeProvider = (prop) => {
  return (
    <ThemeProvider theme={theme}>{prop.childern}</ThemeProvider>
  )
}

export default AppThemeProvider