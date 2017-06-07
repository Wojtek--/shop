class Api::V1::ProductsController < Api::V1::BaseController

  def index
    respond_with Product.order(sort_by + ' ' + order), methods: :image_url
  end

  def search
    query = params[:query]
    products = Product.where('size LIKE ? OR color LIKE ?', "%#{query}%", "%#{query}%")
    render json: products
  end

  private

  def sort_by
    %w(name price).include?(params[:sort_by]) ? params[:sort_by] : 'name'
 end

  def order
    %w(asc desc).include?(params[:order]) ? params[:order] : 'asc'
  end

end
