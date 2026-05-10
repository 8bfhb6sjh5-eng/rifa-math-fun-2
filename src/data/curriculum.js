export const TOPICS = [
  {
    id: 'place-value',
    title: 'Numbers & Place Value',
    emoji: '🔢',
    color: '#FF6B9D',
    colorPale: '#FFF0F6',
    description: 'Count, read and write numbers to 100!',
    subtopics: ['Count to 100', 'Tens and Ones', 'Compare Numbers', 'Order Numbers'],
    keyFacts: [
      'Numbers to 100 are made of TENS and ONES',
      '47 = 4 tens + 7 ones',
      'The biggest 2-digit number is 99',
      'Ten lots of ten make ONE HUNDRED (100)!'
    ],
    visual: '🌷🌷🌷🌷🌷🌷🌷🌷🌷🌷',
    quiz: [
      { q: 'How many tens are in 63?', options: ['3', '6', '9', '63'], answer: 1, explanation: '63 = 6 tens and 3 ones, so there are 6 tens!' },
      { q: 'Which number is bigger: 45 or 54?', options: ['45', '54', 'They are the same', "I don't know"], answer: 1, explanation: '54 has 5 tens, but 45 only has 4 tens. So 54 is bigger!' },
      { q: 'What is 30 + 7?', options: ['10', '37', '73', '307'], answer: 1, explanation: '30 is 3 tens, and we add 7 ones. So 30 + 7 = 37!' },
      { q: 'Which number comes after 79?', options: ['78', '70', '80', '90'], answer: 2, explanation: '79, then 80! After 79 ones, we get 8 tens = 80.' },
      { q: 'How many ones are in 85?', options: ['8', '5', '85', '13'], answer: 1, explanation: '85 = 8 tens + 5 ones. So there are 5 ones!' },
      { q: 'What is the value of the 4 in 42?', options: ['4', '2', '40', '20'], answer: 2, explanation: 'In 42, the 4 is in the tens place, so it is worth 40!' },
    ],
    flashcards: [
      { front: 'How many tens in 70?', back: '7 tens! 🌟\n70 = 7 × 10' },
      { front: 'What is 5 tens + 3 ones?', back: '53! ✨\n50 + 3 = 53' },
      { front: 'Is 67 bigger or smaller than 76?', back: 'SMALLER! 🐣\n67 < 76\n(6 tens vs 7 tens)' },
      { front: 'Count in 10s from 30 to 70', back: '30, 40, 50, 60, 70! 🌈' },
      { front: 'What number has 9 tens and 2 ones?', back: '92! 💫' },
      { front: 'Write 48 in tens and ones', back: '4 tens + 8 ones ⭐\n= 40 + 8' },
    ]
  },
  {
    id: 'addition',
    title: 'Addition',
    emoji: '➕',
    color: '#F97316',
    colorPale: '#FFF7ED',
    description: 'Add numbers up to 100 using brilliant strategies!',
    subtopics: ['Add 1-digit numbers', 'Add multiples of 10', 'Add 2-digit numbers', 'Number bonds to 20'],
    keyFacts: [
      'Number bonds to 10: pairs that make 10 (6+4, 7+3, 8+2...)',
      'Number bonds to 20: pairs that make 20',
      'Adding in any order gives same answer! (5+3 = 3+5)',
      'Count on from the bigger number for quick adding'
    ],
    visual: '🍎',
    quiz: [
      { q: '35 + 20 = ?', options: ['55', '37', '355', '15'], answer: 0, explanation: '35 + 20: just add 2 tens to 35, so 35 → 45 → 55!' },
      { q: 'Which pair makes 20?', options: ['9 + 9', '12 + 7', '13 + 7', '11 + 11'], answer: 2, explanation: '13 + 7 = 20! Check: 10 + 7 = 17, then 3 more = 20 ✓' },
      { q: '46 + 3 = ?', options: ['43', '49', '76', '406'], answer: 1, explanation: 'Count on 3 from 46: 47, 48, 49!' },
      { q: '24 + 35 = ?', options: ['59', '69', '50', '611'], answer: 0, explanation: 'Tens: 20+30=50. Ones: 4+5=9. Together: 59!' },
      { q: 'What is the missing number? 8 + ___ = 15', options: ['5', '6', '7', '8'], answer: 2, explanation: '8 + 7 = 15! Count on from 8: 9,10,11,12,13,14,15 (7 jumps)' },
      { q: '54 + 10 = ?', options: ['44', '55', '64', '154'], answer: 2, explanation: 'Adding 10 just changes the tens digit: 54 → 64!' },
    ],
    flashcards: [
      { front: '7 + 8 = ?', back: '15! 🍎🍎\nTip: 7+8 = 7+7+1 = 14+1 = 15' },
      { front: 'Number bonds to 10 starting with 6', back: '6 + 4 = 10 ⭐' },
      { front: '33 + 40 = ?', back: '73! 🌈\n30+40=70, then +3 = 73' },
      { front: 'Double 9', back: '18! 💫\n9 + 9 = 18' },
      { front: '19 + 5 = ?', back: '24! ✨\n19+1=20, then +4=24' },
      { front: 'What makes 20 with 14?', back: '6! 🌟\n14 + 6 = 20' },
    ]
  },
  {
    id: 'subtraction',
    title: 'Subtraction',
    emoji: '➖',
    color: '#8B5CF6',
    colorPale: '#F5F3FF',
    description: 'Take away and find the difference!',
    subtopics: ['Subtract 1-digit numbers', 'Subtract multiples of 10', 'Subtract 2-digit numbers', 'Find the difference'],
    keyFacts: [
      'Subtraction is the opposite of addition',
      'Count back to subtract small numbers',
      'Find the difference by counting up',
      'You can check subtraction with addition!'
    ],
    visual: '🌙',
    quiz: [
      { q: '57 - 20 = ?', options: ['77', '37', '57', '27'], answer: 1, explanation: '57 - 20: remove 2 tens from 57, so 57 → 47 → 37!' },
      { q: '15 - 8 = ?', options: ['5', '6', '7', '23'], answer: 2, explanation: '15 - 8 = 7. Check: 8 + 7 = 15 ✓' },
      { q: '83 - 3 = ?', options: ['86', '80', '78', '803'], answer: 1, explanation: 'Taking 3 ones from 83 leaves 80!' },
      { q: 'What is the difference between 30 and 18?', options: ['48', '12', '22', '18'], answer: 1, explanation: 'Count up from 18 to 30: 18→20 (2) → 30 (10) = 12!' },
      { q: '75 - 40 = ?', options: ['115', '45', '35', '70'], answer: 2, explanation: '75 - 40: remove 4 tens. 70-40=30, keep the 5: = 35!' },
      { q: '42 - ___ = 35', options: ['5', '6', '7', '8'], answer: 2, explanation: '42 - 7 = 35. Count back 7 from 42: 41,40,39,38,37,36,35!' },
    ],
    flashcards: [
      { front: '20 - 6 = ?', back: '14! 🌙\nCount back: 20→19→18...→14' },
      { front: '100 - 1 = ?', back: '99! ⭐\nOne less than 100!' },
      { front: '50 - 30 = ?', back: '20! 🌈\n5 tens - 3 tens = 2 tens' },
      { front: 'Difference between 17 and 25', back: '8! 💫\n17+8=25, so difference=8' },
      { front: '67 - 7 = ?', back: '60! ✨\nTake away all the ones!' },
      { front: '34 - 20 = ?', back: '14! 🌟\nRemove 2 tens: 34→24→14' },
    ]
  },
  {
    id: 'multiplication',
    title: 'Multiplication',
    emoji: '✖️',
    color: '#EC4899',
    colorPale: '#FDF2F8',
    description: 'Learn times tables and equal groups!',
    subtopics: ['2 times table', '5 times table', '10 times table', 'Equal groups', 'Arrays'],
    keyFacts: [
      'Multiplication is repeated addition (3×4 = 4+4+4)',
      '2 times table: always even numbers!',
      '5 times table: ends in 0 or 5!',
      '10 times table: just add a zero!'
    ],
    visual: '🦋',
    quiz: [
      { q: '3 × 2 = ?', options: ['5', '6', '7', '8'], answer: 1, explanation: '3 × 2 = 2+2+2 = 6! Three groups of 2.' },
      { q: '5 × 5 = ?', options: ['10', '20', '25', '55'], answer: 2, explanation: '5 × 5 = 25. The 5 times table: 5,10,15,20,25!' },
      { q: '4 × 10 = ?', options: ['14', '40', '400', '104'], answer: 1, explanation: '4 × 10 = 40. Adding a zero to 4!' },
      { q: 'Which equals 2 × 6?', options: ['26', '8', '12', '16'], answer: 2, explanation: '2 × 6 = 6 + 6 = 12! Two groups of 6.' },
      { q: '7 × 2 = ?', options: ['9', '12', '14', '72'], answer: 2, explanation: '7 × 2 = 14. Count in 2s: 2,4,6,8,10,12,14!' },
      { q: '3 × 5 = ?', options: ['8', '15', '53', '30'], answer: 1, explanation: '3 × 5 = 5+5+5 = 15. Three groups of 5!' },
    ],
    flashcards: [
      { front: '2 × 8 = ?', back: '16! 🦋\n2+2+2+2+2+2+2+2 = 16' },
      { front: '5 × 4 = ?', back: '20! ⭐\n5+5+5+5 = 20' },
      { front: '10 × 6 = ?', back: '60! 🌈\nJust add a zero to 6!' },
      { front: '2 × 9 = ?', back: '18! 💫\nDouble 9 = 18' },
      { front: '5 × 8 = ?', back: '40! ✨\nCount: 5,10,15,20,25,30,35,40' },
      { front: '10 × 9 = ?', back: '90! 🌟\nNine tens = 90' },
    ]
  },
  {
    id: 'division',
    title: 'Division',
    emoji: '➗',
    color: '#14B8A6',
    colorPale: '#F0FDFA',
    description: 'Share equally and make groups!',
    subtopics: ['Sharing equally', 'Grouping', 'Divide by 2', 'Divide by 5 and 10'],
    keyFacts: [
      'Division means sharing equally',
      'Division is the opposite of multiplication',
      '10 ÷ 2 = 5 means share 10 into 2 equal groups',
      'Check with multiplication: 5×2=10 ✓'
    ],
    visual: '🍕',
    quiz: [
      { q: '10 ÷ 2 = ?', options: ['3', '5', '8', '12'], answer: 1, explanation: 'Share 10 into 2 equal groups: 5 in each group!' },
      { q: '20 ÷ 5 = ?', options: ['4', '15', '25', '100'], answer: 0, explanation: '20 ÷ 5 = 4. How many 5s in 20? Count: 5,10,15,20 - that\'s 4!' },
      { q: '30 ÷ 10 = ?', options: ['20', '40', '3', '300'], answer: 2, explanation: '30 ÷ 10 = 3. How many 10s in 30? Three 10s!' },
      { q: '12 ÷ 2 = ?', options: ['6', '10', '14', '24'], answer: 0, explanation: '12 ÷ 2 = 6. Share 12 into 2 groups: 6 in each!' },
      { q: '15 ÷ 5 = ?', options: ['75', '10', '3', '20'], answer: 2, explanation: '15 ÷ 5 = 3. Three groups of 5 make 15!' },
      { q: '40 ÷ 10 = ?', options: ['30', '50', '4', '400'], answer: 2, explanation: '40 ÷ 10 = 4. Four lots of 10 make 40!' },
    ],
    flashcards: [
      { front: '16 ÷ 2 = ?', back: '8! 🍕\nShare 16 equally: 8 each' },
      { front: '25 ÷ 5 = ?', back: '5! ⭐\n5 groups of 5 = 25' },
      { front: '50 ÷ 10 = ?', back: '5! 🌈\n5 tens = 50' },
      { front: '6 ÷ 2 = ?', back: '3! 💫\nHalf of 6 = 3' },
      { front: '35 ÷ 5 = ?', back: '7! ✨\nCount 5s: 5,10,15,20,25,30,35 (7!)' },
      { front: '20 ÷ 2 = ?', back: '10! 🌟\nHalf of 20 = 10' },
    ]
  },
  {
    id: 'fractions',
    title: 'Fractions',
    emoji: '🍰',
    color: '#F59E0B',
    colorPale: '#FFFBEB',
    description: 'Find halves, quarters and thirds!',
    subtopics: ['Half (1/2)', 'Quarter (1/4)', 'Third (1/3)', 'Three quarters (3/4)', 'Fractions of amounts'],
    keyFacts: [
      '1/2 = one half = split into 2 equal parts',
      '1/4 = one quarter = split into 4 equal parts',
      '1/3 = one third = split into 3 equal parts',
      '2/4 = 1/2 (they are equivalent!)'
    ],
    visual: '🍰',
    quiz: [
      { q: 'What is half of 12?', options: ['2', '4', '6', '8'], answer: 2, explanation: 'Half of 12 = 12 ÷ 2 = 6!' },
      { q: 'What is a quarter of 20?', options: ['4', '5', '8', '10'], answer: 1, explanation: 'A quarter of 20 = 20 ÷ 4 = 5!' },
      { q: 'A pizza is cut into 4 equal slices. You eat 1. What fraction did you eat?', options: ['1/2', '1/3', '1/4', '3/4'], answer: 2, explanation: '1 slice out of 4 equal slices = one quarter (1/4)!' },
      { q: 'What is 1/3 of 9?', options: ['1', '2', '3', '4'], answer: 2, explanation: '1/3 of 9 = 9 ÷ 3 = 3!' },
      { q: 'Which is bigger: 1/2 or 1/4?', options: ['1/4', '1/2', 'They are the same', "Can't tell"], answer: 1, explanation: '1/2 is bigger! Half is more than a quarter.' },
      { q: 'What is 3/4 of 8?', options: ['2', '4', '6', '8'], answer: 2, explanation: '1/4 of 8 = 2, so 3/4 = 3 × 2 = 6!' },
    ],
    flashcards: [
      { front: 'Half of 16 = ?', back: '8! 🍰\n16 ÷ 2 = 8' },
      { front: 'Quarter of 12 = ?', back: '3! ⭐\n12 ÷ 4 = 3' },
      { front: 'Third of 15 = ?', back: '5! 🌈\n15 ÷ 3 = 5' },
      { front: '3/4 of 20 = ?', back: '15! 💫\n1/4 of 20=5, × 3 = 15' },
      { front: 'Is 2/4 the same as 1/2?', back: 'YES! ✨\n2/4 = 1/2 (equivalent!)' },
      { front: 'Half of 50 = ?', back: '25! 🌟\n50 ÷ 2 = 25' },
    ]
  },
  {
    id: 'time',
    title: 'Time',
    emoji: '🕐',
    color: '#6366F1',
    colorPale: '#EEF2FF',
    description: 'Read clocks and understand time!',
    subtopics: ["O'clock", 'Half past', 'Quarter past', 'Quarter to', '5-minute intervals', 'Days, months, years'],
    keyFacts: [
      "O'clock: minute hand points to 12",
      'Half past: minute hand points to 6',
      'Quarter past: minute hand points to 3',
      'Quarter to: minute hand points to 9',
      '60 minutes = 1 hour, 24 hours = 1 day'
    ],
    visual: '🕐',
    quiz: [
      { q: 'The minute hand points to 12 and the hour hand to 7. What time is it?', options: ["6 o'clock", "7 o'clock", 'Half past 7', 'Quarter to 7'], answer: 1, explanation: "When the minute hand is on 12, it's o'clock! Hour hand on 7 = 7 o'clock!" },
      { q: 'What time is half past 3?', options: ['3:00', '3:15', '3:30', '3:45'], answer: 2, explanation: 'Half past 3 = 3:30. The minute hand is on the 6!' },
      { q: 'How many minutes in an hour?', options: ['24', '30', '60', '100'], answer: 2, explanation: 'There are 60 minutes in one hour!' },
      { q: 'What time is quarter past 5?', options: ['5:05', '5:15', '5:25', '5:30'], answer: 1, explanation: 'Quarter past 5 = 5:15. A quarter of 60 minutes = 15 minutes!' },
      { q: 'How many days in a week?', options: ['5', '6', '7', '10'], answer: 2, explanation: 'There are 7 days in a week: Mon, Tue, Wed, Thu, Fri, Sat, Sun!' },
      { q: 'What time is quarter to 4?', options: ['3:45', '4:15', '4:45', '3:15'], answer: 0, explanation: "Quarter to 4 = 3:45. It's 15 minutes BEFORE 4 o'clock!" },
    ],
    flashcards: [
      { front: "What does 'o'clock' mean?", back: 'Exactly on the hour! ⭐\nMinute hand → 12' },
      { front: 'How many minutes is half past?', back: '30 minutes! 🌈\nHalf of 60 = 30' },
      { front: 'Quarter past means...', back: '15 minutes past! 💫\n1/4 of 60 = 15' },
      { front: 'Quarter to means...', back: '15 minutes BEFORE! ✨\ne.g. Quarter to 5 = 4:45' },
      { front: 'How many months in a year?', back: '12 months! 🌟\nJan, Feb, Mar... Dec' },
      { front: 'How many hours in a day?', back: '24 hours! 🕐\n(12 AM + 12 PM)' },
    ]
  },
  {
    id: 'measurement',
    title: 'Measurement',
    emoji: '📏',
    color: '#10B981',
    colorPale: '#ECFDF5',
    description: 'Measure length, mass, capacity and temperature!',
    subtopics: ['Length (cm, m)', 'Mass (g, kg)', 'Capacity (ml, l)', 'Temperature', 'Comparing measurements'],
    keyFacts: [
      '100 centimetres (cm) = 1 metre (m)',
      '1000 grams (g) = 1 kilogram (kg)',
      '1000 millilitres (ml) = 1 litre (l)',
      'Temperature measured in degrees Celsius (°C)'
    ],
    visual: '📏',
    quiz: [
      { q: 'How many cm in 1 metre?', options: ['10', '50', '100', '1000'], answer: 2, explanation: 'There are 100 centimetres in 1 metre!' },
      { q: 'Which is heavier: 500g or 1kg?', options: ['500g', '1kg', 'Same weight', "Can't tell"], answer: 1, explanation: '1kg = 1000g, which is heavier than 500g!' },
      { q: 'How many ml in 1 litre?', options: ['10', '100', '500', '1000'], answer: 3, explanation: 'There are 1000 millilitres in 1 litre!' },
      { q: 'A book is 25cm tall. A pencil is 17cm. How much taller is the book?', options: ['7cm', '8cm', '9cm', '42cm'], answer: 1, explanation: '25 - 17 = 8cm. The book is 8cm taller!' },
      { q: 'Which unit do we use to measure temperature?', options: ['cm', 'kg', 'ml', '°C'], answer: 3, explanation: 'Temperature is measured in degrees Celsius (°C)!' },
      { q: '2kg = how many grams?', options: ['20g', '200g', '2000g', '20000g'], answer: 2, explanation: '1kg = 1000g, so 2kg = 2000g!' },
    ],
    flashcards: [
      { front: 'How many cm in 1m?', back: '100 cm! 📏\n1 metre = 100 centimetres' },
      { front: 'How many g in 1kg?', back: '1000 g! ⭐\n1 kilogram = 1000 grams' },
      { front: 'How many ml in 1 litre?', back: '1000 ml! 🌈\n1 litre = 1000 millilitres' },
      { front: 'Which is longer: 1m or 90cm?', back: '1m is longer! 💫\n1m = 100cm > 90cm' },
      { front: 'Normal body temperature?', back: '37°C! ✨\n(degrees Celsius)' },
      { front: '500cm = how many metres?', back: '5 metres! 🌟\n500 ÷ 100 = 5' },
    ]
  },
  {
    id: 'geometry',
    title: 'Geometry & Shapes',
    emoji: '🔷',
    color: '#3B82F6',
    colorPale: '#EFF6FF',
    description: 'Explore 2D shapes, 3D shapes and patterns!',
    subtopics: ['2D Shapes', '3D Shapes', 'Lines of symmetry', 'Position & direction', 'Patterns'],
    keyFacts: [
      'Square: 4 equal sides, 4 right angles',
      'Circle: perfectly round, no corners!',
      'Triangle: 3 sides, 3 corners',
      'Cube: 6 faces, 8 vertices, 12 edges'
    ],
    visual: '🔷',
    quiz: [
      { q: 'How many sides does a hexagon have?', options: ['4', '5', '6', '8'], answer: 2, explanation: 'A hexagon has 6 sides! Hex means 6.' },
      { q: 'Which shape has no corners?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], answer: 2, explanation: 'A circle has no corners and no straight sides!' },
      { q: 'How many faces does a cube have?', options: ['4', '6', '8', '12'], answer: 1, explanation: 'A cube has 6 faces - one for each side!' },
      { q: 'A rectangle has how many right angles?', options: ['0', '2', '4', '6'], answer: 2, explanation: 'A rectangle has 4 right angles (square corners)!' },
      { q: 'Which 3D shape is like a ball?', options: ['Cube', 'Cone', 'Cylinder', 'Sphere'], answer: 3, explanation: 'A sphere is like a ball - perfectly round in all directions!' },
      { q: 'How many lines of symmetry does a square have?', options: ['1', '2', '3', '4'], answer: 3, explanation: 'A square has 4 lines of symmetry - across, down, and both diagonals!' },
    ],
    flashcards: [
      { front: 'How many sides on a pentagon?', back: '5 sides! 🔷\nPenta = 5' },
      { front: 'What shape has 3 sides?', back: 'Triangle! ⭐\n3 sides, 3 corners' },
      { front: 'Faces on a cuboid?', back: '6 faces! 🌈\n(like a box/brick)' },
      { front: 'What is a right angle?', back: 'A square corner! 💫\nLike the corner of this page!' },
      { front: 'How many vertices on a cube?', back: '8 vertices! ✨\n(corners = vertices)' },
      { front: 'What is symmetry?', back: 'A mirror image! 🌟\nBoth halves are the same' },
    ]
  },
  {
    id: 'statistics',
    title: 'Statistics & Data',
    emoji: '📊',
    color: '#EC4899',
    colorPale: '#FDF2F8',
    description: 'Read charts, tally marks and pictograms!',
    subtopics: ['Tally charts', 'Pictograms', 'Block diagrams', 'Reading tables'],
    keyFacts: [
      'Tally marks: IIII = 4, then strike through = 5',
      'Pictograms use pictures to show data',
      'Block diagrams have blocks filled in',
      'Always read the key on a pictogram!'
    ],
    visual: '📊',
    quiz: [
      { q: 'How do you write 5 in tally marks?', options: ['IIIII', 'IIII with a line through', 'V', '5 dots'], answer: 1, explanation: 'In tally marks, you draw 4 lines then cross through them to make 5!' },
      { q: 'In a pictogram, 🌟 = 2 children. There are 4 stars. How many children?', options: ['4', '6', '8', '2'], answer: 2, explanation: '4 stars × 2 children each = 8 children!' },
      { q: 'What does the KEY tell you in a pictogram?', options: ['The title', 'What each picture is worth', 'The date', 'The names'], answer: 1, explanation: 'The key tells you what each picture or symbol is worth!' },
      { q: '8 tallies in groups of 5. How many total?', options: ['5', '8', '13', '40'], answer: 1, explanation: '8 tally marks = 8! The groups just help us count faster.' },
      { q: 'A bar chart shows: Dogs=6, Cats=9. How many more cats?', options: ['3', '6', '9', '15'], answer: 0, explanation: '9 - 6 = 3. There are 3 more cats than dogs!' },
      { q: 'What goes on the bottom of a bar chart?', options: ['Numbers', 'Labels/categories', 'Colours', 'Nothing'], answer: 1, explanation: 'The categories (labels) go along the bottom, and numbers go up the side!' },
    ],
    flashcards: [
      { front: 'What is a tally mark for 5?', back: 'IIII with a strike! 📊\n4 lines crossed by 1' },
      { front: '🌸 = 5 in pictogram. 3 flowers = ?', back: '15! ⭐\n3 × 5 = 15' },
      { front: 'What is a block diagram?', back: 'A bar chart! 🌈\nBlocks filled to show amounts' },
      { front: 'Why do we use a KEY?', back: 'To know the value! 💫\nEach symbol = how many?' },
      { front: 'How to find "most popular"?', back: 'Find the TALLEST bar! ✨\nor most tally marks' },
      { front: 'How to find "least popular"?', back: 'Find the SHORTEST bar! 🌟\nor fewest tally marks' },
    ]
  }
];

export const ACHIEVEMENTS = [
  { id: 'first_quiz', title: 'Quiz Starter!', emoji: '🌟', condition: 'Complete your first quiz' },
  { id: 'perfect_score', title: 'Perfect Star!', emoji: '💫', condition: 'Get 100% on a quiz' },
  { id: 'flashcard_pro', title: 'Flashcard Pro!', emoji: '⚡', condition: 'Complete a flashcard set' },
  { id: 'all_topics', title: 'Maths Explorer!', emoji: '🗺️', condition: 'Visit all topics' },
  { id: 'streak_3', title: 'On a Roll!', emoji: '🔥', condition: '3 quizzes in a row' },
  { id: 'games_player', title: 'Game Champion!', emoji: '🏆', condition: 'Play 5 games' },
];
