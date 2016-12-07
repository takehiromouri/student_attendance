require 'rails_helper'

RSpec.describe AdminSettingsController, type: :controller do
	describe "GET #edit" do
		context "user is admin" do
			it "renders edit template" do
				admin = FactoryGirl.create(:admin)
				admin_setting = FactoryGirl.create(:admin_setting)

				sign_in admin
				get :edit

				expect(response).to render_template :edit
			end
		end

		context "user is not admin" do
			it "does not render edit template" do
				admin_setting = FactoryGirl.create(:admin_setting)

				get :edit

				expect(response).to redirect_to root_path
			end
		end
	end

	describe "PATCH #update" do
		context "user is admin" do
			it "renders edit template" do
				admin = FactoryGirl.create(:admin)
				admin_setting = FactoryGirl.create(:admin_setting)

				sign_in admin
				patch :update, admin_setting: {footer_text: "新しいフッターテキスト"}
				admin_setting.reload
				
				expect(admin_setting.footer_text).to eq("新しいフッターテキスト")
			end
		end

		context "user is not admin" do
			it "does not render edit template" do
				admin_setting = FactoryGirl.create(:admin_setting, footer_text: "元フッターテキスト")

				patch :update, admin_setting: {footer_text: "新しいフッターテキスト"}
				admin_setting.reload
				
				expect(admin_setting.footer_text).to eq("元フッターテキスト")
			end
		end
	end
end
