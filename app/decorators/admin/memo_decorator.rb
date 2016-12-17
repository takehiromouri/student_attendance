class Admin::MemoDecorator < Draper::Decorator
  delegate_all

  def created_at
  	object.created_at.strftime("%Y/%m/%d %l:%M %p")
  end	
end
