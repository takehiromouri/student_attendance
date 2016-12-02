class Admin::StudentsController < ApplicationController
	before_action :ensure_admin

	def new
		@student = Student.new
	end

	def create
		@student = Student.new(student_params)

		if @student.save
			flash[:success] = "Success!"
			redirect_to root_path
		else
			flash[:alert] = "Error!"
			render :new
		end
	end

	private

	def student_params
		params.require(:student).permit(:first_name, :last_name, :first_name_hiragana, :last_name_hiragana, :email, :password, :password_confirmation, :phone)
	end

	def ensure_admin
		return if admin_signed_in?
		flash[:alert] = "You're not authorized"
		redirect_to root_path
	end
end
