import React, { useState } from "react";

import Package from "../components/Package.jsx";
import PackageCard from "../components/PackageCard.jsx";

import TopLocations from "./TopLocations.jsx";
import TopLocationCard from "../components/TopLocationCard.jsx";

import { beaches, hillstations, camping } from "../components/Category.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  

  const loc = useLocation()

  const user = JSON.parse(localStorage.getItem("user")) || {}

  const email = loc.state?.email || user?.email

 const id = loc.state?.id || user?.id

 


  
  const [filters, setFilters] = useState({
    beaches: true,
    hillstations: false,
    camping: false,
  });

  const beachesHandler = () => {
    setFilters({ beaches: true, hillstations: false, camping: false });
  };

  const hillstationsHandler = () => {
    setFilters({ beaches: false, hillstations: true, camping: false });
  };

  const campingHandler = () => {
    setFilters({ beaches: false, hillstations: false, camping: true });
  };


  

  return (
    <>
     
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/Camping.jpg"
              className="d-block w-100"
              alt="Camping"
              style={{ height: "70vh", objectFit: "cover" }}
            />
            <div class="carousel-caption d-flex align-items-center justify-content-center h-100">
              <div className="text-center">
         <h2 style={{ color: "#F59E0B", fontFamily: "Poppins, sans-serif", letterSpacing: "0.5px",textShadow: "0 4px 15px rgba(0,0,0,0.7)" }}>
          Roamrashtra — Where Maharashtra Comes Alive</h2>
        <p style={{fontSize:"20px",color:"#5a5243"}}>Explore handpicked journeys across forts, hills, beaches, and heritage.
            Group tours or personal escapes — travel your way with Romarashtra.</p>
            </div>
       </div>
          </div>

          <div className="carousel-item">
            <img
              src="/assets/AgnetaCaves.jpg"
              className="d-block w-100"
              alt="Caves"
              style={{ height: "70vh", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/assets/Beach.jpg"
              className="d-block w-100"
              alt="Beach"
              style={{ height: "70vh", objectFit: "cover" }}
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

     

         <section className="pt-4 ">
          <div className="container  text-center">
            <strong> <h4 style={{fontFamily:'fantasy',color:"olive"}}>current user : {email}</h4></strong>
          </div>
         </section>



      <section className="py-5">
       
        <div className="container text-center">
          
          <h2 style={{ fontFamily: "cursive" }}>Best Offer</h2>
          <h2 className="py-2" style={{ color: "orange" }}>Travel Packages </h2>
          <p className="text-secondary" style={{fontSize:"24px"}}>Deals made especially for you, Everything you need—on a budget.</p>

          <div className="row">
            {Package.map((item) => (
              <PackageCard
                key={item.id}
                name={item.name}
                para={item.para}
                price= {item.price}
                btn1={item.btn1}
                btn2={item.btn2}
                img={item.img}
              />

              
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-5">
        <div className="container text-center">
          <h2 style={{ fontFamily: "cursive" }}>Best Top </h2>
          <h2 className="py-2" style={{color:"orange"}}>Rated Locations</h2>
           <p className="text-secondary" style={{fontSize:"24px"}}>Pick top destinations for your next holiday</p>

          <div className="row">
            {TopLocations.map((item) => (
              <TopLocationCard key={item.id} img={item.img} name={item.name} />
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-5">
        <div className="container text-center">
          <h2 style={{ fontFamily: "cursive" }}>Explore</h2>
          <h2 className="py-2" style={{ color: "orange" }}>Our Categories</h2>
           <p className="text-secondary" style={{fontSize:"24px"}}>Grab best offer from our top categories...</p>

          

         
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-info rounded-pill" onClick={beachesHandler}>
              Beaches
            </button>
            <button className="btn btn-info rounded-pill" onClick={hillstationsHandler}>
              Hill Stations
            </button>
            <button className="btn btn-info rounded-pill" onClick={campingHandler}>
              Camping
            </button>
          </div>

          <div className="row mt-4">
            {filters.beaches &&
              beaches.map((item) => (
                <CategoryCard
                  key={item.id}
                 {...item}
                  name={item.name}
                  para={item.para}
                  price={item.price}
                  img={item.img}
                  btn1={item.btn1}
                 
                />
              ))}

            {filters.hillstations &&
              hillstations.map((item) => (
                <CategoryCard
                  key={item.id}
                  {...item}
                  name={item.name}
                  para={item.para}
                  price={item.price}
                  img={item.img}
                   btn1={item.btn1}
                 
                />
              ))}

            {filters.camping &&
              camping.map((item) => (
                <CategoryCard
                  key={item.id}
                  {...item}
                  name={item.name}
                  para={item.para}
                  price={item.price}
                  img={item.img}
                   btn1={item.btn1}
                 
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
