require_relative './my_sql_client'
require 'pp'
require_relative './sql_runner'

class DonationMigration

  def self.run()
    postmeta_filtered = self.query_database()
    postmeta_filtered = self.match_key_value_pairs(postmeta_filtered)
    users = self.merge_values_by_id(postmeta_filtered)
    users = self.update_member_id(users)

    return users
  end

  def self.query_database()
    database = MySqlClient.new_local_access()

    postmeta_filtered = database.access_db do |client|
      return client.query(
        "SELECT post_meta.post_id, post_meta.meta_key, post_meta.meta_value, posts.post_status
        FROM wp_QsCYs3zex3pv_postmeta AS post_meta
        INNER JOIN wp_QsCYs3zex3pv_posts AS posts
        ON post_meta.post_id = posts.ID
        WHERE
          posts.post_status = 'processing' AND
          (post_meta.meta_key = 'total' OR post_meta.meta_key = 'campaign')
        ORDER BY post_meta.post_id;"
      )
    end

    return postmeta_filtered.to_a
  end

  def self.match_key_value_pairs(rows)
    return rows.map do |row|
      key = row["meta_key"]
      value = row["meta_value"]

      row[key] = value

      row.delete("meta_key")
      row.delete("meta_value")
      row.delete("post_status")

      row
    end
  end

  def self.merge_values_by_id(rows)

    current_id = 0
    current_user = nil
    users = []
    rows.each do |row|
      if(current_id != row["post_id"])
        current_id = row["post_id"]
        users.push(current_user) if(current_user)
        current_user = {"post_id" => current_id}
      end

      key = row.keys[1]
      if(key == "total")
        current_user["total"] = row["total"].to_i
      elsif(key == "Campaign")
        current_user["member_id"] = row["Campaign"].to_i
      end
    end

    return users

  end

  def self.update_member_id(users)
    legacies = SqlRunner.run("SELECT * FROM legacies;").to_a

    index = users.length - 1
    while index >= 0
      user = users[index]

      legacy = legacies.find do |legacy|
        legacy["legacy_sql_id"].to_i == user['member_id'].to_i
      end

      if(legacy)
        user["member_id"] = legacy["member_id"]
      else
        users.delete_at(index)
      end

      index -= 1
    end

    return users
  end

end
