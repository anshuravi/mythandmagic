// Get all the images
image_array = [
  'sword1.jpg',
  'sword2.jpg',
  'sword3.jpg',
  'sword4.jpg',
  'sword5.jpg',
  'sword6.jpg',
  'sword7.jpg',
  'sword8.jpg',
  'sword9.jpg',
  'sword10.jpg',
  'sword11.jpg',
  'sword12.jpg',
  'sword13.jpg',
  'sword14.jpg',
  'sword15.jpg',
  'sword16.jpg',
  'sword17.jpg',
  'sword18.jpg',
  'sword19.jpg',
  'sword20.jpg',
  'sword21.jpg',
  'sword22.jpg',
  'sword23.jpg',
  'sword24.jpg',
  'sword25.jpg',
]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./images/${selected_image}`
}
