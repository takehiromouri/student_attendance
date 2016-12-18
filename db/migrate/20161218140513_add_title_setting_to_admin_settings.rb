class AddTitleSettingToAdminSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_settings, :title_setting, :string
  end
end
