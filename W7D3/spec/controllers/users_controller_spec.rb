require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'GET #new' do
    it 'renders the new user template' do
      get :new
      expect(response).to render_template(:new)
    end
  end
  describe "POST #create" do
    let(:valid_params) { { user: { username: 'G-Man', password: '123456' } } }
    let(:invalid_params) { { user: { username: 'Dog', password: '' } } }
    let(:user) { User.find_by(username: 'G-Man') }
    context 'with valid params' do
      before :each do
        post :create, params: valid_params
      end
      it 'creates the user' do
        expect(User.last.username).to eq('G-Man')
      end
      it 'logs in the user' do
        expect(session[:session_token]).to eq(user.session_token)
      end
      it 'redirects to user show page' do
        expect(response).to redirect_to(user_url(user))
      end
    end
    context 'with invalid params' do
      before :each do
        post :create, params: invalid_params
      end
      it 'renders the new template' do
        expect(response).to render_template(:new)
      end
      it 'adds errors to flash' do
        expect(flash[:errors]).to be_present
      end
    end
  end
end
