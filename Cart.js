import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components';
import {ProductConsumer} from '../../Context';

export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="jumbotron text-center">
                                <h1 className="display-3 text-info">Cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="jumbotron">
                                <CardTop>
                                    <h3 className="text-left">My Bag</h3>
                                    <p className="float-right">Items are reserved for few minutes</p>
                                </CardTop>

                                <CardBody>
                                    <ProductConsumer>
                                    {
                                        (value)=>{
                                            value.cart.map((item,key)=>{
                                                return(
                                                    <CartItem key={key}>
                                                        <img src={item.image} alt={item.title}/>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item">                                                                   
                                                                        <strong className="text-info text-uppercase">{item.title}</strong>
                                                                        <strong className="float-right text-success">&#8377;{item.price}</strong>
                                                                        <hr/>
                                                                        <p className="countBtn">
                                                                            <span onClick={()=>value.decrement(item._id)} className="btn btn-sm btn-danger">-</span>

                                                                            <span className="text-danger count">{item.count}</span>

                                                                            <span onClick={()=>value.increment(item._id)} className="btn btn-sm btn-primary">+</span>

                                                                            <span className="text-danger float-right" style={{cursor:'pointer'}} onClick={()=>value.removeItem(item._id)}>
                                                                                <i className="fas fa-trash"></i>
                                                                            </span>

                                                                        </p>
                                                                        <p className="subTotal float-right">
                                                                            <strong>Sub Total</strong>
                                                                            <span className="text-warning">&#8377;{item.total}</span>
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </CartItem>
                                                )
                                            })
                                        }
                                    }
                                    </ProductConsumer>
                                </CardBody>                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="jumbotron">
                                <CardTop>
                                    <h3 className="text-left">Total</h3>
                                </CardTop>
                                {
                                    (value)=>{
                                        const {cartSubTotal,cartTax,cartTotal,dCharges}=value;
                                        return(
                                            <div className="card">
                                                <div className="card-body">
                                                    <p>
                                                        <strong className="text-info">Cart-Total</strong>
                                                        <span className="float-right">&#8377;{cartSubTotal}</span>
                                                    </p>

                                                    <p>
                                                        <strong className="text-info">Cart-Tax</strong>
                                                        <span className="float-right">&#8377;{cartTax}</span>
                                                    </p>

                                                    <p>
                                                        <strong className="text-info">Delivery Charges</strong>
                                                        <span className="float-right">&#8377;{dCharges}</span>
                                                    </p>
                                                </div>
                                                <div className="card-footer">
                                                    <p>
                                                        <strong className="text-success">Grand Total</strong>
                                                        <span className="float-right">&#8377;{cartTotal}</span>
                                                    </p>
                                                </div>
                                            </div>

                                        )
                                    }
                                }
                                <CardBody>
                                    <div className="card-mt-4">
                                        <Link to={'/checkout'} className="btn btn-outline-success btn-block text-uppercase">Check Out</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </React.Fragment>
        )
    }
}


const CardTop=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:0px;
border-bottom:2px solid #ccc;
h3{
    text-transform:uppercase;
    font-family:sans-serif;
    letter-spacing:3px;
}
;

const CardBody=styled.div`
display:flex;
flex-direction:column;
;

const CartItem=styled.div`
display:flex;
flex-direction:row;
flex-wrap:flex-all;
width:100%;
margin:5px;
img{
    width:60px;
    height:80px;
}
.row{
    width:100%;
}
.countBtn{
    letter-spacing:5px;
    span{
        font-size:larger;
        margin:3px;
    }
}
.count{
    font-weight:bold;
    font-size:larger
}
`;