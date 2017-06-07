class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update, :destroy]

  autocomplete :user, :email

  # it used to auto complete, don't know what happened but I ran out of time to figure it out

  def load_suggestions
    @suggestions = MyModel.select(:email)
    render json: @suggestions
  end

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    @user = User.find(session[:id])
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @users = User.all
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    if @user.save
      session[:id] = @user.id
      redirect_to :users
    else
      redirect_to '/signup'
    end
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :full_name, :company_name, :company_size, :phone_number)
    end
end
