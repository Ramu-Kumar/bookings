import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { pretifyDate } from "helpers";

class RentalManageModal extends Component {
  state = {
    open: false
  };
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };
  renderBookings = bookings => {
    return bookings.map((booking, index) => (
      <React.Fragment key={index}>
        <p>
          <span>Date:</span> 2018/04/04 - 2018/04/07
        </p>
        <p>
          <span>Guests:</span> 2
        </p>
        <p>
          <span>Total Price:</span> 230 $
        </p>
        <hr />
      </React.Fragment>
    ));
  };
  render() {
    const { bookings } = this.props;
    return (
      <React.Fragment>
        <button type="button" onClick={this.openModal} className="btn btn-bwm">
          Bookings
        </button>
        <Modal
          open={this.state.open}
          onClose={this.closeModal}
          little
          classNames={{ modal: "rental-booking-modal" }}
        >
          <h4 className="modal-title title">Made Bookings</h4>
          <div className="modal-body bookings-inner-container">
            {this.renderBookings(bookings)}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={this.closeModal}
              className="btn btn-bwm"
            >
              Cancel
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default RentalManageModal;
