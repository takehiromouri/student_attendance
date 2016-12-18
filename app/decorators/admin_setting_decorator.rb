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

  def form_button_color
    object.form_button_color.empty? ? "#333333" : object.form_button_color
  end

  def form_submit_button_color
    object.form_submit_button_color.empty? ? "#da3116" : object.form_submit_button_color
  end

  def form_button_pressed_color
    object.form_button_pressed_color.empty? ? "#2199e8" : object.form_button_pressed_color
  end

end
