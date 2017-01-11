json.array! @students do |student|
  json.id student.id
  json.student_number student.student_number
  json.phone student.phone
  json.name student.name
  json.attendance_records do
		json.array! student.attendance_records.order(created_at: :desc) do |attendance_record|
			json.id attendance_record.id
			json.created_at_date attendance_record.created_at.strftime("%-m/%d/%Y")
			json.created_at_time attendance_record.created_at.strftime("%l:%M %p")
			json.created_at attendance_record.created_at.strftime("%m/%d/%Y %l:%M %p")
		end
	end
  json.payment_records do
    json.array! student.payment_records.order(created_at: :desc) do |payment_record|
      json.id payment_record.id
      json.created_at_date payment_record.created_at.strftime("%-m/%d/%Y")
      json.created_at_time payment_record.created_at.strftime("%l:%M %p")
      json.created_at payment_record.created_at.strftime("%m/%d/%Y %l:%M %p")
    end
  end
end
