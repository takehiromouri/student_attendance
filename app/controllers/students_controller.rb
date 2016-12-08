class StudentsController < ApplicationController
	def index
		if params[:student_number]
			@student = Student.includes(:attendance_records)
												.find_by(student_number: params[:student_number])											  
											  .try(:decorate)

			respond_to_empty(params[:student_number]) if @student.nil?
			
		end
	end

	def search		
		return unless params[:query]

		# @students = Student.includes(:attendance_records)
		# 									 .where(student_number: params[:query])
		# 									 .where("first_name like ?", "%#{params[:query]}")
		# 									 .or
		# 									 .where("last_name like ?", "%#{params[:query]}")
		# 									 .or
		# 									 .where("first_name_hiragana like ?", "%#{params[:query]}")
		# 									 .or
		# 									 .where("last_name_hiragana like ?", "%#{params[:query]}")
		# 									 .try(:decorate)

		@students = Student.where("first_name like ? or last_name like ? or first_name_hiragana like ? or last_name_hiragana like ? or student_number like ?", params[:query], params[:query], params[:query], params[:query], params[:query]).try(:decorate)

		respond_to_empty(params[:query]) if @students.empty?			
		
	end

	private

	def respond_to_empty(params)
		respond_to do |format|
			format.json { render json: "#{params}は見つかりませんでした。", status: 500 }
		end
	end

	def query_is_number?
		params[:query].to_i.to_s == params[:query]
	end
end
