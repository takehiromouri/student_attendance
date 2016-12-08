class AddDeletedToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :deleted, :boolean, default: false, null: false
    add_index :students, :deleted
  end
end
