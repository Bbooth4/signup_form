class ScraperController < ApplicationController

  def show
    mechanize = Mechanize.new

    meetup = mechanize.get('https://www.meetup.com/NYC-Social/members/')
    $max = 10
    $counter = 0

    @names = []

    while $counter <= $max do
      @names.push(meetup.at('.memName').text.strip)
      $counter += 1
    end

    # uri = File.read("https://www.meetup.com/NYC-Social/members/")
 
    # # Use Nokogiri to get the document
    # doc = Nokogiri::HTML(uri)
    
    # # Find the link of interest
    # link = doc.search('.memName')
    
    # # Emit the content associated with that link
    # puts link.content

  end

end
