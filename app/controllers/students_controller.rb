class StudentsController < ApplicationController
	def index
		if params[:student_number]
			@student = Student.includes(:attendance_records)
												.find_by(student_number: params[:student_number])											  
											  .try(:decorate)

			if @student.nil?
				respond_to do |format|
					format.json { render json: "#{params[:student_number]}は見つかりませんでした。", status: 500 }
				end
			end
			
		end
	end
end
