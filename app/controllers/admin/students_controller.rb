class Admin::StudentsController < ApplicationController
	before_action :ensure_admin

	def index
		
	end

	def new
		@student = Student.new
	end

	def create
		@student = Student.new(student_params)

		if @student.save
			flash[:success] = "生徒が作成されました。"
			redirect_to root_path
		else
			flash[:alert] = @student.errors.full_messages[0]
			render :new
		end
	end

	private

	def student_params
		params.require(:student).permit(:first_name, :last_name, :first_name_hiragana, :last_name_hiragana, :phone, :student_number)
	end	
end
