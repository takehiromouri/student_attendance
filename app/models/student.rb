class Student < ApplicationRecord
	validates :first_name, :first_name_hiragana, :last_name, :last_name_hiragana, :student_number, presence: true
end
