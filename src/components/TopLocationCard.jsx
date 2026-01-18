function TopLocationCard({ img, name }) {
  return (
    <div className="col-md-3 mb-3">
      <div
        className="card pkg-card position-relative"
        style={{ overflow: "hidden", borderRadius: "6px" }}
      >
       
        <img
          src={img}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
          alt={name}
        />

       
        <div
          className="position-absolute bottom-0 w-100 text-center text-white"
          style={{
           
            padding: "10px",
          }}
        >
          <h4 className="m-0">{name}</h4>
        </div>
      </div>
    </div>
  );
}

export default TopLocationCard;
