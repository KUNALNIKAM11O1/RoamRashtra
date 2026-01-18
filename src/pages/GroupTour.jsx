import React, { useState } from "react";


const coastal = [
  {
    id: 1,
    btn:"Group Tour",name: "Murud Janjira Fort From Pune",meals :"Breakfast & Dinner included" , Accommodation:"Shared rooms (2-3 persons)",price: "₹999.00/- per person on sharing",para: "2 days & 1 night", tarvel: "Ferry, Hotel, Sightseeing",img: "/assets/Janjira.webp"
   
  },
  {
    id: 2,
    btn:"Group Tour",name: "Harihareshwar Beach  From Pune",meals :"Breakfast & Dinner included" , Accommodation:"Shared rooms (2-3 persons)", price: "₹859.000/-  per person on sharing", para: "2 days & 1 night", tarvel: "Ferry, Hotel, Sightseeing",img: "/assets/Hari.webp"
  },
  {
    id: 3,
    btn:"Group Tour",name: "Ganpatipule  From Pune",meals :"Breakfast & Dinner included" , Accommodation:"Shared rooms (2-3 persons)" , price: "₹1199.00/-  per person on sharing",  para: "3 days & 2 nights", tarvel: "Bus, Hotel, Sightseeing",img: "/assets/Ganpatipule.avif"
  },
  { id: 4,
     btn:"Group Tour",name: "Alibaug  From Pune",meals :"Breakfast & Dinner included" , Accommodation:"Shared rooms (2-3 persons)", price: "₹1499.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Ferry, Hotel, Sightseeing",  img: "/assets/Alibaug.jpg"
     },
   { id: 5,
     btn:"Group Tour",name: "Tarkarli  From Pune",meals :"Breakfast & Dinner included" , Accommodation:"Shared rooms (2-3 persons)", price: "₹1699.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Ferry, Hotel, Sightseeing", img: "/assets/Kayaking.jpg" 
    },
     { id: 6,
     btn:"Group Tour",name: "Guhagar  From Pune",meals :"Breakfast & Dinner included" , Accommodation:"Shared rooms (2-3 persons)", price: "₹1499.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Bus, Hotel, Sightseeing", img: "/assets/Ratnagiri.webp" 
    },
    { id: 7,
     btn:"Group Tour",name: "Are Ware From Pune",meals :"Breakfast & Dinner included" , Accommodation:"Shared rooms (2-3 persons)", price: "₹1699.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Bus, Hotel, Sightseeing", img: "/assets/areware.jpg" 
    },
  
];

const western = [
  {
    id: 1,
    btn:"Group Tour",name: "Sinhgad Fort-Tamhini Ghat From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Tent stay / Campsite stay", price: "₹599.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Bus, Camping, Trekking", img: "/assets/Tamhini.jpg"
  },
  {
    id: 2,
    btn:"Group Tour",name: "Torna-Rajgad From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Tent stay / Campsite stay", price: "₹699.00/-  per person on sharing",  para: "3 days & 2 nights", tarvel: "Bus, Camping, Trekking", img: "/assets/Torna.jpg"
  },

  { id: 3,
    btn:"Group Tour", name: "Matheran From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Tent stay / Campsite stay", price: "₹699.00/-  per person on sharing", para: "2 days & 1 night",tarvel: "Bus, Camping, Trekking", img: "/assets/MatheranToyTrain.jpg" 
    },
   { id: 4,
    btn:"Group Tour", name: "Lonavala-Khandala From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Shared rooms (2-3 persons)", price: "₹999.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Bus, Hotel, Sightseeing", img: "/assets/Lonavala.webp" 
    }, 
  {
     btn:"Group Tour",id: 5, name: "Mahabaleshwar From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Shared rooms (2-3 persons)", price: "₹899.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Bus, Hotel, Sightseeing",  img: "/assets/Mahableshwar.png"
     },
     {
     btn:"Group Tour",id: 6, name: "Kaas Pathar-Thosegar Waterfall From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Shared rooms (2-3 persons)", price: "₹799.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Bus, Hotel, Sightseeing",  img: "/assets/Satara.jpg"
     },
     {
     btn:"Group Tour",id: 7, name: "Nashik From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Shared rooms (2-3 persons)", price: "₹2999.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Bus, Hotel, Sightseeing",  img: "/assets/SulaWine.webp"
     },
];

