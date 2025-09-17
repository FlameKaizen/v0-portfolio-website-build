"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    level: 95,
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    level: 88,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe Creative Suite, Prototyping",
    level: 92,
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Project Management, Mentoring, Agile",
    level: 85,
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span
              className="text-white cosmic-text"
              style={{
                color: "#ffffff",
                textShadow:
                  "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)",
                filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))",
              }}
            >
              Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that blend functionality with beautiful design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development and design, I specialize in creating modern, responsive
              applications that deliver exceptional user experiences. My passion lies in the intersection of technology
              and creativity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and designing interfaces that are not only visually
              appealing but also intuitive and accessible. Every project is an opportunity to push boundaries and
              explore new possibilities.
            </p>
          </motion.div>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects Completed", value: 50, suffix: "+" },
              { label: "Years Experience", value: 5, suffix: "+" },
              { label: "Technologies", value: 20, suffix: "+" },
              { label: "Happy Clients", value: 30, suffix: "+" },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 text-center card-hover">
                  <div className="text-2xl font-bold text-accent mb-2">
                    <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Skills &{" "}
            <span
              className="text-white cosmic-text"
              style={{
                color: "#ffffff",
                textShadow:
                  "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)",
                filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))",
              }}
            >
              Expertise
            </span>
          </h3>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <skill.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  )
}
