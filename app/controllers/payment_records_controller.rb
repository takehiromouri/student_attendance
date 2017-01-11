class PaymentRecordsController < ApplicationController
  before_action :authenticate_admin!

  def create
    @student = Student.find(params[:student_id])
    @payment_record = @student.payment_records.new(payment_record_params)

    respond_to do |format|
      if @payment_record.save        
        format.json { render json: payment_records_to_json.to_json }
      else
        format.json { render status: 500 }
      end
    end
  end

  def destroy
    @payment_record = PaymentRecord.find(params[:id])
    @student = @payment_record.student

    @payment_record.destroy

    flash[:success] = "月謝記録が削除されました。"
    redirect_to root_path
  end

  private

  def payment_records_to_json
    @student.payment_records.map do |payment_record|
      {
        id: payment_record.id,
        created_at_date: payment_record.created_at.strftime("%-m/%d/%Y"),
        created_at_time: payment_record.created_at.strftime("%l:%M %p"),
        created_at: payment_record.created_at.strftime("%m/%d/%Y %l:%M %p"),
      }
    end
  end

  def payment_record_params
    params.require(:payment_record).permit(:created_at)
  end
end
