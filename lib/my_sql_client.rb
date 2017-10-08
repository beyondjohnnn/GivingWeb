require 'mysql2'

class MySqlClient

  def initialize(options)
    @client = Mysql2::Client.new(options)
  end

  def self.new_local_client()
    return MySqlClient.new(
      host: 'localhost',
      username: 'root',
      database: 'streetchangedata'
    )
  end

  def access_db(&block)
    return block.call(@client)
  end

end
