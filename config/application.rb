require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module StudentAttendance
  class Application < Rails::Application
  	# set default to japanese
    config.i18n.default_locale = :ja

    config.active_record.time_zone_aware_types = [:datetime, :time]

    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local

    config.react.addons = true

    config.generators do |g|
		  g.helper false
		  g.assets false
		end
  end
end
