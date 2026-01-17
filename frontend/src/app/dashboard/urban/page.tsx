"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Award, Briefcase, Target, Building2 } from "lucide-react";
import Link from "next/link";
import CourseCard from "@/components/course-card";

interface UrbanStats {
    totalSkills: number;
    certifications: number;
    completedProjects: number;
    readinessScore: number;
    averageProficiency: string;
}

interface UdemyCourse {
    id: string;
    title: string;
    url: string;
    price: string;
    image: string;
    instructor: string;
    rating: number;
    students: number;
    duration: string;
    level: string;
}

interface CareerPathway {
    role: string;
    description: string;
    matchScore: number;
    salaryRange: string;
    demand: string;
    skills: string[];
    courses: UdemyCourse[];
}

interface UrbanSkill {
    id: string;
    name: string;
    sector: string;
    category: string;
    proficiencyLevel: number;
    verified?: boolean;
    tags?: string[];
    description?: string;
}

const proficiencyColors: Record<number, string> = {
    1: "bg-red-100 text-red-700",
    2: "bg-orange-100 text-orange-700",
    3: "bg-yellow-100 text-yellow-800",
    4: "bg-green-100 text-green-700",
    5: "bg-emerald-100 text-emerald-700",
};

const proficiencyLabels: Record<number, string> = {
    1: "Beginner",
    2: "Developing",
    3: "Competent",
    4: "Proficient",
    5: "Expert",
};

const getProficiencyColor = (level: number) => proficiencyColors[level] || "bg-muted text-muted-foreground";
const getProficiencyLabel = (level: number) => proficiencyLabels[level] || "Unknown";

