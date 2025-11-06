// CV Position Data Structure
// Used for interactive timeline cards and skill visualizations

const skillCategoryColors = {
    technical: '#667eea',
    management: '#764ba2',
    research: '#4ecdc4',
    communication: '#f6ad55',
    process: '#48bb78',
    domain: '#ed64a6'
};

const cvPositions = {
    'freelance-yale-2025': {
        title: 'Yale University — Jordan Protest Events Project',
        organization: 'Freelance Research Data Scientist',
        location: 'Remote',
        dates: 'Apr 2025 – Present',
        responsibilities: [
            'Collaborating on Jordan protest event data project',
            'Designing and implementing custom AI-powered tool for automated event data collection'
        ],
        skills: [
            { name: 'Python', percentage: 30, category: 'technical' },
            { name: 'AI/LLMs', percentage: 25, category: 'technical' },
            { name: 'Data Collection', percentage: 20, category: 'research' },
            { name: 'Tool Development', percentage: 15, category: 'technical' },
            { name: 'Client Collaboration', percentage: 10, category: 'communication' }
        ]
    },
    'freelance-oxford-2025': {
        title: 'Oxford University — Exploitation & Market Systems Research',
        organization: 'Freelance Research Data Scientist',
        location: 'Remote',
        dates: 'Apr 2025 – Present',
        responsibilities: [
            'Collaborating on a pilot conference to examine exploitation, coercion, and slavery in market systems and address data gaps',
            'Compiling and analyzing existing research to provide a comprehensive assessment of the current state of data in this field'
        ],
        skills: [
            { name: 'Research Design', percentage: 30, category: 'research' },
            { name: 'Literature Review', percentage: 25, category: 'research' },
            { name: 'Data Gap Analysis', percentage: 20, category: 'research' },
            { name: 'Academic Writing', percentage: 15, category: 'communication' },
            { name: 'Political Economy', percentage: 10, category: 'domain' }
        ]
    },
    'rockwool-2024': {
        title: 'Research Data Scientist',
        organization: 'Rockwool Foundation',
        location: 'Berlin, Germany',
        dates: 'Dec 2024 – Aug 2025',
        responsibilities: [
            'Conducting public policy research on the impact of infrastructure changes (e.g., hospital closures) on German election results',
            'Performing data preprocessing and cleaning of public datasets',
            'Collaborating with an interdisciplinary team to create research methodologies'
        ],
        skills: [
            { name: 'Python', percentage: 25, category: 'technical' },
            { name: 'Data Preprocessing', percentage: 25, category: 'technical' },
            { name: 'Policy Research', percentage: 20, category: 'research' },
            { name: 'Research Design', percentage: 15, category: 'research' },
            { name: 'Team Collaboration', percentage: 15, category: 'communication' }
        ]
    },
    'georgetown-pm-2023': {
        title: 'Project Manager',
        organization: 'Georgetown University',
        location: 'Washington, D.C., USA',
        dates: 'Apr 2023 – Oct 2024',
        responsibilities: [
            'Developed a data collection strategy for quantitative event datasets on the second Arab Spring wave (2019) in Sudan, Algeria, and Lebanon',
            'Oversaw all aspects of research projects, including planning and execution',
            'Designed and conducted training sessions for research assistants',
            'Managed and guided three teams of 2-5 research assistants',
            'Implemented quality control measures and conducted data audits to ensure data accuracy',
            'Developed automated research tools (Python scripts, AI models) to streamline data collection from Arabic news articles'
        ],
        skills: [
            { name: 'Team Management', percentage: 25, category: 'management' },
            { name: 'Python', percentage: 20, category: 'technical' },
            { name: 'AI Automation', percentage: 20, category: 'technical' },
            { name: 'Quality Assurance', percentage: 15, category: 'process' },
            { name: 'Training & Mentoring', percentage: 10, category: 'communication' },
            { name: 'Arabic NLP', percentage: 10, category: 'domain' }
        ]
    },
    'georgetown-sra-2021': {
        title: 'Senior Research Assistant',
        organization: 'Georgetown University',
        location: 'Washington, D.C., USA',
        dates: 'Jan 2021 – Jul 2023',
        responsibilities: [
            'Developed algorithmic data collection methods in Python to automate data extraction',
            'Collected and analyzed protest event data from the Iraqi Arab Spring protest wave (2011) and the 2019 Tishreen uprising, using local news and social media',
            'Collected and analyzed qualitative data on Egypt\'s football ultras, focusing on home districts of ultras killed during and after the 2011 revolution'
        ],
        skills: [
            { name: 'Python', percentage: 30, category: 'technical' },
            { name: 'Data Analysis', percentage: 25, category: 'technical' },
            { name: 'Qualitative Research', percentage: 20, category: 'research' },
            { name: 'Middle East Studies', percentage: 15, category: 'domain' },
            { name: 'Algorithmic Collection', percentage: 10, category: 'technical' }
        ]
    },
    'lewagon-lecturer-2023': {
        title: 'Data Science Lecturer',
        organization: 'Le Wagon',
        location: 'Cologne, Germany',
        dates: 'Apr 2023 – Jul 2024',
        responsibilities: [
            'Guided students through data analysis, machine learning, and data visualization in a bootcamp setting'
        ],
        skills: [
            { name: 'Teaching', percentage: 30, category: 'communication' },
            { name: 'Machine Learning', percentage: 25, category: 'technical' },
            { name: 'Data Visualization', percentage: 20, category: 'technical' },
            { name: 'Python', percentage: 15, category: 'technical' },
            { name: 'Curriculum Design', percentage: 10, category: 'process' }
        ]
    },
    'lewagon-ta-2022': {
        title: 'Senior Teaching Assistant',
        organization: 'Le Wagon',
        location: 'Cologne, Germany',
        dates: 'Jul 2022 – Apr 2023',
        responsibilities: [
            'Helped students with daily coding challenges, debugging, and reinforcing fundamental concepts',
            'Supported students with their graduation projects',
            'Spoke at workshops introducing data science topics like Python, SQL, and machine learning'
        ],
        skills: [
            { name: 'Teaching Support', percentage: 25, category: 'communication' },
            { name: 'Python', percentage: 25, category: 'technical' },
            { name: 'SQL', percentage: 20, category: 'technical' },
            { name: 'Machine Learning', percentage: 15, category: 'technical' },
            { name: 'Mentoring', percentage: 15, category: 'communication' }
        ]
    },
    'princeton-ra-2018': {
        title: 'Research Assistant',
        organization: 'Princeton University',
        location: 'New Jersey, USA',
        dates: 'Apr 2018 – Oct 2021',
        responsibilities: [
            'Constructed a dataset of protest events in Egypt (2012-2013) using an Arabic-language newspaper',
            'Analyzed data for trends and patterns and performed diagnostic assessments for accuracy'
        ],
        skills: [
            { name: 'Dataset Construction', percentage: 30, category: 'research' },
            { name: 'Arabic Language', percentage: 20, category: 'domain' },
            { name: 'Trend Analysis', percentage: 20, category: 'technical' },
            { name: 'Data Validation', percentage: 15, category: 'process' },
            { name: 'Political Science', percentage: 15, category: 'domain' }
        ]
    },
    'princeton-fieldwork-2019': {
        title: 'Research Assistant (Fieldwork)',
        organization: 'Princeton University',
        location: 'Syria',
        dates: 'Nov 2019 – May 2020',
        responsibilities: [
            'Contributed to a quantitative dataset collected through ethnographic fieldwork for the project "How money moves in wartime Syria"'
        ],
        skills: [
            { name: 'Field Research', percentage: 40, category: 'research' },
            { name: 'Data Collection', percentage: 30, category: 'research' },
            { name: 'Conflict Zones', percentage: 15, category: 'domain' },
            { name: 'Adaptability', percentage: 15, category: 'process' }
        ]
    },
    'aub-ra-2019': {
        title: 'Research Assistant',
        organization: 'American University of Beirut',
        location: 'Lebanon',
        dates: 'Jan 2019 – May 2021',
        responsibilities: [
            'Collected and analyzed protest event data for "Social movements in post-war Lebanon" (1889-2019)'
        ],
        skills: [
            { name: 'Data Collection', percentage: 30, category: 'research' },
            { name: 'Historical Analysis', percentage: 25, category: 'research' },
            { name: 'Data Analysis', percentage: 20, category: 'technical' },
            { name: 'Lebanese History', percentage: 15, category: 'domain' },
            { name: 'Archival Research', percentage: 10, category: 'research' }
        ]
    }
};
