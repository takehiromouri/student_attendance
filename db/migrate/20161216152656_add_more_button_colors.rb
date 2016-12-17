class AddMoreButtonColors < ActiveRecord::Migration[5.0]
  def change
  	add_column :admin_settings, :secondary_button_color, :string
  	add_column :admin_settings, :third_button_color, :string
  end
end
