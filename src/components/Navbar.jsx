import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const likeCount = useSelector((state) => state.likeList)?.length;
  const savedList = useSelector((state) => state.savedProduct)?.length;
  const orderedList = useSelector((state) => state.orderedList)?.length
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <p onClick={() => navigate('/')}>LOGO</p> 
          </Typography>

          

          <div className="flex space-x-5">
            <Badge showZero color="success" badgeContent={likeCount}>
              <NavLink to={'/liked'}>
              <strong className="cursor-pointer">LIKED</strong>
              </NavLink>
              
            </Badge>
            <Badge showZero color="success" badgeContent={savedList}>
            <NavLink to={'/saved'}>
              <strong className="cursor-pointer">SAVED</strong>
              </NavLink>
            </Badge>
            <Badge showZero color="success" badgeContent={orderedList}>
            <NavLink to={'/ordered'}>
              <strong className="cursor-pointer">ORDERED</strong>
              </NavLink>
            </Badge>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
