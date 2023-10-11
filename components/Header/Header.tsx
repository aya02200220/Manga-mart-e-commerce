import { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Popover,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  MenuItem,
  Badge,
} from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { GrFavorite, GrCart } from "react-icons/gr";
import { debounce } from "lodash";
import { auth, provider } from "@/components/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  User,
} from "firebase/auth";
import Image from "next/image";
import Logo from "../../public/Manga.png";
import { useAppContext } from "../providers/AppContext";

interface HeaderProps {
  onSearch?: (term: string, category: string) => void;
}

const filterMenu = [
  {
    value: "Title",
    label: "Title",
  },
  {
    value: "Description",
    label: "Description",
  },
];
function Header(props: HeaderProps) {
  const [user, setUser] = useState(auth.currentUser);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const imageUrl = user?.photoURL ?? "default-image-url";
  const [searchInput, setSearchInput] = useState("");
  const [searchCategory, setSearchCategory] = useState("Title");

  const isGoogleLoggedIn = useAppContext().isGoogleLoggedIn;
  const favs = useAppContext().favs;
  const itemsInCart = useAppContext().itemsInCart;

  // debounced検索処理
  const debouncedSearch = debounce((term: string, category: string) => {
    props.onSearch && props.onSearch(term, category);
  }, 300);

  useEffect(() => {
    debouncedSearch(searchInput, searchCategory);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchInput, searchCategory]);

  useEffect(() => {
    // console.log("auth.currentUser:", auth.currentUser);
    // console.log("isGoogleLoggedIn:", isGoogleLoggedIn);

    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      setUser(null);
    }
  }, [isGoogleLoggedIn]);

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout error:", error.message);
    });
  };

  const handleLogin = () => {
    console.log("Login clicked");

    signInWithRedirect(auth, provider).catch((error) => {
      console.error("Login error:", error.message);
    });
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          // console.log("Logged in as:", result.user.displayName);
        }
      })
      .catch((error) => {
        // console.error("Login error:", error.message);
      });
  }, []);

  return (
    <nav className="w-full bg-[#ffffffaf] h-[70px] flex items-center  justify-between px-2 sm:px-3 md:px-16 fixed top-0 z-40">
      <div className="flex flex-row items-center ">
        <Image
          className="hidden sm:block"
          src={Logo}
          height={50}
          alt="Manga-mart Logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      <div className="flex justify-between sm:justify-end items-center w-full">
        <div className="flex items-center ">
          <div className=" hidden sm:block">
            <TextField
              className="bg-[#eaf6ff]"
              size="small"
              id="outlined-select-search-category"
              select
              label="Search category"
              defaultValue="Title"
              style={{ width: "130px" }}
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              {filterMenu.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <FormControl
            className="mr-4"
            sx={{ m: 1, width: { xs: "150px", sm: "200px" } }}
            variant="outlined"
          >
            <InputLabel htmlFor="search" size="small">
              Search
            </InputLabel>
            <OutlinedInput
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              id="search-arb"
              sx={{
                height: "40px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <BiSearch />
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
        </div>

        <div className="flex">
          {user === undefined ? null : user ? (
            <div className="flex flex-row items-center">
              <p className="flex flex-col leading-4 justify-center items-center mr-2 text-[15px] uppercase hidden md:block">
                <p>HELLO!</p>
                <p> {user.displayName}</p>
              </p>
              <IconButton onClick={handleAvatarClick}>
                <Image
                  src={imageUrl}
                  alt="User Photo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Button
                  onClick={handleLogout}
                  style={{ padding: "10px", fontSize: "16px" }}
                >
                  Logout
                </Button>
              </Popover>

              <IconButton className="ml-2">
                <Badge badgeContent={favs} color="secondary">
                  <GrFavorite size={20} />
                </Badge>
              </IconButton>
              <IconButton className="ml-2">
                <Badge badgeContent={itemsInCart} color="primary">
                  <GrCart size={20} />
                </Badge>
              </IconButton>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-1 h-10 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 leading-4"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
