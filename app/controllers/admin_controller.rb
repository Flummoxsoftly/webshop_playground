class AdminController < ApplicationController
  def clean_db
    User.delete_all
    head :ok
  end
end