const eastern = [
  {
    id: 1,
   btn:"Group Tour", name: "Tadoba Tiger Reserve From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Tent stay / Campsite stay", price: "₹1699.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Jeep, Camping, Sightseeing",img: "/assets/Tadoba.webp"

  },
  {
    id: 2,
    btn:"Group Tour",name: "Ajanta & Ellora Caves From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Shared rooms (2-3 persons)", price: "₹899.00/-  per person on sharing", para: "2 days & 1 night", tarvel: "Bus, Hotel, Sightseeing",img: "/assets/AgnetaCaves.jpg"
  },
  { id: 3,btn:"Group Tour", name: "Pench National Park From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Tent stay / Campsite stay", price: "₹2199.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Jeep, Camping, Sightseeing", img: "/assets/Pench.jpg" 

  },
   { id: 4,btn:"Group Tour", name: "Sambhaji Nagar City Tour From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Shared rooms (2-3 persons)", price: "₹1199.00/-  per person on sharing", para: "3 days & 2 nights", tarvel: "Bus, Hotel, Sightseeing", img: "/assets/Bibikamaqbara.jpg"

    },
   { id: 5,btn:"Group Tour", name: "Nagpur City Tour From Pune",meals :"Breakfast & Dinner included" ,Accommodation:"Shared rooms (2-3 persons)", price: "₹1999.00/-  per person on sharing", para: "4 days & 3 nights", tarvel: "Bus, Hotel, Sightseeing", img: "/assets/Nagpur.jpg" 

   }
];


const GroupTours = () => {

   const [selectedTour, setSelectedTour] = useState(null);

  const [active, setActive] = useState("coastal");

  const getData = () => {
    if (active === "coastal") 
      return coastal;
    if (active === "western") 
      return western;
    return eastern;
  };

  return (
    <>
      
      <div className="container my-4">
        <div className="row align-items-center bg-white p-4 rounded shadow-sm">
          <div className="col-md-6">
            <h3 className="fw-bold">Group Tour Packages From Pune</h3>
            <p style={{ fontSize: "16px" }}>
             We specialize in Interest-Based Group Departures, tailored for travelers from all corners of Maharashtra.
              Our fixed-date group tours bring together like-minded individuals, pairing you with a co-traveler, creating a sense of community where strangers become lifelong friends.
               We take care of all the details, providing a hassle-free, cost-effective, and enriching experience. 
                Safety is our priority, so you can relax and fully immerse yourself in the journey. Join us for unforgettable adventures and create lasting connections along the way.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="/assets/Maharashtra.png"
              alt="Group Tours"
              className="img-fluid rounded"
              style={{ maxHeight: "260px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

     
      <div className="container my-4">
        <div className="row">

      
          <div className="col-md-3">
            <aside
              style={{
                position: "sticky",
                top: "20px",
                padding: "15px",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)"
              }}
            >
              <h4>Select the section</h4>

              <button
                className="btn btn-outline-primary w-100 my-2"
                onClick={() => setActive("coastal")}
              >
                Konkan Region
              </button>

              <button
                className="btn btn-outline-success w-100 my-2"
                onClick={() => setActive("western")}
              >
                Western Maharashtra
              </button>

              <button
                className="btn btn-outline-warning w-100 my-2"
                onClick={() => setActive("eastern")}
              >
                Vidarbha & Marathwada
              </button>
            </aside>
          </div>

          
          <div className="col-md-9">
            <div className="row">

            {/*  KONKAN */}
    {active === "coastal" &&
      getData().map(item => (
        <div className="col-12 mb-4" key={item.id}>
          <div className="card shadow-sm">

           
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    width: "100%"
                  }}
                />
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <button className="btn btn-sm bg-success text-light mb-2">{item.btn}</button>
                  <h5>{item.name}</h5>
                  <p>{item.para}</p>
                  <p>{item.tarvel}</p>
                 

                 <button
                   type="button"
                   className="btn btn-outline-info"
                   data-bs-toggle="modal"
                   data-bs-target="#tourModal"
                   onClick={() => setSelectedTour(item)}
                     >
                   ₹ Quick Quotation
                  </button>                 
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}

    {/* WESTERN & EASTERN */}
    {active !== "coastal" &&
      getData().map(item => (
        <div className="col-12 mb-4" key={item.id}>
          <div className="card shadow-sm">
            <div className="row g-0">

              <div className="col-md-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    width: "100%"
                  }}
                />
              </div>

              <div className="col-md-8">
                <div className="card-body">
                    <button className="btn btn-sm bg-success text-light mb-2">{item.btn}</button>
                  <h5>{item.name}</h5>
                  <p>{item.para}</p>
                  <p>{item.tarvel}</p>
                 
<button
  type="button"
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#tourModal"
  onClick={() => setSelectedTour(item)}
>
  ₹ Quick Quotation
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2>Tadoba Tiger Reserve</h2>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
                </div>
              </div>

            </div>
          </div>
        </div>
              ))}

          </div>
        </div>
        </div>
      </div>

     
<div
  className="modal fade"
  id="tourModal"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabIndex="-1"
  aria-labelledby="tourModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title" id="tourModalLabel">
          {selectedTour?.name}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        {selectedTour && (
          <>
            <img
              src={selectedTour.img}
              alt={selectedTour.name}
              className="img-fluid rounded mb-3"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />

            <p><strong>Duration:</strong> {selectedTour.para}</p>
            <p><strong>Includes:</strong> {selectedTour.tarvel}</p>
            <p><strong>Meals:</strong>{selectedTour.meals}</p>
              <p><strong>Accommodation:</strong>{selectedTour.Accommodation}</p>
            <p className="fw-bold fs-5">{selectedTour.price}</p>
          </>
        )}
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
       
      </div>

    </div>
  </div>
</div>

    </>
  );
};

export default GroupTours;
