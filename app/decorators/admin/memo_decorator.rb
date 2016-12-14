class Admin::MemoDecorator < Draper::Decorator
  delegate_all

  def created_at
  	object.created_at.strftime("%m/%d/%Y %l:%M %p")
  end	
end
