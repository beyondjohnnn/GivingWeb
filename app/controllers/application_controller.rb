class ApplicationController < ActionController::API

	protected
  def token_hash(user)
    if(user && user.id)
      return {
        auth_token: JsonWebToken.encode(user_id: user.id),
        user: {id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email, admin: false}
      }
    else
      return nil
    end
  end

  def authenticate_request!
    unless user_id_in_token?
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
      return
    end
    @current_user = User.find(auth_token[:user_id])
  rescue JWT::VerificationError, JWT::DecodeError
    render json: { errors: ['Not Authenticated'] }, status: :unauthorized
  end



  private
  
  def http_token
      @http_token ||= if request.headers['Authorization'].present?
        request.headers['Authorization'].split(' ').last
      end
  end

  def auth_token
    @auth_token ||= JsonWebToken.decode(http_token)
  end

  def user_id_in_token?
    http_token && auth_token && auth_token[:user_id].to_i
  end
  
end
