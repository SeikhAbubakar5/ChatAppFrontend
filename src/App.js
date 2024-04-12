import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import Login from "./components/Login";
import Register from "./components/Register";
import Textinput from './components/TextInput';
import Navbar from './components/Navbar';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <ThemeProvider theme={theme}>
    <Navbar/>
    <CssBaseline/>
    <Toaster />
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/textinput" element={<Textinput />} />
          
    </Routes>
    </ThemeProvider>
  );
}
export default App;
