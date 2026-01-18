"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useStoredToken, useStoredUser, setAuthUser, type StoredUser } from "@/lib/auth";

type ApiProfileDetails = {
    location?: string | null;
    linkedIn?: string | null;
    github?: string | null;
    portfolio?: string | null;
    interests?: string[];
    targetSectors?: string[];
};

type ApiUserProfile = {
    name: string;
    email: string;
    role: string;
    avatar?: string | null;
    createdAt?: string;
    profile?: ApiProfileDetails | null;
};


type PatchAvatarResponse = {
    user?: {
        id: string;
        name: string;
        email: string;
        role?: string;
        avatar?: string | null;
        createdAt?: string;
    };
};

export default function ProfileEditPage() {
    // --- CLEAN IMPLEMENTATION STARTS HERE ---
    const user = useStoredUser();
    const token = useStoredToken();
    const [apiProfile, setApiProfile] = useState<ApiUserProfile | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [name, setName] = useState(user?.name || "");
    const [phone, setPhone] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [linkedIn, setLinkedIn] = useState<string>("");
    const [github, setGithub] = useState<string>("");
    const [portfolio, setPortfolio] = useState<string>("");
    const [interestsText, setInterestsText] = useState("");
    const [sectorHealthcare, setSectorHealthcare] = useState(false);
    const [sectorAgriculture, setSectorAgriculture] = useState(false);
    const [sectorUrban, setSectorUrban] = useState(false);

    // Fetch profile on mount
    useMemo(() => { fetchProfile(); }, []);
    async function fetchProfile() {
        if (!token) return;
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/users/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error("Failed to fetch profile");
            const data = await res.json();
            setApiProfile(data.profile);
            setName(data.profile?.name || "");
            setPhone(data.profile?.profile?.phone || "");
            setLocation(data.profile?.profile?.location || "");
            setBio(data.profile?.profile?.bio || "");
            setLinkedIn(data.profile?.profile?.linkedIn || "");
            setGithub(data.profile?.profile?.github || "");
            setPortfolio(data.profile?.profile?.portfolio || "");
            setInterestsText((data.profile?.profile?.interests || []).join(", "));
            setSectorHealthcare((data.profile?.profile?.targetSectors || []).includes("HEALTHCARE"));
            setSectorAgriculture((data.profile?.profile?.targetSectors || []).includes("AGRICULTURE"));
            setSectorUrban((data.profile?.profile?.targetSectors || []).includes("URBAN"));
        } catch {
            // ignore
        }
    }

    const effectiveAvatar = useMemo(() => previewUrl || apiProfile?.avatar || user?.avatar || null, [previewUrl, apiProfile, user]);
    const handleUpload = async () => {
        setError(null);
        if (!token || !selectedFile) return;
        setIsSaving(true);
        try {
            const form = new FormData();
            form.append("avatar", selectedFile);
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/users/avatar`, {
                method: "PATCH",
                headers: { Authorization: `Bearer ${token}` },
                body: form,
            });
            const data: unknown = await response.json();
            if (!response.ok) throw new Error((data as { message?: string })?.message || "Failed to update avatar");
            setSuccess("Avatar updated successfully.");
            setSelectedFile(null);
            setPreviewUrl(null);
            fetchProfile();
        } catch {
            setError("Failed to update avatar");
        } finally {
            setIsSaving(false);
        }
    };
    const toggleSector = (sector: string) => {
        if (sector === "HEALTHCARE") setSectorHealthcare((v) => !v);
        if (sector === "AGRICULTURE") setSectorAgriculture((v) => !v);
        if (sector === "URBAN") setSectorUrban((v) => !v);
    };
    const saveProfile = async () => {
        setError(null);
        setSuccess(null);
        if (!token) {
            setError("You must be logged in to update your profile.");
            return;
        }
        const interests = interestsText.split(",").map((s) => s.trim()).filter(Boolean);
        const targetSectors: string[] = [];
        if (sectorHealthcare) targetSectors.push("HEALTHCARE");
        if (sectorAgriculture) targetSectors.push("AGRICULTURE");
        if (sectorUrban) targetSectors.push("URBAN");
        setIsSaving(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/users/profile`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ phone, bio, location, linkedIn, github, portfolio, interests, targetSectors }),
            });
            const data: unknown = await response.json();
            if (!response.ok) {
                setError((data as { message?: string })?.message || "Failed to update profile");
                return;
            }
            setSuccess("Profile updated successfully.");
            fetchProfile();
        } catch {
            setError("Failed to update profile");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-10">
            <div className="bg-white/80 rounded-2xl shadow-2xl p-8 border border-blue-100 backdrop-blur-xl">
                <div className="flex items-center gap-6">
                    <div className="relative">
                        {effectiveAvatar ? (
                            <Image
                                src={effectiveAvatar}
                                alt="Avatar"
                                width={80}
                                height={80}
                                className="h-20 w-20 rounded-full object-cover border-2 border-blue-200"
                            />
                        ) : (
                            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a8.963 8.963 0 01-6.879-3.196z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute bottom-0 right-0 w-8 h-8 opacity-0 cursor-pointer"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setSelectedFile(e.target.files[0]);
                                    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
                                }
                            }}
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="text-xl font-bold text-slate-900">{name}</div>
                        <div className="text-blue-700 font-semibold">{apiProfile?.email || user?.email}</div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={handleUpload}
                                disabled={isSaving || !selectedFile}
                                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow transition-colors disabled:opacity-50"
                            >
                                {isSaving ? "Uploading..." : "Update Avatar"}
                            </button>
                            <Link
                                href="/dashboard/profile"
                                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold shadow transition-colors"
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
                <form className="space-y-6 pt-8" onSubmit={e => { e.preventDefault(); saveProfile(); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Name</label>
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                                disabled={isSaving}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Phone</label>
                            <input
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className="w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                                disabled={isSaving}
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium text-slate-700">Email</label>
                            <input
                                value={apiProfile?.email || user?.email || ""}
                                readOnly
                                className="w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-sm text-slate-700 shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Location</label>
                            <input
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                                className="w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                                disabled={isSaving}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Bio</label>
                            <textarea
                                value={bio}
                                onChange={e => setBio(e.target.value)}
                                className="w-full min-h-24 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                                placeholder="Tell us about yourself"
                                disabled={isSaving}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Interests (comma separated)</label>
                        <input
                            value={interestsText}
                            onChange={e => setInterestsText(e.target.value)}
                            className="w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                            placeholder="AI, Cloud, Data Science"
                            disabled={isSaving}
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-700">Target Sectors</div>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => toggleSector("HEALTHCARE")}
                                className={`px-3 py-1.5 rounded-full text-sm border font-semibold shadow transition-colors ${sectorHealthcare ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-700 border-blue-100 hover:bg-blue-50"}`}
                                disabled={isSaving}
                            >
                                Healthcare
                            </button>
                            <button
                                type="button"
                                onClick={() => toggleSector("AGRICULTURE")}
                                className={`px-3 py-1.5 rounded-full text-sm border font-semibold shadow transition-colors ${sectorAgriculture ? "bg-green-600 text-white border-green-600" : "bg-white text-slate-700 border-green-100 hover:bg-green-50"}`}
                                disabled={isSaving}
                            >
                                Agriculture
                            </button>
                            <button
                                type="button"
                                onClick={() => toggleSector("URBAN")}
                                className={`px-3 py-1.5 rounded-full text-sm border font-semibold shadow transition-colors ${sectorUrban ? "bg-purple-600 text-white border-purple-600" : "bg-white text-slate-700 border-purple-100 hover:bg-purple-50"}`}
                                disabled={isSaving}
                            >
                                Urban
                            </button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold text-slate-900">Social Links</h2>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">LinkedIn</label>
                                <input
                                    value={linkedIn}
                                    onChange={e => setLinkedIn(e.target.value)}
                                    className="w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                                    placeholder="https://linkedin.com/in/..."
                                    disabled={isSaving}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">GitHub</label>
                                <input
                                    value={github}
                                    onChange={e => setGithub(e.target.value)}
                                    className="w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                                    placeholder="https://github.com/..."
                                    disabled={isSaving}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Portfolio</label>
                                <input
                                    value={portfolio}
                                    onChange={e => setPortfolio(e.target.value)}
                                    className="w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
                                    placeholder="https://..."
                                    disabled={isSaving}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow transition-colors disabled:opacity-50"
                        >
                            Save Changes
                        </button>
                    </div>
                    {(error || success) && (
                        <div className="space-y-2">
                            {error && (
                                <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                                    {success}
                                </div>
                            )}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
// (All code below this line has been removed to eliminate duplicate/broken JSX)
