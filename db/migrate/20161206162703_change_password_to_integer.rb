class ChangePasswordToInteger < ActiveRecord::Migration[5.0]
  def change
  	remove_column :admin_settings, :password
  	add_column :admin_settings, :password, :integer
  end
end
