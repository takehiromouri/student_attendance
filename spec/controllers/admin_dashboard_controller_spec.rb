require 'rails_helper'

RSpec.describe AdminDashboardController, type: :controller do
	describe "GET #index" do
		context "admin is logged in" do
			it "renders the index page" do
				admin = FactoryGirl.create(:admin)

				sign_in admin
				get :index

				expect(response).to render_template :index
			end
		end

		context "admin is not logged in" do
			it "redirects the user to root_path" do
				get :index

				expect(response).to redirect_to root_path
			end
		end
	end
end
