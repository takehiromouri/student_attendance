class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected

  def ensure_admin
		return if admin_signed_in?
		flash[:alert] = "You're not authorized"
		redirect_to root_path
	end
end
