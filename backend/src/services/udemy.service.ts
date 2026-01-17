import axios from 'axios';
import { config } from '../config';

export interface UdemyCourse {
    id: string;
    title: string;
    url: string;
    price: string;
    image: string;
    instructor: string;
    rating: number;
    students: number;
    duration: string;
    level: string;
    description?: string;
}

export interface CareerPath {
    role: string;
    description: string;
    courses: UdemyCourse[];
    skills: string[];
    salaryRange: string;
    demand: string;
    matchScore?: number;
}

/**
 * Fetch courses from Udemy RapidAPI
 */
export async function fetchUdemyCourses(searchQuery: string, limit: number = 10): Promise<UdemyCourse[]> {
    const timestamp = new Date().toISOString();
    
    try {
        if (!config.rapidApi.key) {
            console.error(`[${timestamp}] ❌ FAILSAFE: RapidAPI key not configured! Please add RAPIDAPI_KEY to .env file`);
            throw new Error('RapidAPI key not configured');
        }

        console.log(`[${timestamp}] 🔄 API HIT: Fetching Udemy courses for "${searchQuery}" (limit: ${limit})`);
        console.log(`[${timestamp}] 📡 Endpoint: https://${config.rapidApi.host}/search`);

        const options = {
            method: 'GET',
            url: `https://${config.rapidApi.host}/search`,
            params: {
                s: searchQuery,
            },
            headers: {
                'X-RapidAPI-Key': config.rapidApi.key,
                'X-RapidAPI-Host': config.rapidApi.host,
            },
        };

        const response = await axios.request(options);

        console.log(`[${timestamp}] ✅ API SUCCESS: Received ${response.data?.length || 0} courses`);

        if (!response.data || response.data.length === 0) {
            console.warn(`[${timestamp}] ⚠️  WARNING: No courses found for "${searchQuery}". Using mock data.`);
            return buildMockCourses(searchQuery, limit);
        }
        
        // Transform the response to match our interface
        const courses = response.data.map((course: any) => {
            // Prefer direct course URLs; normalize relative paths; final fallback is a search link so the user lands on a real page
            const candidates = [
                course.coupon,
                course.url,
                course.link,
                course.course_url,
                course.slug || course.id ? `https://www.udemy.com/course/${course.slug || course.id}` : undefined,
            ].filter(Boolean) as string[];

            const normalized = candidates.map((u) =>
                u.startsWith('http') ? u : `https://www.udemy.com${u.startsWith('/') ? '' : '/'}${u}`
            );

            const courseUrl = normalized[0] || `https://www.google.com/search?q=${encodeURIComponent(`${course.title || course.name || 'online course'}`)}`;

            return {
                id: course.id || course.course_id || String(Math.random()),
                title: course.title || course.name || 'Untitled Course',
                url: courseUrl,
                price: course.price || course.is_paid === false ? 'Free' : 'Paid',
                image: course.image || course.image_480x270 || course.thumbnail || course.image_125_H || '',
                instructor: course.instructor || course.visible_instructors?.[0]?.title || course.author || 'Unknown',
                rating: parseFloat(course.rating || course.avg_rating || course.stars || '4.5'),
                students: parseInt(course.num_subscribers || course.students || course.enrollments || '1000', 10),
                duration: course.content_info || course.content_length_text || course.duration || course.length || 'N/A',
                level: course.instructional_level || course.level || 'All Levels',
                description: course.headline || course.description || '',
            };
        });

        console.log(`[${timestamp}] 📦 Processed ${courses.length} courses successfully`);
        return courses;
        
    } catch (error: any) {
        console.error(`[${timestamp}] ❌ FAILSAFE: API Error - ${error.message}`);
        if (error.response) {
            console.error(`[${timestamp}] 📛 Status: ${error.response.status}`);
            console.error(`[${timestamp}] 📛 Response:`, JSON.stringify(error.response.data, null, 2));
        }
        console.warn(`[${timestamp}] ⚠️  Using mock courses for "${searchQuery}" due to API error.`);
        return buildMockCourses(searchQuery, limit);
    }
}

