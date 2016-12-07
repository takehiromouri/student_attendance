require 'rails_helper'

RSpec.describe AuthenticationsController, type: :controller do
	describe "POST #create" do
		context "password is correct" do
			it "returns 200" do
				FactoryGirl.create(:admin_setting, password: 12345)

				post :create, authentication: {password: 12345}, format: :json

				expect(response.status).to eq(200)
				expect(session[:authenticated]).to eq(true)
			end
		end

		context "password is incorrect" do
			it "returns 500" do
				FactoryGirl.create(:admin_setting, password: 12345)

				post :create, authentication: {password: 0123}, format: :json

				expect(response.status).to eq(500)
				expect(response.body).to eq("パスワードが間違っています。")
			end
		end
	end
end
