class ChangeAdminPasswordToInteger < ActiveRecord::Migration[5.0]
  def change
  	remove_column :admin_settings, :admin_password
  	add_column :admin_settings, :admin_password, :integer
  end
end
