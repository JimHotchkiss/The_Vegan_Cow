namespace :db do
  desc 'Start Rails Server'
  task dcms: :environment do
    puts 'staring rails server ...'
    exec('rails s -p 3000')
  end
end
