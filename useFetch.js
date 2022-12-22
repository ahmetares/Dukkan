import { useEffect,useState } from "react"
import axios from "axios";

const useFetch = (url) => {

    const [data,setData] = useState([])
    const [err,setErr] = useState(null)
    const [loading,setLoading] = useState(true)


    const FetchData = async () => {
        try {
            
        const {data : responseData} = await axios.get(url)
        setData(responseData)
        setLoading(false)
         }  
         catch (error) {
            setErr(error.message)
            setLoading(false)
        }
    } 



    useEffect(()=>{
        FetchData()
    },[])


    return {err,loading,data}
}

export default useFetch