// CV Position Data Structure
// Used for interactive timeline cards and skill visualizations

// Unique color for each skill (consistent across all positions)
const skillColors = {
    'Python': '#667eea',
    'AI/LLMs': '#8b5cf6',
    'AI Automation': '#a78bfa',
    'Data Collection': '#4ecdc4',
    'Tool Development': '#06b6d4',
    'Client Collaboration': '#f6ad55',
    'Research Design': '#14b8a6',
    'Literature Review': '#2dd4bf',
    'Data Gap Analysis': '#5eead4',
    'Academic Writing': '#fb923c',
    'Political Economy': '#f59e0b',
    'Data Preprocessing': '#3b82f6',
    'Policy Research': '#60a5fa',
    'Team Collaboration': '#fbbf24',
    'Team Management': '#764ba2',
    'Quality Assurance': '#48bb78',
    'Training & Mentoring': '#fdba74',
    'Arabic NLP': '#ec4899',
    'Data Analysis': '#0ea5e9',
    'Quantitative Research': '#22d3ee',
    'Middle East Studies': '#f472b6',
    'Algorithmic Collection': '#818cf8',
    'Teaching': '#fb7185',
    'Machine Learning': '#6366f1',
    'Data Visualization': '#10b981',
    'Curriculum Design': '#34d399',
    'Teaching Support': '#fca5a5',
    'SQL': '#4f46e5',
    'Mentoring': '#f97316',
    'Dataset Construction': '#06b6d4',
    'Arabic Language': '#db2777',
    'Trend Analysis': '#2563eb',
    'Data Validation': '#059669',
    'Political Science': '#be185d',
    'Field Research': '#0891b2',
    'Conflict Zones': '#dc2626',
    'Adaptability': '#84cc16',
    'Historical Analysis': '#0284c7',
    'Lebanese History': '#9333ea',
    'Archival Research': '#7c3aed',
    'Ethnographic Methods': '#06b6d4',
    'Automation': '#8b5cf6'
};

