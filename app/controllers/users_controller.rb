class UsersController < ApplicationController

  def index
    @user = User.new
  end

  def new
    @user = User.new
  end

  def create
    name = params[:user][:name]
    email = params[:user][:email]
    password = params[:user][:password]
    @user = User.create(name: name, email: email, password: password)
    redirect_to user_path(id: @user.id)
  end

  def verify
    @user = User.where('email = ? AND password = ?', params[:user][:email], params[:user][:password])
    if @user != []
      redirect_to user_path(id: @user.first.id)
    else
      flash[:notice] = "Login Fail"
      redirect_to root_path, flash: { notice: "Login Fail"}
    end      
  end

  def show
    redirect_to user_ledgers_path(params[:id])
  end


end