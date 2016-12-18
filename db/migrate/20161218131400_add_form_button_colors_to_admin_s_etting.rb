class AddFormButtonColorsToAdminSEtting < ActiveRecord::Migration[5.0]
  def change
  	add_column :admin_settings, :form_button_color, :string
  	add_column :admin_settings, :form_submit_button_color, :string
  end
end
