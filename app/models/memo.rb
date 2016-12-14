class Memo < ApplicationRecord
  belongs_to :student

  validates :content, :student, presence: true
end
