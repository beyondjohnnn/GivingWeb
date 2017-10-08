require_relative './my_sql_client'
require 'pp'

class MemberMigration
  # this takes a hash of options, almost all of which map directly
  # to the familiar database.yml in rails
  # See http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/Mysql2Adapter.html

  def self.extract_members_from_posts()

    database = MySqlClient.new_local_client()

    # this query takes in a member id from posts table to get related meta_data
    metaposts = database.access_db do |client|
      client.prepare("select * from wp_QsCYs3zex3pv_postmeta where post_id = ?;")
    end


    # this query grabs all the members from posts table
    posts = database.access_db do |client|
      client.query("
    	SELECT ID, post_title, post_content, comment_count, post_date, post_excerpt
    	FROM wp_QsCYs3zex3pv_posts
      WHERE EXISTS (SELECT * FROM wp_QsCYs3zex3pv_postmeta WHERE wp_QsCYs3zex3pv_posts.ID = wp_QsCYs3zex3pv_postmeta.post_id)
      and wp_QsCYs3zex3pv_posts.post_type = 'campaign'
      and	post_status = 'publish';")
    end

  	# create empty array to hold new data
  	data = []

  	# loop through all the posts from filtered query
  	posts.each do |row|

  		# make a new query to get related meta_posts using id of current row
  		metadata = metaposts.execute(row['ID'])

  		# loop through metadata and extract key-value pair which we attach to current row
  		metadata.each do |metarow|
  			if (!(/^_/.match(metarow['meta_key']))) then
  				row[metarow['meta_key']] = metarow['meta_value']
  			end
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

      hash = {
        legacy_sql_id: member['ID'],
        member_data: {
          name: member['post_title'],
          info: member['post_content'],
          post_date: member['post_date'],
          snippet: member['post_excerpt'],
          location: member['location'],
          goal: member['goal'],
          title: member['title'],
          meta_description: member['meta_description']
        }
      }

      hashes.push(hash)
    end
    return hashes
  end
end
