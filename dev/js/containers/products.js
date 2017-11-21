import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectProduct} from "../actions/index";


class ProductsDisplay extends Component {

    productItems() {
        return this.props.products.map((product) => {
            return (
                <article key={product.id} className="product-card">
                    <img src={product.thumbnail} alt="Fotito"></img>

                    <div className="text">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <button onClick={() => this.props.selectProduct(product)}>
                            Cómpralo a {product.prices[0][1]}
                        </button>
                    </div>
                </article>
            );
        });
    }

    render() {
        if (!this.props.products) {
            return (<div>No products to show</div>);
        }
        return (
            <div className="products-container">
                {this.productItems()}
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        products: state.products
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectProduct: selectProduct}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductsDisplay);
