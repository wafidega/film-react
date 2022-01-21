import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Tickitz from "../../assets/image/ticketing-ticket.png";
import { Download, Printer } from "react-bootstrap-icons";
import "./index.css";
import axios from "../../utils/axios";

const TicketResult = (props) => {
  // get Boooking by user id
  const user = localStorage.getItem("id");
  const [dataBookingByUser, setDataBookingByUser] = useState([]);
  const getDataBookingByUser = async () => {
    try {
      const result = await axios.get(`/booking/user-id/${user}`);
      setDataBookingByUser(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(dataBookingByUser);
  useEffect(() => {
    getDataBookingByUser();
  }, []);
  return (
    <>
      <Navbar />
      <main className="ticket__result-main">
        <section className="ticket__result-container">
          <section className="ticket__result-card">
            <h5 className="ticket__result-title">Proof of Payment</h5>
            <div className="ticket__result-header">
              <div className="ticket__result-header-column">
                <img
                  src={Tickitz}
                  className="ticket__result-image img-fluid"
                  alt="Tickitz"
                />
                <h6>Admit One</h6>
                <img
                  src={Tickitz}
                  className="ticket__result-image img-fluid"
                  alt="Tickitz"
                />
              </div>
            </div>
            <div className="ticket__result-body">
              <div className="ticket__result-body-space mb-4">
                <h6>Movie</h6>
                <span>Spiderman</span>
              </div>
              <div className="row ticket__result-body-desc">
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Date</h6>
                  <span>2020-19-02</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Time</h6>
                  <span>10:000</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Category</h6>
                  <span>-</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Count </h6>
                  <span>2 Pieces</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Seats</h6>
                  <span>A1</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Price</h6>
                  <span>10.000</span>
                </div>
              </div>
              <div className="ticket__result-body-total d-flex d-md-none">
                <span>Total</span>
                <span className="fw-bold">40.000</span>
              </div>
            </div>
            <div className="ticket__result-choose">
              <button className="ticket__result-button">
                <div className="d-flex align-items-center">
                  <Download />
                  Download
                </div>
              </button>
              <button className="ticket__result-button">
                <div className="d-flex align-items-center">
                  <Printer />
                  Print
                </div>
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TicketResult;
