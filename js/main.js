
        // 1. Initialize Lucide Icons
        lucide.createIcons();

        // 2. Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu on nav link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // 3. Team Profile Data for Modal
        const teamProfiles = [
            {
                name: "Chanrathana Seng",
                role: "Linux / Web Administrator",
                education: "Associate Degree-level IT studies at Passerelles Numériques Cambodia (PNC)",
                location: "Phnom Penh, Cambodia",
                phone: "090393760",
                email: "Chanrathana.seng@fellow.passerellesnumeriques.org",
                facebook: "chanrathana seng",
                linkedin: "CHANTAHANA SENG",
                intro: "Chanrathana Seng is an IT student at Passerelles Numériques Cambodia with an interest in Linux and server operating systems, web server administration, networking, and technical support. His learning focuses on building a strong foundation in system administration and maintaining reliable IT services.",
                interests: ["Networking", "Server Operating Systems", "Linux Administration", "System Administration", "IT Support", "Cybersecurity", "Database Administration"]
            },
            {
                name: "Sopheak Bol",
                role: "System Administration",
                education: "First-Year Student, System and Network Administration & Cybersecurity (SNAC), PNC",
                location: "Phnom Penh, Cambodia",
                email: "sopheak.bol@fellow.passerellesnumeriques.org",
                github: "https://github.com/sopheakbol-del",
                linkedin: "https://linkedin.com/in/bol-sopheak-9685b640b/",
                intro: "I am a first-year SNAC student at Passerelles Numériques Cambodia. I am passionate about networking, Linux systems, servers, cloud computing, and cybersecurity. My goal is to become a Cloud Infrastructure Engineer.",
                about: "Hello! My name is Sopheak Bol. I have a strong interest in IT infrastructure, networking, Linux administration, and cloud technologies. Through my studies and projects, I am developing my skills in system management, network configuration, web development, and problem-solving.",
                subjects: ["IT Support", "Cisco Networking", "Linux Administration", "Server OS", "Database Fundamentals", "General & IT English", "ESD"],
                projects: [
                    "IT Support Project — Maintenance & Upgrades",
                    "Home IT Support Website Concept",
                    "Apache2 Web Server Deployment",
                    "Networking Laboratory (Packet Tracer / GNS3)"
                ]
            },
            {
                name: "Lan Loeur",
                role: "Network Administration Student",
                education: "First-Year Student, System and Network Administration & Cybersecurity (SNAC), PNC",
                location: "Phnom Penh, Cambodia",
                email: "lan.loeur@fellow.passerellesnumeriques.org",
                github: "https://github.com/lanloeur-tech",
                intro: "Hi, I'm LAN LOEUR. I am a first-year SNAC student at Passerelles Numériques Cambodia. I am passionate about networking, Linux systems, servers, cloud computing, and cybersecurity.",
                about: "I am currently studying SNAC at PNC. Through my studies and projects, I am developing my skills in system management, network configuration, web development, and problem-solving.",
                interests: ["Networking Fundamentals", "IP Subnetting", "DHCP & VLANs", "Cisco Packet Tracer / GNS3", "Linux Administration", "Ubuntu & Windows Server"]
            },
            {
                name: "Kimsreang Srong",
                role: "Database Administration Student",
                education: "System and Network Administration & Cybersecurity (SNAC), PNC",
                location: "Phnom Penh, Cambodia",
                email: "kimsreang.srong@fellow.passerellesnumeriques.org",
                intro: "Hi, I'm KIMSREANG SRONG. I am studying SNAC at Passerelles Numériques Cambodia. My technical learning focuses on database administration, IT infrastructure, Linux systems, servers, and cloud technologies.",
                about: "I am interested in understanding how databases support reliable IT systems and how they can be configured, protected, backed up, and restored.",
                interests: ["Database Fundamentals", "MariaDB / MySQL Admin", "Permissions & Access Control", "Backup & Restore Testing", "Server Operating Systems"]
            },
            {
                name: "Tat Miquel",
                role: "Junior System Administrator & Ethical Hacking Specialist",
                education: "Associate Degree Candidate in IT at Passerelles Numériques Cambodia",
                location: "Phnom Penh, Cambodia",
                phone: "(+855) 70 923 678 / (+855) 99 923 678",
                email: "miquel.tat@fellow.passerellesnumeriques.org",
                facebook: "Tat Miquel",
                linkedin: "Tat Miquel",
                intro: "Highly motivated Associate Degree Candidate in IT at PNC, specializing in system administration, cloud infrastructure, networking, and ethical hacking/cybersecurity.",
                about: "Focused on building, managing, and securing multi-tier server architectures on AWS and Linux environments. Interested in vulnerability assessment, security hardening, network protocols, and database administration.",
                interests: ["VAPT & Penetration Testing", "Kali Linux & Parrot OS", "AWS EC2 / RDS / IAM", "SSH Hardening & UFW", "Fail2ban & Log Auditing"]
            }
        ];

        function openProfileModal(index) {
            const p = teamProfiles[index];
            const modal = document.getElementById('profileModal');
            const container = document.getElementById('modalContent');

            let content = `
                <div class="profile-header">
                    <img src="assets/images/${p.name.toLowerCase().replace(' ', '-')}.jpg" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80'" class="profile-img" alt="${p.name}">
                    <div class="profile-details">
                        <h2>${p.name}</h2>
                        <div class="profile-role">${p.role}</div>
                        <div class="profile-meta">
                            <span><strong>Education:</strong> ${p.education}</span>
                            <span><strong>Location:</strong> ${p.location}</span>
                            <span><strong>Email:</strong> ${p.email}</span>
                            ${p.phone ? `<span><strong>Phone:</strong> ${p.phone}</span>` : ''}
                        </div>
                    </div>
                </div>

                <div class="profile-section-title">Professional Summary</div>
                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">${p.intro}</p>
                ${p.about ? `<p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-top: 0.75rem;">${p.about}</p>` : ''}

                ${p.interests ? `
                    <div class="profile-section-title">Key Learning Areas & Technical Competencies</div>
                    <div class="profile-skills-list">
                        ${p.interests.map(item => `<span class="skill-chip">${item}</span>`).join('')}
                    </div>
                ` : ''}

                ${p.projects ? `
                    <div class="profile-section-title">Projects & Practical Learning</div>
                    <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-dark);">
                        ${p.projects.map(proj => `<li style="margin-bottom: 0.3rem;">${proj}</li>`).join('')}
                    </ul>
                ` : ''}
            `;

            container.innerHTML = content;
            modal.classList.add('active');
        }

        function closeProfileModal() {
            document.getElementById('profileModal').classList.remove('active');
        }

        // 4. Skills Filter Functionality
        function filterSkills(category) {
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const cards = document.querySelectorAll('.skill-card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // 5. Interactive Architecture Diagram Info Panel
        function showArchInfo(title, description) {
            const panel = document.getElementById('archInfoPanel');
            panel.innerHTML = `<strong>Selected Component — ${title}:</strong> ${description}`;
        }

        // 6. Lightbox Functionality
        function openLightbox(src) {
            const modal = document.getElementById('lightboxModal');
            const img = document.getElementById('lightboxImg');
            img.src = src;
            modal.classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightboxModal').classList.remove('active');
        }
