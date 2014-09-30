module LedgersHelper
  def filter_result(attr_name)
    return attr_name != "user_id" && attr_name != "created_at" && attr_name != "updated_at" && attr_name != "id"
  end

  def get_date(purchase)
    day = purchase.created_at.day
    month = purchase.created_at.month
    year = purchase.created_at.year
    "#{month}/#{day}/#{year}"
  end

  def time_ago(created_at)
    sec = Time.now - created_at
    from_time = Time.now - sec
    return time_ago_in_words(from_time)
  end

  def calc_total
    sum = 0
    @ledgers.each do |purchase|
      sum += purchase.price
    end
    return sum
  end

  def expenditure_breakdown
    total = calc_total
    chart_hash = {}
    @ledgers.each do |purchase|
      chart_hash[purchase.expenditure] = (purchase.price/total)
    end
    return chart_hash.to_a
  end

  def payment_breakdown
    total = calc_total
    chart_hash = {}
    @ledgers.each do |purchase|
      chart_hash[purchase.payment_type] = (purchase.price/total)
    end
    return chart_hash.to_a
  end

end