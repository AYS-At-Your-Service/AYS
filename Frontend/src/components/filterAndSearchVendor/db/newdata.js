const vendors = [
    {
        "name": "John's Plumbing Services",
        "category": "Plumber",
        "hourlyRate": 250,
        "experienceYears": 5,
        "acceptedRequests": 35,
        "customerRating": 4.8,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {

        "name": "Electric Experts Inc.",
        "category": "Electrician",
        "hourlyRate": 450,
        "experienceYears": 7,
        "acceptedRequests": 25,
        "customerRating": 3.5,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Carpentry Craftsmen",
        "category": "Carpenter",
        "hourlyRate": 600,
        "experienceYears": 10,
        "acceptedRequests": 40,
        "customerRating": 2.7,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Sam's Plumbing Solutions",
        "category": "Plumber",
        "hourlyRate": 180,
        "experienceYears": 2,
        "acceptedRequests": 15,
        "customerRating": 2.2,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Wired Wizards",
        "category": "Electrician",
        "hourlyRate": 500,
        "experienceYears": 3,
        "acceptedRequests": 50,
        "customerRating": 4.9,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Master Carpenters Co.",
        "category": "Carpenter",
        "hourlyRate": 700,
        "experienceYears": 15,
        "acceptedRequests": 80,
        "customerRating": 2.6,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "QuickFix Plumbing",
        "category": "Plumber",
        "hourlyRate": 220,
        "experienceYears": 4,
        "acceptedRequests": 30,
        "customerRating": 3.4,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Bright Sparks Electric",
        "category": "Electrician",
        "hourlyRate": 400,
        "experienceYears": 6,
        "acceptedRequests": 22,
        "customerRating": 4.8,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "WoodCraft Masters",
        "category": "Carpenter",
        "hourlyRate": 550,
        "experienceYears": 8,
        "acceptedRequests": 45,
        "customerRating": 2.5,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Rapid Response Plumbers",
        "category": "Plumber",
        "hourlyRate": 200,
        "experienceYears": 3,
        "acceptedRequests": 18,
        "customerRating": 3.0,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "EcoPower Electricians",
        "category": "Electrician",
        "hourlyRate": 480,
        "experienceYears": 5,
        "acceptedRequests": 28,
        "customerRating": 4.7,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Precision Carpentry",
        "category": "Carpenter",
        "hourlyRate": 650,
        "experienceYears": 12,
        "acceptedRequests": 60,
        "customerRating": 2.9,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "CityPlumb Solutions",
        "category": "Plumber",
        "hourlyRate": 230,
        "experienceYears": 6,
        "acceptedRequests": 25,
        "customerRating": 3.3,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Voltage Vanguards",
        "category": "Electrician",
        "hourlyRate": 420,
        "experienceYears": 8,
        "acceptedRequests": 35,
        "customerRating": 4.6,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Craftsman Creations",
        "category": "Carpenter",
        "hourlyRate": 580,
        "experienceYears": 10,
        "acceptedRequests": 75,
        "customerRating": 2.8,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "AquaFlow Plumbing",
        "category": "Plumber",
        "hourlyRate": 210,
        "experienceYears": 4,
        "acceptedRequests": 22,
        "customerRating": 3.5,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "BrightIdeas Electric",
        "category": "Electrician",
        "hourlyRate": 480,
        "experienceYears": 6,
        "acceptedRequests": 30,
        "customerRating": 4.7,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Modern Woodworks",
        "category": "Carpenter",
        "hourlyRate": 620,
        "experienceYears": 11,
        "acceptedRequests": 50,
        "customerRating": 2.5,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "SpeedyPlumb Services",
        "category": "Plumber",
        "hourlyRate": 190,
        "experienceYears": 3,
        "acceptedRequests": 20,
        "customerRating": 3.1,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "SparkMaster Electricians",
        "category": "Electrician",
        "hourlyRate": 470,
        "experienceYears": 7,
        "acceptedRequests": 40,
        "customerRating": 4.8,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Reliable Rooter Plumbing",
        "category": "Plumber",
        "hourlyRate": 260,
        "experienceYears": 6,
        "acceptedRequests": 28,
        "customerRating": 2.6,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "TechPro Electric",
        "category": "Electrician",
        "hourlyRate": 500,
        "experienceYears": 9,
        "acceptedRequests": 32,
        "customerRating": 3.7,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Craftsman at Work",
        "category": "Carpenter",
        "hourlyRate": 580,
        "experienceYears": 11,
        "acceptedRequests": 55,
        "customerRating": 2.9,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "SwiftPlumbers Inc.",
        "category": "Plumber",
        "hourlyRate": 240,
        "experienceYears": 5,
        "acceptedRequests": 30,
        "customerRating": 4.4,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "EcoSpark Electric",
        "category": "Electrician",
        "hourlyRate": 480,
        "experienceYears": 7,
        "acceptedRequests": 38,
        "customerRating": 3.8,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "WoodMasters Guild",
        "category": "Carpenter",
        "hourlyRate": 620,
        "experienceYears": 12,
        "acceptedRequests": 65,
        "customerRating": 4.7,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Express Plumbing Solutions",
        "category": "Plumber",
        "hourlyRate": 220,
        "experienceYears": 4,
        "acceptedRequests": 25,
        "customerRating": 2.3,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "PowerPulse Electricians",
        "category": "Electrician",
        "hourlyRate": 520,
        "experienceYears": 8,
        "acceptedRequests": 42,
        "customerRating": 3.6,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "Artisan Carpentry",
        "category": "Carpenter",
        "hourlyRate": 600,
        "experienceYears": 9,
        "acceptedRequests": 48,
        "customerRating": 4.8,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    },
    {
        "name": "SpeedyFix Plumbers",
        "category": "Plumber",
        "hourlyRate": 200,
        "experienceYears": 3,
        "acceptedRequests": 18,
        "customerRating": 2.2,
        "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg"
    }
];

export default vendors;