class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: %i[login register]
     # POST /register
  def register
    @user = User.create(user_params)
   if @user.valid?
    response = { message: 'Congratulations! Registred successfully'}
    render json: response, status: :created
   else
    response = {message: 'Something went wrong'}
    render json: @user.errors.full_messages, status: :bad
   end 
  end

  def login
    authenticate params[:email], params[:password]
  end
  def test
    render json: {
          message: 'You have passed authentication and authorization test'
    }
  end

  private

  def user_params
    params.permit(
      :name,
      :email,
      :password
    )
  end

  def authenticate(email, password)
    command = AuthenticateUser.call(email, password)

    if command.success?
      render json: {
        access_token: command.result,
        message: 'Login Successful'
      }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
   end
end
