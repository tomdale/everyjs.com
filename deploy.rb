require 'fileutils'
include FileUtils

rm_rf "output"
mkdir_p "output"

puts pwd

Dir['*'].each do |item|
  puts "Copying #{item}"
  cp_r(item, "output") unless item == "output"
end

uglified = nil
IO.popen("uglifyjs output/js/app.js", "r") do |io|
  uglified = io.read
end

rm "output/js/app.js"

File.open("output/js/app.js", "w") do |file|
  file.write uglified
end

mkdir_p "output/.strobe"
File.open("output/.strobe/config", "w") do |file|
  file.write <<eos
---
STROBE_APPLICATION_ID: 243
eos
end

cd "output" do
  `strobe deploy --yes`
end
