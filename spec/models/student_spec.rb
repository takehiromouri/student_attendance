require 'rails_helper'

RSpec.describe Student, type: :model do
	describe "#unattended_for" do
		context "1 week" do
			it "returns students that have no attended for atleast a week but less than 2 weeks" do
				student_1 = FactoryGirl.create(:student) 
				student_2 = FactoryGirl.create(:student)
				FactoryGirl.build(:attendance_record, student_id: student_1.id, created_at: 9.days.ago).save
				FactoryGirl.build(:attendance_record, student_id: student_2.id).save
				FactoryGirl.build(:attendance_record, student_id: student_2.id, created_at: 9.days.ago).save

				expect(Student.unattended_for(weeks: 1)).to eq([student_1])
			end
		end

		context "2 weeks" do
			it "returns students that have no attended for atleast 2 weeks but less than 3 weeks" do
				student_1 = FactoryGirl.create(:student) 
				student_2 = FactoryGirl.create(:student)
				student_3 = FactoryGirl.create(:student)
				FactoryGirl.build(:attendance_record, student_id: student_1.id, created_at: 15.days.ago).save
				FactoryGirl.build(:attendance_record, student_id: student_2.id, created_at: 22.days.ago).save
				FactoryGirl.build(:attendance_record, student_id: student_2.id).save
				FactoryGirl.build(:attendance_record, student_id: student_3.id, created_at: 22.days.ago).save

				expect(Student.unattended_for(weeks: 2)).to eq([student_1])
			end
		end

		context "3 weeks" do
			it "returns students that have no attended for atleast 3 weeks but less than 4 weeks" do
				student_1 = FactoryGirl.create(:student) 
				student_2 = FactoryGirl.create(:student)
				student_3 = FactoryGirl.create(:student)
				FactoryGirl.build(:attendance_record, student_id: student_1.id, created_at: 22.days.ago).save
				FactoryGirl.build(:attendance_record, student_id: student_2.id).save
				FactoryGirl.build(:attendance_record, student_id: student_2.id, created_at: 22.days.ago).save
				FactoryGirl.build(:attendance_record, student_id: student_3.id, created_at: 33.days.ago)				.save

				expect(Student.unattended_for(weeks: 3)).to eq([student_1])
			end
		end

		context "4 weeks" do
			it "returns students that have no attended for atleast 4 weeks" do
				student_1 = FactoryGirl.create(:student) 
				student_2 = FactoryGirl.create(:student)
				student_3 = FactoryGirl.create(:student)
				FactoryGirl.build(:attendance_record, student_id: student_1.id, created_at: 60.days.ago).save
				FactoryGirl.build(:attendance_record, student_id: student_2.id, created_at: 29.days.ago).save
				FactoryGirl.build(:attendance_record, student_id: student_3.id).save
				FactoryGirl.build(:attendance_record, student_id: student_3.id, created_at: 60.days.ago).save

				expect(Student.unattended_for(weeks: 4)).to eq([student_1])
			end
		end
	end

end
