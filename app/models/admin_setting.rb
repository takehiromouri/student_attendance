class AdminSetting < ApplicationRecord
	validates :password, :admin_setting, :footer_text, presence: true
end
