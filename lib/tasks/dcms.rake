namespace :db do
  desc 'Drop, Create, Migrage, Seed db, Start Server'
  task dcms: :environment do
    puts 'dropping db...'
    Rake::Task['db:drop'].invoke

    puts 'create db...'
    Rake::Task['db:create'].invoke

    puts 'running migration...'
    Rake::Task['db:migrate'].invoke

    puts 'seeding db...'
    Rake::Task['db:seed'].invoke
    
    puts 'staring rails server ...'
    exec('rails s -p 3000')
  end
end
