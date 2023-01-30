import React from 'react'
import {useState} from 'react'

export default function bostadsrätt() {
    
  const [count, setCount] = React.useState({
      inkopsPris: 0,
      kontantInsats: 0,
      ranta: 0,
      avgift: 0,
      ovrigt: 0,
    })
    
  function changeValues(){

     setCount({
       inkopsPris : document.getElementById("inköp-slid").value,
       kontantInsats: document.getElementById("kontant-slid").value,
       ranta: document.getElementById("ranta-slid").value,
       avgift: document.getElementById("avgift-slid").value,
       ovrigt: document.getElementById("ovrigt-slid").value,
      })
  }

  function result(){
    let inkopsPris = count.inkopsPris;
    let kontantinsats = count.kontantInsats;
    let ranta = count.ranta;
    let avgift = count.avgift;
    let ovrigt = count.ovrigt;

    let lan = parseInt(inkopsPris - kontantinsats);
    let procent= parseInt(ranta)/100;
    let rantan = (lan * procent)/12;
    let amortering = lan/(30*12);
    let antalPerManad = amortering + rantan;
    let totalKostnad = antalPerManad + parseInt(avgift) + parseInt(ovrigt);

    if(kontantinsats < inkopsPris*0.15)
    {
      document.getElementById("kostnad").style.color = "red"
      return totalKostnad.toFixed(0);
    }
    else if(kontantinsats > inkopsPris*0.15){

      document.getElementById("kostnad").style.color = "white"
      return totalKostnad.toFixed(0);

    }
    

  }

  
  


  return (
    <section className="text-center text-white">
      <h1 className="text-6xl">Bostadsrätt:</h1>
      <br/>
        <div className="w-fit m-auto justify-center items-center flex-col">
              <h1 className="text-white">Inköpspris: {count.inkopsPris.toString()} kr</h1>
            <input type="range" value={count.inkopsPris} id="inköp-slid" min={0} max={20000000} step={25000} onChange={ () => changeValues()}></input>
            <h1 className="text-white">Kontantinsats: {count.kontantInsats.toString()} kr</h1>
            <input type="range" value={count.kontantInsats} id="kontant-slid" min={0} max={count.inkopsPris}  step={10000} onChange={() => changeValues()}></input>
              <h1 className="text-white">Ränta: {count.ranta.toString()} %</h1>
            <input type="range" min={0} max={15}  step={0.1} id="ranta-slid" value={count.ranta} onChange={() => changeValues()}></input>
              <h1 className="text-white">Avgift: {count.avgift.toString()} kr</h1>
            <input type="range" min={0} max={40000} id="avgift-slid" value={count.avgift} step={100} onChange={() => changeValues()}></input>
            <h1 className="text-white">Övrigt: {count.ovrigt.toString()} kr</h1>
            <input type="range" min={0} max={40000} id="ovrigt-slid" value={count.ovrigt} step={100} onChange={() => changeValues()}></input>
              
            <h1 id="kostnad" className="text-white text-3xl">månadskostnad: {result()}kr/månad</h1>
        </div>
    </section>

  )
}


