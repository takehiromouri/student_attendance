class AddFormButtonPressedToAdminSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_settings, :form_button_pressed_color, :string
  end
end
