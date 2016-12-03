class StudentDecorator < Draper::Decorator
  delegate_all

  def name
  	object.last_name + object.first_name
  end

  def phone
  	object.phone.empty? ? "無し" : object.phone  	
  end

  def phone_link
  	object.phone.empty? ? "無し" : link_to(object.phone, "tel:#{object.phone}")
  end

  def last_record
  	object.attendance_records.last.created_at.strftime("%m/%d/%Y %l:%M %p")
  end
end