export default function UrbanDashboard() {
    const [stats, setStats] = useState<UrbanStats | null>(null);
    const [pathways, setPathways] = useState<CareerPathway[]>([]);
    const [loading, setLoading] = useState(true);
    const [skills, setSkills] = useState<UrbanSkill[]>([]);

    useEffect(() => {
        fetchUrbanData();
        fetchSkills();
    }, []);

    const fetchUrbanData = async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };

            // Fetch assessment data
            const assessmentRes = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/urban/assessment`,
                { headers }
            );

            if (assessmentRes.ok) {
                const assessmentData = await assessmentRes.json();
                if (assessmentData.success) {
                    setStats({
                        totalSkills: assessmentData.data.totalSkills || 0,
                        certifications: assessmentData.data.certifications || 0,
                        completedProjects: assessmentData.data.completedProjects || 0,
                        readinessScore: assessmentData.data.readinessScore || 0,
                        averageProficiency: assessmentData.data.averageProficiency || "0",
                    });
                }
            }

            // Fetch career pathways
            const pathwaysRes = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/urban/career-pathways`,
                { headers }
            );

            if (pathwaysRes.ok) {
                const pathwaysData = await pathwaysRes.json();
                if (pathwaysData.success && pathwaysData.data.pathways) {
                    setPathways(pathwaysData.data.pathways.slice(0, 2));
                }
            }
        } catch (error) {
            console.error("Error fetching urban data:", error);
            // Set default values on error
            setStats({
                totalSkills: 0,
                certifications: 0,
                completedProjects: 0,
                readinessScore: 0,
                averageProficiency: "0",
            });
        } finally {
            setLoading(false);
        }
    };

    const fetchSkills = async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/skills`,
                { headers }
            );

            if (res.ok) {
                const data = await res.json();
                if (data.success && data.data) {
                    setSkills(data.data);
                }
            }
        } catch (error) {
            console.error("Error fetching skills:", error);
        }
    };

    const filteredSkills = skills;

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[260px]">
                <div className="text-slate-500">Loading urban data...</div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Hero */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-200/80 bg-white/80 shadow-2xl backdrop-blur-xl p-6 md:p-8">
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div
                        className="absolute inset-0 opacity-70"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 18% 15%, rgba(6,182,212,0.13), transparent 40%), radial-gradient(circle at 82% 5%, rgba(79,70,229,0.13), transparent 36%), radial-gradient(circle at 45% 110%, rgba(94,234,212,0.15), transparent 42%)",
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 opacity-35"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
                            backgroundSize: "22px 22px",
                        }}
                    ></div>
                </div>
                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-lg shadow-cyan-200/60">
                            <Building2 className="h-8 w-8" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">Sector</p>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                                Urban & Smart Cities
                            </h1>
                            <p className="text-slate-600 font-medium">Mobility, GIS, and connected infrastructure</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold border border-cyan-100">
                            {stats?.readinessScore || 0}% readiness
                        </span>
                        <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-semibold border border-cyan-200">
                            {stats?.certifications || 0} certifications
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                    title: "Total Skills",
                    value: stats?.totalSkills || 0,
                    hint: "Urban tech competencies",
                    icon: <Target className="h-5 w-5 text-cyan-600" />,
                }, {
                    title: "Certifications",
                    value: stats?.certifications || 0,
                    hint: "Active credentials",
                    icon: <Award className="h-5 w-5 text-indigo-600" />,
                }, {
                    title: "Projects",
                    value: stats?.completedProjects || 0,
                    hint: "Completed",
                    icon: <Briefcase className="h-5 w-5 text-amber-600" />,
                }, {
                    title: "Readiness Score",
                    value: `${stats?.readinessScore || 0}%`,
                    hint: `Avg proficiency ${stats?.averageProficiency || "0"}/5`,
                    icon: <TrendingUp className="h-5 w-5 text-cyan-600" />,
                }].map((card) => (
                    <div
                        key={card.title}
                        className="relative p-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.65), rgba(79,70,229,0.6))" }}></div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-slate-500 font-semibold">{card.title}</span>
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shadow-inner">
                                {card.icon}
                            </div>
                        </div>
                        <div className="text-4xl font-black text-slate-900 tracking-tight">{card.value}</div>
                        <p className="text-sm text-slate-600 mt-2 font-medium">{card.hint}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
                {[{
                    href: "/dashboard/skills?sector=URBAN",
                    icon: <Target className="h-6 w-6 text-cyan-600" />,
                    title: "Skills Tracker",
                    copy: "Manage mobility, GIS, and infrastructure skill levels.",
                }, {
                    href: "/dashboard/certifications?sector=URBAN",
                    icon: <Award className="h-6 w-6 text-indigo-600" />,
                    title: "Certifications",
                    copy: "Track GIS, smart city, and planning credentials.",
                }, {
                    href: "/dashboard/projects?sector=URBAN",
                    icon: <Briefcase className="h-6 w-6 text-amber-600" />,
                    title: "Projects",
                    copy: "Showcase smart infrastructure and urban analytics projects.",
                }].map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="group relative p-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: "radial-gradient(circle at 80% 0%, rgba(6,182,212,0.12), transparent 45%)" }}></div>
                        <div className="relative flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 tracking-tight">{item.title}</h3>
                        </div>
                        <p className="relative text-sm text-slate-600 leading-relaxed">
                            {item.copy}
                        </p>
                        <span className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                            Open
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </Link>
                ))}
            </div>

            {/* Recommended Courses */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-900">Recommended Courses</h2>
                    <span className="text-sm text-slate-500">Personalized from your pathways</span>
                </div>

                {pathways.length > 0 && pathways.some(p => p.courses && p.courses.length > 0) ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(() => {
                            const allCourses = pathways.flatMap(pathway => pathway.courses || []);
                            const uniqueCourses = allCourses.filter((course, index, self) => 
                                index === self.findIndex((c) => c.id === course.id)
                            );
                            return uniqueCourses.slice(0, 9).map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ));
                        })()}
                    </div>
                ) : (
                    <div className="p-8 rounded-xl border border-slate-200 bg-white/80 backdrop-blur text-center shadow-sm">
                        <p className="text-slate-600">No courses available. Add more skills to get personalized recommendations.</p>
                    </div>
                )}
            </div>

            {/* Skills Grid */}
            {filteredSkills.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-16 text-center border-2 border-dashed border-slate-200">
                    <p className="text-slate-600 mb-6 text-lg">
                        You haven&apos;t added any skills yet
                    </p>
                    <Link
                        href="/dashboard/skills/add"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    >
                        Add a skill
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-slate-200"
                        >
                            {/* Skill Header */}
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-lg font-bold text-slate-900">
                                    {skill.name}
                                </h3>
                                {skill.verified && (
                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-xl font-semibold border border-indigo-100">
                                        Verified
                                    </span>
                                )}
                            </div>

                            {/* Category & Sector */}
                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-slate-600 font-medium">
                                    {skill.category.replace(/_/g, " ")}
                                </p>
                                <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-xl font-semibold border border-cyan-100">
                                    {skill.sector}
                                </span>
                            </div>

                            {/* Proficiency */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-slate-600 font-semibold">
                                        Proficiency
                                    </span>
                                    <span
                                        className={`px-3 py-1 text-xs rounded-xl font-semibold ${getProficiencyColor(
                                            skill.proficiencyLevel
                                        )}`}
                                    >
                                        {getProficiencyLabel(skill.proficiencyLevel)}
                                    </span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-3 shadow-inner">
                                    <div
                                        className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400 h-3 rounded-full transition-all shadow-md"
                                        style={{ width: `${(skill.proficiencyLevel / 5) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            {skill.description && (
                                <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                                    {skill.description}
                                </p>
                            )}

                            {/* Tags */}
                            {skill.tags && skill.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {skill.tags.slice(0, 3).map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {skill.tags.length > 3 && (
                                        <span className="px-3 py-1 text-slate-500 text-xs font-medium">
                                            +{skill.tags.length - 3} more
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Stats */}
            <div className="bg-card rounded-2xl shadow-lg p-8 border-2 border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">
                    Skills Overview
                </h2>
                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4 rounded-xl bg-primary/10 border-2 border-primary/20">
                        <div className="text-4xl font-bold text-primary">
                            {skills.length}
                        </div>
                        <div className="text-sm text-muted-foreground font-semibold mt-2">
                            Total Skills
                        </div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-secondary/10 border-2 border-secondary/20">
                        <div className="text-4xl font-bold text-secondary">
                            {skills.filter((s) => s.verified).length}
                        </div>
                        <div className="text-sm text-muted-foreground font-semibold mt-2">
                            Verified
                        </div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-accent/10 border-2 border-accent/20">
                        <div className="text-4xl font-bold text-accent">
                            {skills.filter((s) => s.proficiencyLevel >= 4).length}
                        </div>
                        <div className="text-sm text-muted-foreground font-semibold mt-2">
                            Expert Level
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
