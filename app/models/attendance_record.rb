class AttendanceRecord < ApplicationRecord
	belongs_to :student

	scope :this_month, -> { where(created_at: Time.now.beginning_of_month..Time.now.end_of_month) }
	scope :created_today, -> { where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day) }

	validate :daily_limit

	private	

	def daily_limit
		if student.attendance_records.created_today.any?
			errors.add(:student, "は本日すでに出席しています。")
		end
	end
end
