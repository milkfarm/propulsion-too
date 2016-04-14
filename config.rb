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

case ENV['TARGET'].to_s.downcase
when 'production'
  activate :deploy do |deploy|
    deploy.build_before = true
    deploy.deploy_method = :rsync
    deploy.user = data.config.deploy_user
    deploy.host = data.config.deploy_host
    deploy.path = data.config.deploy_path
    deploy.clean = true
    deploy.port = data.config.deploy_port
  end
else
  activate :deploy do |deploy|
    deploy.build_before = true
    deploy.deploy_method = :git
  end
end
