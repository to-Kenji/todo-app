10.times do |n|
  task = Task.new(title: "testTask_#{n}")

  task.save!
end