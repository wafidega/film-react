import React from "react";
import "./index.css";
import "react-bootstrap";
import NavPor from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProPic from "../../assets/image/profile.png";
import axios from "../../utils/axios";
import Pagination from "react-paginate";

const ProfileOrder = () => {
  return (
    <>
      <NavPor></NavPor>
      <main>
        <div class="row">
          {/* <!-- left --> */}
          <div class="col-md-4">
            <div class="profile-left">
              <h4>INFO</h4>
              <center>
                <img src={ProPic} alt="" style={{ width: 100, height: 100 }} />
                <h5>Wafi Pandega</h5>
                <h6>Movie</h6>
              </center>
              <hr />
              <h6>Loyalty Points</h6>
              <div class="movie-point">
                <center>
                  <image src="assets/image/movieblock.png" alt="" />
                  <h6>180 points become a master</h6>
                </center>
              </div>
            </div>
          </div>
          {/* <!-- Left-end --> */}
          <div class="col-md-8">
            <div class="profile-right">
              <div class="movie-link">
                <a href="/profile" class="account btn btn-primary">
                  Profile <hr class="account-hr" />
                </a>
                <a href="/profile-order" class="order btn btn-primary">
                  Order
                  <hr class="order-hr" />
                </a>
              </div>
              <div class="content-form">
                <h6>Detail information</h6>
                <hr />
                <br />
                {/* <!-- Ticket --> */}
                <div class="ticket-book">
                  <h6>Tuesday, 07 July 2020 - 04:30pm</h6>
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <h5>Spider-Man Homecoming</h5>
                    </div>
                    <div class="col-md-6">
                      <img src="assets/image/cine.png" alt="" />
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-md-6">
                      <button
                        type="submit"
                        class="button-active btn btn-primary"
                      >
                        Ticket is active
                      </button>
                    </div>
                    <div class="col-md-6">
                      <a href="#"> Show detail</a>
                    </div>
                  </div>
                </div>
                {/* <!-- Ticket active --> */}
                <br />
                <br />
                {/* <!-- Ticket InActive --> */}
                <div class="inactive">
                  <h6>Tuesday, 07 July 2020 - 04:30pm</h6>
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <h5>Spider-Man Homecoming</h5>
                    </div>
                    <div class="col-md-6">
                      <img src="assets/image/cine.png" alt="" />
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-md-6">
                      <button
                        type="submit"
                        class="button-inactive btn btn-primary"
                      >
                        Ticket Used
                      </button>
                    </div>
                    <div class="col-md-6">
                      <a href="#"> Show detail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default ProfileOrder;