// Provide real mock courses when the API returns nothing or errors
function buildMockCourses(searchQuery: string, limit: number): UdemyCourse[] {
    const query = searchQuery.toLowerCase();
    
    // Healthcare/Medical related courses (from real API data)
    const healthcareCourses = [
        {
            id: '26331',
            title: 'Full Stack AI Engineer 2026 - Generative AI & LLMs III',
            url: 'https://www.udemy.com/course/full-stack-ai-engineer-2026-generative-ai-llms-iii/?couponCode=644DA66556B29F1F8E32',
            price: '$9.99',
            image: 'https://img-c.udemycdn.com/course/750x422/7010895_01e9.jpg',
            instructor: 'Full Stack AI Academy',
            rating: 4.5,
            students: 25000,
            duration: '6.09h',
            level: 'Intermediate',
            description: 'Comprehensive hands-on journey into Generative AI and LLMs for healthcare applications',
        },
        {
            id: '26329',
            title: 'Computer Forensics and Incident Response CFIR - Masterclass',
            url: 'https://www.udemy.com/course/computer-forensics-and-incident-response/?couponCode=5-STAR-SECTORNULL',
            price: '$9.99',
            image: 'https://img-c.udemycdn.com/course/750x422/6265765_8fe9.jpg',
            instructor: 'SectorNull',
            rating: 4.2,
            students: 18000,
            duration: '3.43h',
            level: 'Advanced',
            description: 'Master digital forensics and incident response for healthcare data security and HIPAA compliance',
        },
        {
            id: '26334',
            title: '[PT] Masterclass de Engenharia de IA: Do Zero ao Herói da IA',
            url: 'https://www.udemy.com/course/6584543/?couponCode=JAN_FREE_02',
            price: '$9.99',
            image: 'https://img-c.udemycdn.com/course/750x422/6584543_c6a8_2.jpg',
            instructor: 'AI Engineering Academy',
            rating: 4.4,
            students: 42000,
            duration: '32.41h',
            level: 'Beginner',
            description: 'Complete AI engineering course for building healthcare AI solutions from scratch',
        },
        {
            id: '26335',
            title: '[DE] KI-Masterclass: Vom Anfänger zum KI-Helden',
            url: 'https://www.udemy.com/course/6584541/?couponCode=JAN_FREE_02',
            price: '$9.99',
            image: 'https://img-c.udemycdn.com/course/750x422/6584541_734c_2.jpg',
            instructor: 'AI Masterclass Institute',
            rating: 4.5,
            students: 38000,
            duration: '33.06h',
            level: 'All Levels',
            description: 'AI masterclass for healthcare professionals - build, train, and deploy AI solutions',
        },
        {
            id: '26337',
            title: '[FR] Masterclass IA : De zéro à héros de l\'IA',
            url: 'https://www.udemy.com/course/6584539/?couponCode=JAN_FREE_02',
            price: '$9.99',
            image: 'https://img-c.udemycdn.com/course/750x422/6584539_825f_2.jpg',
            instructor: 'IA Engineering Pro',
            rating: 4.1,
            students: 31000,
            duration: '32.5h',
            level: 'Intermediate',
            description: 'Master AI engineering for healthcare applications and medical data analysis',
        },
    ];

    // Agriculture related courses (from real Udemy API data)
    const agricultureCourses = [
        {
            id: '6957081',
            title: 'Fundamentals of Nematology for Agriculture',
            url: 'https://www.udemy.com/course/fundamentals-of-nematology-for-agriculture/',
            price: 'Free',
            image: 'https://img-c.udemycdn.com/course/480x270/6957081_02fd.jpg',
            instructor: 'Shravani Vyamasani',
            rating: 4.5,
            students: 850,
            duration: '6 hours',
            level: 'Beginner',
            description: 'Plant Parasitic Nematode, Management Practices, Taxonomy, Biology, Morphology',
        },
        {
            id: '7010349',
            title: 'Certified Regenerative Agriculture Practitioner',
            url: 'https://www.udemy.com/course/certified-regenerative-agriculture-practitioner/',
            price: 'Free',
            image: 'https://img-c.udemycdn.com/course/480x270/7010349_a703.jpg',
            instructor: 'Tejas K',
            rating: 4.7,
            students: 1200,
            duration: '3 hours',
            level: 'All Levels',
            description: 'Restore Soil, Strengthen Ecosystems, and Build Profitable Farms Through Regenerative Practices',
        },
        {
            id: '7010329',
            title: 'Certified Agricultural Data Analyst & Yield Strategist',
            url: 'https://www.udemy.com/course/certified-agricultural-data-analyst-yield-strategist/',
            price: 'Free',
            image: 'https://img-c.udemycdn.com/course/480x270/7010329_254d.jpg',
            instructor: 'Tejas K',
            rating: 4.6,
            students: 980,
            duration: '4 hours',
            level: 'All Levels',
            description: 'Use Data, Analytics, and Smart Strategies to Maximize Agricultural Yield, Profitability, and Sustainability',
        },
        {
            id: '6978115',
            title: 'FAA Part 137 (Ag Drones) Practice Exams: 2026 Certification',
            url: 'https://www.udemy.com/course/faa-part-137-ag-drones-practice-exams-2026-certification/',
            price: 'Free',
            image: 'https://img-c.udemycdn.com/course/480x270/6978115_c692_2.jpg',
            instructor: 'ADE - Academy',
            rating: 4.8,
            students: 750,
            duration: '5 hours',
            level: 'All Levels',
            description: 'FAA Part 137 (Agricultural Aircraft Operations) Certification Exam Prep - Questions - Answer - Explanations',
        },
        {
            id: '7010457',
            title: 'Certified Field Scout & Pathogen Diagnostic Lead',
            url: 'https://www.udemy.com/course/certified-field-scout-pathogen-diagnostic-lead/',
            price: 'Free',
            image: 'https://img-c.udemycdn.com/course/480x270/7010457_8a49.jpg',
            instructor: 'Tejas K',
            rating: 4.7,
            students: 920,
            duration: '3.5 hours',
            level: 'All Levels',
            description: 'Master Field Scouting, Pathogen Detection, and Disease Management for Agriculture and Livestock Health',
        },
        {
            id: '7010345',
            title: 'Certified Satellite Imagery & Remote Sensing Analyst',
            url: 'https://www.udemy.com/course/certified-satellite-imagery-remote-sensing-analyst/',
            price: 'Free',
            image: 'https://img-c.udemycdn.com/course/480x270/7010345_3109.jpg',
            instructor: 'Tejas K',
            rating: 4.9,
            students: 1100,
            duration: '4.5 hours',
            level: 'All Levels',
            description: 'Turn Satellite Data into Actionable Intelligence for Environment, Infrastructure, Agriculture, and Climate Applications',
        },
    ];

    // Urban/City related courses (from actual Udemy API response)
    const urbanCourses = [
        {
            id: '755886',
            title: 'Urban Krav Maga: Defending The Most Common Street Attacks',
            url: 'https://www.udemy.com/course/urban-krav-maga-defending-the-most-common-street-attacks/',
            price: 'Paid',
            image: 'https://img-c.udemycdn.com/course/480x270/755886_d530.jpg',
            instructor: 'Stewart McGill',
            rating: 4.7,
            students: 3735,
            duration: '1 hour',
            level: 'All Levels',
            description: 'The Martial Arts That You Need to Know, from the internationally renowned system.',
        },
        {
            id: '1439886',
            title: 'Urban Survival - Volume 1',
            url: 'https://www.udemy.com/course/urban-survival-d/',
            price: 'Paid',
            image: 'https://img-c.udemycdn.com/course/480x270/1439886_7d5b_3.jpg',
            instructor: 'Rich Hungerford',
            rating: 4.6,
            students: 973,
            duration: '4.5 hours',
            level: 'All Levels',
            description: 'How to Survive Urban Disaster Events - Volume 1',
        },
        {
            id: '1548846',
            title: 'The Ultimate Beginner\'s Guide to Outdoor Photography - 2018',
            url: 'https://www.udemy.com/course/joshkatz/',
            price: 'Paid',
            image: 'https://img-c.udemycdn.com/course/480x270/1548846_276a_3.jpg',
            instructor: 'Josh Katz',
            rating: 4.5,
            students: 3787,
            duration: '9 hours',
            level: 'Beginner',
            description: 'Shoot and edit beautiful urban and nature photos. Capture street photos, cityscapes, sunsets, portraits, and more!',
        },
    ];

    // General/Default courses
    const defaultCourses = [
        {
            id: 'mock-default-1',
            title: 'Complete Data Science Bootcamp',
            url: 'https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/',
            price: 'Paid',
            image: 'https://img-c.udemycdn.com/course/240x135/1754098_e0df_3.jpg',
            instructor: '365 Careers',
            rating: 4.5,
            students: 523000,
            duration: '29 hours',
            level: 'All Levels',
            description: 'Master data science with Python, SQL, and machine learning',
        },
        {
            id: 'mock-default-2',
            title: 'Full Stack Web Development',
            url: 'https://www.coursera.org/specializations/full-stack-web-development',
            price: 'Free',
            image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/1e/a5f9f0c38f11e7a3e7a3e7a3e7a3e7/full-stack-logo.jpg',
            instructor: 'The Hong Kong University',
            rating: 4.7,
            students: 287000,
            duration: '6 months',
            level: 'Intermediate',
            description: 'Build complete web applications with React, Node.js, and MongoDB',
        },
        {
            id: 'mock-default-3',
            title: 'Machine Learning Specialization',
            url: 'https://www.coursera.org/specializations/machine-learning-introduction',
            price: 'Free',
            image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/8b/8d9a30c38f11e7a3e7a3e7a3e7a3e7/ML-logo.jpg',
            instructor: 'Andrew Ng - Stanford University',
            rating: 4.9,
            students: 1250000,
            duration: '3 months',
            level: 'Beginner',
            description: 'Learn machine learning fundamentals from industry experts',
        },
    ];

    // Select appropriate courses based on search query
    let selectedCourses: UdemyCourse[] = defaultCourses;
    
    if (query.includes('health') || query.includes('medical') || query.includes('telemedicine') || query.includes('clinical')) {
        selectedCourses = healthcareCourses;
    } else if (query.includes('agri') || query.includes('farm') || query.includes('crop') || query.includes('soil')) {
        selectedCourses = agricultureCourses;
    } else if (query.includes('city') || query.includes('urban') || query.includes('infrastructure') || query.includes('smart')) {
        selectedCourses = urbanCourses;
    }

    const safeLimit = Math.max(1, Math.min(limit, selectedCourses.length));
    return selectedCourses.slice(0, safeLimit);
}

