import React from 'react'
import {useState} from 'react'

export default function villa() {
    
  const [count, setCount] = React.useState({
      inkopsPris2: 0,
      kontantInsats: 0,
      ranta: 0,
      vatten: 0,
      el: 0,
      sopor: 0, 
      varme: 0,
    })
    
  function changeValues(){

     setCount({
       inkopsPris2 : document.getElementById("inköp-slid2").value,
       kontantInsats: document.getElementById("kontant-slid2").value,
       ranta: document.getElementById("ranta-slid2").value,
       vatten: document.getElementById("vatten-slid").value,
       el: document.getElementById("el-slid").value,
       sopor: document.getElementById("sopor-slid").value,
       varme: document.getElementById("varme-slid").value,
       
      })
  }

  function result(){
    let inkopsPris = count.inkopsPris2;
    let kontantinsats = count.kontantInsats;
    let ranta = count.ranta;
    let vatten = count.vatten;
    let el = count.el;
    let sopor = count.sopor;
    let varme = count.varme;

    let lan = parseInt(inkopsPris - kontantinsats);
    let procent= parseInt(ranta)/100;
    let rantan = (lan * procent)/12;
    let amortering = lan/(30*12);
    let antalPerManad = amortering + rantan;
    let totalKostnad = antalPerManad + parseInt(vatten) + parseInt(el) + parseInt(sopor) + parseInt(varme);

    if(kontantinsats < inkopsPris*0.15)
    {
      document.getElementById("kostnad2").style.color = "red"
      return totalKostnad.toFixed(0);
    }
    else if(kontantinsats > inkopsPris*0.15)
    {
        document.getElementById("kostnad2").style.color = "white"
        return totalKostnad.toFixed(0);

    }

  }

  
  


  return (
    <section className=" text-center text-white">
        <h1 className="text-6xl">Villa:</h1>
        <br/>
        <div className="w-fit m-auto justify-center items-center flex-col">
              <h1 className="text-white">Inköpspris: {count.inkopsPris2.toString()} kr</h1>
            <input type="range" value={count.inkopsPris2} id="inköp-slid2" min={0} max={20000000} step={25000} onChange={ () => changeValues()}></input>
           
              <h1 className="text-white">Kontantinsats: {count.kontantInsats.toString()} kr</h1>
            <input type="range" value={count.kontantInsats} id="kontant-slid2" min={0} max={count.inkopsPris2}  step={10000} onChange={() => changeValues()}></input>
           
              <h1 className="text-white">Ränta: {count.ranta.toString()} %</h1>
            <input type="range" min={0} max={15}  step={0.1} id="ranta-slid2" value={count.ranta} onChange={() => changeValues()}></input>
            
              <h1 className="text-white">Vatten: {count.vatten.toString()} kr</h1>
            <input type="range" min={0} max={25000} id="vatten-slid" value={count.vatten} step={100} onChange={() => changeValues()}></input>
            
              <h1 className="text-white">El: {count.el.toString()} kr</h1>
            <input type="range" min={0} max={25000} id="el-slid" value={count.el} step={100} onChange={() => changeValues()}></input>
            
              <h1 className="text-white">Sopor: {count.sopor.toString()} kr</h1>
            <input type="range" min={0} max={25000} id="sopor-slid" value={count.sopor} step={100} onChange={() => changeValues()}></input>

              <h1 className="text-white">Värme: {count.varme.toString()} kr</h1>
            <input type="range" min={0} max={25000} id="varme-slid" value={count.varme} step={100} onChange={() => changeValues()}></input>

            <h1 id="kostnad2" className="text-white text-3xl">månadskostnad: {result()}kr/månad</h1>
        </div>
    </section>

  )
}


