import React, { Component } from "react";

export default class Modal extends Component {
    renderProductListCart = () => {
        const { productListCart } = this.props;

        if (productListCart) {
            return productListCart.map((cartItem) => {
                return (
                    <tr key={cartItem.id}>
                        <td>{cartItem.id}</td>
                        <td>{cartItem.name}</td>
                        <td><img src={cartItem.image} width={50} alt={cartItem.image} /></td>
                        <td>
                            <button onClick={() => this.props.getProductCartUpdateQty(cartItem.id, false)}>-</button>
                                 {cartItem.qty} 
                            <button onClick={() => this.props.getProductCartUpdateQty(cartItem.id, true)}>+</button>
                        </td>
                        <td>{cartItem.price}</td>
                        <td>{cartItem.qty * cartItem.price}</td>
                        <td>
                            <button 
                                className="btn btn-danger" 
                                onClick={() => {this.props.getProductDeleteCart(cartItem.id)}}
                            >Delete
                            </button>
                        </td>
                    </tr>
                );
            });
        }
    }
    render() {
        return (
            <div
                className="modal fade"
                id="modelId"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div
                className="modal-dialog"
                style={{ maxWidth: "1000px" }}
                role="document"
                >
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Cart</h5>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderProductListCart()}
                        </tbody>
                    </table>
                    </div>
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}