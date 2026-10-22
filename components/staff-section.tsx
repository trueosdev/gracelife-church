export function StaffSection() {
  const staff = [
    {
      name: "Parker Smith",
      role: "Lead Pastor",
      image: "/parker.avif",
    },
    {
      name: "Rickie Higgins",
      role: "Youth Minister",
      image: "/rickie.avif",
    },
    {
      name: "Jack Lyons",
      role: "Worship Leader",
      image: "/jack.jpg",
    },
  ]

  return (
    <section id="staff" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20" data-reveal>
          <h2 className="text-4xl md:text-6xl text-[#2C4061]">
            Our Team
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto" data-reveal-group>
          {staff.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative group overflow-hidden rounded-full mb-8 aspect-square max-w-[16rem] mx-auto shadow-[0_30px_60px_-30px_rgba(44,64,97,0.5)] ring-8 ring-white/60">
                <img 
                  src={member.image} 
                  alt={`${member.name}, ${member.role} at GraceLife Church`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-[#2C4061] mb-2">
                {member.name}
              </h3>
              <p className="text-sm uppercase tracking-[0.2em] text-[#3F7660]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

