class AuthenticationsController < ApplicationController
	def create

		if authentication_params[:password] == password

			set_authenticated!

			respond_to do |format|
				format.json { render json: :no_head, status: 200 }
			end
		else
			respond_to do |format|
				format.json { render json: "パスワードが間違っています。", status: 500 }
			end
		end
	end

	private

	def set_authenticated!
		session[:authenticated] = true
	end

	def password
		password ||= AdminSetting.first.password.to_s
	end

	def authentication_params
		params.require(:authentication).permit(:password)
	end
end
