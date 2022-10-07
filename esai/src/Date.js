import {React,useState} from "react"
import DateRangeIcon from '@mui/icons-material/DateRange';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Date2 from "./Date2"
import Date3 from "./Date3"
import "./dat.css"

function Date() {
    const [open,setOpen]=useState(false)
    const [date,setDate]=useState("")
    console.log(date)

  return (
    <div className='datecol'>
    <h2 className="h2">Date picker</h2>

    <div className='dater' onClick={()=>{setOpen(!open ? true:false)}}>
    <DateRangeIcon/>
    {date ? date :"Pick Date"}
    <UnfoldMoreIcon/>
    </div>


     {open && 
     <div><input className="date" type="date" onChange={(e)=>{setDate(e.target.value)}}></input> 
    </div>}

    <Date2/>
<Date3/>

    </div>

    
  )
}

export default Date