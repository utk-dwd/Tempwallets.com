import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitter?: string;
  telegram?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rohit",
    role: "Founder",
    image: "/Placeholder-Image.jpg",
    twitter: "https://twitter.com/teegan_dev",
    telegram: "https://t.me/teegan_dev",
  },
  {
    name: "Karsh",
    role: "Founding Developer",
    image: "/Placeholder-Image.jpg",
    twitter: "https://twitter.com/niaal_director",
    telegram: "https://t.me/niaal_director",
  },
  {
    name: "Rahul",
    role: "Business Development",
    image: "/Placeholder-Image.jpg",
    twitter: "https://twitter.com/lia_dev",
    telegram: "https://t.me/lia_dev",
  },
  {
    name: "Lavina",
    role: "PR & Communications",
    image: "/Placeholder-Image.jpg",
    twitter: "https://twitter.com/sharne_culture",
    telegram: "https://t.me/sharne_culture",
  },
];

const Team = () => {
  return (
    <section className="w-full bg-team-bg/80 backdrop-blur-md py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10 rounded-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-left mb-16 text-team-badge-text">
          Meet the team:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`
                flex flex-col items-center
                ${index === 1 || index === 3 ? 'lg:mt-12' : ''}
                transition-transform duration-300 hover:scale-105
              `}
            >
              <div className="relative w-full max-w-sm">
                <div className="bg-team-card rounded-3xl overflow-hidden shadow-lg relative">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  
                  {/* Social Media Icons */}
                  <div className="absolute top-4 left-4">
                    {member.telegram && (
                      <a
                        href={member.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors duration-200"
                      >
                        <FaTelegramPlane size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors duration-200"
                      >
                        <FaTwitter size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-1/2 bg-black/30 -translate-x-1/2 flex items-center bg-team-badge-role rounded-full shadow-xl px-2 py-2">
                  <div className="bg-team-badge-name rounded-full px-6 py-2 bg-black/70 backdrop-blur-sm">
                    <span className="text-team-badge-text font-semibold text-sm whitespace-nowrap">
                      {member.name}
                    </span>
                  </div>
                  <span className="text-sm font-medium px-4 whitespace-nowrap">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
