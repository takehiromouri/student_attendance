json.array! @attendance_records do |attendance_record|
  json.id attendance_record.id
  json.created_at_date attendance_record.created_at.strftime("%m/%d/%Y")
	json.created_at_time attendance_record.created_at.strftime("%l:%M %p")
	json.created_at attendance_record.created_at.strftime("%m/%d/%Y %l:%M %p")
	json.student do 
		json.name attendance_record.student.decorate.name
	  json.name_hiragana attendance_record.student.decorate.name_hiragana
	  json.student_number attendance_record.student.student_number
	  json.attendance_records do
			json.array! attendance_record.student.attendance_records do |attendance_record|
				json.id attendance_record.id
				json.created_at_date attendance_record.created_at.strftime("%m/%d/%Y")
				json.created_at_time attendance_record.created_at.strftime("%l:%M %p")
				json.created_at attendance_record.created_at.strftime("%m/%d/%Y %l:%M %p")
			end
		end
	end
  
end
