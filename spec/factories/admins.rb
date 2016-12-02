FactoryGirl.define do
  factory :admin do
		first_name "太郎"
		last_name "山本"
		sequence :email do |n|
      "admin#{n}@email.com"
    end
    password "password"
    password_confirmation "password"
  end
end
