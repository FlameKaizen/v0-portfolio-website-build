"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { TextReveal } from "@/components/animations/text-reveal"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using modern technologies. Mentoring junior developers and architecting complex systems.",
    achievements: ["Increased app performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
    achievements: ["Built 20+ client websites", "Improved conversion rates by 25%", "Established design system"],
  },
  {
    title: "Junior Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description:
      "Started my professional journey building features for a growing SaaS platform and learning industry best practices.",
    achievements: ["Contributed to 50+ features", "Reduced bug reports by 30%", "Learned agile methodologies"],
  },
]

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    period: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and web technologies. Graduated with honors.",
  },
  {
    degree: "Full-Stack Web Development",
    school: "Coding Bootcamp",
    period: "2019",
    description: "Intensive program covering modern web development stack and industry practices.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <ScrollReveal direction="up" className="text-center mb-16">
          <TextReveal className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</TextReveal>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and educational background in technology
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <ScrollReveal direction="left">
              <h3 className="text-2xl font-semibold mb-8 text-accent">Work Experience</h3>
            </ScrollReveal>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} direction="left" delay={index * 0.1}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="p-6 card-hover relative overflow-hidden">
                      {/* Timeline line */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-secondary" />

                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <motion.h4
                            className="text-lg font-semibold"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {exp.title}
                          </motion.h4>
                          <p className="text-accent">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal direction="right">
              <h3 className="text-2xl font-semibold mb-8 text-accent">Education</h3>
            </ScrollReveal>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ScrollReveal key={index} direction="right" delay={index * 0.1}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="p-6 card-hover relative overflow-hidden">
                      {/* Timeline line */}
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent" />

                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <motion.h4
                            className="text-lg font-semibold"
                            whileHover={{ x: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {edu.degree}
                          </motion.h4>
                          <p className="text-accent">{edu.school}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
