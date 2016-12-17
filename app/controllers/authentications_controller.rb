class AuthenticationsController < ApplicationController
	def create

		if authenticated?

			set_authenticated!

			respond_to do |format|
				format.json { render json: :no_head, status: 200 }
			end
		elsif admin_authenticated?
			flash[:success] = "認証されました。"
			respond_to do |format|
				format.json { render json: { url: new_admin_session_path }, status: 200 }
			end
			
		else
			respond_to do |format|
				format.json { render json: "パスワードが間違っています。", status: 500 }
			end
		end
	end

	private

	def admin_authenticated?
		authentication_params[:password] == admin_password
	end

	def authenticated?
		authentication_params[:password] == password
	end	

	def set_authenticated!
		session[:authenticated] = true
	end

	def admin_password
		@admin_password ||= AdminSetting.first.admin_password.to_s
	end

	def password
		@password ||= AdminSetting.first.password.to_s
	end

	def authentication_params
		params.require(:authentication).permit(:password)
	end
end