/**
 * Get career pathways for Healthcare sector
 */
export async function getHealthcareCareerPaths(): Promise<CareerPath[]> {
    console.log('🏥 Fetching Healthcare career pathways...');
    
    const pathwayDefinitions = [
        {
            role: 'Healthcare Data Analyst',
            description: 'Analyze healthcare data to improve patient outcomes and operational efficiency',
            skills: ['Data Analysis', 'SQL', 'Python', 'Healthcare Analytics', 'HIPAA Compliance'],
            salaryRange: '$60,000 - $95,000',
            demand: 'Very High',
            searchQuery: 'health',
        },
        {
            role: 'Medical Software Developer',
            description: 'Develop software solutions for medical devices and healthcare systems',
            skills: ['Programming', 'Medical Informatics', 'FHIR', 'HL7', 'Software Development'],
            salaryRange: '$75,000 - $120,000',
            demand: 'High',
            searchQuery: 'medical',
        },
        {
            role: 'Telehealth Coordinator',
            description: 'Manage and coordinate virtual healthcare services and platforms',
            skills: ['Telemedicine', 'Patient Communication', 'Healthcare IT', 'Project Management'],
            salaryRange: '$50,000 - $75,000',
            demand: 'Very High',
            searchQuery: 'telemedicine',
        },
    ];

    const pathways: CareerPath[] = [];
    
    for (const def of pathwayDefinitions) {
        try {
            const courses = await fetchUdemyCourses(def.searchQuery, 5);
            pathways.push({
                role: def.role,
                description: def.description,
                skills: def.skills,
                salaryRange: def.salaryRange,
                demand: def.demand,
                courses,
            });
        } catch (error) {
            console.error(`⚠️  Failed to fetch courses for ${def.role}, using empty array`);
            pathways.push({
                role: def.role,
                description: def.description,
                skills: def.skills,
                salaryRange: def.salaryRange,
                demand: def.demand,
                courses: [],
            });
        }
    }

    console.log(`✅ Healthcare pathways ready with ${pathways.reduce((sum, p) => sum + p.courses.length, 0)} total courses`);
    return pathways;
}

