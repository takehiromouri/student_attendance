require 'rails_helper'

RSpec.describe AttendanceRecordsController, type: :controller do
	describe "POST #create" do
		context "student number is found" do
			context "student has not attended today" do
				it "creates a new attendance record" do
					student = FactoryGirl.create(:student, student_number: "12345")

					expect {
						post :create, attendance_record: {student_number: "12345"}, format: :json
					}.to change(AttendanceRecord, :count).by(1)
				end
			end

			context "student has attended today" do
				it "does not create a new attendance record" do
					student = FactoryGirl.create(:student, student_number: "12345")
					FactoryGirl.create(:attendance_record, student_id: student.id)

					expect {
						post :create, attendance_record: {student_number: "12345"}, format: :json
					}.to change(AttendanceRecord, :count).by(0)
				end
			end
		end

		context "student number is not found" do
			it "does not create a new attendance record" do 
				student = FactoryGirl.create(:student, student_number: "12345")

				post :create, attendance_record: {student_number: "01234"}, format: :json
				
				expect(response.status).to eq 500
			end
		end
	end
end
