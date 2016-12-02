FactoryGirl.define do
  factory :student do
    first_name "太郎"
    first_name_hiragana "たろう"
		last_name "山本"
		last_name_hiragana "やまもと"
		phone "08061747394"
		student_number "0000000"
		sequence :email do |n|
      "student#{n}@email.com"
    end
    password "password"
    password_confirmation "password"
  end
end
