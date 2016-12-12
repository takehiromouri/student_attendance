class Admin::AttendanceRecordsController < ApplicationController
	before_action :ensure_admin

	def index		
		month = params[:month].try(:to_time)
		return unless month
		@attendance_records = AttendanceRecord.where(created_at: month.beginning_of_month..month.end_of_month)

		respond_to do |format|
			format.json { render json: @attendance_records }
		end
	end
end
