class CreatePaymentRecords < ActiveRecord::Migration[5.0]
  def change
    create_table :payment_records do |t|
      t.integer :student_id

      t.timestamps
    end
    add_index :payment_records, :student_id
  end
end
