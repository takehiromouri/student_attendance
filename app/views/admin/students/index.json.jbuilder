json.array! @students do |student|
  json.id student.id
  json.student_number student.student_number
  json.phone student.phone
  json.name student.name
  json.attendance_records do
		json.array! student.attendance_records do |attendance_record|
			json.id attendance_record.id
			json.created_at_date attendance_record.created_at.strftime("%m/%d/%Y")
			json.created_at_time attendance_record.created_at.strftime("%l:%M %p")
			json.created_at attendance_record.created_at.strftime("%m/%d/%Y %l:%M %p")
		end
	end
end
