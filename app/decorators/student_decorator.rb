class StudentDecorator < Draper::Decorator
  delegate_all

  def name
  	object.last_name + object.first_name
  end

  def name_hiragana
    object.last_name_hiragana + object.first_name_hiragana
  end

  def phone
  	object.phone.empty? ? "無し" : object.phone  	
  end

  def last_record
  	object.last_attendance_record.created_at.strftime("%m/%d/%Y %l:%M %p")
  end
end
