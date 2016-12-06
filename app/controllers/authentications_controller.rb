class AuthenticationsController < ApplicationController
	def create
		if authentication_params[:password] == AdminSetting.first.password.to_s
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

	def authentication_params
		params.require(:authentication).permit(:password)
	end
end