const cvPositions = {
    'freelance-yale-2025': {
        title: 'Yale University – Jordan Protest Events Project',
        organization: 'Freelance Research Data Scientist',
        location: 'Remote',
        dates: 'Apr 2025 – Present',
        responsibilities: [
            'Collaborating on Jordan protest event data project',
            'Designing and implementing custom AI-powered tool for automated event data collection'
        ],
        skills: [
            { name: 'Tool Development', percentage: 40, category: 'technical' },
            { name: 'AI/LLMs', percentage: 35, category: 'technical' },
            { name: 'Python', percentage: 25, category: 'technical' }
        ]
    },
    'freelance-oxford-2025': {
        title: 'Oxford University – Exploitation & Market Systems Research',
        organization: 'Freelance Research Data Scientist',
        location: 'Remote',
        dates: 'Apr 2025 – Present',
        responsibilities: [
            'Collaborating on a pilot conference to examine exploitation, coercion, and slavery in market systems and address data gaps',
            'Compiling and analyzing existing research to provide a comprehensive assessment of the current state of data in this field'
        ],
        skills: [
            { name: 'Literature Review', percentage: 25, category: 'research' },
            { name: 'Data Gap Analysis', percentage: 25, category: 'research' },
            { name: 'Data Analysis', percentage: 25, category: 'technical' },
            { name: 'Academic Writing', percentage: 25, category: 'communication' }
        ]
    },
    'rockwool-2024': {
        title: 'Research Data Scientist',
        organization: 'Rockwool Foundation',
        location: 'Berlin, Germany',
        dates: 'Dec 2024 – Aug 2025',
        responsibilities: [
            'Conducting public policy research analyzing the impact of infrastructure changes (e.g., hospital closures) on German election outcomes',
            'Performing comprehensive data preprocessing and cleaning of public datasets',
            'Collaborating with interdisciplinary team to formulate research methodologies and approaches'
        ],
        skills: [
            { name: 'Data Preprocessing', percentage: 35, category: 'technical' },
            { name: 'Python', percentage: 35, category: 'technical' },
            { name: 'Policy Research', percentage: 30, category: 'research' }
        ]
    },
    'georgetown-pm-2023': {
        title: 'Project Manager',
        organization: 'Georgetown University',
        location: 'Washington, D.C., USA',
        dates: 'Apr 2023 – Oct 2024',
        responsibilities: [
            'Developed a data collection strategy for quantitative event datasets on the second Arab Spring wave (2019) in Sudan, Algeria, and Lebanon',
            'Oversee all aspects of research projects, including planning and execution',
            'Designed and conducted training sessions for research assistants',
            'Managed and guided three teams of 2-5 research assistants',
            'Implemented quality control measures and conducted data audits to ensure data accuracy',
            'Developed automated research tools (i.e. Python Scripts, AI models) to streamline protest event data collection by identifying events, categorizing, and storing key variables from Arabic news articles for large-scale research'
        ],
        skills: [
            { name: 'Team Management', percentage: 50, category: 'management' },
            { name: 'Python', percentage: 25, category: 'technical' },
            { name: 'AI Automation', percentage: 25, category: 'technical' }
        ]
    },
    'georgetown-sra-2021': {
        title: 'Senior Research Assistant',
        organization: 'Georgetown University',
        location: 'Washington, D.C., USA',
        dates: 'Jan 2021 – Jul 2023',
        responsibilities: [
            'Developed algorithmic data collection methods in Python, to automate key variables extraction and data entry',
            'Collected and analyzed protest event data from the Iraqi Arab Spring protest wave (2011) and the 2019 Tishreen uprising, drawing on local Iraqi news sources and social media sources',
            'Collected Arabic-language qualitative data on Egypt\'s football ultras; analyzed data on home districts of ultras killed during and after the 2011 revolution'
        ],
        skills: [
            { name: 'Python', percentage: 30, category: 'technical' },
            { name: 'Algorithmic Collection', percentage: 25, category: 'technical' },
            { name: 'Data Analysis', percentage: 25, category: 'technical' },
            { name: 'Quantitative Research', percentage: 20, category: 'research' }
        ]
    },
    'lewagon-lecturer-2023': {
        title: 'Data Science Lecturer',
        organization: 'Le Wagon',
        location: 'Cologne, Germany',
        dates: 'Apr 2023 – Jul 2024',
        responsibilities: [
            'As a data science lecturer, I lead students during the bootcamp through the intricacies of data analysis, machine learning, and data visualization, ensuring they are well-prepared to tackle real-world data science challenges upon completing their training'
        ],
        skills: [
            { name: 'Teaching', percentage: 35, category: 'communication' },
            { name: 'Machine Learning', percentage: 25, category: 'technical' },
            { name: 'Data Visualization', percentage: 20, category: 'technical' },
            { name: 'Python', percentage: 20, category: 'technical' }
        ]
    },
    'lewagon-ta-2022': {
        title: 'Senior Teaching Assistant',
        organization: 'Le Wagon',
        location: 'Cologne, Germany',
        dates: 'Jul 2022 – Apr 2023',
        responsibilities: [
            'Helping students in the full-time Data Science bootcamp complete their daily coding challenges, from debugging their code to reinforcing fundamental concepts from their coursework',
            'Supporting the students\' needs during their graduation projects',
            'Speaking at workshops organized by the company, which gives an introduction to Data Science topics (e.g. Advanced Python and SQL, Data Analysis & Visualization, Machine Learning, Deep Learning...)'
        ],
        skills: [
            { name: 'Teaching Support', percentage: 35, category: 'communication' },
            { name: 'Python', percentage: 30, category: 'technical' },
            { name: 'SQL', percentage: 20, category: 'technical' },
            { name: 'Machine Learning', percentage: 15, category: 'technical' }
        ]
    },
    'princeton-ra-2018': {
        title: 'Research Assistant',
        organization: 'Princeton University',
        location: 'New Jersey, USA',
        dates: 'Apr 2018 – Oct 2021',
        responsibilities: [
            'Constructed a dataset of protest events in Egypt during the final eighteen months of the transition (2012-2013), using the Egyptian Arabic-language newspaper al-Masry al-Youm',
            'Analyzed data for descriptive trends and patterns and conducted diagnostic assessments for data accuracy and quality'
        ],
        skills: [
            { name: 'Dataset Construction', percentage: 40, category: 'research' },
            { name: 'Data Analysis', percentage: 30, category: 'technical' },
            { name: 'Data Validation', percentage: 30, category: 'process' }
        ]
    },
    'princeton-fieldwork-2019': {
        title: 'Research Assistant (Fieldwork)',
        organization: 'Princeton University',
        location: 'Syria',
        dates: 'Nov 2019 – May 2020',
        responsibilities: [
            'Contributed to the construction of a dataset of quantitative data which was collected through ethnographic fieldwork for the project "How money moves in wartime Syria"'
        ],
        skills: [
            { name: 'Dataset Construction', percentage: 35, category: 'research' },
            { name: 'Ethnographic Methods', percentage: 30, category: 'research' },
            { name: 'Field Research', percentage: 20, category: 'research' },
            { name: 'Quantitative Research', percentage: 15, category: 'research' }
        ]
    },
    'aub-ra-2019': {
        title: 'Research Assistant',
        organization: 'American University of Beirut',
        location: 'Lebanon',
        dates: 'Jan 2019 – May 2021',
        responsibilities: [
            'Collected and analyzed protest event data (1889-2019) for the project "Social movements in post-war Lebanon"'
        ],
        skills: [
            { name: 'Data Collection', percentage: 35, category: 'research' },
            { name: 'Historical Analysis', percentage: 25, category: 'research' },
            { name: 'Data Analysis', percentage: 25, category: 'technical' },
            { name: 'Archival Research', percentage: 15, category: 'research' }
        ]
    }
};
