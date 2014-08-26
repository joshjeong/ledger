class LedgersController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @ledgers = @user.ledgers
  end

  def new
    @ledger = Ledger.new
  end

  def create
    params.permit!
    @user = User.where('id = ?', params[:user_id])
    @user.first.ledgers.create(params[:ledger])
    redirect_to user_ledgers_path
  end

  def show
    user_id = params[:user_id]
    @ledger = Ledger.find(params[:id])
    @ledgers = Ledger.where('user_id = ? AND name = ?', user_id, @ledger.name)
  end

end
