class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.belongs_to :sender, null: false, references: :accounts
      t.belongs_to :reciever, null: false, references: :accounts

      t.timestamps
    end
  end
end
