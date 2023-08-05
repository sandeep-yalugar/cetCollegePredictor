import './table.css'
import { useEffect } from 'react';
import Telement from './telement';
import fulldata from './jexp/jexp.js'
import './form2.css'
import { useState } from 'react';
import {d1g,d1k,d1r,d2ag,d2ak,d2ar,d2bg,d2bk,d2br,d3ag,d3ak,d3ar,d3bg,d3bk,d3br,dgm,dgmk,dgmr,dscg,dsck,dscr,dstg,dstk,dstr } from "./jexp/jexp.js"




const Table = () => {
    const [lis,setlis] = useState(fulldata.slice(0,10).map((obj,oi) =>{return{...obj,sino:oi+1}}));
    const [ldis,setldis] = useState(fulldata);
    const [base,setbase] = useState(0);
    const [crind,setcrind] = useState(0)
    const [Rank,setrank] = useState(0);
    const [categoryy,setcat] = useState('GM')
    useEffect(() => {
      if ((crind+base+10)<ldis.length){
      const payload = ldis.slice(crind+base,crind+base+10).map((obj,ind) => {return {...obj,sino:ind+base+1}});
      setlis(payload);}
      else{
        const payload = ldis.slice(crind+base,ldis.length).map((obj,ind) => {return {...obj,sino:ind+base+1}});
      setlis(payload);}
      }
    ,[crind,ldis,base])
    const handleCat = (event) =>{
        setcat(event.target.value);

    }
    const rankChange = (e) =>
    {
        setrank(e.target.value);
    }

    const rankClick = () => {
      console.log('search was clicked');
        switch (categoryy) {
            case '1G':
              setldis(d1g);
              break;
            case '1K':
              setldis(d1k);
              break;
            case '1R':
              setldis(d1r);
              break;
            case '2AG':
              setldis(d2ag);
              break;
            case '2AK':
              setldis(d2ak);
              break;
            case '2AR':
              setldis(d2ar);
              break;
            case '2BG':
              setldis(d2bg);
              break;
            case '2BK':
              setldis(d2bk);
              break;
            case '2BR':
              setldis(d2br);
              break;
            case '3AG':
              setldis(d3ag);
              break;
            case '3AK':
              setldis(d3ak);
              break;
            case '3AR':
              setldis(d3ar);
              break;
            case '3BG':
              setldis(d3bg);
              break;
            case '3BK':
              setldis(d3bk);
              break;
            case '3BR':
              setldis(d3br);
              break;
            case 'GM':
              setldis(dgm);
              break;
            case 'GMK':
              setldis(dgmk);
              break;
            case 'GMR':
              setldis(dgmr);
              break;
            case 'SCG':
              setldis(dscg);
              break;
            case 'SCK':
              setldis(dsck);
              break;
            case 'SCR':
              setldis(dscr);
              break;
            case 'STG':
              setldis(dstg);
              break;
            case 'STK':
              setldis(dstk);
              break;
            case 'STR':
              setldis(dstr);
              break;
            default:
              setldis(dgm);
              break;
          }
        setbase(0);

        for(let i=0; i<ldis.length;i++){
          if(parseInt(ldis[i].cutoff)>=parseInt(Rank)){
              setcrind(i);
              break;
          }
          if(i>=ldis.length){
            setcrind(ldis.length-1)
          }
      }
        
        
    }
    

    const handleNext = () => {
       const maxind = ldis.length;
        if((base+10)<maxind){setbase(base+10);}
   
    }

    const handlePrev = () => {
        if(base>=10){
           setbase(base-10);
          }
       else{
        setbase(0);
       }
       
    }

    const obj = {sino: 'SI.no',name:'College Name',branch:'Branch',cutoff:'Cut-off' }


    return (
        <>
        <div className = "layer">
           <div className="formflex"> 
            
                    <select className="form-group cat" id="category" name="category" onChange={handleCat}>
                        <option value="GM">GM</option>
                        <option value="1G">1G</option>
                        <option value="1K">1K</option>
                        <option value="1R">1R</option>
                        <option value="2AG">2AG</option>
                        <option value="2AK">2AK</option>
                        <option value="2AR">2AR</option>
                        <option value="2BG">2BG</option>
                        <option value="2BK">2BK</option>
                        <option value="2BR">2BR</option>
                        <option value="3AG">3AG</option>
                        <option value="3AK">3AK</option>
                        <option value="3AR">3AR</option>
                        <option value="3BG">3BG</option>
                        <option value="3BK">3BK</option>
                        <option value="3BR">3BR</option>
                        <option value="GMK">GMK</option>
                        <option value="GMR">GMR</option>
                        <option value="SCG">SCG</option>
                        <option value="SCK">SCK</option>
                        <option value="SCR">SCR</option>
                        <option value="STG">STG</option>
                        <option value="STK">STK</option>
                        <option value="STR">STR</option>
                    </select>
               
        
                    <input className="rank" type="text" id="name" name="name" placeholder="enter your rank" onChange={rankChange} / >
            
                
                    <select className="form-group cat" id="year" name="year">
                    <option className="cat" value="2022">2022</option>
                    </select>

            </div>
            <button className="btn"  onClick={rankClick}>Search</button>
      

        </div>
    
        <div className="table" id = "tableid">
            <div className='tableHeader'>
                <div className='ti'>{obj.sino}</div>
                <div className='ti'>{obj.name}</div>
                <div className='ti'>{obj.branch}</div>
                <div className='ti'>{obj.cutoff}</div>
            </div>
            
            {lis.length===0?<div>No Data</div>:lis.map((clgInf,lisind) => { return (<Telement key={lisind} clgInfo={clgInf}></Telement>)})
            
            }
        <div className='divButton'>
            <button className='navv prevBtn' type='button' onClick={handlePrev}>Previous</button>
            <button className='navv nextBtn' type='button' onClick={handleNext}>Next</button>
        </div>
        </div>
            
        </>
        

    
    )
}

export default Table;