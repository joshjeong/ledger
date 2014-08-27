class LedgersController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
    @user = User.find(params[:user_id])
    @ledgers = @user.ledgers
    @ledger = Ledger.new
  end


  def create
    params.permit!
    @user = User.where('id = ?', params[:user_id])
    @user.first.ledgers.create(params[:ledger])
  end

  def show
    user_id = params[:user_id]
    @ledger = Ledger.find(params[:id])
    @ledgers = Ledger.where('user_id = ? AND name = ?', user_id, @ledger.name)
  end

  def add_item
    params.permit!
    @user = User.where('id = ?', params[:user_id])
    @ledger = @user.first.ledgers.create(params[:ledger])
    render :new
  end

end
