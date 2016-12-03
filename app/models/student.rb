class Student < ApplicationRecord
	has_many :attendance_records, dependent: :destroy
	has_one :last_attendance_record, -> { order(created_at: :desc) }, class_name: "AttendanceRecord"

	validates :first_name, :first_name_hiragana, :last_name, :last_name_hiragana, :student_number, presence: true

	def self.unattended_for(weeks:)
		if weeks < 4
			joins(:attendance_records)	
		 .where('attendance_records.created_at = (SELECT MAX(attendance_records.created_at) FROM attendance_records WHERE attendance_records.student_id = students.id)')
		 .where(attendance_records: {created_at: weeks.weeks.ago.beginning_of_week..(weeks-1).weeks.ago.beginning_of_week})
		else
			joins(:attendance_records)
		 .where('attendance_records.created_at = (SELECT MAX(attendance_records.created_at) FROM attendance_records WHERE attendance_records.student_id = students.id)')
		 .where("attendance_records.created_at <= ?", 1.month.ago)		 
		end
	end
end
