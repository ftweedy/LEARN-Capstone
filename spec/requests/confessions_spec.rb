require 'rails_helper'

describe "Confessions API" do
  it "gets a list of Confessions" do
    u = User.create(email: "test@gmail.com", password: "helloooo")
    # puts u.errors.full_messages
    # puts u.valid?

    c = Confession.create(user_id: u.id, name: 'Felix', gif_url: "pretty gif")
    # puts c.errors.full_messages
    # puts c.valid?

    # Make a request to the API
    get '/confessions'

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to be_success

    # Assure that we got one result back as expected
    expect(json.length).to eq 1
  end

  it "destroys a confession" do
    u = User.create(email: "test@gmail.com", password: "helloooo")
    c = Confession.create(user_id: u.id, name: 'Felix', gif_url: "pretty gif")
    delete "/confessions/#{c.id}"

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to be_success

    # Assure that we got no result back as expected
    expect(json.length).to eq 0
  end

  it "create a confession" do
    u = User.create(email: "test@gmail.com", password: "helloooo")
    confession_params  = {
      confession: {
        name: "Felix",
        gif_url: "best gif"
      }
    }

    post "/confessions", params: confession_params

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to be_success

    # Assure that we got no result back as expected
    expect(json.length).to eq 1
  end
end