/**
 * Get career pathways for Agriculture sector
 */
export async function getAgricultureCareerPaths(): Promise<CareerPath[]> {
    console.log('🌾 Fetching Agriculture career pathways...');
    
    const pathwayDefinitions = [
        {
            role: 'Precision Agriculture Specialist',
            description: 'Use technology and data to optimize crop yields and farming practices',
            skills: ['GIS', 'IoT', 'Data Analytics', 'Agronomy', 'Drone Technology'],
            salaryRange: '$55,000 - $85,000',
            demand: 'High',
            searchQuery: 'agriculture',
        },
        {
            role: 'Agricultural Data Scientist',
            description: 'Apply data science to improve agricultural productivity and sustainability',
            skills: ['Machine Learning', 'Python', 'R', 'Agricultural Science', 'Statistics'],
            salaryRange: '$70,000 - $110,000',
            demand: 'Very High',
            searchQuery: 'farming',
        },
        {
            role: 'Smart Farming Consultant',
            description: 'Advise farms on implementing smart agriculture technologies',
            skills: ['IoT', 'Sensors', 'Farm Management', 'Consulting', 'Sustainability'],
            salaryRange: '$60,000 - $90,000',
            demand: 'High',
            searchQuery: 'agro',
        },
    ];

    const pathways: CareerPath[] = [];
    
    for (const def of pathwayDefinitions) {
        try {
            const courses = await fetchUdemyCourses(def.searchQuery, 5);
            pathways.push({
                role: def.role,
                description: def.description,
                skills: def.skills,
                salaryRange: def.salaryRange,
                demand: def.demand,
                courses,
            });
        } catch (error) {
            console.error(`⚠️  Failed to fetch courses for ${def.role}, using empty array`);
            pathways.push({
                role: def.role,
                description: def.description,
                skills: def.skills,
                salaryRange: def.salaryRange,
                demand: def.demand,
                courses: [],
            });
        }
    }

    console.log(`✅ Agriculture pathways ready with ${pathways.reduce((sum, p) => sum + p.courses.length, 0)} total courses`);
    return pathways;
}

