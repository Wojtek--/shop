var ProductTable = React.createClass({
  handleSortColumn: function(name, order) {
    this.props.handleSortColumn(name, order);
  },
  render: function() {
    var products = [];
    this.props.products.forEach(function(product) {
      products.push(<Product product={product}
                         key={'product' + product.id}/>);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2 sortable">
              <SortColumn name="name" text="Name" sort={this.props.sort} order={this.props.order} handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-2">
              Color
            </th>
            <th className="col-md-2">
              Size
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="price" text="Price" sort={this.props.sort} order={this.props.order} handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-1">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </table>
    )
  }
});
