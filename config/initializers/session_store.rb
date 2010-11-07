# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_SoundCloudMobile_session',
  :secret      => '1d4dbda3649d21b9c4a8c330f1965c9ddcb89a93955b10e55c211cb82ca0bcf76719bb689b3e096bef8779a09f134354bf56c192561682a209f73ebe51f68942'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
