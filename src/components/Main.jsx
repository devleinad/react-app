import React, { Component } from "react";
import Counter from "./Counter";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      tags: [
        {
          id: 1,
          item_name: "Biscuit",
          item_price: 200,
          quantity: 0,
        },
        {
          id: 2,
          item_name: "Chocolate",
          item_price: 210,
          quantity: 0,
        },

        {
          id: 3,
          item_name: "Milk",
          item_price: 250,
          quantity: 0,
        },
      ],
      total: 0,
    };
  }
  handleDelete = (item_id) => {
    const tags = this.state.tags.filter((t) => t.id !== item_id);
    this.setState({ tags });
  };

  handleIncrement = (tag) => {
    const tags = [...this.state.tags];
    const index = tags.indexOf(tag);
    tags[index] = { ...tag };
    tags[index].quantity++;
    //let total = this.getTotalCostOfAnItem();
    this.setState({
      tags: tags,
      total: this.state.total,
    });
  };

  handleDecrement = (tag) => {
    const tags = [...this.state.tags];
    const index = tags.indexOf(tag);
    tags[index] = { ...tag };
    tags[index].quantity--;
    this.setState({
      tags,
    });
  };

  getTotalCostOfAnItem = () => {
    let total = this.state.total;
    this.state.tags.map((tag) => (total += tag.quantity * tag.item_price));
    //this.setState({ total });
    return total;
  };

  render() {
    return (
      <div className="mt-3 p-3">
        <h4 className="text-center font-weight-bold">Dev Leinad Online Shop</h4>
        {this.state.tags.map((tag) => (
          <Counter
            tag={tag}
            key={tag.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            cost={Number(tag.item_price * tag.quantity)}
          />
        ))}
        <div className="text-center">
          <hr />
          <h3>
            TOTAL :<b>GHC {this.getTotalCostOfAnItem()}</b>
          </h3>
        </div>
      </div>
    );
  }
}

export default Main;
