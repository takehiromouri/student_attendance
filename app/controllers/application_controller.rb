class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected

  helper_method :admin_setting
  def admin_setting
  	@admin_setting ||= AdminSetting.first
  end

  def ensure_admin
		return if admin_signed_in?
		flash[:alert] = "You're not authorized"
		redirect_to root_path
	end
end
