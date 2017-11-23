# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string="World")
  "Hello #{string}!"
end

# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius)
  (Math::PI * radius * radius)
end

# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius)
  celcius * 1.8 + 32
end

# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number)
  number.to_s.reverse.to_f
end

# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check?('dad') => true, palindrome_check?('nonsense') => false
def palindrome_check?(string)
  delete_string = string.delete(" ")
  delete_string == delete_string.reverse
end

# write a function that returns the letters of a word or phrase in alphabetical order case insensive
# eg. order_string_alphabetically('ruby is cool') => 'bciloorsuy'
def order_string_alphabetically(string)
 string.downcase.chars.sort(&:casecmp).join.delete(" ")
end

# write a function to return the number of occurances of each letter of a string in an object case insensive
# eg. num_of_occurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
def num_of_occurances(string)
lower_case = string.downcase.delete(" ")
lower_case.chars.inject(Hash.new(0)){|hash, letter| hash[letter.to_sym] += 1; hash}
end

# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string)
 string.split.map(&:capitalize).join(" ")
end

# write a function that returns the number of vowels in a string case insensive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string)
  string.scan(/[AEIOUaeiou]/).count
end

# write a function to remove all empty values (nil, "", NaN, false) EXCEPT 0 from an array.
# It should handle complex data types eg: {}, [] etc.
# eg: [0, false, [], {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
def remove_blank(array)
  array - ["", false, nil]
end

# write a function to return a random element from an array
# eg: [1,"elephant", "apple", 67] => "elephant"
def random_element(array)
 array.sample
end

# write a function that returns the second lowest and second highest number in an array
# eg: [1,2,3,4,5,6,7,8] => [2,7]
def second_lowest_second_highest(array)
sorted = array.sort
second_highest = sorted[-2]
second_lowest = sorted[1];
answer = second_lowest, second_highest
answer
end

# write a function that will convert a price into coins needed to make up that price
# the coins available are 1, 2, 5, 10, 20, 50, 100
# the function should use the smallest number of coins possible
# eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
def coins(price)
pence = (price * 100).to_i
coins = [100, 50, 20, 10, 5, 2, 1]
result = []
  coins.each do |coin|
    while pence - coin >= 0
      pence -= coin
      result.push(coin)
    end
  end
  result
end

# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string)
  beam = "*" * (string.length + 4)
  "#{beam}\n* #{string} *\n#{beam}"
end

# write a function to merge two arrays and remove duplicates
# eg: merge_unique([9,8,8,9], [7,8,8,7]) => [9,8,7]
def merge_unique(arr1, arr2)
arr1 | arr2
end

# write a function that converts an array of strings into an array of hashes, with the supplied key
# eg: array_to_hashes(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
def array_to_hashes(array, key)
  array.map { |element| {key.to_sym => element} }

end

# write a function to convert an object into an array of arrays containing key and value
# eg: hash_to_array({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
def hash_to_array(object)
  object.to_a.map do |array|
    array[0] = array[0].to_s
    array
  end
  # object.map { |key,value| [key.to_sym, value]}
end

# write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
# it should not return negative numbers
# eg: days_between("2017-01-01", "2017-02-01") => 31; days_between("2017-02-01", "2017-01-01") => 31
def days_between(date1, date2)

end

# write a function which returns the number of seconds between two times (in the same day)
# times should be given as strings in the format "HH:MM:SS"
# it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
# throw an error if the time format is wrong
def seconds_between(time1, time2)

end

# write a function to find the first n fibonacci numbers
# the fibonacci sequence is a series of numbers, each number is the sum of the last two
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
# eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
def fibonacci(n)
  start = [0, 1]
if n == 1
  return [0]
else
  (n - 2).times do
    start.push(start[-1] + start[-2])
  end
end
start
end
