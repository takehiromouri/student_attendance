class AdminSettingDecorator < Draper::Decorator
  delegate_all

  def footer_color
  	object.footer_color.empty? ? "rgb(0, 0, 0)" : object.footer_color
  end

  def top_color
  	object.top_color.empty? ? "rgb(0, 0, 0)" : object.top_color
  end

  def button_color
  	object.button_color.empty? ? "#2199e8" : object.button_color
  end

  def secondary_button_color
  	object.secondary_button_color.empty? ? "#ffae00" : object.secondary_button_color
  end

  def third_button_color
  	object.third_button_color.empty? ? "#da3116" : object.third_button_color
  end

end
