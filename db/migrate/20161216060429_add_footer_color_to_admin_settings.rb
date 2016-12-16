class AddFooterColorToAdminSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_settings, :footer_color, :string
  end
end
