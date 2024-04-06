import React, { Component } from "react";
import ProductItem from "./product-item";

export default class ProductList extends Component {
    render () {
        const { productList, getProductItemAddToCart } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {productList.map((productItem) => { 
                        return <ProductItem key={productItem.id} productItem={productItem} getProductItemAddToCart={getProductItemAddToCart} />
                    })}
                </div>
            </div>
        );
    };
}