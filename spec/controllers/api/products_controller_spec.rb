require 'rails_helper'

describe Api::ProductsController do

  describe '#index' do
    let(:action) { get :index, format: :json }

    it 'succeeds' do
      action
      expect(response).to be_success
    end

    it 'responds with all products' do
      
      action
    end

  end

end
