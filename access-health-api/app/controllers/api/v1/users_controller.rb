class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:show]

  skip_before_action :authorized, only: [:index, :create, :stripe_callback]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def index
  	@users = User.all
  	render json: @users
  end

  def show
  	render json: @user
  end

  def create
  	@user = User.create(user_params)
  	if @user.valid?
  	  @token = encode_token(user_id: @user.id)
  	  render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
  	else
  	  render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
  	end
  end

  def stripe_callback
    stripe_test_client_id = ENV['STRIPE_CLIENT_ID']
    stripe_test_secret_key = ENV['STRIPE_S_KEY']

    options = {
      site: 'https://connect.stripe.com',
      authorize_url: '/oauth/authorize',
      token_url: '/oauth/token'
    }

    code = params[:code]
    id = params[:state]
    client = OAuth2::Client.new(stripe_test_client_id, stripe_test_secret_key, options)
    @response = client.auth_code.get_token(code, :params => {:scope => 'read_write'})
    @access_token = @response.token
    @user = User.find(id)
    @user.update!(stripe_uid: @response.params["stripe_user_id"]) if @response
    
    redirect_to "https://access-health.herokuapp.com/"
  end

  private

  def user_params
  	params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

  def find_user
  	@user = User.find(params[:id])
  end
end