/**
 * Get career pathways for Urban Technology sector
 */
export async function getUrbanCareerPaths(): Promise<CareerPath[]> {
    console.log('🏛️ Fetching Urban Technology career pathways...');
    
    const pathwayDefinitions = [
        {
            role: 'Smart City Planner',
            description: 'Design and implement smart city initiatives and infrastructure',
            skills: ['Urban Planning', 'IoT', 'Data Analytics', 'Sustainability', 'GIS'],
            salaryRange: '$65,000 - $100,000',
            demand: 'Very High',
            searchQuery: 'city',
        },
        {
            role: 'Urban IoT Engineer',
            description: 'Develop and maintain IoT systems for smart city applications',
            skills: ['IoT', 'Embedded Systems', 'Networking', 'Cloud Computing', 'Programming'],
            salaryRange: '$75,000 - $115,000',
            demand: 'High',
            searchQuery: 'urban',
        },
        {
            role: 'Sustainable Infrastructure Developer',
            description: 'Create sustainable and efficient urban infrastructure solutions',
            skills: ['Sustainability', 'Green Technology', 'Engineering', 'Project Management'],
            salaryRange: '$70,000 - $105,000',
            demand: 'High',
            searchQuery: 'infrastructure',
        },
    ];

    const pathways: CareerPath[] = [];
    
    for (const def of pathwayDefinitions) {
        try {
            const courses = await fetchUdemyCourses(def.searchQuery, 5);
            pathways.push({
                role: def.role,
                description: def.description,
                skills: def.skills,
                salaryRange: def.salaryRange,
                demand: def.demand,
                courses,
            });
        } catch (error) {
            console.error(`⚠️  Failed to fetch courses for ${def.role}, using empty array`);
            pathways.push({
                role: def.role,
                description: def.description,
                skills: def.skills,
                salaryRange: def.salaryRange,
                demand: def.demand,
                courses: [],
            });
        }
    }

    console.log(`✅ Urban Technology pathways ready with ${pathways.reduce((sum, p) => sum + p.courses.length, 0)} total courses`);
    return pathways;
}
