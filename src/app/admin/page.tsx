"use client";
import { useEffect, useMemo, useState } from "react";
import { usePortfolioData } from "@/lib/portfolio-store";
import { BriefcaseBusiness, Code2, GraduationCap, Layers3, LayoutDashboard, Save, Sparkles, UserRound, FolderKanban, Check, AlertCircle, ArrowUpRight } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

const sections = [
  ["profile", "Profile", UserRound], ["about", "About", Sparkles], ["experience", "Experience", BriefcaseBusiness],
  ["skillCategories", "Skills", Code2], ["projects", "Projects", FolderKanban], ["education", "Education", GraduationCap],
  ["trainings", "Training", Layers3], ["navigation", "Navigation", LayoutDashboard], ["socialLinks", "Social links", ArrowUpRight],
] as const;

export default function AdminPage() {
  const liveData = usePortfolioData();
  const [draft, setDraft] = useState<PortfolioData>(liveData);
  const [active, setActive] = useState<string>("profile");
  const [status, setStatus] = useState<"saved" | "saving" | "error" | "">("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");
  const [newFieldKey, setNewFieldKey] = useState("");
  useEffect(() => setDraft(liveData), [liveData]);
  const serialized = useMemo(() => JSON.stringify(draft, null, 2), [draft]);

  function edit(path: string[], value: string | boolean) {
    setDraft(current => {
      const next = structuredClone(current) as unknown as Record<string, unknown>;
      let cursor: any = next;
      for (const part of path.slice(0, -1)) cursor = cursor[part];
      cursor[path[path.length - 1]] = value;
      return next as unknown as PortfolioData;
    });
  }

  function updateArray(path: string[], nextItems: unknown[]) {
    setDraft(current => {
      const next = structuredClone(current) as any;
      let cursor = next;
      for (const part of path.slice(0, -1)) cursor = cursor[part];
      cursor[path[path.length - 1]] = nextItems;
      return next;
    });
  }

  function emptyLike(item: any): any {
    if (typeof item === "string") return "";
    if (typeof item === "number") return 0;
    if (typeof item === "boolean") return false;
    if (Array.isArray(item)) return [];
    if (item && typeof item === "object") return Object.fromEntries(Object.entries(item).map(([key, value]) => [key, emptyLike(value)]));
    return "";
  }

  function newArrayItem(path: string[], items: any[]) {
    if (items.length) return emptyLike(items[0]);
    const templates: Record<string, object> = {
      experience: { id: "", company: "", role: "", location: "", startDate: "", endDate: "", isCurrent: false, description: "", responsibilities: [], technologies: [], achievements: [], companyUrl: "" },
      projects: { id: "", title: "", tagline: "", description: "", problemSolved: "", category: "Web Applications", technologies: [], responsibilities: [], liveUrl: "", githubUrl: "", featured: false, confidential: false },
      skillCategories: { id: "", title: "", icon: "Code2", skills: [] }, skills: { name: "", category: "", featured: false, notes: "" },
      education: { id: "", degree: "", institution: "", location: "", startDate: "", endDate: "", field: "", details: "" },
      trainings: { id: "", title: "", institution: "", duration: "", period: "", description: "" },
      navigation: { name: "", href: "#" }, socialLinks: { platform: "", url: "", label: "", icon: "" },
      highlights: { metric: "", label: "", detail: "" }, principles: { title: "", description: "", icon: "" },
    };
    return structuredClone(templates[path[path.length - 1]] ?? "");
  }

  async function save() {
    setStatus("saving"); setError("");
    try {
      const response = await fetch("/api/portfolio", { method: "PUT", headers: { "Content-Type": "application/json" }, body: serialized });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Save failed");
      window.dispatchEvent(new CustomEvent("portfolio-updated", { detail: draft }));
      setStatus("saved"); window.setTimeout(() => setStatus(""), 2500);
    } catch (e) { setStatus("error"); setError(e instanceof Error ? e.message : "Save failed"); }
  }

  const activeLabel = sections.find(s => s[0] === active)?.[1] ?? active;
  const count = (key: string) => Array.isArray((draft as any)[key]) ? (draft as any)[key].length : null;
  const inputClass = "w-full rounded-xl border border-white/10 bg-[#0c1424] px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10";
  const renderFields = (value: any, path: string[] = []): React.ReactNode => {
    if (value && typeof value === "object") {
      if (Array.isArray(value)) return <div className="space-y-4">{value.map((item, i) => <div key={i} className="rounded-2xl border border-white/[.08] bg-white/[.025] p-5"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">Item {String(i + 1).padStart(2, "0")}</span><div className="flex items-center gap-2"><span className="mr-1 text-xs text-slate-600">{typeof item === "object" ? Object.keys(item).length + " fields" : "Text"}</span><button type="button" aria-label="Remove item" onClick={() => updateArray(path,value.filter((_,index)=>index!==i))} className="rounded-lg border border-rose-400/20 px-2.5 py-1.5 text-xs text-rose-300 hover:bg-rose-400/10">Remove</button></div></div>{typeof item === "object" && item !== null ? renderFields(item, [...path, String(i)]) : typeof item === "boolean" ? <button type="button" onClick={()=>updateArray(path,value.map((v,index)=>index===i?!v:v))} className={inputClass}>{item?"Enabled":"Disabled"}</button> : <textarea aria-label={`Item ${i+1}`} className={inputClass + " min-h-20"} value={String(item ?? "")} onChange={e => updateArray(path,value.map((v,index)=>index===i?e.target.value:v))} />}</div>)}<button type="button" onClick={()=>updateArray(path,[...value,newArrayItem(path,value)])} className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-cyan-400/25 py-3 text-sm text-cyan-300 transition hover:border-cyan-300/50 hover:bg-cyan-300/[.04]">+ Add {path.at(-1)?.replace(/([A-Z])/g," $1").toLowerCase()} item</button></div>;
      return <div><div className="grid gap-4 md:grid-cols-2">{Object.entries(value).filter(([k]) => !filter || k.toLowerCase().includes(filter.toLowerCase())).map(([key, val]) => {
        const nextPath = [...path, key];
        if (val && typeof val === "object") return <div key={key} className="md:col-span-2"><div className="mb-2 text-sm font-medium capitalize text-slate-300">{key.replace(/([A-Z])/g," $1")}</div>{renderFields(val, nextPath)}</div>;
        const multiline = typeof val === "string" && (val.length > 100 || /description|summary|tagline|detail|bio|responsibilit|achievement/i.test(key));
        return <label key={key} className="block"><span className="mb-2 block text-xs font-medium capitalize tracking-wide text-slate-400">{key.replace(/([A-Z])/g," $1")}</span>{typeof val === "boolean" ? <button type="button" onClick={() => edit(nextPath, !val)} className={`flex h-12 w-full items-center justify-between rounded-xl border px-4 text-sm ${val ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200" : "border-white/10 bg-[#0c1424] text-slate-400"}`}><span>{val ? "Enabled" : "Disabled"}</span><span className={`h-5 w-9 rounded-full p-0.5 ${val ? "bg-cyan-400" : "bg-slate-700"}`}><span className={`block h-4 w-4 rounded-full bg-white transition ${val ? "translate-x-4" : ""}`} /></span></button> : multiline ? <textarea className={inputClass+" min-h-28 resize-y leading-6"} value={String(val ?? "")} onChange={e => edit(nextPath,e.target.value)} /> : <input className={inputClass} value={String(val ?? "")} onChange={e => edit(nextPath,e.target.value)} />}</label>;
      })}</div><div className="mt-4 flex flex-wrap items-center gap-2"><input aria-label="New field name" value={newFieldKey} onChange={e=>setNewFieldKey(e.target.value)} placeholder="Add optional field…" className="rounded-lg border border-white/10 bg-[#0c1424] px-3 py-2 text-xs text-slate-200 outline-none focus:border-cyan-400/50"/><button type="button" onClick={()=>{const key=newFieldKey.trim();if(!key||Object.prototype.hasOwnProperty.call(value,key))return;const next=structuredClone(draft) as any;let c=next;for(const p of path)c=c[p];c[key]="";setDraft(next);setNewFieldKey("")}} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200">+ Add field</button></div></div>;
    }
    return null;
  };

  return <div className="min-h-screen bg-[#070c16] text-slate-100"><div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_0%,rgba(14,165,233,.12),transparent_40%),radial-gradient(ellipse_at_0%_50%,rgba(99,102,241,.08),transparent_35%)]" />
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 border-r border-white/[.07] bg-[#090f1c]/95 px-5 py-7 backdrop-blur-xl lg:flex lg:flex-col"><a href="/" className="mb-10 flex items-center gap-3 px-2"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950"><LayoutDashboard size={19}/></span><span><strong className="block text-sm">Portfolio Studio</strong><small className="text-xs text-slate-500">CONTENT CONTROL</small></span></a><div className="mb-3 px-3 text-[10px] font-bold tracking-[.2em] text-slate-600">WORKSPACE</div><nav className="space-y-1">{sections.map(([key,label,Icon])=><button key={key} onClick={()=>{setActive(key);setFilter("")}} className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition ${active===key?"bg-cyan-400/10 text-cyan-200":"text-slate-400 hover:bg-white/[.04] hover:text-white"}`}><span className="flex items-center gap-3"><Icon size={17}/>{label}</span>{count(key)!==null&&<span className="rounded-md bg-white/[.06] px-2 py-0.5 text-[10px] text-slate-500">{count(key)}</span>}</button>)}</nav><div className="mt-auto rounded-2xl border border-white/[.07] bg-white/[.025] p-4"><div className="mb-2 flex items-center gap-2 text-xs text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>Live portfolio</div><p className="text-xs leading-5 text-slate-500">Your edits update the published portfolio data file.</p><a className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200" href="/" target="_blank">View website <ArrowUpRight size={13}/></a></div></aside>
    <main className="relative min-h-screen lg:pl-72"><header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[.07] bg-[#070c16]/80 px-5 py-4 backdrop-blur-xl md:px-10"><div className="lg:hidden"><span className="font-semibold">Portfolio Studio</span></div><div className="hidden text-xs text-slate-500 lg:block">Workspace <span className="px-2 text-slate-700">/</span><span className="text-slate-300">{activeLabel}</span></div><div className="flex items-center gap-3"><span className="hidden text-xs text-slate-500 sm:block">{status==="saved"?<span className="flex items-center gap-1 text-emerald-300"><Check size={13}/>Saved to portfolio.json</span>:status==="saving"?"Saving changes…":status==="error"?<span className="flex items-center gap-1 text-rose-300"><AlertCircle size={13}/>{error}</span>:"Changes take effect after submit"}</span><button onClick={save} disabled={status==="saving"} className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-300 disabled:opacity-60"><Save size={16}/>{status==="saving"?"Submitting…":"Submit & update website"}</button></div></header>
    <div className="mx-auto max-w-6xl px-5 py-9 md:px-10 md:py-12"><div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[.07] px-3 py-1.5 text-[10px] font-semibold tracking-[.16em] text-cyan-300"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300"/>CONTENT MANAGEMENT</div><h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Configure your portfolio</h1><p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">Update every section, card, link, and detail shown on your website.</p></div><div className="flex gap-2 rounded-2xl border border-white/[.08] bg-white/[.025] p-3"><div className="px-2"><div className="text-lg font-semibold">{sections.reduce((n,[k])=>n+(count(k)??1),0)}</div><div className="text-[10px] uppercase tracking-wider text-slate-500">Content items</div></div><div className="w-px bg-white/10"/><div className="px-2"><div className="text-lg font-semibold text-emerald-300">Live</div><div className="text-[10px] uppercase tracking-wider text-slate-500">Site status</div></div></div></div>
    <div className="mb-5 flex gap-2 overflow-x-auto pb-2 lg:hidden">{sections.map(([key,label])=><button key={key} onClick={()=>setActive(key)} className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs ${active===key?"bg-cyan-400/15 text-cyan-200":"bg-white/[.04] text-slate-400"}`}>{label}</button>)}</div>
    <section className="overflow-hidden rounded-3xl border border-white/[.08] bg-[#0b1220]/85 shadow-2xl shadow-black/20"><div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[.07] px-6 py-5 md:px-8"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">{(()=>{const I=sections.find(s=>s[0]===active)?.[2]??UserRound;return <I size={19}/>})()}</div><div><h2 className="font-semibold">{activeLabel} content</h2><p className="text-xs text-slate-500">Edit values below. Nested entries are grouped by item.</p></div></div><input value={filter} onChange={e=>setFilter(e.target.value)} placeholder="Filter fields…" className="w-44 rounded-lg border border-white/10 bg-[#080e19] px-3 py-2 text-xs outline-none focus:border-cyan-400/50" /></div><div className="p-5 md:p-8">{renderFields((draft as any)[active],[active])}</div></section>
    <details className="mt-5 rounded-2xl border border-white/[.07] bg-white/[.02]"><summary className="cursor-pointer px-5 py-4 text-sm text-slate-400">Advanced: edit the complete JSON file</summary><JsonEditor value={serialized} onApply={raw=>{try{setDraft(JSON.parse(raw));setError("")}catch(e){setError(e instanceof Error?e.message:"Invalid JSON")}}} /></details>
    <p className="mt-6 text-center text-xs text-slate-600">Changes are written to <code className="text-slate-400">public/portfolio.json</code>.</p></div></main></div>;
}

function JsonEditor({value,onApply}:{value:string;onApply:(s:string)=>void}) { const [raw,setRaw]=useState(value); useEffect(()=>setRaw(value),[value]); return <div className="p-4 pt-0"><textarea value={raw} onChange={e=>setRaw(e.target.value)} spellCheck={false} className="min-h-[420px] w-full rounded-xl border border-white/10 bg-[#070c16] p-4 font-mono text-xs leading-5 text-cyan-100 outline-none focus:border-cyan-400/40"/><button onClick={()=>onApply(raw)} className="mt-3 rounded-lg border border-white/10 px-4 py-2 text-xs text-slate-300 hover:bg-white/5">Apply JSON to editor</button></div> }
