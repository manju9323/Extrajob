import {React,useState} from "react"
import DateRangeIcon from '@mui/icons-material/DateRange';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import "./dat.css"

function Date() {
    const [open,setOpen]=useState(false)
    const [date,setDate]=useState("")
    console.log(date)

  return (
    <div className='datecol'>
  

    <div className='dater' onClick={()=>{setOpen(!open ? true:false)}}>
    <DateRangeIcon/>
    {date ? date :"Pick Date"}
    <UnfoldMoreIcon/>
    </div>


     {open && 
     <div><input className="date" type="date" onChange={(e)=>{setDate(e.target.value)}}></input> 
    </div>}

    

    </div>

    
  )
}

export default Date