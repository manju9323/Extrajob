import {React,useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./emp.css"



function Employee3() {
    const datum=[{name:"manjunathn"},{name:"gopinath"},{name:"olithselvam"},{name:"vickaash"},{name:"nikkil bondate"},{name:"annie regi"},{name:"rosi"},{name:"stella"}]
    const [data,setData]=useState([...datum])
    const [open,setOpen]=useState(false)
    const [option,setOption]=useState("")
   // const result=""

   const ck=async(e)=>{
    const{name,checked}=e.target;
    if(name==="allselect")
    {
        let temp=data.map(user=>{ return{...user, isChecked : checked}});
        setData(temp)
           
              console.log(data)

    }
    else{
        let temp=data.map(user=>user.name===name? {...user, isChecked : checked}:user);
        setData(temp)
           
              console.log(data)

    }
   };

    const fast=async(val)=>{
        var amm=datum
        let fin=[]
        let value =val.toUpperCase()
       var i=-1
        for(let j=0;j<amm.length;j++)
        {
            //
             
            if(amm[j].name.toUpperCase().indexOf(value)!==-1)
            {
            i++

            fin[i]=datum[j]
           // console.log(fin)
             setData([...fin])
            }
            if(i===-1){
                setData([{name:"no data"}])
            }
            console.log(data)
        }
    }

   
 
  return (
    <div className='goo'>
        <div className='employee'>

<div className="container" 
 onClick={()=>{setOpen(!open ? true:false)
 setData([...datum])}}>
    
    <div>{option ? "" : data.length}</div>
    <div>{option ? option : "Select Employee"}</div>
    <div onClick={()=>{setOpen(true)}}><KeyboardArrowUpIcon/></div>
</div>



{open && <div className='outer3'>

<div className='search'>
<SearchIcon/>
<input type="text" onKeyUp={(e)=>{fast(e.target.value)}} className='search' ></input>
<input 
type="checkbox" 
name="allselect"
onChange={ck} 
checked={data.filter(user=> user?.isChecked !== true).length<1}
className='search'/>
</div>

 {
    data.map((q,i)=>{ 
    return <div className='check'><div style={{display:"bliock"}} onClick={()=>{setOption(q.name) 
        setOpen(false)}} className='inner'>
         {q.name} </div>  
         <input 
         type="checkbox" 
         name={q.name} 
         checked={q?.isChecked||false}
         onChange={ck}/>
          </div> }  
     
     )} 
          
</div>}


</div>
</div>
    

  )
}
export default Employee3