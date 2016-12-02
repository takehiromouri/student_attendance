class StudentsController < ApplicationController
	def index
		if params[:student_number]
			@students = Student.where(student_number: params[:student_number]) 
		end

		respond_to do |format|
			format.json { render json: @students }
		end	
	end
end
