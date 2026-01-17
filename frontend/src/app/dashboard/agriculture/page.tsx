"use client";

import { useCallback, useEffect, useState } from "react";
import { TrendingUp, Award, Briefcase, Target, Sprout } from "lucide-react";
import Link from "next/link";
import CourseCard from "@/components/course-card";

interface AgricultureStats {
    totalSkills: number;
    certifications: number;
    completedProjects: number;
    innovationScore: number;
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

export default function AgricultureDashboard() {
    const [stats, setStats] = useState<AgricultureStats | null>(null);
    const [pathways, setPathways] = useState<CareerPathway[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchAgricultureStats = useCallback(async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };

            // Fetch assessment data
            const assessmentRes = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/agriculture/assessment`,
                { headers }
            );

            if (assessmentRes.ok) {
                const assessmentData = await assessmentRes.json();
                if (assessmentData.success) {
                    setStats({
                        totalSkills: assessmentData.data.totalSkills || 0,
                        certifications: assessmentData.data.certifications || 0,
                        completedProjects: assessmentData.data.completedProjects || 0,
                        innovationScore: assessmentData.data.innovationScore || 0,
                        averageProficiency: assessmentData.data.averageProficiency || "0",
                    });
                }
            }

            // Fetch career pathways
            const pathwaysRes = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/agriculture/career-pathways`,
                { headers }
            );

            if (pathwaysRes.ok) {
                const pathwaysData = await pathwaysRes.json();
                if (pathwaysData.success && pathwaysData.data.pathways) {
                    setPathways(pathwaysData.data.pathways.slice(0, 2));
                }
            }
        } catch (error) {
            console.error("Error fetching agriculture data:", error);
            // Set default values on error
            setStats({
                totalSkills: 0,
                certifications: 0,
                completedProjects: 0,
                innovationScore: 0,
                averageProficiency: "0",
            });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAgricultureStats();
    }, [fetchAgricultureStats]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[220px]">
                <div className="text-slate-500">Loading agriculture data...</div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Hero */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-2xl backdrop-blur-xl p-6 md:p-8">
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div
                        className="absolute inset-0 opacity-70"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 15% 20%, rgba(34,197,94,0.12), transparent 38%), radial-gradient(circle at 80% 5%, rgba(59,130,246,0.12), transparent 35%), radial-gradient(circle at 45% 110%, rgba(16,185,129,0.14), transparent 40%)",
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
                        <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-200/60">
                            <Sprout className="h-8 w-8" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Sector</p>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                                Agricultural Technology
                            </h1>
                            <p className="text-slate-600 font-medium">Skills, sustainability, and innovation readiness</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
                            {stats?.innovationScore || 0}% innovation
                        </span>
                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
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
                    hint: "Agritech competencies",
                    icon: <Target className="h-5 w-5 text-emerald-600" />,
                }, {
                    title: "Certifications",
                    value: stats?.certifications || 0,
                    hint: "Active credentials",
                    icon: <Award className="h-5 w-5 text-blue-600" />,
                }, {
                    title: "Projects",
                    value: stats?.completedProjects || 0,
                    hint: "Completed",
                    icon: <Briefcase className="h-5 w-5 text-amber-600" />,
                }, {
                    title: "Innovation Score",
                    value: `${stats?.innovationScore || 0}%`,
                    hint: `Avg proficiency ${stats?.averageProficiency || "0"}/5`,
                    icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
                }].map((card) => (
                    <div
                        key={card.title}
                        className="relative p-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg, rgba(16,185,129,0.6), rgba(59,130,246,0.55))" }}></div>
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
                    href: "/dashboard/skills?sector=AGRICULTURE",
                    icon: <Target className="h-6 w-6 text-emerald-600" />,
                    title: "Skills Tracker",
                    copy: "Manage agritech skills, agronomy, and IoT proficiency.",
                }, {
                    href: "/dashboard/certifications?sector=AGRICULTURE",
                    icon: <Award className="h-6 w-6 text-blue-600" />,
                    title: "Certifications",
                    copy: "Track precision farming, sustainability, and compliance certs.",
                }, {
                    href: "/dashboard/projects?sector=AGRICULTURE",
                    icon: <Briefcase className="h-6 w-6 text-amber-600" />,
                    title: "Projects",
                    copy: "Showcase field pilots, drone surveys, and yield models.",
                }].map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="group relative p-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: "radial-gradient(circle at 80% 0%, rgba(16,185,129,0.12), transparent 45%)" }}></div>
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

            {/* Innovation Readiness */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-lg">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Innovation Readiness</h2>
                <div className="space-y-4">
                    <div>
                        <div className="flex items-center justify-between mb-2 text-sm font-semibold text-slate-600">
                            <span>Overall Innovation</span>
                            <span>{stats?.innovationScore || 0}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-600 via-blue-500 to-amber-500 transition-all"
                                style={{ width: `${stats?.innovationScore || 0}%` }}
                            />
                        </div>
                    </div>
                    <Link
                        href="/dashboard/agriculture/assessment"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                        View detailed assessment
                        <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
