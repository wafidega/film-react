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
      userId: localStorage.getItem("id"),
    };
  }
  // Seat
  selectedSeat = (seat) => {
    console.log("user select seat");
    console.log(seat);

    if (this.state.selectedSeat.includes(seat)) {
      const removeSeats = this.state.selectedSeat.filter((value) => {
        return value !== seat;
      });
      this.setState({
        selectedSeat: removeSeats,
      });
    } else {
      if (this.state.selectedSeat.length >= 5) {
        toast.error("You can only booking 5 or less", {
          theme: "colored",
        });
      } else {
        this.setState({
          selectedSeat: [...this.state.selectedSeat, seat],
        });
      }
    }
  };
  // get movie
  componentDidMount() {
    this.getDataMovieById();
    this.getScheduleById();
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
  getScheduleById = () => {
    axios
      .get(`schedule/${this.state.scheduleId}`)
      .then((res) => {
        console.log(res);
        this.setState({
          dataSchedule: res.data.data,
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
      const countSeat = this.state.selectedSeat.length;
      const priceTicket = this.state.dataSchedule.map((item) => item.price);
      const totalTicket = priceTicket[0] * countSeat;
      const {
        movieId,
        scheduleId,
        dateBooking,
        timeBooking,
        selectedSeat: seat,
        userId,
      } = this.state;
      console.log(movieId, "Movie");
      console.log(scheduleId, "Schedule");
      console.log(dateBooking, "Date");
      console.log(timeBooking, "Time");
      console.log(userId, "User");
      console.log(totalTicket);
      const setPayment = {
        movieId,
        scheduleId,
        dateBooking,
        timeBooking,
        selectedSeat: seat,
        userId,
        countSeat,
        totalTicket,
      };
      setTimeout(() => {
        this.props.history.push("/payment", { setPayment });
      }, 3000);
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
    console.log(this.state.userId);
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
                      {this.state.dataSchedule.map((item) => (
                        <p>Rp.{item.price}</p>
                      ))}
                      <p>{seatBook}</p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <h4>Price</h4>
                    </div>
                    <div className="col-sm-6">
                      {this.state.dataSchedule.map((item) => (
                        <h4 className="price">Rp. {item.price * countSeat}</h4>
                      ))}
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
