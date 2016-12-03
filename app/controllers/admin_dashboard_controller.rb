class AdminDashboardController < ApplicationController
	before_action :ensure_admin

	def index
		@students = Student.all.includes(:attendance_records)
	end
end
