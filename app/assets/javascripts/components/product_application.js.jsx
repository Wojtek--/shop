var ProductApplication = React.createClass({
  getInitialState: function() {
    return {
      products: [],
      sort: "name",
      order: "asc"
    };
  },
  componentDidMount: function() {
    this.getDataFromApi();
  },
  getDataFromApi: function() {
    var self = this;
    $.ajax({
      url: '/api/v1/products',
      success: function(data) {
        console.log(data);
        self.setState({ products: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },
  handleSortColumn: function(name, order) {
    if (this.state.sort != name) {
      order = 'asc';
    }
    $.ajax({
      url: '/api/v1/products',
      data: { sort_by: name, order: order },
      method: 'GET',
      success: function(data) {
        this.setState({ products: data, sort: name, order: order });
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot sort products: ', error);
      }
    });
  },
  handleSearch: function(products) {
    this.setState({ products: products });
  },
  render: function() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductTable products={this.state.products} sort={this.state.sort} order={this.state.order} handleSortColumn={this.handleSortColumn}/>
          </div>
        </div>
      </div>
    )
  }
});
