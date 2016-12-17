class AdminSettingsController < ApplicationController
	before_action :ensure_admin

	def edit
		@setting = AdminSetting.first		
	end

	def update
		@setting = AdminSetting.first
		
		if @setting.update(admin_setting_params)
			flash[:success] = "設定が変更されました。"			
		else
			flash[:error] = @setting.errors.full_messages[0]			
		end

		render :edit
	end

	private

	def admin_setting_params
		params.require(:admin_setting).permit(:password, :footer_text, :header_text, :button_color, :secondary_button_color, :third_button_color, :top_color, :footer_color)
	end
end
