class CreateAdminSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :admin_settings do |t|
      t.string :password
      t.text :footer_text

      t.timestamps
    end
  end
end
