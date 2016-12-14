class CreateMemos < ActiveRecord::Migration[5.0]
  def change
    create_table :memos do |t|
      t.references :student, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
