import {React,useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./emp.css"
import Employee2 from './employee2';
import Employee3 from './employee3';


function Employee() {
    const datum=[{name:"Thirupathi"},{name:"Saravanan"},{name:"Ganga"},{name:"Paavai"},{name:"Vaigai"},{name:"Esaivani"},{name:"Sherlin"},{name:"Reeta"},
    {name:"stella"}]
    const [data,setData]=useState([...datum])
    const [open,setOpen]=useState(false)
    const [option,setOption]=useState("")
    const [chk,setchk]=useState([])
    const [all,setAll]=useState([])
   // const result=""


   const ck=async(e)=>{
    const{name,checked}=e.target;
    if(name==="allselect")
    {
        let temp=data.map(user=>{ return{...user, isChecked : checked}});
        setData(temp)
        await setAll({name:"seleceted all"})
        setOption("")
        setchk([])
       
      
       
           
              

    }
    else{
        let temp=data.map(user=>user.name===name? {...user, isChecked : checked}:user);
        setData(temp)
        setchk(temp)
       setOption("")
       setAll([])
              console.log(chk)

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
        <h2 className="h2">Select employee dropdown</h2>
        {console.log(chk.name)}
<div className="container" 
 onClick={()=>{setOpen(!open ? true:false)
 setData([...datum])}}>
    
    <div>{option ? "" : data.length}</div>
   <div> {!option && chk.length===0 && all.length>=1 && "selected all"}</div>
   <div> {!option && chk.length===0 && all.length==0 &&  "Select Employee"  }</div>
   {chk.length>=1 && !option && <div>{chk.map((c)=>{if(c.isChecked){return c.name} 
   })}</div>}
   {
    all.length>=1 && <div>{all.map((m)=>{if(m.name==="***"){return "selected"}})}</div>
   }
   <div>{option && !chk.length && option }</div>
   <div>{option && chk.length>0 && option}</div>
   
  
    <div onClick={()=>{setOpen(true)}}><KeyboardArrowUpIcon/></div>

</div>



{open && <div className='outer'>

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
        setAll([])
        setOpen(false) 
        }} className='inner'>
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
<Employee2/>
<Employee3/>
</div>
    

  )
}

export default Employee