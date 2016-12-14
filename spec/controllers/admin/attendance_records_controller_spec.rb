require 'rails_helper'

RSpec.describe Admin::AttendanceRecordsController, type: :controller do
	describe "DELETE #destroy" do
		it "deletes the record" do
			student = FactoryGirl.create(:student)
			attendance_record = FactoryGirl.create(:attendance_record, student_id: student.id)
			admin = FactoryGirl.create(:admin)

			sign_in admin

			expect {
				delete :destroy, id: attendance_record.id	
			}.to change(AttendanceRecord, :count).by(-1)
		end
	end
end
