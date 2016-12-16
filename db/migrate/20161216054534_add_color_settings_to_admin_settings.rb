class AddColorSettingsToAdminSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_settings, :button_color, :string
    add_column :admin_settings, :top_color, :string
  end
end
