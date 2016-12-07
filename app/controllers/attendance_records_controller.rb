class AttendanceRecordsController < ApplicationController
	def create
		@student = Student.find_by_student_number(attendance_record_params[:student_number])
		
		return error_response("生徒が見つかりませんでした。") if @student.nil?

		attendance_record = @student.attendance_records.new
	
		attendance_record.save		

		success_response
	end

	private

	def success_response
		respond_to do |format|
			format.json { render json: { record: @student.attendance_records.this_month.count, student: @student } }
		end	
	end

	def error_response(error="エラーが起きました。")
		respond_to do |format|
			format.json { render json: error, status: 500 }
		end
	end

	def attendance_record_params
		params.require(:attendance_record).permit(:student_number)
	end
end
