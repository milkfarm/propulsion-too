activate :directory_indexes
activate :autoprefixer

set :relative_links, true
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
set :layout, "layouts/application"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload
end

configure :build do
  activate :relative_assets
end

# Load deploy settings
config_file_name = 'data/deploy.yml'
config_file_path = File.join(::Middleman::Application.root, config_file_name)
unless File.exists?(config_file_path)
  raise "Deployment file not found '#{config_file_name}'"
end
io = File.open(config_file_path, 'r')
yml = YAML.load(io)
env = ENV['TARGET'].present? ? ENV['TARGET'].to_s.downcase : 'staging'
unless yml.keys.include?(env)
  raise "Deployment environment not defined '#{env}'"
end
settings = yml[env].symbolize_keys

activate :deploy do |deploy|
  settings.each { |k,v| deploy.send("#{k}=", v) }
end
