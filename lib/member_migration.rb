require_relative './my_sql_client'
require 'pp'

class MemberMigration
  # this takes a hash of options, almost all of which map directly
  # to the familiar database.yml in rails
  # See http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Mysql2Adapter.html

  def self.extract_members_from_posts()

    database = MySqlClient.new_local_access()

    # this query takes in a member id from posts table to get related meta_data
    metaposts = database.access_db do |client|
      client.prepare(
        "SELECT * FROM wp_QsCYs3zex3pv_postmeta WHERE post_id = ?
        AND (
          meta_key = 'goal' OR meta_key = 'title' OR
          meta_key = 'meta_description' OR meta_key = 'location'
        );"
      )
    end

    # this query grabs all the members from posts table
    posts = database.access_db do |client|
      client.query(
        "SELECT ID, post_title AS name, post_content AS info,
        post_date, post_excerpt AS snippet
    	  FROM wp_QsCYs3zex3pv_posts WHERE post_type = 'campaign' AND	post_status = 'publish';")
    end

  	# create empty array to hold new data
  	data = []

  	# loop through all the posts from filtered query
  	posts.each do |row|

  		# make a new query to get related meta_posts using id of current row
  		metadata = metaposts.execute(row['ID'])

  		# loop through metadata and extract key-value pair which we attach to current row
  		metadata.each do |metarow|
  			row[metarow['meta_key']] = metarow['meta_value']
  		end

  		# push current row with attached meta_data into data array
  		data.push(row)
  	end

  	# return the formatted data
  	return data
  end

  def self.build_member_hashes

    memberdata = extract_members_from_posts()

    hashes = []

    memberdata.each do |member|
      member_id = member['ID']
      member.delete("ID")
      hash = {
        legacy_sql_id: member_id,
        member_data: member
      }
      hashes.push(hash)
    end
    return hashes
  end
end
