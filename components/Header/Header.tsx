import { useEffect, useState } from "react";
import {
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
import { FcGoogle } from "react-icons/fc";
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
import LogoSmall from "../../public/Manga-logo-small.png";
import { useAppContext } from "../providers/AppContext";
import FavModal from "../Favorite/FavModal";
// import CartModal from "../Cart/CartModal";
import Link from "next/link";
import { CartMenu } from "../CartMenu/CartMenu";
import { useCycle } from "framer-motion";

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

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Header(props: HeaderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const imageUrl = user?.photoURL ?? "default-image-url";
  const [searchInput, setSearchInput] = useState("");
  const [searchCategory, setSearchCategory] = useState("Title");
  const [isFavOpen, setFavIsOpen] = useState(false);
  const [isCartOpen, setCartIsOpen] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [width, height] = useWindowSize();

  const { isGoogleLoggedIn, favCounts, cartItemsCounts } = useAppContext();

  useEffect(() => {
    if (width < 768) {
      // TailwindのSMサイズ
      setSearchCategory("Title");
    }
  }, [width]);

  // debounced検索処理;
  const debouncedSearch = debounce((term: string, category: string) => {
    props.onSearch && props.onSearch(term, category);
  }, 300);

  useEffect(() => {
    debouncedSearch(searchInput, searchCategory);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchInput, searchCategory]);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout error:", error.message);
    });
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          console.log("Logged in as:", result.user.displayName);
        }
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  }, []);

  const handleLogin = () => {
    console.log("Login clicked");
    signInWithRedirect(auth, provider).catch((error) => {
      console.error("Login error:", error.message);
    });
  };

  const handleFavModalOpen = () => {
    setFavIsOpen(true);
  };
  const handleFavModalClose = () => {
    setFavIsOpen(false);
  };
  const handleCartModalOpen = () => {
    toggleOpen();
  };
  const handleCartModalClose = () => {
    setCartIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#ffffffaf] h-[70px] flex items-center  justify-between px-2 md:px-20 fixed top-0 z-10">
      <div className="flex flex-row items-center ">
        <Link href="/">
          <Image
            className="hidden sm:block"
            src={Logo}
            height={50}
            alt="Manga-mart Logo"
          />
          <Image
            className="block sm:hidden"
            src={LogoSmall}
            height={50}
            alt="Manga-mart Logo"
          />
        </Link>
      </div>

      <div className="flex justify-between sm:justify-end items-center w-full">
        <div className="flex items-center">
          <div className="hidden md:block">
            <TextField
              className="bg-[#eaf6ff]"
              size="small"
              id="outlined-select-search-category"
              select
              label="Search category"
              defaultValue="Title"
              sx={{ width: "130px" }}
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
            <div className="block md:hidden">
              <InputLabel htmlFor="search" size="small">
                Search Title
              </InputLabel>
            </div>
            <div className="hidden md:block">
              <InputLabel htmlFor="search" size="small">
                Search
              </InputLabel>
            </div>

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

        {/* <div className="flex-grow"></div> */}
        <div className="flex">
          {isGoogleLoggedIn !== null && user ? (
            <div className="flex flex-row items-center mr-2 md:mr-0">
              <p className="flex flex-col leading-4 justify-center items-center mr-2 text-[15px] uppercase hidden sm:block">
                <p>HELLO!</p>
                <p> {user.displayName}</p>
              </p>
              <IconButton className="p-0 sm:p-1" onClick={handleAvatarClick}>
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

              <IconButton
                className="ml-0 sm:ml-2 p-2"
                onClick={() => handleFavModalOpen()}
              >
                <Badge badgeContent={favCounts} color="secondary">
                  <GrFavorite size={20} />
                </Badge>
              </IconButton>

              <IconButton
                onClick={() => handleCartModalOpen()}
                className="ml-0 sm:ml-2 p-1 sm:p-2"
              >
                <Badge badgeContent={cartItemsCounts} color="primary">
                  <GrCart size={20} />
                </Badge>
              </IconButton>
            </div>
          ) : (
            <>
              <IconButton
                onClick={() => handleCartModalOpen()}
                className="ml-0 sm:ml-2 p-1 sm:p-2 mr-3 "
              >
                <Badge badgeContent={cartItemsCounts} color="primary">
                  <GrCart size={20} />
                </Badge>
              </IconButton>
              <button
                onClick={handleLogin}
                type="button"
                className=" text-white bg-[#2f415f] hover:bg-[#223962]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-[10px] sm:text-sm px-3 py-1 h-10 text-center inline-flex items-center leading-[9px] sm:leading-4"
              >
                <FcGoogle size="20px" />
                <p className="ml-1">Sign in with Google</p>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="relative">
        <FavModal isFavOpen={isFavOpen} onRequestClose={handleFavModalClose} />
      </div>

      <div>
        <CartMenu isOpen={isOpen} toggleOpen={toggleOpen} />
      </div>
    </nav>
  );
}

export default Header;
