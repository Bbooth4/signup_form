class ScraperController < ApplicationController

  def show
    mechanize = Mechanize.new

    meetup = mechanize.get('https://www.meetup.com/NYC-Social/members/')
    $max = 2
    $counter = 0
    $link_to_click = 2

    @meetup_names = []
    @meetup_emails = []

    @about_names = []
    @about_emails = []

    while $counter <= $max do
      @meetup_names.push(meetup.css('.memName').text.strip)
      meetup.link_with(:text => '2').click
      # meetup.css('.nav-pageitem').text.strip.click
      $link_to_click += 1
      $counter += 1
    end

    # @meetup_names.push(meetup.css('.memName').text.strip)
    @meetup_emails.push(meetup.css('.user_email').text.strip)

    # uri = File.read("https://www.meetup.com/NYC-Social/members/")
 
    # # Use Nokogiri to get the document
    # doc = Nokogiri::HTML(uri)
    
    # # Find the link of interest
    # link = doc.search('.memName')
    
    # # Emit the content associated with that link
    # puts link.content

  end

end
