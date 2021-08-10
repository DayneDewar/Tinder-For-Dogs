class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.belongs_to :conversation, null: false, foreign_key: true
      t.belongs_to :account, null: false, foreign_key: true
      t.text :body
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
