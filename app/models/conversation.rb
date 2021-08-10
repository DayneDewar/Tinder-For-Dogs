class Conversation < ApplicationRecord
    has_many :messages, dependent: :destroy
    accepts_nested_attributes_for :messages, allow_destroy: true
    
    validates_presence_of :sender_id, :reciever_id
    validates_uniqueness_of :sender_id, scope: :reciever_id


    scope :between, -> (sender_id, reciever_id) do
        where("(sender_id = ? AND reciever_id = ?) OR (sender_id = ? AND reciever_id = ?)", sender_id, reciever_id, reciever_id, sender_id)
    end
end
