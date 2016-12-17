class AddAdminPasswordToAdminSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_settings, :admin_password, :string
  end
end
