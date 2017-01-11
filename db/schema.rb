# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170111044708) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_settings", force: :cascade do |t|
    t.text     "footer_text"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.integer  "password"
    t.text     "header_text"
    t.string   "button_color"
    t.string   "top_color"
    t.string   "footer_color"
    t.string   "secondary_button_color"
    t.string   "third_button_color"
    t.integer  "admin_password"
    t.string   "form_button_color"
    t.string   "form_submit_button_color"
    t.string   "form_button_pressed_color"
    t.string   "title_setting"
  end

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "first_name"
    t.string   "first_name_hiragana"
    t.string   "last_name"
    t.string   "last_name_hiragana"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_admins_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree
  end

  create_table "attendance_records", force: :cascade do |t|
    t.integer  "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_attendance_records_on_student_id", using: :btree
  end

  create_table "memos", force: :cascade do |t|
    t.integer  "student_id"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_memos_on_student_id", using: :btree
  end

  create_table "payment_records", force: :cascade do |t|
    t.integer  "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_payment_records_on_student_id", using: :btree
  end

  create_table "students", force: :cascade do |t|
    t.string   "student_number"
    t.string   "phone"
    t.string   "first_name"
    t.string   "first_name_hiragana"
    t.string   "last_name"
    t.string   "last_name_hiragana"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.boolean  "deleted",             default: false, null: false
    t.index ["deleted"], name: "index_students_on_deleted", using: :btree
    t.index ["student_number"], name: "index_students_on_student_number", using: :btree
  end

  add_foreign_key "attendance_records", "students"
  add_foreign_key "memos", "students"
end
