class LedgersController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
    @user = User.find(params[:user_id])
    @ledgers = @user.ledgers
    @ledger = Ledger.new
  end


  def create
    @user = User.where('id = ?', params[:user_id])
    @ledger = @user.first.ledgers.create(ledger_params)
    render :new
  end

  def show
    user_id = params[:user_id]
    @ledger = Ledger.find(params[:id])
    @ledgers = Ledger.where('user_id = ? AND name = ?', user_id, @ledger.name)
  end

  def destroy
    user = User.find(params[:user_id])
    user.ledgers.find(params[:id]).destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def edit
    @user = User.find(params[:user_id])
    @ledger = @user.ledgers.find(params[:id])
    render partial:"edit"
  end

  def update
    # @ledgers = Ledgers.all
    @user = User.find(params[:user_id])
    @ledger = @user.ledgers.find(params[:id])

    @ledger.update_attributes(ledger_params)
    render :new
  end

private
  def ledger_params
    params.require(:ledger).permit(:user, :item, :price, :note, :payment_type, :expenditure)
  end

end
