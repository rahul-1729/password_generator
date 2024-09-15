import {useCallback, useEffect, useState} from "react"
import './App.css';

function App() {
   const [length,setLength]=useState(10);
   const [char,setChar]=useState(false);
   const [num,setNum]=useState(false);
   const [pass,setPass]=useState("");

   const min =1;
   const max = 20;
   const step =1;

   


   const password_generator = useCallback(()=>{  
      let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if(char)
        str+="!@#$%^&*()_+{}[]?/" 
      if(num)
        str+='1234567890'

      let size = str.length;
      let generated_password='';
       
       for (let i =1;i<=length;i++)
       {
              generated_password+=str[Math.floor(Math.random()*(size-0+1))+0];
       }
       setPass(generated_password);
   },[length,char,num])

   useEffect(()=>{password_generator()},[length,char,num,password_generator]);
  return (
   <div className='h-screen w-screen bg-gray-700 flex justify-center items-center'>
     <div className='h-1/2 w-3/4 bg-gray-600 flex justify-center items-center'>
      
       <div className="h-3/4 w-full flex flex-col justify-center gap-5 items-center">
            <div className="h-1/4 w-3/4 bg-white flex justify-between items-center">
                    <div className='p-2 h-full w-4/5 '><input  placeholder="Your generated Password" className='outline-none h-full w-full text-2xl font-thin text-black' type="text" readOnly value={pass}/></div>
                    <div className='h-full w-1/5 bg-blue-500 flex justify-center items-center'><button className='text-white text-4xl font-medium '>Copy</button></div>
            </div>
            <div className="h-1/4 w-3/4  flex items-center gap-10 ">
              <div className=" w-1/4" ><input className="w-full" type="range" min={min} max={max} step={step} value={length} onChange={(e)=>{setLength(e.target.value)}}/> <h2 className="text-white text-lg">{length}</h2></div>
              <div className=" w-1/4"> <input className="h-5 w-5" type="checkbox" onChange={()=>setChar(!char)}/> <h2 className="text-white text-lg">Special characters</h2></div>
              <div className=" w-1/4"> <input className="h-5 w-5"type="checkbox" onChange={()=>setNum(!num)} /> <h2 className="text-white text-lg">Numbers</h2></div>
            </div>
       </div>
      

     </div>

   </div>
  );
}

export default App;
