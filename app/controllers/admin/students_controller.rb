class Admin::StudentsController < ApplicationController
	before_action :ensure_admin

	def index
		@students = Student.all.includes(:attendance_records).decorate
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

	def edit
		@student = Student.find(params[:id])
	end

	def update
		@student = Student.find(params[:id])

		if @student.update(student_params)
			flash[:success] = "生徒の情報が更新されました。"			
		else
			flash[:error] = @student.errors.full_messages[0]
		end

		render :edit
	end

	def destroy
		@student = Student.find(params[:id])
		@student.delete
		flash[:alert] = "登録解除完了いたしました。"
		redirect_to root_path
	end

	private

	def student_params
		params.require(:student).permit(:first_name, :last_name, :first_name_hiragana, :last_name_hiragana, :phone, :student_number)
	end	
end
