import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ShopBar from './ShopBar';
import Pagination from './Pagination';
import { connect } from 'react-redux';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        // this.setState({
        //     data: this.props.productList
        // });
        this.props.productList.then(data=>{this.setState({
            data:data
        })})
    }

    render() {
        // console.log('productlist',this.props.productList.then(data=>{this.setState({
        //     data:data
        // })}));

        return (
            <div className="amado_product_area section-padding-100">
                <div className="container-fluid">
                    {/* first component */}
                    <ShopBar />

                    {/* second component */}
                    <div className="row">

                        {
                            this.state.data.map((item) => {
                                return (<ProductItem item={item} />);
                            })
                            // console.log(this.props.productList)
                        }

                    </div>

                    {/* third component */}
                    <Pagination />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productList: state.productList
    }
}

export default connect(mapStateToProps)(Shop);