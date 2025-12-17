export function StaffSection() {
  const staff = [
    {
      name: "Parker Smith",
      role: "Lead Pastor",
      image: "/parker.avif"
    },
    {
      name: "Rickie Higgins",
      role: "Youth Minister",
      image: "/rickie.avif"
    }
  ]

  return (
    <section id="staff" className="py-20 px-6 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C4061] mb-4">
            Our Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {staff.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative group overflow-hidden rounded-lg mb-6 aspect-square max-w-xs mx-auto">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#F5F3EE]/0 transition-all duration-300 group-hover:bg-[#F5F3EE]/10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C4061] mb-2">
                {member.name}
              </h3>
              <p className="text-lg text-[#5D5D5D]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

