class AttendanceRecordsController < ApplicationController
	def create
		@student = Student.find_by_student_number(attendance_record_params[:student_number])

		if @student.present?
			@student.attendance_records.create
			respond_to do |format|
				format.json { render json: { record: @student.attendance_records.this_month.count, student: @student } }
			end
		else
			respond_to do |format|
				format.json { render json: :no_head, status: 500 }
			end
		end
		
	end

	private

	def attendance_record_params
		params.require(:attendance_record).permit(:student_number)
	end
end
