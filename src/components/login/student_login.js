import React, { useState, useEffect } from "react";
import Footer from "../footer/footer";
import PlainNavbar from "../navbars/plainbar";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";


function StudentLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className="flex flex-col min-h-[100vh]">
            {/* <div>
                <PlainNavbar />
            </div> */}
            <div className="flex flex-col flex-grow justify-center items-center mt-10">
                <div className="text-sa-maroon text-[40px] font-bold mb-14">STUDENT LOGIN</div>
                <div className={"relative mb-6 text-black"}>
                    <input
                        type="email"
                        class=" shadow-xl focus:outline-none focus:ring-0 focus:border-onclickfield peer m-0 block h-[45px] md:h-[56px] md:mr-44  md:w-[102%]  rounded-[20px] w-[245px]  border-[1px] border-solid border-black bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-black "
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                    />
                </div>

                <div class="relative mb-6 ">
                    <input
                        type={showPassword ? "text" : "password"}
                        class="shadow-xl focus:outline-none focus:ring-0 focus:border-clue-purchase peer m-0 block h-[45px] md:h-[56px]   md:mr-44  md:w-[102%] w-[245px]  rounded-[20px] border-[1px] border-solid  border-black  bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-black"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                    />
                    {showPassword ? (
                        <VisibilityOutlinedIcon
                            className="absolute md:top-[18px] top-[12px] right-[50px] md:right-[10px] cursor-pointer text-gray-300"
                            onClick={toggleShowPassword}
                        />
                    ) : (
                        <VisibilityOffOutlinedIcon
                            className="absolute md:top-[18px] top-[12px] right-[50px] md:right-[10px] cursor-pointer text-gray-300"
                            onClick={toggleShowPassword}
                        />
                    )}
                </div>
                <div class="relative mb-4 ">
                <button 
                //className="mb-4 h-[45px] md:h-[56px] bg-sa-maroon rounded-[20px] md:w-[102%] w-[245px] md:mr-3  shadow-md mx-5 text-white font-bold text-[26px]"
                class="transition-opacity hover:opacity-90 font-bold shadow-xl focus:outline-none focus:ring-0 bg-sa-maroon  focus:border-clue-purchase peer m-0 block h-[45px] md:h-[56px]   md:mr-72  md:w-[103%] w-[245px]  rounded-[20px]   bg-clip-padding px-3 py-2 text-base  leading-tight text-white text-[26px]"
                
                >
                   
                Sign In
                </button>  </div>
                <div>
                <p className="text-base font-bold mb-20 text-sa-blue md:text-[14px] md:ml-[47%] w-60 md:w-72 ml-[98px]  text-clue-yellow  cursor-pointer">
                    <a href="/account/reset-password" className="underline">
                        Forgot Password?
                    </a>
                </p>
                
                </div>


                    {/* <div className="w-72 shadow-xl h-96 rounded-3xl mx-10 md:my-0 my-10">
          <div>
            <img src={Teacher} />
          </div>
          <div className="pt-3">
            <button className="bg-sa-maroon rounded-xl w-48 h-12 shadow-md mx-5">
              <span className="text-white font-bold text-xl">
                Go To Faculty
              </span>
            </button>
          </div>
                     </div> */}

            </div>
            {/* <div className="mt-10">
                <Footer />
            </div> */}
        </div>
    );
}

export default StudentLogin;
