class AdminSetting < ApplicationRecord
	validates :password, :admin_password, :footer_text, presence: true
end
