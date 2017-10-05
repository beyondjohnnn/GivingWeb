require 'mysql2'
require 'pp'
require_relative './sql_runner'


class CommentMigration

  def self.run()
    client = Mysql2::Client.new(
      host: 'localhost',
      username: 'root',
      database: 'streetchangedata',
    )


    comments = client.query("
    	select comment_ID, comment_post_ID, comment_author, comment_date, comment_content from wp_QsCYs3zex3pv_comments
    	WHERE comment_approved = '1';
    ")

    comment_donations = client.prepare("
    	select * from wp_QsCYs3zex3pv_posts
    	WHERE id = ?;
    ")

    comment_meta = client.prepare("
    	select * from wp_QsCYs3zex3pv_commentmeta
    	WHERE comment_id = ? and meta_key = 'status';
    ")

    comments.each do |comment|

    	metadata = comment_meta.execute(comment['comment_ID']).first
    	comment['donation_amount'] = metadata['meta_value'] if (metadata)


    	# pp comment
    end
    return comments
  end

end
