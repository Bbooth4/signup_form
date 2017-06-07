class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :full_name
      t.string :company_name
      t.string :company_size
      t.string :phone_number

      t.timestamps null: false
    end
  end
end
