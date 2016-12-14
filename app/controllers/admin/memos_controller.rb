class Admin::MemosController < ApplicationController
	before_action :ensure_admin

	def index
		student = Student.find(params[:student_id])
		@memos = Admin::MemoDecorator.decorate_collection(student.memos)

		respond_to do |format|
			format.json { render json: @memos }
		end
	end

	def create
		student = Student.find(params[:student_id])

		memo = student.memos.new(memo_params)

		if memo.save
			respond_to do |format|
				format.json { render json: Admin::MemoDecorator.decorate(memo) }
			end
		else
			respond_to do |format|
				format.json { render json: memo.errors.full_messages[0], status: 500 }
			end
		end
	end

	def destroy
		memo = Memo.find(params[:id])
		memo.destroy

		respond_to do |format|
			format.json { render json: :no_head }
		end
	end

	private

	def memo_params
		params.require(:memo).permit(:content, :student_id)
	end
end
