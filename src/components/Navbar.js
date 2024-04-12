import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
    localStorage.clear();
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        Chat APPs
      </Typography>
      {loggedIn ? (
        <>
          <NavLink to="/textinput" p={1}>
            Home
          </NavLink>
          <NavLink>
           |
          </NavLink>
          <NavLink to="/" onClick={handleLogout} p={1}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register"  p={1}>
            Register
          </NavLink>
          <NavLink>
              |
          </NavLink>
          <NavLink to="/" p={1}>
            Login
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;