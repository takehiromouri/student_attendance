class StudentsController < ApplicationController
	def index
		if params[:student_number].try(:empty?)
			respond_to_empty("生徒番号")
		elsif params[:student_number]
			@student = Student.includes(:attendance_records)
												.find_by(student_number: params[:student_number])											  
											  .try(:decorate)

			respond_to_not_found(params[:student_number]) if @student.nil?
		else
			respond_to_empty("生徒番号")
		end
	end

	def search		
		if params[:query].try(:empty?)
			respond_to_empty("検索項目")
		elsif params[:query]
			@students = Student.search(params[:query]).try(:decorate)
			respond_to_not_found(params[:query]) if @students.empty?		
		else
			respond_to_empty("検索項目")
		end
	end

	private

	def respond_to_empty(param)
		respond_to do |format|
			format.json { render json: "#{param}を入力してください。", status: 500}
		end
	end

	def respond_to_not_found(params)
		respond_to do |format|
			format.json { render json: "#{params}は見つかりませんでした。", status: 500 }
		end
	end

	def query_is_number?
		params[:query].to_i.to_s == params[:query]
	end
end
