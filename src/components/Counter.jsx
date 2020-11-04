import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-4 p-2">
          <button
            className="btn btn-sm btn-danger text-white float-right mr-3 mt-3"
            onClick={() => this.props.onDelete(this.props.tag.id)}
          >
            x
          </button>
          <div className="well border m-2 p-2">
            <h5 className="font-weight-bold">{this.props.tag.item_name}</h5>
            <span>
              Quantity:{" "}
              <span className={this.presentQuantityBadgeClasses()}>
                {this.props.tag.quantity}
              </span>
            </span>{" "}
            &nbsp; | &nbsp;
            <span>
              Price : <b>GHC {this.props.tag.item_price}</b>
            </span>
            &nbsp; | &nbsp;
            <span>
              Cost : GHC <b>{this.presentTotalCostOfAnItem()}</b>
            </span>
            <div className="row justify-content-center mt-1">
              <div className="col-lg-3 text-center">
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={() => this.props.onIncrement(this.props.tag)}
                >
                  +
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => this.props.onDecrement(this.props.tag)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  presentQuantityBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.tag.quantity === 0 ? "warning" : "success";
    return classes;
  };

  presentTotalCostOfAnItem = () => {
    let cost = Number(this.props.tag.quantity * this.props.tag.item_price);
    return isNaN(cost) ? 0 : cost;
  };
}

export default Counter;
