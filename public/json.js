const jobs = [
  {
    bonus: "5",
    company: "Google",
    company_logo: "https://i.ibb.co/z6RWDPh/Google-G-logo-svg.webp",
    deadline: "2024-08-10",
    deadline_start: "2024-07-29",
    employer: "John Doe",
    employer_email: "johndoe@gmail.com",
    increment: "3",
    job_posting_date: "2024-07-30",
    job_title: "Senior Software Engineer",
    job_type: "Full time",
    location: "San Francisco, CA",
    other_benefits: "Health insurance, Lunch, snacks, tea, coffee",
    photoUrl: "/h-img1.jpg",
    probation_period: "3",
    requirements: "OOP, DBMS, DSA, Cloud Computing",
    responsibilities: "Develop scalable web applications",
    salary_max: "200000",
    salary_min: "150000",
    vacancy: "3",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "4",
    company: "Microsoft",
    company_logo: "https://i.ibb.co/t8CN2rL/Microsoft-logo-svg.png",
    deadline: "2024-08-12",
    deadline_start: "2024-07-29",
    employer: "Jane Smith",
    employer_email: "janesmith@microsoft.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Software Engineer",
    job_type: "Full time",
    location: "Redmond, WA",
    other_benefits: "Lunch, snacks, tea, coffee, Gym membership",
    photoUrl: "/h-img2.jpg",
    probation_period: "3",
    requirements: "OOP, DBMS, DSA, Azure",
    responsibilities: "Build and maintain cloud services",
    salary_max: "140000",
    salary_min: "100000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "3",
    company: "X",
    company_logo:
      "https://i.ibb.co/1GLyggw/new-design-twitter-logo-600nw-2346506357.webp",
    deadline: "2024-08-14",
    deadline_start: "2024-07-29",
    employer: "Elon Musk",
    employer_email: "elonmusk@x.com",
    increment: "1",
    job_posting_date: "2024-07-30",
    job_title: "Frontend Developer",
    job_type: "Full time",
    location: "San Francisco, CA",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img3.jpg",
    probation_period: "3",
    requirements: "React, CSS, HTML, JavaScript",
    responsibilities: "Develop and maintain the user interface",
    salary_max: "130000",
    salary_min: "90000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "2",
    company: "Amazon",
    company_logo: "https://i.ibb.co/cL4b4T9/Amazon-Logo-PNG-Pic.png",
    deadline: "2024-08-16",
    deadline_start: "2024-07-29",
    employer: "Jeff Bezos",
    employer_email: "jeffbezos@amazon.com",
    increment: "4",
    job_posting_date: "2024-07-30",
    job_title: "Backend Developer",
    job_type: "Full time",
    location: "Seattle, WA",
    other_benefits: "Lunch, snacks, tea, coffee, Stock options",
    photoUrl: "/h-img4.jpg",
    probation_period: "3",
    requirements: "Node.js, Express, MongoDB, AWS",
    responsibilities: "Develop and maintain backend services",
    salary_max: "150000",
    salary_min: "120000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "3",
    company: "Tesla",
    company_logo: "https://i.ibb.co/XCHRBkz/Black-tesla-logo-600x600.png",
    deadline: "2024-08-18",
    deadline_start: "2024-07-29",
    employer: "Nikola Tesla",
    employer_email: "nikolatesla@tesla.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Data Scientist",
    job_type: "Full time",
    location: "Palo Alto, CA",
    other_benefits: "Lunch, snacks, tea, coffee, Gym membership",
    photoUrl: "/h-img5.jpg",
    probation_period: "3",
    requirements: "Python, R, SQL, Machine Learning",
    responsibilities: "Analyze and interpret complex data",
    salary_max: "180000",
    salary_min: "130000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "4",
    company: "Brain Station 23",
    company_logo: "https://i.ibb.co/NgvFdck/Brain-Station-23-Ltd.jpg",
    deadline: "2024-08-20",
    deadline_start: "2024-07-29",
    employer: "Rahim Uddin",
    employer_email: "rahim@brainstation23.com",
    increment: "3",
    job_posting_date: "2024-07-30",
    job_title: "Full Stack Developer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img6.jpg",
    probation_period: "3",
    requirements: "JavaScript, React, Node.js, MongoDB",
    responsibilities: "Develop and maintain web applications",
    salary_max: "120000",
    salary_min: "90000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "3",
    company: "Ollyo",
    company_logo: "https://i.ibb.co/TRgHBKK/1690136820-logo-146-69-ollyo.jpg",
    deadline: "2024-08-22",
    deadline_start: "2024-07-29",
    employer: "Sarah Connor",
    employer_email: "sarah@ollyo.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Mobile App Developer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img7.jpg",
    probation_period: "3",
    requirements: "Flutter, Dart, iOS, Android",
    responsibilities: "Develop and maintain mobile applications",
    salary_max: "110000",
    salary_min: "80000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "2",
    company: "Programming Hero",
    company_logo: "https://i.ibb.co/GRRGVyW/company-logo.png",
    deadline: "2024-08-24",
    deadline_start: "2024-07-29",
    employer: "Mizanur Rahman",
    employer_email: "mizan@programming-hero.com",
    increment: "1",
    job_posting_date: "2024-07-30",
    job_title: "DevOps Engineer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img8.jpg",
    probation_period: "3",
    requirements: "AWS, Docker, Kubernetes, CI/CD",
    responsibilities: "Manage and automate cloud infrastructure",
    salary_max: "130000",
    salary_min: "100000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "5",
    company: "Google",
    company_logo: "https://i.ibb.co/z6RWDPh/Google-G-logo-svg.webp",
    deadline: "2024-08-10",
    deadline_start: "2024-07-29",
    employer: "John Doe",
    employer_email: "johndoe@gmail.com",
    increment: "3",
    job_posting_date: "2024-07-30",
    job_title: "Senior Software Engineer",
    job_type: "Full time",
    location: "San Francisco, CA",
    other_benefits: "Health insurance, Lunch, snacks, tea, coffee",
    photoUrl: "/h-img1.jpg",
    probation_period: "3",
    requirements: "OOP, DBMS, DSA, Cloud Computing",
    responsibilities: "Develop scalable web applications",
    salary_max: "200000",
    salary_min: "150000",
    vacancy: "3",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "4",
    company: "Microsoft",
    company_logo: "https://i.ibb.co/t8CN2rL/Microsoft-logo-svg.png",
    deadline: "2024-08-12",
    deadline_start: "2024-07-29",
    employer: "Jane Smith",
    employer_email: "janesmith@microsoft.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Software Engineer",
    job_type: "Full time",
    location: "Redmond, WA",
    other_benefits: "Lunch, snacks, tea, coffee, Gym membership",
    photoUrl: "/h-img2.jpg",
    probation_period: "3",
    requirements: "OOP, DBMS, DSA, Azure",
    responsibilities: "Build and maintain cloud services",
    salary_max: "140000",
    salary_min: "100000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "3",
    company: "X",
    company_logo:
      "https://i.ibb.co/1GLyggw/new-design-twitter-logo-600nw-2346506357.webp",
    deadline: "2024-08-14",
    deadline_start: "2024-07-29",
    employer: "Elon Musk",
    employer_email: "elonmusk@x.com",
    increment: "1",
    job_posting_date: "2024-07-30",
    job_title: "Frontend Developer",
    job_type: "Full time",
    location: "San Francisco, CA",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img3.jpg",
    probation_period: "3",
    requirements: "React, CSS, HTML, JavaScript",
    responsibilities: "Develop and maintain the user interface",
    salary_max: "130000",
    salary_min: "90000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "2",
    company: "Amazon",
    company_logo: "https://i.ibb.co/cL4b4T9/Amazon-Logo-PNG-Pic.png",
    deadline: "2024-08-16",
    deadline_start: "2024-07-29",
    employer: "Jeff Bezos",
    employer_email: "jeffbezos@amazon.com",
    increment: "4",
    job_posting_date: "2024-07-30",
    job_title: "Backend Developer",
    job_type: "Full time",
    location: "Seattle, WA",
    other_benefits: "Lunch, snacks, tea, coffee, Stock options",
    photoUrl: "/h-img4.jpg",
    probation_period: "3",
    requirements: "Node.js, Express, MongoDB, AWS",
    responsibilities: "Develop and maintain backend services",
    salary_max: "150000",
    salary_min: "120000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "3",
    company: "Tesla",
    company_logo: "https://i.ibb.co/XCHRBkz/Black-tesla-logo-600x600.png",
    deadline: "2024-08-18",
    deadline_start: "2024-07-29",
    employer: "Nikola Tesla",
    employer_email: "nikolatesla@tesla.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Data Scientist",
    job_type: "Full time",
    location: "Palo Alto, CA",
    other_benefits: "Lunch, snacks, tea, coffee, Gym membership",
    photoUrl: "/h-img5.jpg",
    probation_period: "3",
    requirements: "Python, R, SQL, Machine Learning",
    responsibilities: "Analyze and interpret complex data",
    salary_max: "180000",
    salary_min: "130000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "4",
    company: "Brain Station 23",
    company_logo: "https://i.ibb.co/NgvFdck/Brain-Station-23-Ltd.jpg",
    deadline: "2024-08-20",
    deadline_start: "2024-07-29",
    employer: "Rahim Uddin",
    employer_email: "rahim@brainstation23.com",
    increment: "3",
    job_posting_date: "2024-07-30",
    job_title: "Full Stack Developer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img6.jpg",
    probation_period: "3",
    requirements: "JavaScript, React, Node.js, MongoDB",
    responsibilities: "Develop and maintain web applications",
    salary_max: "120000",
    salary_min: "90000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "3",
    company: "Ollyo",
    company_logo: "https://i.ibb.co/TRgHBKK/1690136820-logo-146-69-ollyo.jpg",
    deadline: "2024-08-22",
    deadline_start: "2024-07-29",
    employer: "Sarah Connor",
    employer_email: "sarah@ollyo.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Mobile App Developer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img7.jpg",
    probation_period: "3",
    requirements: "Flutter, Dart, iOS, Android",
    responsibilities: "Develop and maintain mobile applications",
    salary_max: "110000",
    salary_min: "80000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "2",
    company: "Programming Hero",
    company_logo: "https://i.ibb.co/GRRGVyW/company-logo.png",
    deadline: "2024-08-24",
    deadline_start: "2024-07-29",
    employer: "Mizanur Rahman",
    employer_email: "mizan@programming-hero.com",
    increment: "1",
    job_posting_date: "2024-07-30",
    job_title: "DevOps Engineer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img8.jpg",
    probation_period: "3",
    requirements: "AWS, Docker, Kubernetes, CI/CD",
    responsibilities: "Manage and automate cloud infrastructure",
    salary_max: "130000",
    salary_min: "100000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "5",
    company: "Google",
    company_logo: "https://i.ibb.co/z6RWDPh/Google-G-logo-svg.webp",
    deadline: "2024-08-10",
    deadline_start: "2024-07-29",
    employer: "John Doe",
    employer_email: "johndoe@gmail.com",
    increment: "3",
    job_posting_date: "2024-07-30",
    job_title: "Senior Software Engineer",
    job_type: "Full time",
    location: "San Francisco, CA",
    other_benefits: "Health insurance, Lunch, snacks, tea, coffee",
    photoUrl: "/h-img1.jpg",
    probation_period: "3",
    requirements: "OOP, DBMS, DSA, Cloud Computing",
    responsibilities: "Develop scalable web applications",
    salary_max: "200000",
    salary_min: "150000",
    vacancy: "3",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "4",
    company: "Microsoft",
    company_logo: "https://i.ibb.co/t8CN2rL/Microsoft-logo-svg.png",
    deadline: "2024-08-12",
    deadline_start: "2024-07-29",
    employer: "Jane Smith",
    employer_email: "janesmith@microsoft.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Software Engineer",
    job_type: "Full time",
    location: "Redmond, WA",
    other_benefits: "Lunch, snacks, tea, coffee, Gym membership",
    photoUrl: "/h-img2.jpg",
    probation_period: "3",
    requirements: "OOP, DBMS, DSA, Azure",
    responsibilities: "Build and maintain cloud services",
    salary_max: "140000",
    salary_min: "100000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "3",
    company: "X",
    company_logo:
      "https://i.ibb.co/1GLyggw/new-design-twitter-logo-600nw-2346506357.webp",
    deadline: "2024-08-14",
    deadline_start: "2024-07-29",
    employer: "Elon Musk",
    employer_email: "elonmusk@x.com",
    increment: "1",
    job_posting_date: "2024-07-30",
    job_title: "Frontend Developer",
    job_type: "Full time",
    location: "San Francisco, CA",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img3.jpg",
    probation_period: "3",
    requirements: "React, CSS, HTML, JavaScript",
    responsibilities: "Develop and maintain the user interface",
    salary_max: "130000",
    salary_min: "90000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "2",
    company: "Amazon",
    company_logo: "https://i.ibb.co/cL4b4T9/Amazon-Logo-PNG-Pic.png",
    deadline: "2024-08-16",
    deadline_start: "2024-07-29",
    employer: "Jeff Bezos",
    employer_email: "jeffbezos@amazon.com",
    increment: "4",
    job_posting_date: "2024-07-30",
    job_title: "Backend Developer",
    job_type: "Full time",
    location: "Seattle, WA",
    other_benefits: "Lunch, snacks, tea, coffee, Stock options",
    photoUrl: "/h-img4.jpg",
    probation_period: "3",
    requirements: "Node.js, Express, MongoDB, AWS",
    responsibilities: "Develop and maintain backend services",
    salary_max: "150000",
    salary_min: "120000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "3",
    company: "Tesla",
    company_logo: "https://i.ibb.co/XCHRBkz/Black-tesla-logo-600x600.png",
    deadline: "2024-08-18",
    deadline_start: "2024-07-29",
    employer: "Nikola Tesla",
    employer_email: "nikolatesla@tesla.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Data Scientist",
    job_type: "Full time",
    location: "Palo Alto, CA",
    other_benefits: "Lunch, snacks, tea, coffee, Gym membership",
    photoUrl: "/h-img5.jpg",
    probation_period: "3",
    requirements: "Python, R, SQL, Machine Learning",
    responsibilities: "Analyze and interpret complex data",
    salary_max: "180000",
    salary_min: "130000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "4",
    company: "Brain Station 23",
    company_logo: "https://i.ibb.co/NgvFdck/Brain-Station-23-Ltd.jpg",
    deadline: "2024-08-20",
    deadline_start: "2024-07-29",
    employer: "Rahim Uddin",
    employer_email: "rahim@brainstation23.com",
    increment: "3",
    job_posting_date: "2024-07-30",
    job_title: "Full Stack Developer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img6.jpg",
    probation_period: "3",
    requirements: "JavaScript, React, Node.js, MongoDB",
    responsibilities: "Develop and maintain web applications",
    salary_max: "120000",
    salary_min: "90000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "3",
    company: "Ollyo",
    company_logo: "https://i.ibb.co/TRgHBKK/1690136820-logo-146-69-ollyo.jpg",
    deadline: "2024-08-22",
    deadline_start: "2024-07-29",
    employer: "Sarah Connor",
    employer_email: "sarah@ollyo.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Mobile App Developer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img7.jpg",
    probation_period: "3",
    requirements: "Flutter, Dart, iOS, Android",
    responsibilities: "Develop and maintain mobile applications",
    salary_max: "110000",
    salary_min: "80000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "2",
    company: "Programming Hero",
    company_logo: "https://i.ibb.co/GRRGVyW/company-logo.png",
    deadline: "2024-08-24",
    deadline_start: "2024-07-29",
    employer: "Mizanur Rahman",
    employer_email: "mizan@programming-hero.com",
    increment: "1",
    job_posting_date: "2024-07-30",
    job_title: "DevOps Engineer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img8.jpg",
    probation_period: "3",
    requirements: "AWS, Docker, Kubernetes, CI/CD",
    responsibilities: "Manage and automate cloud infrastructure",
    salary_max: "130000",
    salary_min: "100000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "5",
    company: "Google",
    company_logo: "https://i.ibb.co/z6RWDPh/Google-G-logo-svg.webp",
    deadline: "2024-08-10",
    deadline_start: "2024-07-29",
    employer: "John Doe",
    employer_email: "johndoe@gmail.com",
    increment: "3",
    job_posting_date: "2024-07-30",
    job_title: "Senior Software Engineer",
    job_type: "Full time",
    location: "San Francisco, CA",
    other_benefits: "Health insurance, Lunch, snacks, tea, coffee",
    photoUrl: "/h-img1.jpg",
    probation_period: "3",
    requirements: "OOP, DBMS, DSA, Cloud Computing",
    responsibilities: "Develop scalable web applications",
    salary_max: "200000",
    salary_min: "150000",
    vacancy: "3",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "4",
    company: "Microsoft",
    company_logo: "https://i.ibb.co/t8CN2rL/Microsoft-logo-svg.png",
    deadline: "2024-08-12",
    deadline_start: "2024-07-29",
    employer: "Jane Smith",
    employer_email: "janesmith@microsoft.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Software Engineer",
    job_type: "Full time",
    location: "Redmond, WA",
    other_benefits: "Lunch, snacks, tea, coffee, Gym membership",
    photoUrl: "/h-img2.jpg",
    probation_period: "3",
    requirements: "OOP, DBMS, DSA, Azure",
    responsibilities: "Build and maintain cloud services",
    salary_max: "140000",
    salary_min: "100000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "3",
    company: "X",
    company_logo:
      "https://i.ibb.co/1GLyggw/new-design-twitter-logo-600nw-2346506357.webp",
    deadline: "2024-08-14",
    deadline_start: "2024-07-29",
    employer: "Elon Musk",
    employer_email: "elonmusk@x.com",
    increment: "1",
    job_posting_date: "2024-07-30",
    job_title: "Frontend Developer",
    job_type: "Full time",
    location: "San Francisco, CA",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img3.jpg",
    probation_period: "3",
    requirements: "React, CSS, HTML, JavaScript",
    responsibilities: "Develop and maintain the user interface",
    salary_max: "130000",
    salary_min: "90000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "2",
    company: "Amazon",
    company_logo: "https://i.ibb.co/cL4b4T9/Amazon-Logo-PNG-Pic.png",
    deadline: "2024-08-16",
    deadline_start: "2024-07-29",
    employer: "Jeff Bezos",
    employer_email: "jeffbezos@amazon.com",
    increment: "4",
    job_posting_date: "2024-07-30",
    job_title: "Backend Developer",
    job_type: "Full time",
    location: "Seattle, WA",
    other_benefits: "Lunch, snacks, tea, coffee, Stock options",
    photoUrl: "/h-img4.jpg",
    probation_period: "3",
    requirements: "Node.js, Express, MongoDB, AWS",
    responsibilities: "Develop and maintain backend services",
    salary_max: "150000",
    salary_min: "120000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "3",
    company: "Tesla",
    company_logo: "https://i.ibb.co/XCHRBkz/Black-tesla-logo-600x600.png",
    deadline: "2024-08-18",
    deadline_start: "2024-07-29",
    employer: "Nikola Tesla",
    employer_email: "nikolatesla@tesla.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Data Scientist",
    job_type: "Full time",
    location: "Palo Alto, CA",
    other_benefits: "Lunch, snacks, tea, coffee, Gym membership",
    photoUrl: "/h-img5.jpg",
    probation_period: "3",
    requirements: "Python, R, SQL, Machine Learning",
    responsibilities: "Analyze and interpret complex data",
    salary_max: "180000",
    salary_min: "130000",
    vacancy: "2",
    weekends: "Saturday and Sunday",
  },
  {
    bonus: "4",
    company: "Brain Station 23",
    company_logo: "https://i.ibb.co/NgvFdck/Brain-Station-23-Ltd.jpg",
    deadline: "2024-08-20",
    deadline_start: "2024-07-29",
    employer: "Rahim Uddin",
    employer_email: "rahim@brainstation23.com",
    increment: "3",
    job_posting_date: "2024-07-30",
    job_title: "Full Stack Developer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img6.jpg",
    probation_period: "3",
    requirements: "JavaScript, React, Node.js, MongoDB",
    responsibilities: "Develop and maintain web applications",
    salary_max: "120000",
    salary_min: "90000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "3",
    company: "Ollyo",
    company_logo: "https://i.ibb.co/TRgHBKK/1690136820-logo-146-69-ollyo.jpg",
    deadline: "2024-08-22",
    deadline_start: "2024-07-29",
    employer: "Sarah Connor",
    employer_email: "sarah@ollyo.com",
    increment: "2",
    job_posting_date: "2024-07-30",
    job_title: "Mobile App Developer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img7.jpg",
    probation_period: "3",
    requirements: "Flutter, Dart, iOS, Android",
    responsibilities: "Develop and maintain mobile applications",
    salary_max: "110000",
    salary_min: "80000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
  {
    bonus: "2",
    company: "Programming Hero",
    company_logo: "https://i.ibb.co/GRRGVyW/company-logo.png",
    deadline: "2024-08-24",
    deadline_start: "2024-07-29",
    employer: "Mizanur Rahman",
    employer_email: "mizan@programming-hero.com",
    increment: "1",
    job_posting_date: "2024-07-30",
    job_title: "DevOps Engineer",
    job_type: "Full time",
    location: "Dhaka, Bangladesh",
    other_benefits: "Lunch, snacks, tea, coffee",
    photoUrl: "/h-img8.jpg",
    probation_period: "3",
    requirements: "AWS, Docker, Kubernetes, CI/CD",
    responsibilities: "Manage and automate cloud infrastructure",
    salary_max: "130000",
    salary_min: "100000",
    vacancy: "2",
    weekends: "Friday and Saturday",
  },
];

console.log(jobs.length);
