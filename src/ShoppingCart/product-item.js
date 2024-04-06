import React, { Component } from 'react';

export default class ProductItem extends Component {
    handleAddToCart = () => {
        this.props.getProductItemAddToCart(this.props.productItem);
    }

    handleProductDetail = () => {
        this.props.getProductDetail(this.props.productItem);
    }
    
    render() {
        const { name, image, price } = this.props.productItem;

        return (
            <div className="col-sm-4">
                <div className="card">
                <img className="card-img-top" src={image} alt={name} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p>{price} $</p>
                    <button className="btn btn-success"data-toggle="modal"
                        data-target="#modelIdProductDetail" 
                        onClick={this.handleProductDetail}>View detail</button>
                    <button className="btn btn-dark" onClick={this.handleAddToCart}>Add to Cart</button>
                </div>
                </div>
            </div>
        );
    }
}