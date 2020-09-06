source "https://rubygems.org"

gem "jekyll", "~> 4.0.0"
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# windows stuff
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

