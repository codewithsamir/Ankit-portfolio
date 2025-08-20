import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Gem, Globe, Users } from "lucide-react";

const skills = [
	{
		icon: <GraduationCap size={24} className="text-indigo-600" />,
		title: "Teaching",
		description:
			"Experienced teacher at Saan Coaching Center, helping students excel in academics and communication.",
	},
	{
		icon: <Gem size={24} className="text-yellow-500" />,
		title: "Entrepreneurship",
		description:
			"Managing and growing our family jewelry shop with modern business strategies.",
	},
	{
		icon: <Globe size={24} className="text-blue-500" />,
		title: "English Skills",
		description:
			"Expert in English speaking, writing, listening, and reading. IELTS 7.5 Band.",
	},
	{
		icon: <Users size={24} className="text-green-500" />,
		title: "Team Leadership",
		description:
			"Leading educational activities and motivating students to achieve their goals.",
	},
];

const Skills: React.FC = () => {
	return (
		<section id="skills" className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.8 }}
					className="max-w-5xl mx-auto"
				>
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							My{" "}
							<span className="text-indigo-600 dark:text-indigo-400">Skills</span>
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{skills.map((skill, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.1 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<div className="flex items-center mb-4">
									<div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
										{skill.icon}
									</div>
									<h3 className="font-semibold text-gray-900 dark:text-white">
										{skill.title}
									</h3>
								</div>
								<p className="text-gray-600 dark:text-gray-300 text-sm">
									{skill.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;