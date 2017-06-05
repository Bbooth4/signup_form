class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :title
      t.string :company
      t.integer :company_size

      t.timestamps null: false
    end
  end
end
