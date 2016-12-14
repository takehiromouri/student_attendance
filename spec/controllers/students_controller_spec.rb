require 'rails_helper'

RSpec.describe StudentsController, type: :controller do
	describe "GET #index" do
		context "student number is provided" do
			context "student is found" do
				it "returns the student in json format" do
					student = FactoryGirl.create(:student, student_number: "012345")

					get :index, student_number: "012345", format: :json

					expect(assigns(:student)).to eq(student.decorate)
				end
			end

			context "student is not found" do
				it "returns 500" do
					get :index, student_number: "012345", format: :json

					expect(response.body).to eq("012345は見つかりませんでした。")
					expect(response.status).to eq(500)
				end
			end
		end

		context "student_number is not provided" do
			it "returns 500" do
				get :index, student_number: "", format: :json

				expect(response.body).to eq("生徒番号を入力してください。")
				expect(response.status).to eq(500)
			end
		end

	end

	describe "GET #search" do
		context "query param is provided" do
			context "student is found" do
				it "returns a student" do
					student = FactoryGirl.create(:student, student_number: "012345")

					get :search, query: "012345", format: :json

					expect(assigns(:students)).to eq([student])
				end
			end

			context "student is not found" do
				it "returns 500" do
					get :search, query: "012345", format: :json

					expect(response.body).to eq("012345は見つかりませんでした。")
					expect(response.status).to eq(500)	
				end
			end
		end

		context "query param is not provided" do
			it "returns 500" do
				get :search, query: "", format: :json

				expect(response.body).to eq("検索項目を入力してください。")
				expect(response.status).to eq(500)
			end
		end

	end	
end
