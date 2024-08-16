import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRotateRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import axios from "axios";
import { useEffect ,useState } from "react";



function RandomUser() {

   const [userData ,setUserData] = useState(null)

   const fetchData = async () => {
      try {
        const response = await axios.get("https://api.freeapi.app/api/v1/public/randomusers/user/random");
        setUserData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    useEffect(() => {
      fetchData(); // Fetch data when the component mounts
    }, []);
  
    const handleRefreshButton = () => {
      fetchData(); // Fetch data when the button is clicked
    };

  return (
    <>
      <div className='min-h-screen bg-cover bg-center w-full bg-main_background bg-no-repeat flex justify-center  items-center'>

         <div className=" w-[21rem]  border-8 rounded-[1rem] bg-[#B6B3F3] ">

           <div className=" w-full  rounded-xl bg-[#B6B3F3] p-4">
               <div className="flex justify-between">
                  <span><FaArrowLeftLong /></span>
                  <span className="font-bold text-neutral-700 text-lg font-serif">Profile Overview</span>
                  <span className="block "
                    onClick={handleRefreshButton}
                  ><FaRotateRight /></span>  
               </div>
               <div className=" flex justify-center items-center pt-7">
                 <div className="relative w-[8rem] h-[8rem] rounded-[64px] border-2 border-slate-300 shadow-lg bg-[url('https://t4.ftcdn.net/jpg/06/45/77/79/240_F_645777959_fNnaNoeVO4qxCNPW9MWr3gQlPFSGA9yL.jpg')] bg-center bg-cover bg-no-repeat ">
                   <span className="absolute -top-2 -right-3 block w-[26px] h-[20px] pl-[0.4rem] py-1 rounded-xl bg-black text-white text-[0.6rem]">Mr</span>
                 </div>
               </div>
               
               <div className="flex flex-col place-items-center my-4 ">
                   <h1 className="text-2xl font-dm-serif font-medium tracking-widest">{userData?.data.name={}}</h1>
                   <p className="text-xs">username</p>
               </div>
                {/* line1 */}
                <div className="w-full mx-auto border border-neutral-400 my-3"/>
                 <div className="flex justify-around">
                     <div className="flex items-center gap-1">
                        <IconContext.Provider value={{ color: "white", className: "text-bold" }}>
                          <div className="p-2 bg-black rounded-full"><CiLocationOn /></div> 
                        </IconContext.Provider>
                         <span className="text-[10px]">Location</span> 
                     </div>
                     <div className="flex items-center gap-1">
                        <IconContext.Provider value={{ color: "white", className: "scale-2" }}>
                          <div className="p-2 bg-black rounded-full"><IoCallOutline /></div> 
                        </IconContext.Provider>
                        <span className="text-[10px]" >Call me</span>
                     </div>
                 </div>
                 {/* line2  */}
                <div className="w-full mx-auto border border-neutral-400  my-3"/>
                <div className="flex justify-between ">
                   <div className="flex flex-col gap-2"> 
                        <div>
                            <p className="font-dm-sans text-[10px] text-gray-900">City</p>
                            <p className="font-dm-serif text-lg">{`City Name`}</p>
                        </div>
                        <div>
                           <p className="font-dm-sans text-[10px] text-gray-900">Date of birth</p>
                           <p className="font-dm-serif text-lg">{`DOB`}</p>
                        </div>
                        <div>
                           <p className="font-dm-sans text-[10px] text-gray-900">Time Zone</p>
                           <p className="font-dm-serif text-lg">{`TIMEZONE`}</p>
                        </div>
                   </div>
                   <div className="flex flex-col gap-2"> 
                        <div>
                            <p className="font-dm-sans text-[10px] ">Nationality</p>
                            <p className="font-dm-serif text-lg">{`Nation`}</p>
                        </div>
                        <div>
                           <p className="font-dm-sans text-[10px] ">Phone No.</p>
                           <p className="font-dm-serif text-lg">{`34451321`}</p>
                        </div>
                        <div>
                           <p className="font-dm-sans text-[10px] ">Registered Since</p>
                           <p className="font-dm-serif text-lg">{`13 November 2013`}</p>
                        </div>
                   </div>
                  
                </div>
                 <div className="grid grid-cols-2 pt-6">
                   <p className="text-white text-[8px] self-end justify-self-end">© chai aur code</p>
                   <img src="/chaiCode.png" alt="chai_code_icon" className="justify-self-end" /> 
                 </div>
            </div>
         </div>  
      </div>
    </>
  )
}

export default RandomUser
