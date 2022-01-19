import React from "react";
import "./index.css";
import "react-bootstrap";
import NavPor from "../../components/NavPor";
import Footer from "../../components/Footer";
import axios from "../../utils/axios";
import Pagination from "react-paginate";

const AdminPage = () => {
  return (
    <>
      <NavPor></NavPor>
      <main>
        <div class="content">
          <div class="row">
            <div class="col-md-8">
              <h3>DASHBOARD</h3>
              <div class="movie__title">
                <div class="row">
                  <div class="col-sm-6">
                    <canvas id="myChart" width="400" height="400"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <h3>Order Info</h3>
              <div class="content__order">
                <select id="inputState" class="form-select">
                  <option selected>Select Movie</option>
                  <option>...</option>
                </select>
                <br />
                <select id="inputState" class="form-select">
                  <option selected>Select Priemere</option>
                  <option>...</option>
                </select>
                <br />
                <select id="inputState" class="form-select">
                  <option selected>Select Location</option>
                  <option>...</option>
                </select>
                <br />
                <button type="submit" class="filter-button btn btn-primary">
                  filter Change
                </button>
                <br />
                <br />
                <button type="submit" class="reset-button btn btn-primary">
                  Update Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default AdminPage;
