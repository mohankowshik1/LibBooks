const departments = {
  "Computer Science": [
    {
      name: "Problem Solving with C",
      difficulty: {
        easy: [
          {
            name: "C Programming for Beginners",
            author: "Stephen G. Kochan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51D4Fm-JL5L._SX342_SY445_QL70_FMwebp_.jpg",
          },
          {
            name: "C Programming Absolute Beginner's Guide",
            author: "Perry, Perry",
            imageUrl:
              "https://m.media-amazon.com/images/I/61KR3T2YniL._SY342_.jpg",
          },
          {
            name: "C Programming for the Absolute Beginner",
            author: "Michael Vine",
            imageUrl:
              "https://m.media-amazon.com/images/I/51Zsvx8qzSL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Programming in ANSI C",
            author: "E. Balagurusamy",
            imageUrl:
              "https://m.media-amazon.com/images/I/517nUf6e0cL._AC_UY218_.jpg",
          },
          {
            name: "C Programming: A Modern Approach",
            author: "K.N. King",
            imageUrl:
              "https://m.media-amazon.com/images/I/517nUf6e0cL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "C How to Program",
            author: "Paul J. Deitel, Harvey M. Deitel",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51mnHmurOgL._AC_UY218_.jpg",
          },
        ],
        advanced: [
          {
            name: "Expert C Programming: Deep C Secrets",
            author: "Peter Van der Linden",
            imageUrl:
              "https://m.media-amazon.com/images/I/51bjQ9UZnjL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "The C Programming Language",
            author: "Brian W. Kernighan, Dennis M. Ritchie",
            imageUrl:
              "https://m.media-amazon.com/images/I/51L7aRvbU-L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced C Programming",
            author: "Nutshell O'Reilly",
            imageUrl:
              "https://m.media-amazon.com/images/I/71vuCDUYVzL._SY342_.jpg",
          },
        ],
      },
    },
    {
      name: "Data Structures & Algorithms",
      difficulty: {
        easy: [
          {
            name: "Data Structures and Algorithms in Python",
            author:
              "Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser",
            imageUrl:
              "https://m.media-amazon.com/images/I/819CqCZ8buL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Algorithms",
            author: "Robert Sedgewick, Kevin Wayne",
            imageUrl:
              "https://m.media-amazon.com/images/I/41i-9zPvscL._SX342_SY445_.jpg",
          },
          {
            name: "Cracking the Coding Interview",
            author: "Gayle Laakmann McDowell",
            imageUrl:
              "https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Introduction to Algorithms",
            author:
              "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
            imageUrl:
              "https://m.media-amazon.com/images/I/41vLer1KbmL._SX342_SY445_.jpg",
          },
          {
            name: "Algorithm Design Manual",
            author: "Steven S. Skiena",
            imageUrl:
              "https://m.media-amazon.com/images/I/411XfHcBX3L._SY445_SX342_.jpg",
          },
          {
            name: "Data Structures and Algorithm Analysis in Java",
            author: "Mark A. Weiss",
            imageUrl:
              "https://m.media-amazon.com/images/I/81XczkNodcL._SL1500_.jpg",
          },
        ],
        advanced: [
          {
            name: "Advanced Data Structures",
            author: "Peter Brass",
            imageUrl:
              "https://m.media-amazon.com/images/I/41eXwZZ5w9L._SY445_SX342_.jpg",
          },
          {
            name: "Algorithmic Game Theory",
            author:
              "Noam Nisan, Tim Roughgarden, Eva Tardos, Vijay V. Vazirani",
            imageUrl:
              "https://m.media-amazon.com/images/I/41TaH-wBLcL._SY445_SX342_.jpg",
          },
          {
            name: "Introduction to the Theory of Computation",
            author: "Michael Sipser",
            imageUrl:
              "https://m.media-amazon.com/images/I/61KGTdfkPAL._SY342_.jpg",
          },
        ],
      },
    },
    {
      name: "Web Technologies",
      difficulty: {
        easy: [
          {
            name: "HTML and CSS: Design and Build Websites",
            author: "Jon Duckett",
            imageUrl:
              "https://m.media-amazon.com/images/I/613ZTDcDsiL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            imageUrl:
              "https://m.media-amazon.com/images/I/7185IMvz88L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Learning Web Design: A Beginner's Guide",
            author: "Jennifer Robbins",
            imageUrl:
              "https://m.media-amazon.com/images/I/A1O2e-E1WkL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Node.js Design Patterns",
            author: "Mario Casciaro",
            imageUrl:
              "https://m.media-amazon.com/images/I/71OMPF7vzmL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "React: Up and Running",
            author: "Stoyan Stefanov",
            imageUrl:
              "https://m.media-amazon.com/images/I/81h9Ilh0nIL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Fullstack Open: Deep Dive Into Modern Web Development",
            author: "Various Authors",
            imageUrl:
              "https://m.media-amazon.com/images/I/81kipblVB2L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Web Development with Django Cookbook",
            author: "Aidas Bendoraitis",
            imageUrl:
              "https://m.media-amazon.com/images/I/61Wn+LtmYnL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "High-Performance Browser Networking",
            author: "Ilya Grigorik",
            imageUrl:
              "https://m.media-amazon.com/images/I/91UPPjIl2SL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Building Microservices",
            author: "Sam Newman",
            imageUrl:
              "https://m.media-amazon.com/images/I/81dmHMoJDjL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Database Management Systems",
      difficulty: {
        easy: [
          {
            name: "Database Systems: Design, Implementation, and Management",
            author: "Carlos Coronel, Steven Morris",
            imageUrl:
              "https://m.media-amazon.com/images/I/61idK+CzHGL._AC_SX296_SY426_FMwebp_QL65_.jpg",
          },
          {
            name: "Database Management Systems",
            author: "Raghu Ramakrishnan, Johannes Gehrke",
            imageUrl:
              "https://m.media-amazon.com/images/I/41pscxU4lTL._AC_SX222_SY320_FMwebp_QL65_.jpg",
          },
          {
            name: "Database Design for Mere Mortals",
            author: "Michael J. Hernandez",
            imageUrl:
              "https://m.media-amazon.com/images/I/71rB+Zq1DoL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Database System Concepts",
            author: "Abraham Silberschatz, Henry F. Korth, S. Sudarshan",
            imageUrl:
              "https://m.media-amazon.com/images/I/61aEyYvsBmL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Database Internals: A Deep Dive into How Distributed Data Systems Work",
            author: "Alex Petrov",
            imageUrl:
              "https://m.media-amazon.com/images/I/91UYIt74czL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Seven Databases in Seven Weeks: A Guide to Modern Databases and the NoSQL Movement",
            author: "Luc Perkins, Eric Redmond, Jim Wilson",
            imageUrl:
              "https://m.media-amazon.com/images/I/81CjWWvjK0L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Database Management Systems",
            author: "Raghu Ramakrishnan, Johannes Gehrke",
            imageUrl:
              "https://m.media-amazon.com/images/I/61CUat-cJJL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Database Systems: The Complete Book",
            author: "Hector Garcia-Molina, Jeffrey D. Ullman, Jennifer Widom",
            imageUrl:
              "https://m.media-amazon.com/images/I/61annl+fY4L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Readings in Database Systems",
            author: "Joseph M. Hellerstein, Michael Stonebraker",
            imageUrl:
              "https://m.media-amazon.com/images/I/414p9u-BmXL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Operating Systems",
      difficulty: {
        easy: [
          {
            name: "Operating System Concepts",
            author: "Abraham Silberschatz",
            imageUrl:
              "https://m.media-amazon.com/images/I/81SwKCia7VL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Modern Operating Systems",
            author: "Andrew S. Tanenbaum",
            imageUrl:
              "https://m.media-amazon.com/images/I/81xr24EootL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Operating Systems: Internals and Design Principles",
            author: "William Stallings",
            imageUrl:
              "https://m.media-amazon.com/images/I/51yabXb4t7L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Linux System Programming",
            author: "Robert Love",
            imageUrl:
              "https://m.media-amazon.com/images/I/914upP4hhpL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Windows Internals",
            author: "Mark E. Russinovich",
            imageUrl:
              "https://m.media-amazon.com/images/I/71SGpDzl-SL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "UNIX and Linux System Administration Handbook",
            author: "Evi Nemeth",
            imageUrl:
              "https://m.media-amazon.com/images/I/91JMDpFMMCL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Distributed Systems: Concepts and Design",
            author: "George Coulouris",
            imageUrl:
              "https://m.media-amazon.com/images/I/61vTyIBDnXL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced Programming in the UNIX Environment",
            author: "W. Richard Stevens",
            imageUrl:
              "https://m.media-amazon.com/images/I/71dfQT21HzL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Computer Networks and Internets",
            author: "Douglas E. Comer",
            imageUrl:
              "https://m.media-amazon.com/images/I/91V3Lzi2JpL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
  ],
  "Information Technology": [
    {
      name: "Web Technologies",
      difficulty: {
        easy: [
          {
            name: "HTML and CSS: Design and Build Websites",
            author: "Jon Duckett",
            imageUrl:
              "https://m.media-amazon.com/images/I/613ZTDcDsiL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            imageUrl:
              "https://m.media-amazon.com/images/I/7185IMvz88L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Learning Web Design: A Beginner's Guide",
            author: "Jennifer Robbins",
            imageUrl:
              "https://m.media-amazon.com/images/I/A1O2e-E1WkL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Node.js Design Patterns",
            author: "Mario Casciaro",
            imageUrl:
              "https://m.media-amazon.com/images/I/71OMPF7vzmL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "React: Up and Running",
            author: "Stoyan Stefanov",
            imageUrl:
              "https://m.media-amazon.com/images/I/81h9Ilh0nIL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Fullstack Open: Deep Dive Into Modern Web Development",
            author: "Various Authors",
            imageUrl:
              "https://m.media-amazon.com/images/I/81kipblVB2L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Web Development with Django Cookbook",
            author: "Aidas Bendoraitis",
            imageUrl:
              "https://m.media-amazon.com/images/I/61Wn+LtmYnL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "High-Performance Browser Networking",
            author: "Ilya Grigorik",
            imageUrl:
              "https://m.media-amazon.com/images/I/91UPPjIl2SL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Building Microservices",
            author: "Sam Newman",
            imageUrl:
              "https://m.media-amazon.com/images/I/81dmHMoJDjL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Database Management Systems",
      difficulty: {
        easy: [
          {
            name: "Database Systems: Design, Implementation, and Management",
            author: "Carlos Coronel, Steven Morris",
            imageUrl:
              "https://m.media-amazon.com/images/I/61idK+CzHGL._AC_SX296_SY426_FMwebp_QL65_.jpg",
          },
          {
            name: "Database Management Systems",
            author: "Raghu Ramakrishnan, Johannes Gehrke",
            imageUrl:
              "https://m.media-amazon.com/images/I/41pscxU4lTL._AC_SX222_SY320_FMwebp_QL65_.jpg",
          },
          {
            name: "Database Design for Mere Mortals",
            author: "Michael J. Hernandez",
            imageUrl:
              "https://m.media-amazon.com/images/I/71rB+Zq1DoL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Database System Concepts",
            author: "Abraham Silberschatz, Henry F. Korth, S. Sudarshan",
            imageUrl:
              "https://m.media-amazon.com/images/I/61aEyYvsBmL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Database Internals: A Deep Dive into How Distributed Data Systems Work",
            author: "Alex Petrov",
            imageUrl:
              "https://m.media-amazon.com/images/I/91UYIt74czL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Seven Databases in Seven Weeks: A Guide to Modern Databases and the NoSQL Movement",
            author: "Luc Perkins, Eric Redmond, Jim Wilson",
            imageUrl:
              "https://m.media-amazon.com/images/I/81CjWWvjK0L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Database Management Systems",
            author: "Raghu Ramakrishnan, Johannes Gehrke",
            imageUrl:
              "https://m.media-amazon.com/images/I/61CUat-cJJL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Database Systems: The Complete Book",
            author: "Hector Garcia-Molina, Jeffrey D. Ullman, Jennifer Widom",
            imageUrl:
              "https://m.media-amazon.com/images/I/61annl+fY4L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Readings in Database Systems",
            author: "Joseph M. Hellerstein, Michael Stonebraker",
            imageUrl:
              "https://m.media-amazon.com/images/I/414p9u-BmXL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Data Structures & Algorithms",
      difficulty: {
        easy: [
          {
            name: "Introduction to Algorithms",
            author: "Thomas H. Cormen",
            imageUrl:
              "https://m.media-amazon.com/images/I/616c+ys7RBL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Data Structures and Algorithms in Python",
            author: "Michael T. Goodrich",
            imageUrl:
              "https://m.media-amazon.com/images/I/819CqCZ8buL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Cracking the Coding Interview",
            author: "Gayle Laakmann McDowell",
            imageUrl:
              "https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Algorithm Design Manual",
            author: "Steven S. Skiena",
            imageUrl:
              "https://m.media-amazon.com/images/I/61vlo3CkPSL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Dynamic Programming for Coding Interviews",
            author: "Meenakshi and Kamal Rawat",
            imageUrl:
              "https://m.media-amazon.com/images/I/81io-ZZJjEL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Elements of Programming Interviews in Java",
            author: "Adnan Aziz",
            imageUrl:
              "https://m.media-amazon.com/images/I/61ob1vD+AQL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Introduction to Algorithms",
            author: "Thomas H. Cormen",
            imageUrl:
              "https://m.media-amazon.com/images/I/616c+ys7RBL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Algorithmic Problem Solving",
            author: "Roland Backhouse",
            imageUrl:
              "https://m.media-amazon.com/images/I/615bf+bOK3L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Algorithmic Graph Theory and Perfect Graphs",
            author: "Martin Charles Golumbic",
            imageUrl:
              "https://m.media-amazon.com/images/I/41aO5YYh34L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Operating Systems",
      difficulty: {
        easy: [
          {
            name: "Operating System Concepts",
            author: "Abraham Silberschatz",
            imageUrl:
              "https://m.media-amazon.com/images/I/81SwKCia7VL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Modern Operating Systems",
            author: "Andrew S. Tanenbaum",
            imageUrl:
              "https://m.media-amazon.com/images/I/81xr24EootL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Operating Systems: Internals and Design Principles",
            author: "William Stallings",
            imageUrl:
              "https://m.media-amazon.com/images/I/51yabXb4t7L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Linux System Programming",
            author: "Robert Love",
            imageUrl:
              "https://m.media-amazon.com/images/I/914upP4hhpL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Windows Internals",
            author: "Mark E. Russinovich",
            imageUrl:
              "https://m.media-amazon.com/images/I/71SGpDzl-SL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "UNIX and Linux System Administration Handbook",
            author: "Evi Nemeth",
            imageUrl:
              "https://m.media-amazon.com/images/I/91JMDpFMMCL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Distributed Systems: Concepts and Design",
            author: "George Coulouris",
            imageUrl:
              "https://m.media-amazon.com/images/I/61vTyIBDnXL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced Programming in the UNIX Environment",
            author: "W. Richard Stevens",
            imageUrl:
              "https://m.media-amazon.com/images/I/71dfQT21HzL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Computer Networks and Internets",
            author: "Douglas E. Comer",
            imageUrl:
              "https://m.media-amazon.com/images/I/91V3Lzi2JpL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
  ],
  "Electronics & Communication": [
    {
      name: "Digital Logic Design",
      difficulty: {
        easy: [
          {
            name: "Digital Design: Principles and Practices",
            author: "John F. Wakerly",
            imageUrl:
              "https://m.media-amazon.com/images/I/91SiYftmAQL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Digital Electronics: Principles and Integrated Circuits",
            author: "Anil K. Maini",
            imageUrl:
              "https://m.media-amazon.com/images/I/51rfBO4O1fL._SY445_SX342_.jpg",
          },
          {
            name: "Fundamentals of Digital Logic with Verilog Design",
            author: "Stephen Brown, Zvonko Vranesic",
            imageUrl:
              "https://m.media-amazon.com/images/I/61sIkYjFKVL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Digital Integrated Circuits: A Design Perspective",
            author: "Jan M. Rabaey, Anantha Chandrakasan, Borivoje Nikolic",
            imageUrl:
              "https://m.media-amazon.com/images/I/81NXr6GMnWL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Digital Systems Design using VHDL",
            author: "Charles H. Roth, Lizy Kurian John",
            imageUrl:
              "https://m.media-amazon.com/images/I/91U9RW7mDJL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Digital Logic and Computer Design",
            author: "M. Morris Mano, Charles R. Kime, Tom Martin",
            imageUrl:
              "https://m.media-amazon.com/images/I/81HQzrzi4mL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "CMOS VLSI Design: A Circuits and Systems Perspective",
            author: "Neil H.E. Weste, David Money Harris",
            imageUrl:
              "https://m.media-amazon.com/images/I/61y06mbPmNL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Logic in Computer Science: Modelling and Reasoning about Systems",
            author: "Michael Huth, Mark Ryan",
            imageUrl:
              "https://m.media-amazon.com/images/I/71PQh8NkWXL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced Digital Logic Design Synthesis for FPGA's",
            author: "Steve kilts",
            imageUrl:
              "https://m.media-amazon.com/images/I/5115-LENmxL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "VLSI Design",
      difficulty: {
        easy: [
          {
            name: "CMOS VLSI Design: A Circuits and Systems Perspective",
            author: "Neil H.E. Weste, David Money Harris",
            imageUrl:
              "https://m.media-amazon.com/images/I/61y06mbPmNL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "A Practical Guide for Simulation and FPGA Implementation",
            author: "Bekkay Hajji",
            imageUrl:
              "https://m.media-amazon.com/images/I/61DPCQlXIFL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to VLSI Systems: A Logic, Circuit, and System Perspective",
            author: "Ming-Bo Lin",
            imageUrl:
              "https://m.media-amazon.com/images/I/41OlURK-ceL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Modern VLSI Design: IP-Based Design",
            author: "Wayne Wolf",
            imageUrl:
              "https://m.media-amazon.com/images/I/51HMEMBlhnL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "VLSI Physical Design: From Graph Partitioning to Timing Closure",
            author: "Andrew B. Kahng, Jens Lienig, Igor L. Markov, Jin Hu",
            imageUrl:
              "https://m.media-amazon.com/images/I/61ZoZtNFkZL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Low Power CMOS VLSI Circuit Design",
            author: "Kaushik Roy, Sharat C. Prasad",
            imageUrl:
              "https://m.media-amazon.com/images/I/614LXh+YXNL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "The Art of Electronics",
            author: "Paul Horowitz, Winfield Hill",
            imageUrl:
              "https://m.media-amazon.com/images/I/81rnDbZJibL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Principles of CMOS VLSI Design: A Systems Perspective",
            author: "Neil H.E. Weste, Kamran Eshraghian",
            imageUrl:
              "https://m.media-amazon.com/images/I/81rhzLYlPEL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Digital Integrated Circuits: A Design Perspective",
            author: "Jan M. Rabaey, Anantha Chandrakasan, Borivoje Nikolic",
            imageUrl:
              "https://m.media-amazon.com/images/I/81NXr6GMnWL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Cellular and Mobile Communications",
      difficulty: {
        easy: [
          {
            name: "Wireless Communications: Principles and Practice",
            author: "Theodore S. Rappaport",
            imageUrl:
              "https://m.media-amazon.com/images/I/91yAJt9Kq3L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Mobile Communications Engineering: Theory and Applications",
            author: "William C. Y. Lee",
            imageUrl:
              "https://m.media-amazon.com/images/I/51SefN+nEaL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to 3G Mobile Communications",
            author: "Juha Korhonen",
            imageUrl:
              "https://m.media-amazon.com/images/I/61Gbz-dv1wL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Wireless Communication Systems: From RF Subsystems to 4G Enabling Technologies",
            author: "Ke-Lin Du, M. N. S. Swamy",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61VKH4afzDL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "4G, LTE-Advanced Pro and The Road to 5G",
            author: "Erik Dahlman, Stefan Parkvall, Johan Skold",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71B7v0JacrL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Wireless and Mobile Systems",
            author: "Dharma P. Agrawal, Qing-An Zeng",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31Co4jKtViL._AC_UY256_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Mobile Antenna Systems Handbook",
            author: "Kyohei Fujimoto",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61sACa0KLGL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced Cellular Network Planning and Optimisation: 2G/2.5G/3G...Evolution to 4G",
            author: "Ajay R. Mishra",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71mkbE2zTTL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "5G NR: The Next Generation Wireless Access Technology",
            author: "Erik Dahlman, Stefan Parkvall, Johan Skold",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Q0yYfbEbL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Pulse, Digital, and Integrated Circuits",
      difficulty: {
        easy: [
          {
            name: "Digital Electronics: Principles, Devices and Applications",
            author: "Anil K. Maini",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71X1jS-9iOL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Pulse and Digital Circuits",
            author: "A. Anand Kumar",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91mCt0fXcSL._AC_UY327_FMwebp_QL65_.jpg ",
          },
          {
            name: "Digital Circuits and Microprocessors",
            author: "Herbert Taub, Donald L. Schilling",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91ieeXAeMYL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Digital Signal Processing: Principles, Algorithms, and Applications",
            author: "John G. Proakis, Dimitris K. Manolakis",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81vC6ya2+iL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Integrated Electronics: Analog and Digital Circuits and Systems",
            author: "Jacob Millman, Christos C. Halkias, Chetan D. Parikh",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91ETB32k25L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "CMOS Digital Integrated Circuits: Analysis and Design",
            author: "Sung-Mo Kang, Yusuf Leblebici",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61uVlZen4UL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Analysis and Design of Analog Integrated Circuits",
            author:
              "Paul R. Gray, Paul J. Hurst, Stephen H. Lewis, Robert G. Meyer",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91s2Ri3G9sL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Principles of Electronic Instrumentation and Measurement",
            author: "Howard M Berlin",
            imageUrl:
              "https://m.media-amazon.com/images/I/41duXxP4Z5L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Linear Integrated Circuits: Analysis and design",
            author: "B Somnath Nair",
            imageUrl:
              "https://m.media-amazon.com/images/I/71YwVch6XiL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Signals & Systems",
      difficulty: {
        easy: [
          {
            name: "Signals and Systems",
            author: "Alan V. Oppenheim, Alan S. Willsky, S. Hamid Nawab",
            imageUrl:
              "https://m.media-amazon.com/images/I/515QMnb8R-L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Signals, Systems, and Transforms",
            author: "Charles L. Phillips, John M. Parr, Eve A. Riskin",
            imageUrl:
              "https://m.media-amazon.com/images/I/71XysIFjrML._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Signals and Systems: Analysis Using Transform Methods & MATLAB",
            author: "M.J. Roberts",
            imageUrl:
              "https://m.media-amazon.com/images/I/717cG9KA56L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Signals and Systems",
            author: "Simon Haykin, Barry Van Veen",
            imageUrl:
              "https://m.media-amazon.com/images/I/51iz1YAPWaL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Continuous and Discrete Signals and Systems",
            author: "Samir S. Soliman, Mandyam D. Srinath",
            imageUrl:
              "https://m.media-amazon.com/images/I/71g28BnE5oL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Signals and Systems",
            author: "A. Anand Kumar",
            imageUrl:
              "https://m.media-amazon.com/images/I/41MXM3phwmL._SY445_SX342_.jpg",
          },
        ],
        advanced: [
          {
            name: "Signals and Systems: A MATLAB Integrated Approach",
            author: "Oktay Alkin",
            imageUrl:
              "https://m.media-amazon.com/images/I/81akRrh9pML._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Signal Processing",
            author: "Sophocles J. Orfanidis",
            imageUrl:
              "https://m.media-amazon.com/images/I/51Q5hwjHkhL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Signals and Systems",
            author: "Alan V. Oppenheim, Alan S. Willsky, S. Hamid Nawab",
            imageUrl:
              "https://m.media-amazon.com/images/I/515QMnb8R-L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
  ],
  "Electrical & Electronics": [
    {
      name: "Electrical Machines",
      difficulty: {
        easy: [
          {
            name: "Electric Machinery Fundamentals",
            author: "Stephen J. Chapman",
            imageUrl:
              "https://m.media-amazon.com/images/I/51GbB7YwxYL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Electric Machines and Drives",
            author: "D W Novotony, T A Lipo",
            imageUrl:
              "https://m.media-amazon.com/images/I/81QngRU448L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Principles of Electric Machines and Power Electronics",
            author: "P.C. Sen",
            imageUrl:
              "https://m.media-amazon.com/images/I/61CUTPpl4iL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Electric Motors and Drives: Fundamentals, Types and Applications",
            author: "Austin Hughes and Bill Drury ",
            imageUrl:
              "https://m.media-amazon.com/images/I/71ms1T0SWDL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Electric Machine Theory for Power Engineers",
            author: "Theodre wilde",
            imageUrl:
              "https://m.media-amazon.com/images/I/81LmKBUiBML._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Analysis of Electric Machinery and Drive Systems",
            author: "Paul C. Krause",
            imageUrl:
              "https://m.media-amazon.com/images/I/611JjdyQXRL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Electric Machines and Drives: Principles, Control, Modeling and Simulation",
            author: "Shaahin Filizadeh",
            imageUrl:
              "https://m.media-amazon.com/images/I/91J1X7wXdXL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Electric Motor Drives: Modeling, Analysis, and Control",
            author: "R. Krishnan",
            imageUrl:
              "https://m.media-amazon.com/images/I/91YuPY9LE+L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to AC Machine Design",
            author: "Thomas A. Lipo",
            imageUrl:
              "https://m.media-amazon.com/images/I/71UkZA2OhlL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Digital Communications",
      difficulty: {
        easy: [
          {
            name: "Digital Communications: Fundamentals and Applications",
            author: "Bernard Sklar",
            imageUrl:
              "https://m.media-amazon.com/images/I/51v7FbskehL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Principles of Digital Communication",
            author: "Robert G. Gallager",
            imageUrl:
              "https://m.media-amazon.com/images/I/61iqEJ01TQL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Digital Communication Systems Engineering with Software-Defined Radio",
            author: "Alexander M. Wyglinski",
            imageUrl:
              "https://m.media-amazon.com/images/I/61LUBE7UN8L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Digital Communications",
            author: "John G. Proakis",
            imageUrl:
              "https://m.media-amazon.com/images/I/416X8M03NSL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Modern Digital and Analog Communication Systems",
            author: "B.P. Lathi",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51sPjIeOZZL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Digital Communications: A Discrete-Time Approach",
            author: "Michael Rice",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/21Qyh10FCmL._AC_UY218_.jpg",
          },
        ],
        advanced: [
          {
            name: "Digital Communications",
            author: "Simon Haykin",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/913isuNP0BL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Principles of Digital Communication and Coding",
            author: "Andrew J. Viterbi",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41pAGoTe3mL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Digital Communication over Fading Channels",
            author: "Marvin K. Simon",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41G7vtqVQCL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Electronics Circuits and Analysis",
      difficulty: {
        easy: [
          {
            name: "Microelectronic Circuits: Theory and Applications",
            author: "Adel S. Sedra",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/817PmVQmB2L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Electronic Devices and Circuit Theory",
            author: "Robert L. Boylestad",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81ei3AqQUXL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Electronic Circuit Analysis and Design",
            author: "Donald A. Neamen",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/711AZNEA+sL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Introduction to Electric Machines and Drives",
            author: "Paul C. Krause",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41UE323ApyL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Integrated Electronics: Analog and Digital Circuits and Systems",
            author: "Jacob Millman",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91ETB32k25L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Linear Circuit Analysis: Time Domain, Phasor, and Laplace Transform Approaches",
            author: "Raymond A. DeCarlo",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/A1p3KTPfaOL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Advanced Electronic Circuits",
            author: "M.H. Rashid",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81iSjcDiByL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to the Design and Analysis of Building Electrical Systems (Electrical Engineering",
            author: "John Mathews",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71KaX2iuaJL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Electronic Circuit Design: From Concept to Implementation",
            author: "Nihal Kularatna",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61bQlm7+cKL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Network Theory",
      difficulty: {
        easy: [
          {
            name: "Engineering Circuit Analysis",
            author: "William H. Hayt Jr., Jack E. Kemmerly, Steven M. Durbin",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91zllyxf5aL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Network Analysis and Synthesis",
            author: " A. Sudhakar and Shyammohan S. Palli",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81LvaMvUvIL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Network Analysis",
            author: "M.E. Van Valkenburg",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81CvLDermBL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Electric Circuits",
            author: "James W. Nilsson, Susan A. Riedel",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31nu2TcOKRL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Electric Circuits",
            author: "Richard C. Dorf, James A. Svoboda",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61ApWvATU1L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Circuit Theory: Analysis and Synthesis",
            author: "A. Chakrabarti, Abhijit Chakrabarti",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81fT2Yq-JJL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Engineering Circuit Analysis",
            author: "William H. Hayt Jr., Jack E. Kemmerly, Steven M. Durbin",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51ah7iQrVWL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Network Analysis and Synthesis",
            author: "Franklin F. Kuo",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81bKVgBBSbL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Electric Circuits",
            author: "Richard C. Dorf, James A. Svoboda",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61ApWvATU1L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Signals & Systems",
      difficulty: {
        easy: [
          {
            name: "Signals and Systems",
            author: "Alan V. Oppenheim, Alan S. Willsky, S. Hamid Nawab",
            imageUrl:
              "https://m.media-amazon.com/images/I/515QMnb8R-L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Signals, Systems, and Transforms",
            author: "Charles L. Phillips, John M. Parr, Eve A. Riskin",
            imageUrl:
              "https://m.media-amazon.com/images/I/71XysIFjrML._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Signals and Systems: Analysis Using Transform Methods & MATLAB",
            author: "M.J. Roberts",
            imageUrl:
              "https://m.media-amazon.com/images/I/717cG9KA56L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Signals and Systems",
            author: "Simon Haykin, Barry Van Veen",
            imageUrl:
              "https://m.media-amazon.com/images/I/51iz1YAPWaL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Continuous and Discrete Signals and Systems",
            author: "Samir S. Soliman, Mandyam D. Srinath",
            imageUrl:
              "https://m.media-amazon.com/images/I/71g28BnE5oL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Signals and Systems",
            author: "A. Anand Kumar",
            imageUrl:
              "https://m.media-amazon.com/images/I/41MXM3phwmL._SY445_SX342_.jpg",
          },
        ],
        advanced: [
          {
            name: "Signals and Systems: A MATLAB Integrated Approach",
            author: "Oktay Alkin",
            imageUrl:
              "https://m.media-amazon.com/images/I/81akRrh9pML._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Signal Processing",
            author: "Sophocles J. Orfanidis",
            imageUrl:
              "https://m.media-amazon.com/images/I/51Q5hwjHkhL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Signals and Systems",
            author: "Alan V. Oppenheim, Alan S. Willsky, S. Hamid Nawab",
            imageUrl:
              "https://m.media-amazon.com/images/I/515QMnb8R-L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
  ],
  "Chemical Engineering": [
    {
      name: "Heat Transfer",
      difficulty: {
        easy: [
          {
            name: "Introduction to Heat Transfer",
            author: "Som S K",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61QOBqJUL8L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Heat Transfer: A Practical Approach",
            author: "Yunus A. Cengel",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91WvJGNEcAL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Fundamentals of Heat and Mass Transfer",
            author: "Sachdeva",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/616TsuPn2eL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Heat and Mass Transfer: Fundamentals and Applications",
            author: "Yunus A. Cengel",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/716WoyZQ0qL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Engineering Heat Transfer",
            author: "David p dewitt, Bruce R Munson",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/A1tmOfvQxwL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Principles of Heat Transfer",
            author: "Frank Kreith",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51s6SF6JdhL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Advanced Heat and Mass Transfer",
            author: "Amir Faghri",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91GKpTjxy7L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Heat Transfer: Principles and Applications",
            author: "Binay k Dutta",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71cJ2hvnySL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Conduction and Convection Heat Transfer",
            author: "Nicholas sabella",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51Wljqg00bL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Organic Chemistry",
      difficulty: {
        easy: [
          {
            name: "Organic Chemistry",
            author: "Paula Yurkanis Bruice",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81d9hm7X8KL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Organic Chemistry As a Second Language",
            author: "David R. Klein",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917VTiP37iL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Organic Chemistry: Structure and Function",
            author: "K. Peter C. Vollhardt",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91eYG89buvL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Organic Chemistry",
            author: "Jonathan Clayden",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71dm4X1d8bL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Organic Chemistry",
            author: "Leroy G. Wade",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91bnS+vAOAL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Organic Chemistry",
            author: "John McMurry",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81CVjtRfwML._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Advanced Organic Chemistry: Part A: Structure and Mechanisms",
            author: "Francis A. Carey",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61mNljbGRHL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Organic Chemistry of Enzyme-Catalyzed Reactions",
            author: "Richard B. Silverman",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71UzqikqqaL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Organic Chemistry: Principles and Mechanisms",
            author: "Joel Karty",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71n0r2QWDNL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Chemical Technology",
      difficulty: {
        easy: [
          {
            name: "Introduction to Chemical Engineering and Industrial Chemistry",
            author: " J. M. Smith , H. C.van Ness, et al.",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91bgYZGNIpL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Engineering Design",
            author: "Gavin Towler",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51lMCaBz1DL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Unit Operations of Chemical Engineering",
            author: "Warren L. McCabe",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/513gjZQHm7L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Chemical Engineering: An Introduction",
            author: "Sahil Gosa",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91DB2NWb7iL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Engineering: Principles, Practice, and Economics of Plant and Process Design",
            author: "Gavin Towler",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71A1S8WTZLL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Engineering Design and Analysis: An Introduction",
            author: "T. Michael Duncan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31y0jCZxxrL._AC_UY218_.jpg",
          },
        ],
        advanced: [
          {
            name: "Chemical Process Equipment - Selection and Design",
            author: "James r couper",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51oInrEJsvL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Process Engineering: Design and Economics",
            author: "Harry Silla",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61X-6uKLhqL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: " Chemical Engineering Design: Principles, Practice & Economics Of Plant & Process Design",
            author: "Harry Silla",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91wN8oSu-5L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Chemical Process Economics and Equipment Design",
      difficulty: {
        easy: [
          {
            name: "Chemical Engineering Economics",
            author: "Harry Silla",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61X-6uKLhqL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Process Design Principles",
            author: "Warren D. Seider",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91Q+GfDmhsL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Process Equipment",
            author: "C maidargi",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71yjHRe6O9L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Process Systems Analysis and Control",
            author: "LeBlanc Coughanowr",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81y21IIBXOL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Engineering Design",
            author: "Gavin Towler and Ray sinnott",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61dOoZa2UmL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Process Design and Integration",
            author: "Robin Smith",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61acg6P1k1L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Process Design: Synthesis, Intensification, and Integration of Chemical Processes",
            author: "Helmut Mothes",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61HoX6qj-fL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Process Design and Integration",
            author: "Robin M. Smith",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91ZoxrrnAnL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Chemical Engineering Design Principles, Practice and Economics of Plant and Process Design",
            author: "Gavin Towler",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71A1S8WTZLL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
  ],
  "Civil Engineering": [
    {
      name: "Building Architecture with Revit",
      difficulty: {
        easy: [
          {
            name: "Revit Architecture for Beginners",
            author: "Madhumitha K",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51PJN7pXacS._SY445_SX342_.jpg",
          },
          {
            name: "Revit Architecture 2022: A Comprehensive Guide",
            author: "Linkan Sagar",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61te4aygPWL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Mastering Autodesk Revit 2022",
            author: "Eric wing",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51L17KuMVPL._SX342_SY445_.jpg",
          },
        ],
        medium: [
          {
            name: "Architectural Drafting and Interior Design",
            author: "Lydia Sloan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/817JRjqeg2L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Autodesk Revit 2022 Architecture Basics",
            author: "Daniel John Stine",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61rVEJ+vDzL._SY342_.jpg",
          },
          {
            name: "Revit Architecture 2022: No Experience Required",
            author: "Eric Wing",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51iFQlz3G6L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "BIM and Construction Management: Proven Tools, Methods, and Workflows",
            author: "Brad Hardin",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61i+RGflGgL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Revit Architecture ",
            author: "AZUKO",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61MnHXCKtjL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Architectural Drafting and Design",
            author: "David A. Madsen",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/3140MYco0uL._AC_UY218_.jpg",
          },
        ],
      },
    },
    {
      name: "Concrete Technology",
      difficulty: {
        easy: [
          {
            name: "Concrete Technology: Theory and Practice",
            author: "M.S. Shetty",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91VXcW8kLRL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Concrete Technology",
            author: "Neville and Brooks",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Q5CA+aZzL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Concrete Technology: Properties",
            author: "Sandoor Popovics",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61tH1WDM+-L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Concrete Technology",
            author: "A.M. Neville",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91CB7gHpTBL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "High-Performance Concrete",
            author: "Unknown author",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61jGQoFOLWL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced Concrete Technology",
            author: "John Newman",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71BeFX96tsL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Concrete Technology: Materials and Construction",
            author: "P. Kumar Mehta",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/414SQRhwhDL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Concrete Microstructure, Performance",
            author: "Rajesh Chaube",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/511TPhHx5ML._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Durability of Concrete Structures: Investigation, Repair, Protection",
            author: "G.C. Mays",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51enUf+QuFL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Strength of Materials",
      difficulty: {
        easy: [
          {
            name: "Strength of Materials",
            author: "R.K. Bansal",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Zq+uu0xML._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Mechanics of Materials",
            author: "James M. Gere",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71EHjdqZQnL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Strength of Materials by R C Hibbeler",
            author: "R C Hibbeler",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51t+JdItVTL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Mechanics of Materials",
            author: "Beer and Johnston",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91LECWZPEEL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Strength of Materials",
            author: "Andrew Pytel",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91JR-O46loL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Mechanics of Solids",
            author: "Mubeen",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YL7ae-eAL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Advanced Mechanics of Materials",
            author: "Arthur P. Boresi",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81RnzBMtc5L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Theory of Elasticity",
            author: "Timoshenko and Goodier",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/612SB2Mav8L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Mechanics of Materials: An Integrated Learning System",
            author: "Timothy A. Philpot",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81S+eTWPmCL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Building Planning & Design",
      difficulty: {
        easy: [
          {
            name: "Building Planning and Drawing",
            author: "Kumaraswamy K.",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61le0yj9oLL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Building Construction and Materials",
            author: "Gurcharan Singh",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Q9QUoBp-L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Building Construction Handbook",
            author: "Roy Chudley",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61vwlBXOs3L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Building Construction: Principles, Materials, and Systems",
            author: "Madan Mehta",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91If6PwX-eL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Architectural Drafting and Design",
            author: "Alan Jefferis",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51yGmoLQ59L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Site Planning and Design Handbook",
            author: "Thomas Russ",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81BauvX5SDL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Building Design and Construction Handbook",
            author: "Frederick S. Merritt",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/512mJH4rT0L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Architectural Graphic Standards",
            author: "The American Institute of Architects",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81WYIAAMPNL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Building Construction: Metric Volume 1",
            author: "W.B. McKay",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91NChylMhlL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
  ],
  "Mechanical Engineering": [
    {
      name: "Finite Element Analysis",
      difficulty: {
        easy: [
          {
            name: "A First Course in the Finite Element Method",
            author: "Daryl L. Logan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61ZPhxqjsvL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Finite Elements in Engineering",
            author: "Tirupathi R. Chandrupatla",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81GRkBpvwbL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Analysis with ANSYS Software",
            author: "Tadeusz Stolarski",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81VnWnXj5PL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Finite Element Method: Basic Concepts and Applications",
            author: "C.reddy",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61BVZqmOnHL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "An Introduction to the Finite Element Method",
            author: "J.N. Reddy",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71bPcn4keCL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "A Primer for Finite Elements in Elastic Structures",
            author: "W. F. Carroll",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61ENcEuJstL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Practical Finite Element Analysis",
            author: "Nitish Singhal",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/916zmMkfOJL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Nonlinear Finite Elements for Continua and Structures",
            author: "Ted Belytschko",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61oqme06sIL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Finite Element Analysis Using MATLAB and Abaqus",
            author: "Amar Khennane",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61OJo6A10DL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Computer-Aided Modelling",
      difficulty: {
        easy: [
          {
            name: "Engineering Drawing with an Introduction to AutoCAD",
            author: "Dhananjay A. Jolhe",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71PP7oYKVdL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "AutoCAD 2022: A Power Guide for Beginners and Intermediate Users",
            author: "Sandeep Dogra",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81KZ56B6vML._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "AutoCAD 2022 : A Power Guide",
            author: "Sandeep Dogra",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81e+eo4IS8S._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "AutoCAD and Its Applications Comprehensive 2022",
            author: "Terence M. Shumaker",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61D6DXfwz1L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Mastering AutoCAD 2022 and AutoCAD LT 2022",
            author: "George Omura",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91tlLBQhbvL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Computer-Aided Design and Manufacturing",
            author: "Cornelius T. Leondes",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71qflXZNLVL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Computer-Aided Design: A Conceptual Approach",
            author: "Jayanta Sarkar",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51DembyU-7L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced AutoCAD ",
            author: "Cheryl R. Shrock",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71ic0Z9O2oL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "SOLIDWORKS 2022: A Power Guide for Beginners and Intermediate Users",
            author: "CADArtifex",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61hcO11QQAL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Kinematics of Machinery",
      difficulty: {
        easy: [
          {
            name: "Theory of Machines and Mechanisms",
            author: "John J. Uicker Jr.",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51LzaXkmTvL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Theory of Machines",
            author: "R.S. Khurmi",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61+0Uwjk01L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Theory of Machines",
            author: "R K Bansal",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/A1CTgubHgQL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Kinematics and Dynamics of Machinery",
            author: "Charles E. Wilson",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41jeICGuZTL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Theory of Machines and Mechanisms",
            author: "Gordon R. Pennock & Joseph E. Shigley John J. Uicker",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51NqVDcCcXL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Mechanisms and Mechanical Devices Sourcebook",
            author: "Neil Sclater",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51coBHW-fSL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Kinematics, Dynamics, and Design of Machinery",
            author: "Kenneth J. Waldron",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81HYKcDvEfL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Mechanics of Machines",
            author: "R C Hibbeler",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91yoBLPH2uL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Design of Machinery",
            author: "Robert L. Norton",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31ZsnIm4hKL._AC_UY218_.jpg",
          },
        ],
      },
    },
    {
      name: "Material Science & Metallurgy",
      difficulty: {
        easy: [
          {
            name: "Foundations of Material Science and Engineering",
            author: "William F Smith, Javad Hashemi",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81mONobQ5NL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Materials: Properties and Selection",
            author: "Kenneth G. Budinski",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/914GcJ9mFfL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Introduction to Materials Science for Engineers",
            author: "James F. Shackelford",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91KN3-ydblL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Materials Science and Engineering: An Introduction",
            author: "William D. Callister",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71kI3Ty-GAL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Physical Metallurgy",
            author: "Vijendra Singh",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81jfKzAfT7L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Materials: Properties and Applications",
            author: "Narasimhulu",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Ga3931RUL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Introduction to Physical Metallurgy",
            author: "Sidney H. Avner",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61-KkL8kSsL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Materials Science and Engineering: A First Course",
            author: "V. Raghavan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81KRMK0xTiL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Physical Metallurgy Principles",
            author: "Reza Abbaschian",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81EAcoBextL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
  ],
  "First Year": [
    {
      name: "Engineering Graphics",
      difficulty: {
        easy: [
          {
            name: "Engineering Drawing",
            author: "N.D. Bhatt",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91pcwzxkGYL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Fundamentals of Engineering Drawing",
            author: "Luzadder",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91mat28of0L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "A Textbook of Engineering Drawing",
            author: "R.K. Dhawan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51Gf6ujsSEL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Engineering Drawing",
            author: "Basant Agrawal",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41FdBTO8I+L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Graphics",
            author: "P.J. Shah",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61DewbGTYTL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Drawing and Design",
            author: "Cecil Jensen",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51ayuOgw4tL._SX342_SY445_.jpg",
          },
        ],
        advanced: [
          {
            name: "Computer Aided Engineering Drawing",
            author: "Trymbaka Murthy",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41ngET8yDNL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced Engineering Graphics",
            author: "T. Jeyapoovan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91UtK5JCoXL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Drawing and CAD",
            author: "B. V. R. Gupta",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51fO8VyiwpL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Human Values and Professional Ethics",
      difficulty: {
        easy: [
          {
            name: "Ethics in Engineering",
            author: "Mike Martin",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j3b+AWLCL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Professional Ethics and Human Values",
            author: "R.S. Naagarazan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51o2HAORxwL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Ethics and Values ",
            author: "R R Gaur",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81WtolcoKJL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Engineering Ethics",
            author: "Charles E. Harris Jr.",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81J9dZK92JL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Ethics in Engineering Practice and Research",
            author: "Caroline Whitbeck",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71oGHigKYZL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Professional Ethics and Human Values",
            author: "Jayshree suresh",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51TPzOHPwzL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Professional Ethics and Values",
            author: "Govinnd Rajan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51VX5RSUz5L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Ethical Humans ",
            author: "Victor Jeleniewski Seidler",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61SvneYb4sL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Ethics: Concepts and Cases",
            author: "Charles E. Harris Jr.",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81J9dZK92JL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Engineering Mathematics",
      difficulty: {
        easy: [
          {
            name: "Higher Engineering Mathematics",
            author: "B.S. Grewal",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/617pWj4VBvL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Advanced Engineering Mathematics",
            author: "Erwin Kreyszig",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61dLkwLWPKL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Mathematics",
            author: "K.A. Stroud",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51HmJY0qbbL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Engineering Mathematics",
            author: "H.K. Dass",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51f9nCKnT5L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Higher Engineering Mathematics",
            author: "B.V. Ramana",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YH4+LrpgL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Higher Engineering Mathematics",
            author: "Ranijish Verma",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61aX4rs7OzL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Advanced Engineering Mathematics",
            author: "Peter V O'Neil",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81SLaCkDREL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Higher Engineering Mathematics",
            author: "Luis Coronado",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71QnW543Y6L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Mathematics",
            author: "B V Ramana ",
            imageUrl:
              "https://m.media-amazon.com/images/I/71ruAfg-DqL._AC_UY327_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Engineering Physics",
      difficulty: {
        easy: [
          {
            name: "Concepts of Modern Physics",
            author: "Arthur Beiser",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91IGvmg88fL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "University Physics",
            author: "Hugh D Young",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61YILeTQKWL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Physics",
            author: "Sujay Kumar  B",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41jzhWPvW9L._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Engineering Physics",
            author: "M.N. Avadhanulu",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81X7SugiDdL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Physics",
            author: "R.K. Gaur",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51hQx7ERoZL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "University Physics",
            author: "Young and Freedman",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91QTzBKYxBL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Modern Physics",
            author: "R. Murugeshan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71oGmDgb8UL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Concepts of Physics (Vol. 1 & 2)",
            author: "H.C. Verma",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Xq+QdmRmL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Physics",
            author: "S.L. Gupta",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71-zvDGXxvL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
    {
      name: "Engineering Chemistry",
      difficulty: {
        easy: [
          {
            name: "Engineering Chemistry",
            author: "Jain and Jain",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/A16IaHMEe5L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Chemistry",
            author: "Ravi Krishnan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/715DjCMG+pL._SY342_.jpg",
          },
          {
            name: "Engineering Chemistry",
            author: "Gopalan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81r4ijPFZeL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        medium: [
          {
            name: "Engineering Chemistry",
            author: "Shashi Chawla",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41YACBTFaCL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "A Textbook of Engineering Chemistry",
            author: "S.S. Dara",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/6136EIAR46L._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Chemistry",
            author: "Vibhav Gupta",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j2gWCINZL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
        advanced: [
          {
            name: "Engineering Chemistry",
            author: "S Chawla",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41YACBTFaCL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Chemistry",
            author: "Sunita Rattan",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81bBGLRXMZL._AC_UY327_FMwebp_QL65_.jpg",
          },
          {
            name: "Engineering Chemistry",
            author: "P.C. Jain",
            imageUrl:
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61b9dLAdivL._AC_UY327_FMwebp_QL65_.jpg",
          },
        ],
      },
    },
  ],
};

export default departments;
