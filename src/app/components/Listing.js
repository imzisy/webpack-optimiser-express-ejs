import React from "react";

export const Listing = (props) => {

    const listProducts = props.products.map((product) =>
             <div className="row" key={product.nid}>
                <div className="col-xs-12">
                    <p>
                        { props.tr('Product is') } => {product.title}  <br/> 
                        Interest Rate is => {product.InterestRate} <br/>
                        installment is => {product.installment} <br/>
                    </p>
                </div>
            </div>);
    return (
        <div>{listProducts}</div>
    );
}


