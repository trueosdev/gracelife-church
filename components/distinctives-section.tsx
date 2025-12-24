export function DistinctivesSection() {
  const distinctives = [
    {
      title: "Expository Preaching",
      description: "We desire to be a church that preaches the whole counsel of God's word; line upon line, precept upon precept. In this, God is honored, the saints are edified, and the Lord builds His church.",
      image: "/expositoryTeaching.webp"
    },
    {
      title: "Glory of God Focus",
      description: "We desire that our worship reflect and focus on the glory of God. Our interest is not on man's preference or bringing glory to any man. Instead our aim is to please God in our worship, through our singing, preaching, and living together.",
      image: "/gloryofGod.webp"
    },
    {
      title: "Biblical Community",
      description: "We desire that our community be authentic. Life is hard because of sin, but life is good because of Jesus. Therefore, we rejoice in the good news of the gospel and seek to live our lives humbly before God and our fellow neighbor.",
      image: "/community.webp"
    },
    {
      title: "Kingdom Advancement",
      description: "Our hope is not to make a name for ourselves, but seek to advance God's kingdom rather than our own. We value missions. Therefore, we strive to advance the Kingdom of God locally, regionally, domestically, and internationally. We believe that the church is an outpost of the true King's Kingdom and believe that God's global plan for advancing His Kingdom is through His Church.",
      image: "/worldMissions.webp"
    }
  ]

  return (
    <section id="distinctives" className="py-12 md:py-20 px-6 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-[#2C4061] mb-4">
            Our Distinctives
          </h2>
          <p className="text-base md:text-lg text-[#5D5D5D] max-w-2xl mx-auto">
            Striving for a church consistent with the Scriptures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {distinctives.map((distinctive, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative group overflow-hidden rounded-lg mb-6">
                <img 
                  src={distinctive.image} 
                  alt={distinctive.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#F5F3EE]/0 transition-all duration-300 group-hover:bg-[#F5F3EE]/10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C4061] mb-4">
                {distinctive.title}
              </h3>
              <p className="text-lg text-[#5D5D5D] leading-relaxed">
                {distinctive.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

