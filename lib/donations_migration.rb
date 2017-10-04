require 'mysql2'
require 'pp'
require_relative './sql_runner'

client = Mysql2::Client.new(
    host: 'localhost',
    username: 'root',
    database: 'streetchangedata',
)

class donation_migration

  def self.run()
    postmeta_filtered = client.query("SELECT post_id, meta_key, meta_value FROM wp_QsCYs3zex3pv_postmeta WHERE meta_key = 'name' OR meta_key = 'total' OR meta_key = 'campaign' ORDER BY post_id;")
    postmeta_filtered = postmeta_filtered.to_a

    index = 0
    output = []

    temp = []
    postmeta_filtered.each do |row|
      key = row["meta_key"]
      value = row["meta_value"]

      row[key] = value

      row.delete("meta_key")
      row.delete("meta_value")

      temp.push(row)
    end

    current_id = 0;
    current_user = {}
    users = []
    temp.each do |row|
      if(current_id != row["post_id"])
        current_id = row["post_id"]
        users.push(current_user)
        current_user = {}
        current_user["post_id"] = current_id
      end
      key = row.keys[1]
      row[key] = row[key].to_i if(key == "total" || key == "Campaign")
      current_user[key] = row[key]
    end

    legacies = SqlRunner.run("SELECT * FROM legacies;")

    users.each do |user|
      # puts user
      legacies.each do |legacy|
         if user['Campaign'] == legacy["legacy_sql_id"].to_i
           user['member_id'] = legacy["member_id"].to_i
           user.delete('Campaign')
           pp user
         end
       end
    end

    return users
  end
  
end
