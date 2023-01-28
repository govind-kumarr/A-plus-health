import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import Style from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  // Input,
  Button,
  
} from "@chakra-ui/react";



export const Navbar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
 const navigate=useNavigate()


  const Click=()=>{
    // navigate('/cartpage')
  }


  return (
    <div className={Style.navbarblock}>
      <div className={Style.navbar}>
        <GiHamburgerMenu className={Style.hambueger} onClick={onOpen} />
        <Drawer
          style={{ color: "white"}}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader style={{ backgroundColor: "#0081C9" }}>
              <div className={Style.drawerslide}>
                <h2>Hello Welcome to A+ Health Center</h2>:<h2 style={{"cursor":"pointer",fontSize: "22px"}} >Sign in</h2>
                <div className={Style.buttnslider}>
                  <Button>
                    {" "}
                    <Link to={"/user/account"}><p style={{"color":"white"}}>Account</p></Link>
                  </Button>
                  <Button>Orders</Button>
                </div>
              </div>
            </DrawerHeader>

            <DrawerBody>
              <div className={Style.divone}>
                <div>Home</div>
                <div>Shop by Category</div>
                <div>My List</div>
                <div>A+ Wallet</div>
                <div>A+ Health Store</div>
                <div>A+ Gift Card</div>
                <div>All Offers</div>
              </div>

              <div className={Style.silverdiv}></div>

              <div className={Style.divone}>
                <div>My Account</div>
                <div>Need Help</div>
                <div>About us</div>
                <div>Guide</div>
              </div>

              <div className={Style.silverdiv}></div>

              <div className={Style.contactus}>
                <h1> CONTACT US</h1>
                <div>
                  WhatsApp us :{" "}
                  <span style={{ color: "#0081C9", fontSize: "17px" }}>+91 8219189058</span>
                </div>

                <div>
                  Call us :{" "}
                  <span style={{ color: "#008ecc" ,fontSize: "17px"}}>1800 890 1213</span>
                  <p> 24*7, 365 days</p>
                </div>

                <div>
                  <p style={{ fontSize: "17px" }}>
                    {" "}
                    Please note that you are accessing the BETA Version of{" "}
                    <span style={{ color: "#008ecc", fontSize: "22px" }}>
                      www.A+Health.com
                    </span>
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: "17px" }}>
                    Should you encounter any bugs, glitches, lack of
                    functionality, delayed deliveries, billing errors or other
                    problems on the beta website, please email us on{"AplushealthcareVG@gmail.com"}
                    <span style={{ color: "#008ecc", fontSize: "17px" }}>
                      cs@A+health.com
                    </span>
                  </p>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <div>
          <Link to={"/"}>
            <img
              width="190px"
              src="https://i.ibb.co/CszNkQW/A-1.png" alt="A+ HEALTH"
            />
          </Link>
        </div>
        <div>
        </div>
        <h2>
            {/* <Link to={"/Homepage"}>Home</Link> */}
            <p onClick={()=>navigate("/")} style={{"color":"white","cursor":"pointer"} }>Home</p>
            
          </h2>
        <h2>
            {/* <Link to={"/aboutpage"}>ABOUT</Link> */}
            <p onClick={()=>navigate("/about")} style={{"color":"white","cursor":"pointer"} }>About</p>
            
          </h2>
          <h2>
            {/* <Link to={"/Servicepage"}>Service</Link> */}
            <p onClick={()=>navigate("/appointment")} style={{"color":"white","cursor":"pointer"} }>Appointment</p>
            
          </h2>
          <h2>
            {/* <Link to={"/Consultantpage"}>Consultant</Link> */}
            <p onClick={()=>navigate("/products")} style={{"color":"white","cursor":"pointer"} }>Products</p>
            
          </h2>
        <div className={Style.userdiv}>
          <FaUser className={Style.usericons} />
          
            <Link   to={"/login"}><p style={{"color":"white","font-size": "20px"}}>Sign In</p></Link>
          
          </div>

        <div className={Style.cartNav}>
          <h2>
            {/* <Link to={"/cartpage"}>Cart</Link> */}
            <p onClick={()=>navigate("/cart")} style={{"color":"white","cursor":"pointer"} }>Check-Out</p>
            
          </h2>
        </div>
      </div>
    </div>
  );
};