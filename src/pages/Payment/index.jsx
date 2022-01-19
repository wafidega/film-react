import React, { useState, useEffect } from "react";
import "./index.css";
import "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "../../utils/axios";
import Bca from "../../assets/image/bca.png";
import GoPay from "../../assets/image/gopay.png";
import Bri from "../../assets/image/bri.png";
import Paypal from "../../assets/image/paypal.png";
import Dana from "../../assets/image/dana.png";
import Visa from "../../assets/image/visa.png";
import Ovo from "../../assets/image/ovo.png";
import Google from "../../assets/image/google.png";
import qs from "query-string";

const Payment = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div class="row">
          <div class="col-md-6 payment-content">
            <h3>Payment Info</h3>
            <div class="payment-detail">
              <div class="row">
                <div class="col-sm-6">
                  <div className="payment-list">
                    <p>Date And time</p>
                    <p>Movie title</p>
                    <p>Cinema name</p>
                    <p>Number of tickets</p>
                    <p>Total payment</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div className="payment-desc">
                    <p>Tuesday, 07 July 2020 at 02:00pm</p>
                    <p>Spider-Man: Homecoming</p>
                    <p>CineOne21 Cinema</p>
                    <p>3 pieces</p>
                    <p>$30,00</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="payment-menthod-title">Available Payment</h3>
            <div class="payment-method">
              <div class="first__line">
                <img src={Google} alt="" class="image-payment" />
                <img src={Visa} alt="" class="image-payment" />
                <img src={GoPay} alt="" class="image-payment" />
                <img src={Paypal} alt="" class="image-payment" />
              </div>
              <br />
              <div class="second__line">
                <img src={Dana} alt="" class="image-payment" />
                <img src={Bca} alt="" class="image-payment" />
                <img src={Bri} alt="" class="image-payment" />
                <img src={Ovo} alt="" class="image-payment" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h3>Personal Info</h3>
            <div class="data">
              <form>
                <div class="form-group">
                  <p>Full Name</p>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name *"
                    value=""
                  />
                </div>
                <br />
                <div class="form-group">
                  <p>Email</p>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    value=""
                  />
                </div>
                <br />
                <div class="form-group">
                  <p>Phone Number</p>
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">+61</div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Number"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Payment;
