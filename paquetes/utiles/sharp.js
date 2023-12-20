const sharp = require('sharp');

sharp('JavaScript.png')
.resize(80)
.grayscale()
.toFile('resized2.png')
