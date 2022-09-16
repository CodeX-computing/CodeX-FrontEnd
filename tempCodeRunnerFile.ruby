def max_area(height)
    # height is the number of vertical lines
    # the area is the n of lines between the outer lines x the smallest heigth of the outer lines
    
    finish = height[-1]
    start = 0
    start_index = 0
    n_of_lines = 0
    
    height.each_with_index do
        |line, index|
        if line > start
            start = line
            start_index = index
            puts start_index
        end
    end
    
    while start_index < height.length - 1
        n_of_lines += 1
        start_index += 1
    end
    
    return finish * n_of_lines
end

a = [1,8,6,2,5,4,8,3,7]
puts max_area(a)