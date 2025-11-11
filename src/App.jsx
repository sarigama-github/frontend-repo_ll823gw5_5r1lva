import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" eyebrow="About Us" title="About Kawiswara #26524">
          <div className="space-y-4 leading-relaxed">
            <p>
              The FIRST Tech Challenge (FTC) is an international robotics competition where students design, build, and program robots to complete specific missions on a themed playing field. Teams collaborate to apply engineering, creativity, and teamwork to solve real-world challenges. FTC not only develops technical skills like coding and mechanical design but also emphasizes values such as innovation, collaboration, and Gracious Professionalism.
            </p>
            <p>
              Kawiswara #26524 is a youth robotics team from Yogyakarta, Indonesia, made up of 10 students from MTs TechnoNatura Yogyakarta united by a passion for STEM and robotics. What began as simple curiosity has grown into a drive to design, build, and program advanced robots, with each member contributing unique skills that fuel our creativity and innovation.
            </p>
            <p>
              Debuting in the 2024/2025 FIRST Tech Challenge, we quickly recognized our potential and set our sights on becoming the FTC Nusantara Champion. Committed to collaboration and innovation, we aim to create not only competitive robots but also a lasting spirit of curiosity and learning.
            </p>
          </div>
        </Section>

        <Section id="vision" eyebrow="Vision" title="Our Vision">
          <p>
            At Kawiswara, our vision is to become a leading force in robotics innovation and youth empowerment in Indonesia. We are dedicated to harnessing the potential of technology to inspire the next generation of innovators and problem solvers.
          </p>
        </Section>

        <Section id="mission" eyebrow="Mission" title="Our Mission">
          <p>
            We are dedicated to encouraging new ideas, teamwork, valuing differences, helping technology grow, and making a positive impact in a sustainable way. This approach reflects our main values and guides our actions in the community and beyond.
          </p>
        </Section>

        <Section id="experience" eyebrow="Team Experience & History" title="Our Journey">
          <div className="space-y-4">
            <p>
              We achieved remarkable success in our debut FTC 24/25 season, showcasing our skill, creativity, and potential. The experience was both exhilarating and challenging, giving us valuable lessons and opportunities for growth. As a rookie team, we brought fierce competition to long-established teams, proving that determination and teamwork can level the playing field.
            </p>
            <p>
              Our journey demonstrated our technical abilities and strengthened our bond through late-night coding, design refinements, and shared victories. With our mentors and community behind us, we’re more motivated than ever to aim higher in the seasons ahead.
            </p>
          </div>
        </Section>

        <Section id="goals" eyebrow="Goals for Next Season" title="Looking Ahead: 25/26 Season">
          <div className="space-y-4">
            <p>
              As we move into the 25/26 season, our primary focus is to grow not only as a competitive robotics team but as young engineers, designers, and innovators. This season, we aim to master advanced control systems and refine our build quality to perform at a higher level.
            </p>
            <p>
              Beyond the field, we are setting ambitious goals for outreach, impact, and sustainability. We plan to engage more actively with local communities and schools to share the excitement of robotics, inspire future innovators, and strengthen the presence of STEM in Indonesia.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
