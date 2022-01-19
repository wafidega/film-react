import React, { Component } from "react";
import "./index.css";
import "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import Banner from "../../assets/image/Group 14.png";
import Spiderman from "../../assets/image/spiderman.png";
import Widow from "../../assets/image/widow.png";
import axios from "../../utils/axios";
import Seat from "../../components/Seat";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSeat: ["A", "B", "C"],
      selectedSeat: [],
      reservedSeat: ["A1", "C7"],
      // [
      //   {seat: "A1"},
      //   {seat: "C7"}
      // ]
      scheduleId: props.location.state ? props.location.state.scheduleId : "",
      movieId: props.location.state ? props.location.state.movieId : "",
      dateBooking: props.location.state
        ? props.location.state.dateSchedule
        : "",
      timeBooking: props.location.state
        ? props.location.state.timeSchedule
        : "",
      dataMovie: [],
      dataSchedule: [],
    };
  }
  // Seat
  selectedSeat = (data) => {
    console.log("user select seat");
    console.log(data);
    this.setState({
      selectedSeat: [...this.state.selectedSeat, data],
    });
  };
  // get movie
  componentDidMount() {
    this.getDataMovieById();
  }
  getDataMovieById = () => {
    axios
      .get(`movie/${this.state.movieId}`)
      .then((res) => {
        console.log(res);
        this.setState({
          dataMovie: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  // Handle Book and reset
  handleBooking = () => {
    if (this.state.selectedSeat.length < 1) {
      toast.error("Please Select Seat !", {
        theme: "colored",
      });
    } else {
    }
  };

  handleResetBooking = () => {
    this.setState({
      selectedSeat: [],
    });
  };
  render() {
    // console.log(this.state.selectedSeat);
    // console.log(this.state.dateBooking);
    // console.log(this.state.timeBooking);
    // console.log(this.state.movieId);
    console.log(this.state.scheduleId);
    console.log(this.state.dataMovie);
    const seatBook = this.state.selectedSeat.join(", ");
    const countSeat = this.state.selectedSeat.length;
    console.log(countSeat);
    return (
      <>
        <Navbar></Navbar>
        <main>
          <div className="content">
            <ToastContainer />
            <div className="row">
              <div className="col-md-6">
                <h3>Movie Selected</h3>
                <div className="movie__title">
                  <div className="row">
                    <div className="col-sm-6">
                      {this.state.dataMovie.map((item) => (
                        <h5 className="booking-title">{item.name}</h5>
                      ))}
                    </div>
                    <div className="button-order col-sm-6">
                      <button
                        type="button"
                        className="button__signup btn btn-primary"
                      >
                        Change Your Movie
                      </button>
                    </div>
                  </div>
                  <h3 className="seat-order">Choose Your Seat</h3>
                  {this.state.listSeat.map((item, index) => (
                    <div key={index}>
                      <Seat
                        seatAlphabhet={item}
                        selectedSeat={this.selectedSeat}
                        reserved={this.state.reservedSeat}
                        selected={this.state.selectedSeat}
                      />
                    </div>
                  ))}
                  <button
                    className="btn btn-primary booking"
                    onClick={this.handleBooking}
                  >
                    Booking
                  </button>
                  <button
                    className="btn btn-danger delete"
                    onClick={this.handleResetBooking}
                  >
                    Reset Seat
                  </button>
                  <div className="seat-rows row">
                    <div className="col-sm-6">
                      <button
                        type="button"
                        className="button__signup btn btn-primary"
                      >
                        Change Your Movie
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <button
                        type="button"
                        class="button__signup btn btn-primary"
                      >
                        Checkout Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Order Info</h3>
                <div className="content__order">
                  <br />
                  <h1 className="title-studio">CineOne21 Cinema</h1>
                  <div className="row">
                    <div className="movie-select col-sm-6">
                      <p>Movie selected</p>
                      <p>{this.state.dateBooking}</p>
                      <p>One ticket price</p>
                      <p>Seat choosed</p>
                    </div>
                    <div className="col-sm-6">
                      {this.state.dataMovie.map((item) => (
                        <p>{item.name}</p>
                      ))}
                      <p>{this.state.timeBooking}</p>
                      <p>$10</p>
                      <p>{seatBook}</p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <h4>Price</h4>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="price">$30</h4>
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
  }
}
export default Order;
