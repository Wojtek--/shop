class Product < ActiveRecord::Base
  include ActionView::Helpers::NumberHelper

  has_attached_file :image
  validates_attachment :image, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

  def price
    number_with_precision(self[:price], :precision => 2)
  end

  def image_url
    image.url
  end
end
