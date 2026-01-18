import React from 'react'

const RefundPolicy = () => {
  return (
    <>
    
  <section
  className="hero d-flex align-items-center"
  style={{
    height: "40vh",
    background: "url(https://upload.wikimedia.org/wikipedia/commons/1/10/Pratapgad-Satara-Maharashtra-O0A0951.jpg) center/cover no-repeat",
  }}
>
  <div className="w-100 h-100 d-flex align-items-center"
       style={{ background: "rgba(0,0,0,0.5)" }}>
    <div className="container text-center text-white">
      <h2 className="fw-bold text-warning">Cancellation Policy</h2>
      <h4 className="mt-3 fs-5">
        Best Offer Travel Packages Deals made especially for you.
      </h4>
      <h5>Thank You From RoamRashtra Travels</h5>
    </div>
  </div>
</section>

     <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-sm-12">
          
          <div className="policy-box p-4">
            <ul className="policy-list" style={{border:"1px solid gray"}}>
              <li>
                <strong>Registration Charges are non refundable and transferable.</strong>
              </li>

              <li>
                If cancellations are made within <strong>7 days</strong> before
                the start date of the trip, <strong>100%</strong> of tour package
                amount will be charged as cancellation fees.
              </li>

              <li>
                If cancelled <strong>15 days</strong> before the start date of
                the trip, <strong>50%</strong> of tour package amount will be
                charged as cancellation fees.
              </li>

              <li>
                If cancelled <strong>30 days</strong> before the start date of
                the trip, <strong>25%</strong> of tour package amount will be
                charged as cancellation fees. In case of unforeseen weather
                conditions or government restrictions, certain activities may
                be cancelled. However, no refund will be provided.
                <br /><br />
                <strong>
                  In case of Lockdown in destination place, credit shall be
                  released, you can use it in future bookings, after deduction
                  of IRCTC Cancellation Charges.
                </strong>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default RefundPolicy