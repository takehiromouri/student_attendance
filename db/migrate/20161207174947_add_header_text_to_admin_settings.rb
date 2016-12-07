class AddHeaderTextToAdminSettings < ActiveRecord::Migration[5.0]
  def change
  	add_column :admin_settings, :header_text, :text
  end
end
