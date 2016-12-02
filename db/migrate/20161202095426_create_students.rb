class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    drop_table :students
    create_table :students do |t|
      t.string :student_number
      t.string :phone
      t.string :first_name
      t.string :first_name_hiragana
      t.string :last_name
      t.string :last_name_hiragana

      t.timestamps
    end
    add_index :students, :student_number
  end
end
