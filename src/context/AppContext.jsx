import { createContext,useContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext();

export const AppCotextProvider=({children})=>
{
  const navigate=useNavigate();
  const[user,setUser]=useState(true);
  const[isadmin,setIsAdmin]=useState(null);
  const[showUserLogin,setShowUserLogin]=useState(null);

  const value={
    navigate,
    user,
    setUser,
    isadmin,
    setIsAdmin,
    showUserLogin,
    setShowUserLogin
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}


export const useAppContext=()=>
{
  return useContext(AppContext)
}

export const handleSearch = (formData) => {
    console.log("Searching..", formData);

    if (!formData.from || !formData.to || !formData.date) {
      alert("Please fill all fields");
      return;
    }

    const filtered = allTrains.filter((train) =>
      train.from.toLowerCase().includes(formData.from.toLowerCase()) &&
      train.to.toLowerCase().includes(formData.to.toLowerCase())
    );

    setResults(filtered);
  };
