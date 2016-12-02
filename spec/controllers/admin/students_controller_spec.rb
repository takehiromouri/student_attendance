require 'rails_helper'

RSpec.describe Admin::StudentsController, type: :controller do
	describe "GET #new" do
		context "admin is logged in" do
			it "displays the new template" do
				admin = FactoryGirl.create(:admin)

				sign_in admin
				get :new

				expect(response).to render_template :new
			end
		end

		context "admin isn't logged in" do
			it "doesn't display the new template" do
				get :new

				expect(response).to redirect_to root_path
			end
		end
	end

	describe "POST #create" do
		context "admin is logged in" do
			context "attributes are valid" do
				it "creates a new student" do
					admin = FactoryGirl.create(:admin)

					sign_in admin

					expect {
						post :create, student: FactoryGirl.attributes_for(:student)
					}.to change(Student, :count).by(1)
				end
			end

			context "attributes are invalid" do
				it "doesn't create a new student" do
					admin = FactoryGirl.create(:admin)

					sign_in admin
					expect {
						post :create, student: FactoryGirl.attributes_for(:student, first_name: nil)
					}.to change(Student, :count).by(0)

					expect(response).to render_template :new
				end
			end
		end

		context "admin is not logged in" do
			it "redirects the user to root_path" do
				post :create, student: FactoryGirl.attributes_for(:student)

				expect(response).to redirect_to root_path
			end
		end
	end
end
