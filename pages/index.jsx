
import axios from 'axios'
import { useEffect, useState } from 'react'
import CsvDownloadButton from 'react-json-to-csv'

export default function Home(){
    const [items, setItems] = useState([])
    
    useEffect(()=>{
        fetch("https://server-for-pc-technology.onrender.com/api/users")
            .then((res) => {
                if(!res.ok) throw new Error("ошибка загрузки данных")
                    return res.json()
                })
            .then((data)=> setItems(data))
            .catch((err)=> console.error(err))
    },[])
    const textJSON = JSON.parse(JSON.stringify(items))
    return(
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
            <CsvDownloadButton data={textJSON}/>
        </div>
    )
}
