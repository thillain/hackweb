task :default => :csslint

task :csslint do
	recent=Dir['**/*.css'].max_by {|f| File.mtime(f)}
	system("csslint-0.6 #{recent}") 
end
