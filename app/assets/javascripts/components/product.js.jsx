var Product = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    price: React.PropTypes.number
  },
  render: function() {
    var product = this.props.product;
    return(
      <tr>
        <td>{product.name}</td>
        <td>{product.color}</td>
        <td>{product.size}</td>
        <td>{product.price}</td>
        <td><img src={product.image_url} alt="product image" className="img-responsive"/></td>
      </tr>
    )
  }
});
