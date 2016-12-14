class Student < ApplicationRecord
	has_many :attendance_records, dependent: :destroy
	has_many :memos, dependent: :destroy
	has_one :last_attendance_record, -> { order(created_at: :desc) }, class_name: "AttendanceRecord"

	default_scope { where(deleted: false) }

	validates :first_name, :first_name_hiragana, :last_name, :last_name_hiragana, :student_number, presence: true

	def self.unattended_for(weeks:)
		if weeks < 4
			joins(:attendance_records)	
		 .where('attendance_records.created_at = (SELECT MAX(attendance_records.created_at) FROM attendance_records WHERE attendance_records.student_id = students.id)')
		 .where(attendance_records: {created_at: (weeks+1).weeks.ago..(weeks).weeks.ago})		 
		else
			joins(:attendance_records)
		 .where('attendance_records.created_at = (SELECT MAX(attendance_records.created_at) FROM attendance_records WHERE attendance_records.student_id = students.id)')
		 .where("attendance_records.created_at <= ?", 1.month.ago)		 
		end
	end

	def self.search(query)
		where("first_name like ? or 
					 last_name like ? or 
					 first_name_hiragana like ? or 
					 last_name_hiragana like ? or 
					 student_number like ?", 
					 query, query, query, query, query)
	end

	def delete
		update(deleted: true)
	end
end
