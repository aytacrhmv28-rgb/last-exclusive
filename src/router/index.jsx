import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import SignUp from "../pages/SignUp.jsx";
import WomensFashion from "../pages/WomensFashion.jsx";
import MensFashion from "../pages/MensFashion.jsx";
import Electronics from "../pages/Electronics.jsx";
import HomeLifeStyle from "../pages/HomeLifeStyle.jsx";
import Medicine from "../pages/Medicine.jsx";
import BabysToys from "../pages/BabysToys.jsx";
import GroceriesPets from "../pages/GroceriesPets.jsx";
import Account from "../pages/Account.jsx";
import LogIn from "../pages/LogIn.jsx";
import Cart from "../pages/Cart.jsx";
import WishList from "../pages/WishList.jsx";
import Shop from "../pages/Shop.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import AddressBook from "../pages/AddressBook.jsx";
import MyPaymentOptions from "../pages/MyPaymentOptions.jsx";
import MyReturns from "../pages/MyReturns.jsx";
import MyCancellations from "../pages/MyCancellations.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";



const routers = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/womensfashion", element: <WomensFashion /> },
  { path: "/mensfashion", element: <MensFashion /> },
  { path: "/electronics", element: <Electronics /> },
  { path: "/homelifestyle", element: <HomeLifeStyle /> },
  { path: "/medicine", element: <Medicine /> },
  { path: "/babystoys", element: <BabysToys /> },
  { path: "/groceriespets", element: <GroceriesPets /> },
  { path: "/account", element: <Account /> },
  { path: "/login", element: <LogIn /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <WishList /> },
  { path: "/shop", element: <Shop /> },
  { path: "/myprofile", element: <MyProfile /> },
  { path: "/addressbook", element: <AddressBook /> },
  { path: "/mypaymentoptions", element: <MyPaymentOptions /> },
  { path: "/myreturns", element: <MyReturns/>},
  { path: "/mycancellations", element: <MyCancellations/>},
  { path: "/product/:id", element: <ProductDetail /> },
];

export default routers;