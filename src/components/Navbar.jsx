import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useDebounce from '../hooks/useDebounce'
import { GET_ALL_PRODUCTS, SEARCH } from "../redux/types";
import { getProducts } from "../redux/reducers/getProducts";
import { useAxios } from "../hooks/useAxios";
import { MainContext } from "../context/context";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const likeCount = useSelector((state) => state.likeList)?.length;
  const savedList = useSelector((state) => state.savedProduct)?.length;
  const orderedList = useSelector((state) => state.orderedList)?.length;
  const { refresh, setRefresh } = React.useContext(MainContext);

  const [inputValue, setInputValue] = React.useState("")
  function handleSearchInput(e){
    if(e.target.value){
      setInputValue(e.target.value)
    }else{
     setRefresh(!refresh)
    }
    setInputValue(e.target.value)
  }
  const inputWaitingValue = useDebounce(inputValue, 1000)
  console.log(inputWaitingValue); 
  
  React.useEffect(() => {
    if(inputWaitingValue) dispatch({type: SEARCH, payload:inputWaitingValue})
  }, [inputWaitingValue])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="">
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
            <p onClick={() => navigate("/")}>LOGO</p>
          </Typography>

          <div className="flex items-center justify-between w-full">
            <div className="flex space-x-5">
              <Badge showZero color="success" badgeContent={likeCount}>
                <NavLink to={"/liked"}>
                  <strong className="cursor-pointer">LIKED</strong>
                </NavLink>
              </Badge>
              <Badge showZero color="success" badgeContent={savedList}>
                <NavLink to={"/saved"}>
                  <strong className="cursor-pointer">SAVED</strong>
                </NavLink>
              </Badge>
              <Badge showZero color="success" badgeContent={orderedList}>
                <NavLink to={"/ordered"}>
                  <strong className="cursor-pointer">ORDERED</strong>
                </NavLink>
              </Badge>
            </div>
            <input onChange={handleSearchInput} placeholder="Search By Name..." className="outline-none px-2 py-1 text-black rounded-sm" type="text" />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
