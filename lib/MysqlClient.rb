require 'mysql2'

class MsqlClient

  def initialize(options)
    @client = Mysql2::Client.new(options)
  end

  def query()

  end

end
