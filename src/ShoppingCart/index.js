import React, { Component } from "react";
import ProductList from "./product-list";
import Modal from "./modal";
import ModalProDuctDetail from "./modal-product-detail";
import data from './data.json';

export default class ShoesStore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: data,
            product: null,
            productListCart: [],
        }
    }

    handleProductItemAddToCart = (productItem) => {
        const productCart = {
            id: productItem.id,
            name: productItem.name,
            image: productItem.image,
            price: productItem.price,
            qty: 1
        };

        // Clone current list product in cart
        const productListCartClone = [...this.state.productListCart];

        // Check item is exist in cart
        const index = productListCartClone.findIndex((cartItem) => cartItem.id === productItem.id);
        if (index !== -1) {
            // Update
            productListCartClone[index].qty += 1;
        } else { 
            // Add
            productListCartClone.push(productCart);
        }

        // Add|Upadate cart
        this.setState({
            productListCart: productListCartClone
        });
    }

    handleDeleteProductCart = (id) => {
        const productListCartClone = [...this.state.productListCart];

        const index = productListCartClone.findIndex((cartItem) => cartItem.id === id);
        if (index !== -1) {
            productListCartClone.splice(index, 1);
        }

        this.setState({
            productListCart: productListCartClone
        });
    }

    handleProductCartUpdateQty = (id, isIncrease = false) => {
        const productListCartClone = [...this.state.productListCart];

        const index = productListCartClone.findIndex((cartItem) => cartItem.id === id);
        if (index !== -1) {
            if (isIncrease) {
                productListCartClone[index].qty += 1;
            } else {
                const curQty = productListCartClone[index].qty;
                if (curQty == 1) {
                    alert('Can\'t update Qty of this product to ZERO' );
                } else {
                    productListCartClone[index].qty -= 1;
                }
            }
        }

        this.setState({
            productListCart: productListCartClone
        });
    }
    
    handleProductDetail = (product) => {
        this.setState({
            product: product
        });
    }

    getTotalQtyInCart = () => {
        return this.state.productListCart.length;
    }

    render() {
        return (
            <div>
                <hr />
                <h1 className="title">Bài tập React JS Buổi 4 - Code lại bài tập giỏ hàng Shoes Shop trên lớp</h1>
                <div className="container">
                    <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Cart ({this.getTotalQtyInCart()})
                    </button>
                </div>
                <hr />
                <ProductList productList={this.state.productList} getProductItemAddToCart={this.handleProductItemAddToCart} getProductDetail={this.handleProductDetail} />
                <Modal productListCart={this.state.productListCart} getProductDeleteCart={this.handleDeleteProductCart} getProductCartUpdateQty={this.handleProductCartUpdateQty} />
                <ModalProDuctDetail product={this.state.product} />
            </div>
        );
    }
}