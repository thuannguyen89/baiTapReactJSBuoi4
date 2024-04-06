import React, { Component } from 'react';

export default class ModalProDuctDetail extends Component {
    render() {
        const { product } = this.props;
        return(
            <div
                className="modal fade"
                id="modelIdProductDetail"
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
                    <h5 className="modal-title">Product Detail Info</h5>
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
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="img-fluid" src={product?.image} alt="" />
                            </div>
                            <div className="col-sm-7">
                                <h3>Product Detail Info</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>ID</td>
                                            <td>{product?.id}</td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td>{product?.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Alias</td>
                                            <td>{product?.alias}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>{product?.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>{product?.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Short Description</td>
                                            <td>{product?.shortDescription}</td>
                                        </tr>
                                        <tr>
                                            <td>Qty Available</td>
                                            <td>{product?.quantity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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