class AdminSetting < ApplicationRecord
	validates :password, :footer_text, presence: true
end
