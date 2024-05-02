import axios from "axios"



const baseURL = 'https://talkai-backend-847736e7f421.herokuapp.com/api/users'




export const apiHandle = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
 
     
    },
  
  })



  export const apiHandle1 = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'multipart/form-data',
     
    },
  
  })
  
  
  axios.defaults.timeout = 15000;




  apiHandle.interceptors.request.use(async req => {
    const auth_token = await localStorage.getItem("user_Token")  || ''
  
    console.log("token",auth_token);
    if (auth_token) {
      req.headers.Authorization = `Bearer ${auth_token}`
  
    }
  
    return req
  
  })
  
  
  apiHandle1.interceptors.request.use(async req => {
    const auth_token = await localStorage.getItem("user_Token")  || ''
  
    console.log(auth_token);
    if (auth_token) {
      req.headers.Authorization = `Bearer ${auth_token}`
  
    }
  
    return req
  
  })















//   image upload start





  export const imgupload = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'multipart/form-data',
      
      
    },
  
  })
  
  
  
  
  
  axios.defaults.timeout = 15000;
  
  imgupload.interceptors.request.use(async req => {
    
      req.headers.Authorization = `Bearer ${`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY4NDAxMjdmODk4ZDUwOWY5MGYwNmYiLCJpYXQiOjE3MTA3NzMyMDAsImV4cCI6MTcxMDc4NzYwMH0.F_p5IYCZk8-kMC_Lfefx6m4Zg0wcM7ePJG5IUaD4J4M`}`
  
  
  
    return req
  
  })
  
  
  
  