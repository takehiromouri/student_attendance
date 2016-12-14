require 'rails_helper'

RSpec.describe Admin::MemosController, type: :controller do
	describe "POST #create" do
		context "attributes are valid" do
			it "creates a new memo" do
				admin = FactoryGirl.create(:admin)
				student = FactoryGirl.create(:student)

				sign_in admin

				expect {
					post :create, student_id: student.id, memo: FactoryGirl.attributes_for(:memo, student_id: student.id), format: :json
				}.to change(Memo, :count).by(1)
			end
		end

		context "attributes are invalid" do
			it "creates a new memo" do
				admin = FactoryGirl.create(:admin)
				student = FactoryGirl.create(:student)

				sign_in admin

				expect {
					post :create, student_id: student.id, memo: FactoryGirl.attributes_for(:memo, content: "", student_id: student.id), format: :json
				}.to change(Memo, :count).by(0)
			end
		end
	end

	describe "DELETE #destroy" do
		it "deletes the memo" do
			admin = FactoryGirl.create(:admin)
			student = FactoryGirl.create(:student)
			memo = FactoryGirl.create(:memo, student_id: student.id)

			sign_in admin
			expect {
				delete :destroy, id: memo.id, format: :json
			}.to change(Memo, :count).by(-1)
		end
	end

end
