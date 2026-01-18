import React, { useState } from "react";

const ManageTours = () => {
  const [tours, setTours] = useState([
    { id: 1, name: "Lonavala Trip", price: 3499, discount: 10 },
    { id: 2, name: "Matheran Trip", price: 1999, discount: 0 },
  ]);

  const updateTour = (id, field, value) => {
    setTours(
      tours.map((t) =>
        t.id === id ? { ...t, [field]: value } : t
      )
    );
  };

  return (
    <div>
      <h4 className="fw-bold mb-4">Manage Tours & Offers</h4>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Tour</th>
            <th>Price</th>
            <th>Discount (%)</th>
          </tr>
        </thead>

        <tbody>
          {tours.map((t, i) => (
            <tr key={t.id}>
              <td>{i + 1}</td>
              <td>{t.name}</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={t.price}
                  onChange={(e) =>
                    updateTour(t.id, "price", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={t.discount}
                  onChange={(e) =>
                    updateTour(t.id, "discount", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTours;
