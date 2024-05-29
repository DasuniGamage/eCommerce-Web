import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/products"  element = {<Products/>}/>
        <Route path="/addProduct"  element = {<AddProduct/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>    
  );
}

export default App;
