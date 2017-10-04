require 'mysql2'
require 'pp'
require_relative './sql_runner'


class DonationMigration

  def self.run()
    client = Mysql2::Client.new(
      host: 'localhost',
      username: 'root',
      database: 'streetchangedata',
    )

    postmeta_filtered = client.query(
      "SELECT post_meta.post_id, post_meta.meta_key, post_meta.meta_value, posts.post_status
      FROM wp_QsCYs3zex3pv_postmeta AS post_meta
      INNER JOIN wp_QsCYs3zex3pv_posts AS posts
      ON post_meta.post_id = posts.ID
      WHERE post_meta.meta_key = 'name' OR post_meta.meta_key = 'total' OR post_meta.meta_key = 'campaign'
      ORDER BY post_meta.post_id;")

    postmeta_filtered = postmeta_filtered.find_all do |row|
      row["post_status"] == "processing"
    end

    postmeta_filtered = postmeta_filtered.to_a

    # all perfect to this point

    index = 0
    output = []

    temp = []
    postmeta_filtered.each do |row|
      key = row["meta_key"]
      value = row["meta_value"]

      row[key] = value

      row.delete("meta_key")
      row.delete("meta_value")
      row.delete("post_status")

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
      row[key] = row[key].to_i if(key == "total")
      row[key] = row[key].to_i if(key == "Campaign")
      current_user[key] = row[key]
    end

    users.delete_at(0)

    legacies = SqlRunner.run("SELECT * FROM legacies;")

    users.each do |user|
      # puts user
      legacies.each do |legacy|
         if user['Campaign'] == legacy["legacy_sql_id"].to_i
           user['member_id'] = legacy["member_id"].to_i
           user.delete('Campaign')
          #  pp user
         end
       end
    end

    users = users.find_all do |user|
      !user.has_key?("Campaign")
    end

    return users
  end

end
