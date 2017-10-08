require 'mysql2'
require 'pp'
require_relative './sql_runner'

class DonationMigration

  def self.query_database()
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
      WHERE
        posts.post_status = 'processing' AND
        (post_meta.meta_key = 'name' OR post_meta.meta_key = 'total' OR post_meta.meta_key = 'campaign')
      ORDER BY post_meta.post_id;")

    return postmeta_filtered.to_a
  end

  def self.match_key_value_pairs(array)
    return array.map do |row|
      key = row["meta_key"]
      value = row["meta_value"]

      row[key] = value

      row.delete("meta_key")
      row.delete("meta_value")
      row.delete("post_status")

      row
    end
  end

  def self.merge_values_by_id(array)

    current_id = 0
    current_user = nil
    users = []
    array.each do |row|
      if(current_id != row["post_id"])
        current_id = row["post_id"]
        users.push(current_user) if(current_user)
        current_user = {"post_id" => current_id}
      end
      key = row.keys[1]
      if(key == "total" || key == "Campaign")
        row[key] = row[key].to_i
      end
      current_user[key] = row[key]
    end

    return users

  end

  def self.run()

    postmeta_filtered = self.query_database()
    postmeta_filtered = self.match_key_value_pairs(postmeta_filtered)
    users = self.merge_values_by_id(postmeta_filtered)

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

# pp DonationMigration.run()
