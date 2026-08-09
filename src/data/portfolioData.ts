export interface Project {
  id: string;
  title: string;
  shortSummary: string;
  category: 'Game Dev' | 'Desktop App' | 'Backend' | 'IoT / Robotics';
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  problem: string;
  approach: string;
  architecture: {
    title: string;
    details: string[];
  }[];
  challenges: {
    description: string;
    solution: string;
  }[];
  lessons: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  technologies: string[];
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: 'Primary' | 'Experienced with' | 'Familiar with' | 'Currently learning';
  }[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    aboutText: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    cvUrl: string;
    languages: { name: string; level: string }[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  teamLeadership: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  community: {
    title: string;
    description: string;
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Khaled Alnwelate Masre',
    title: 'Software Engineer & Game Developer',
    tagline: 'Software Engineering graduate building modular game systems, desktop applications, backend services, and intelligent software.',
    bio: 'I am a Software Engineering graduate based in Istanbul, Türkiye, interested in game development, backend engineering, AI, robotics, and IoT. I enjoy designing modular systems, understanding the "why" behind software architectures, and turning technical ideas into high-quality working software.',
    aboutText: 'I recently graduated with a Software Engineering B.S. degree taught entirely in English. Throughout my academic journey and internships, I have explored a wide range of systems—from low-level IoT and robotics nodes using ROS 2 to decoupled component-based architectures in Godot 2D platformers and robust FastAPI microservices. \n\nI believe strong software architecture and modular design are what make applications resilient and maintainable. Rather than just adding features, I focus on establishing core structures that separate concerns cleanly and allow systems to scale. I am actively looking for junior software developer/engineer opportunities where I can apply my curiosity, technical discipline, and collaborative mindset to real-world products.',
    location: 'Istanbul, Türkiye',
    email: 'khaledalnwelate@gmail.com',
    phone: '+90 555 093 9548',
    github: 'https://github.com/khalednm-byte',
    linkedin: 'https://www.linkedin.com/in/khaled-alnwelate-15337a25a',
    cvUrl: '/cv.pdf',
    languages: [
      { name: 'English', level: 'Fluent / Professional working proficiency (English-taught B.S.)' },
      { name: 'Arabic', level: 'Native' },
      { name: 'Turkish', level: 'Basic / Conversational' }
    ]
  },
  skills: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 'Primary' },
        { name: 'GDScript', level: 'Primary' },
        { name: 'Python', level: 'Primary' },
        { name: 'C++', level: 'Experienced with' },
        { name: 'C', level: 'Experienced with' },
        { name: 'SQL', level: 'Experienced with' },
        { name: 'JavaScript', level: 'Familiar with' },
        { name: 'HTML / CSS', level: 'Familiar with' }
      ]
    },
    {
      title: 'Game Development',
      skills: [
        { name: 'Godot Engine (4.x)', level: 'Primary' },
        { name: '2D Game Development', level: 'Primary' },
        { name: 'Component-Based Architecture', level: 'Primary' },
        { name: 'Character Controllers & Physics', level: 'Primary' },
        { name: 'Animation States & Event Locks', level: 'Primary' },
        { name: 'Collision & Hitbox Systems', level: 'Primary' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'FastAPI', level: 'Experienced with' },
        { name: 'SQLModel', level: 'Experienced with' },
        { name: 'Pydantic & Request Validation', level: 'Experienced with' },
        { name: 'SQLite', level: 'Experienced with' },
        { name: 'RESTful API Design', level: 'Experienced with' },
        { name: 'Password Hashing & Auth Flow', level: 'Experienced with' }
      ]
    },
    {
      title: 'Robotics & IoT',
      skills: [
        { name: 'ROS 2 (Robot Operating System)', level: 'Experienced with' },
        { name: 'Gazebo & RViz Simulation', level: 'Experienced with' },
        { name: 'Raspberry Pi', level: 'Experienced with' },
        { name: 'MQTT & Mosquitto broker', level: 'Experienced with' },
        { name: 'BME688 Gas Sensor Integration', level: 'Experienced with' },
        { name: 'Bosch BME AI-Studio', level: 'Experienced with' },
        { name: 'Arduino & STM32 Microcontrollers', level: 'Experienced with' }
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git & GitHub', level: 'Primary' },
        { name: 'Gradle & Build Systems', level: 'Experienced with' },
        { name: 'Linux / Ubuntu', level: 'Experienced with' },
        { name: 'VS Code & Eclipse IDEs', level: 'Primary' },
        { name: 'Windows OS', level: 'Primary' }
      ]
    }
  ],
  projects: [
    {
      id: 'godot-2d-platformer',
      title: 'Royal Blood — Godot 2D Platformer',
      shortSummary: 'A 2D side-scrolling platformer focusing on clean, modular component-based game architecture built in Godot 4 & GDScript.',
      category: 'Game Dev',
      technologies: ['Godot Engine 4.x', 'GDScript', 'CharacterBody2D', 'AnimatedSprite2D', 'Collision Matrix', 'State Pattern'],
      githubUrl: 'https://github.com/khalednm-byte',
      featured: true,
      problem: 'Developing interactive gameplay systems often leads to bloated script files where movement logic, animations, player inputs, and combat states are tightly coupled, resulting in brittle code that is difficult to scale, debug, or reuse.',
      approach: 'I designed the character controller using a modular, decoupled component architecture where each component is a separate Godot node with a single responsibility. This cleanly separates inputs from movement execution and combat actions, creating highly reusable systems.',
      architecture: [
        {
          title: 'Movement Component',
          details: [
            'Manages physics calculations for the CharacterBody2D.',
            'Handles custom parameters for ground acceleration, deceleration, air drag, gravity scale, jump dynamics, and crouch velocities.'
          ]
        },
        {
          title: 'Animation Component',
          details: [
            'Directly controls AnimatedSprite2D playback states.',
            'Implements animation locks, turning sequences, sliding transitions, and maps triggers to gameplay states.'
          ]
        },
        {
          title: 'Input Component',
          details: [
            'Captures raw player inputs and maps them to abstract actions.',
            'Decoupling this component allows replacing human keyboard/gamepad actions with autonomous AI scripts without altering movement or combat systems.'
          ]
        },
        {
          title: 'Health Component',
          details: [
            'Tracks player health, shield limits, and invincibility frames.',
            'Processes damage formulas and handles overflow computations (spillover damage from shields directly to health).'
          ]
        },
        {
          title: 'Combat System',
          details: [
            'Uses modular Hitbox (damage dealers) and Hurtbox (damage receivers) areas.',
            'Coordinates collision shape activation based on frame-specific attack data to trigger combo timing window events.'
          ]
        }
      ],
      challenges: [
        {
          description: 'Conflict between animation locks (e.g., stopping movement during heavy attack) and high-priority player commands (e.g., dodging or turning).',
          solution: 'Implemented an animation-locked state machine. Higher priority inputs (like a perfectly timed dodge) trigger callback events that immediately interrupt the active animation lock and clear execution states.'
        },
        {
          description: 'Synchronizing attack hitboxes with visual swing frames and handling character flipping without offset errors.',
          solution: 'Instead of manually hardcoding sprite offsets, I grouped weapon CollisionShapes under a pivot node. Flipping the character scales the pivot on the X-axis (transform.scale.x = -1), guaranteeing hitboxes and sprites remain perfectly aligned.'
        }
      ],
      lessons: [
        'Component-based development in game engines yields significant long-term productivity gains. Reusable components (e.g., Health, Hitbox) were easily ported to enemy NPCs.',
        'Decoupling game input from movement calculations simplifies the process of coding behaviors for AI agents or implementing remote networked input.'
      ]
    },
    {
      id: 'laho-desktop',
      title: 'LAHO Desktop Application',
      shortSummary: 'A Java FX desktop application conceptually inspired by game distribution platforms like Steam, exploring system architectures.',
      category: 'Desktop App',
      technologies: ['Java', 'JavaFX', 'FXML', 'Gradle', 'Eclipse IDE', 'OOP Design Patterns'],
      githubUrl: 'https://github.com/khalednm-byte',
      featured: true,
      problem: 'Understanding how to organize, package, and build a large-scale Java desktop application with modular design, responsive user interfaces, and robust file and data management.',
      approach: 'Built a multi-screen Java FX application under the base package `com.khaled.laho`. I structured the application using Model-View-Controller (MVC) architecture, utilizing FXML for layout definition and Gradle for dependency and build management.',
      architecture: [
        {
          title: 'Core Architecture (`com.khaled.laho`)',
          details: [
            'Separates View (FXML markup), Controller (UI action handlers), and Model (Game details, library entities).',
            'Implemented a centralized navigation service to swap views dynamically inside a single stage window.'
          ]
        },
        {
          title: 'Search & Filter Engine',
          details: [
            'Developed modular query controllers to filter games by title, genre, and installation status.',
            'Implemented in-memory searching to display immediate results dynamically as the user types.'
          ]
        },
        {
          title: 'Local Library Management',
          details: [
            'Handles metadata schemas for installed games, managing file paths to execute executable programs locally.',
            'Designed configuration savers to remember user settings and system configurations.'
          ]
        }
      ],
      challenges: [
        {
          description: 'Ensuring consistent layouts across different screen sizes and ratios without UI elements overlapping or breaking.',
          solution: 'Utilized JavaFX layout containers (AnchorPane, VBox, HBox, GridPane) with responsive constraints instead of absolute pixel position values. Configured layout bindings to stretch UI containers dynamically.'
        }
      ],
      lessons: [
        'Mastered standard desktop application development guidelines using JavaFX and FXML.',
        'Gained hands-on experience structuring medium-scale projects using Gradle and managing cross-platform dependencies.'
      ]
    },
    {
      id: 'fastapi-backend',
      title: 'FastAPI Game Backend',
      shortSummary: 'A robust, lightweight backend REST API built with FastAPI and SQLModel, providing user authentication and game progression systems.',
      category: 'Backend',
      technologies: ['Python', 'FastAPI', 'SQLModel', 'Pydantic', 'SQLite', 'Password Hashing', 'REST API'],
      githubUrl: 'https://github.com/khalednm-byte',
      featured: true,
      problem: 'Creating a highly performant and secure server-side API for managing player profiles, tracking experiences, and handling basic authentication with strong validation checks.',
      approach: 'Developed a Python-based REST API utilizing SQLModel to unify ORM schemas and Pydantic validation models. Configured a secure SQLite database and implemented industry-standard security features.',
      architecture: [
        {
          title: 'Database & Schemas',
          details: [
            'Designed a unified User Model storing ID, unique username, validated email, hashed password, current XP, and auto-generated timestamp.',
            'Utilized SQLModel to generate database tables and perform CRUD operations without writing raw SQL queries.'
          ]
        },
        {
          title: 'API Endpoints',
          details: [
            'POST `/users`: Validates and registers new accounts, performing secure password hashing.',
            'GET `/users/{id}` & GET `/users`: Safe queries returning filtered user profiles without sensitive fields like passwords.',
            'POST `/users/{id}/xp`: Atomically increments a player\'s progress metrics.',
            'DELETE `/users/{id}`: Securely removes account data.'
          ]
        },
        {
          title: 'Validation & Security',
          details: [
            'Used Pydantic data schemas to automatically intercept invalid inputs (e.g., malformed emails) and return standard HTTP error codes.',
            'Implemented bcrypt password hashing to guarantee database credential safety.'
          ]
        }
      ],
      challenges: [
        {
          description: 'Preventing duplicate registrations while maintaining fast execution times during high-volume operations.',
          solution: 'Configured database-level unique constraints and handled integrity exceptions gracefully. Captured SQLite errors in a global handler to return clean 400 Bad Request responses.'
        }
      ],
      lessons: [
        'Gained practical experience with async programming models in Python and the benefits of fast API documentation using OpenAPI (Swagger).',
        'Deepened understanding of database schemas, object-relational mapping (ORM), and basic secure API design principles.'
      ]
    },
    {
      id: 'bme688-iot',
      title: 'BME688 IoT & Sensor Classification',
      shortSummary: 'An IoT project deploying a Bosch BME688 gas sensor on a Raspberry Pi to classify complex chemical patterns using AI-Studio.',
      category: 'IoT / Robotics',
      technologies: ['Raspberry Pi', 'BME688 Gas Sensor', 'Bosch BME AI-Studio', 'MQTT', 'Mosquitto Broker', 'Python Sensor API'],
      featured: true,
      problem: 'Sensors often yield complex, noisy outputs when measuring gas mixtures or volatile organic compounds (VOCs), making standard threshold-based logic unreliable for accurate substance classification.',
      approach: 'Built a sensor-to-cloud IoT pipeline using a Raspberry Pi paired with a BME688 board. I designed thermal profiles to heat the sensor plate periodically, collected raw resistance measurements, and leveraged AI-Studio to classify distinct gas footprints.',
      architecture: [
        {
          title: 'Hardware Setup',
          details: [
            'Connected the BME688 sensor to a Raspberry Pi via I2C interface.',
            'Configured specific heater profiles (temperature spikes and durations) to stimulate gas reactions on the sensor surface.'
          ]
        },
        {
          title: 'Data Collection & Classification',
          details: [
            'Collected raw gas resistance values and environmental conditions (temp, humidity, pressure).',
            'Developed datasets comparing used car oil versus new car oil to explore degradation classification.'
          ]
        },
        {
          title: 'IoT Messaging Pipeline',
          details: [
            'Integrated an MQTT client to broadcast real-time sensor logs.',
            'Configured a local Mosquitto broker to route telemetry to edge dashboards.'
          ]
        }
      ],
      challenges: [
        {
          description: 'Compensating for baseline drift and environmental fluctuations (humidity, ambient temperature) distorting the sensor readings.',
          solution: 'Implemented baseline normalization routines within the data gathering script. Collected a control dataset under stable conditions to train the AI-Studio classifier and improve validation accuracy.'
        }
      ],
      lessons: [
        'Discovered the vital role hardware-software integration plays in collecting accurate empirical data.',
        'Experienced the utility of event-driven communication protocols (MQTT) in resource-constrained IoT settings.'
      ]
    }
  ],
  experience: [
    {
      company: 'DODOTIK',
      role: 'IoT Solutions Intern',
      location: 'Istanbul, Türkiye',
      period: 'Jun 2026 - Jul 2026',
      technologies: ['Raspberry Pi', 'BME688 Sensor', 'BME AI-Studio', 'MQTT', 'Mosquitto Broker', 'Python', 'IoT Architecture'],
      highlights: [
        'Contributed to embedded systems projects involving Raspberry Pi and custom sensor boards.',
        'Configured Bosch BME688 environmental gas sensors, designing heater profiles to run gas classification tests.',
        'Created datasets comparing chemical signatures (such as used car oil vs. new car oil) to train classifier models in Bosch BME AI-Studio.',
        'Established local message routing systems using MQTT and Mosquitto broker to broadcast telemetry data.',
        'Gained hands-on experience bridging physical microcontrollers with cloud/local software pipelines.'
      ]
    },
    {
      company: 'ALTINBAŞ EVA TEAM',
      role: 'Robotics Systems Intern',
      location: 'Istanbul, Türkiye',
      period: 'Dec 2025 - Mar 2026',
      technologies: ['ROS 2', 'Gazebo', 'RViz', 'Ubuntu 22.04', 'Arduino', 'STM32', 'Lidar Sensors', 'SDF Worlds'],
      highlights: [
        'Worked with ROS 2 (Robot Operating System) and Gazebo simulation frameworks in robotics development.',
        'Created and simulated physical SDF worlds inside Gazebo to test robot navigation and sensor data integration.',
        'Developed ROS 2 nodes to handle teleoperation, publishing velocity commands, and subscribing to simulated Lidar/Camera sensors.',
        'Conducted hardware in-the-loop validation and firmware testing using Arduino and STM32 microcontrollers.',
        'Collaborated with a multi-disciplinary team to integrate firmware controls with simulated robot kinematics.'
      ]
    }
  ],
  education: [
    {
      institution: 'Altınbaş University',
      degree: 'Bachelor of Science (B.S.) in Software Engineering',
      location: 'Istanbul, Türkiye',
      period: '2022 - 2026',
      details: [
        'Program taught fully in English, reinforcing professional technical communication.',
        'Acquired strong foundations in Object-Oriented Programming (Java), Data Structures, Algorithms, Software Architecture, and Software Engineering Principles.',
        'Studied advanced coursework in Operating Systems, Database Management Systems, Computer Networks, and Artificial Intelligence.',
        'Participated in team-based software engineering projects, implementing software development lifecycle (SDLC) models and version control workflows.'
      ]
    }
  ],
  teamLeadership: {
    title: 'Collaborative Project Leadership',
    description: 'During a university software project, I worked in a team of four and was chosen by my peers to act as project coordinator. This experience proved that writing clean code is only half the battle in successful software engineering.',
    keyPoints: [
      'Divided tasks logically based on team members\' strengths and monitored progress across development sprints.',
      'Managed interpersonal team dynamics when a member struggled with their workload. Addressed the challenge privately and rebalanced responsibilities to support the team member and keep the project on track.',
      'Ensured codebase coherence by establishing Git merge strategies and organizing code review workflows.'
    ]
  },
  community: {
    title: 'Earthquake Relief Support',
    description: 'Following the devastating 2023 earthquakes affecting southern Türkiye and northern Syria, I joined community relief efforts in Istanbul. I helped pack essential humanitarian supplies, organize logistics, and load transport trucks heading to the affected zones. This experience taught me the value of community, organization, and action in times of crisis.'
  }
};
