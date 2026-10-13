import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Copy,
  Download,
  ExternalLink,
  CheckCircle2,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Cpu,
  Layers,
  Share2,
  Mail,
  Maximize2,
  X,
  Sparkles,
  ArrowRight,
  Monitor,
  Wifi,
  Headphones,
  Check,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeSectionProps {
  onBookCallClick: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onBookCallClick }) => {
  const { resume, personal } = PORTFOLIO_DATA;
  const { currentPalette } = useTheme();

  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'skills' | 'setup'>('all');
  const [copiedToast, setCopiedToast] = useState(false);
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);

  // Generate plain-text representation for ATS / Clipboard / TXT download
  const generatePlainTextResume = () => {
    return `KIM KAREN AMBONG
${personal.title}
${personal.subtitle}

Contact Information:
- Email: ${personal.email}
- Phone / WhatsApp: ${personal.phone} (${personal.whatsappUrl})
- Location: ${personal.location}
- LinkedIn: ${personal.linkedinUrl}
- Live Work Sample: https://breathworkbeyondthesequence.com/beyondbreath/mastery

PROFESSIONAL SUMMARY
${resume.summary}

CORE SKILLS & TECH STACK
${resume.skills
  .map(
    (cat) =>
      `• ${cat.category}:\n  ${cat.skills.join(', ')}`
  )
  .join('\n\n')}

PROFESSIONAL EXPERIENCE
${resume.experience
  .map(
    (exp) =>
      `• ${exp.role} | ${exp.company}
  Location: ${exp.location} | Timeline: ${exp.period}
  Overview: ${exp.summary}
  Key Achievements:
${exp.achievements.map((ach) => `    - ${ach}`).join('\n')}${
        exp.liveUrl ? `\n  Live Sample: ${exp.liveUrl}` : ''
      }`
  )
  .join('\n\n')}

EDUCATION
- ${resume.education.degree}
- Institution: ${resume.education.institution}, ${resume.education.location}
- Note: ${resume.education.note}

REMOTE WORK INFRASTRUCTURE & READINESS
- High-Speed Internet: ${resume.remoteSetup.internet}
- Hardware & Multi-Screen: ${resume.remoteSetup.hardware}
- Call Equipment: ${resume.remoteSetup.audioVideo}
- Working Hours: ${resume.remoteSetup.availability}
- Language Fluency: ${resume.remoteSetup.languages}
`;
  };

  const handleCopyPlainText = async () => {
    try {
      await navigator.clipboard.writeText(generatePlainTextResume());
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    } catch {
      // Fallback
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2000);
    }
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([generatePlainTextResume()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Kim_Karen_Ambong_Master_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 md:py-28 bg-[#FAF8F5] relative border-t border-[#EAE3D6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border text-xs font-semibold mb-3 shadow-2xs"
            style={{ color: currentPalette.primary, borderColor: currentPalette.border }}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Master Resume & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight mb-4">
            Curriculum Vitae & Verified Experience
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base leading-relaxed">
            Detailed breakdown of my nearly 4 years of remote work, verified client achievements, automated workflows, and equipment readiness.
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#E7DFD3] shadow-sm mb-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: currentPalette.primary }} />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-[#1C1917]">Kim Karen Ambong</span>
              <span className="text-[11px] text-[#78716C]">• {resume.lastUpdated}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Copy Text Button */}
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#44403C] hover:text-[#1C1917] bg-[#FAF8F5] hover:bg-[#F2ECE2] border border-[#E7DFD3] rounded-xl transition-all cursor-pointer shadow-2xs"
              title="Copy plain-text ATS resume to clipboard"
            >
              {copiedToast ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700 font-bold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#78716C]" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>

            {/* Download TXT Button */}
            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#44403C] hover:text-[#1C1917] bg-[#FAF8F5] hover:bg-[#F2ECE2] border border-[#E7DFD3] rounded-xl transition-all cursor-pointer shadow-2xs"
              title="Download plain text resume file"
            >
              <Download className="w-3.5 h-3.5 text-[#78716C]" />
              <span className="hidden sm:inline">Download</span> .TXT
            </button>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#44403C] hover:text-[#1C1917] bg-[#FAF8F5] hover:bg-[#F2ECE2] border border-[#E7DFD3] rounded-xl transition-all cursor-pointer shadow-2xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#78716C]" />
              <span>Print / PDF</span>
            </button>

            {/* Full Paper View Modal Button */}
            <button
              onClick={() => setIsPaperModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#1C1917] hover:bg-[#292524] rounded-xl transition-all cursor-pointer shadow-xs"
              style={{
                boxShadow: `0 2px 10px ${currentPalette.glow}`,
              }}
            >
              <Maximize2 className="w-3.5 h-3.5" style={{ color: currentPalette.light }} />
              <span>Full Paper View</span>
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#1C1917] text-white shadow-sm'
                : 'bg-white text-[#665E55] hover:text-[#1C1917] border border-[#E7DFD3]'
            }`}
          >
            Full Master Resume
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'experience'
                ? 'bg-[#1C1917] text-white shadow-sm'
                : 'bg-white text-[#665E55] hover:text-[#1C1917] border border-[#E7DFD3]'
            }`}
          >
            Work Experience (4 Yrs)
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-[#1C1917] text-white shadow-sm'
                : 'bg-white text-[#665E55] hover:text-[#1C1917] border border-[#E7DFD3]'
            }`}
          >
            Skills & Competencies
          </button>
          <button
            onClick={() => setActiveTab('setup')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'setup'
                ? 'bg-[#1C1917] text-white shadow-sm'
                : 'bg-white text-[#665E55] hover:text-[#1C1917] border border-[#E7DFD3]'
            }`}
          >
            Education & Remote Setup
          </button>
        </div>

        {/* Tab Contents */}
        <div className="space-y-8">
          
          {/* Executive Summary Card (Visible in 'all' or 'experience') */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40"
                style={{ backgroundColor: currentPalette.surface }}
              />
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-[#EAE3D6] pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#78716C] block">
                      Executive Summary
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917]">
                      {resume.headline}
                    </h3>
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto border"
                    style={{
                      backgroundColor: currentPalette.surface,
                      color: currentPalette.primary,
                      borderColor: currentPalette.border,
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Nearly 4 Yrs Remote Experience</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                  {resume.summary}
                </p>

                {/* Automation Philosophy Callout */}
                <div className="mt-5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-start gap-3">
                  <Cpu className="w-5 h-5 shrink-0 mt-0.5" style={{ color: currentPalette.primary }} />
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                      Proactive Automation Philosophy
                    </h4>
                    <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                      When hired, the moment I spot repetitive tasks that can be automated, I proactively find a way to automate them. Whether it is an outbound email dispatch, ManyChat DM routing, or lead tracking, you save countless hours while maintaining human connection where it matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Work Experience Section */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#1C1917] flex items-center gap-2">
                  <Briefcase className="w-5 h-5" style={{ color: currentPalette.primary }} />
                  <span>Professional Work Experience</span>
                </h3>
                <span className="text-xs text-[#78716C] font-medium">Chronological & Project Outcomes</span>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {resume.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm hover:shadow-md transition-all group relative"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h4 className="text-lg sm:text-xl font-bold text-[#1C1917] group-hover:text-[#8D5B32] transition-colors">
                            {exp.role}
                          </h4>
                          {exp.badge && (
                            <span
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border"
                              style={{
                                backgroundColor: currentPalette.surface,
                                color: currentPalette.primary,
                                borderColor: currentPalette.border,
                              }}
                            >
                              {exp.badge}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-[#665E55] font-medium">
                          <span className="font-bold text-[#1C1917]">{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#78716C]" />
                            {exp.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#78716C]" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Live Link if available */}
                      {exp.liveUrl && (
                        <a
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-[#1C1917] hover:bg-[#292524] transition-all shadow-2xs self-start shrink-0"
                        >
                          <span>{exp.liveUrlLabel || 'View Live Work'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#57534E] mb-4 italic leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-[#F2ECE2]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#78716C] block mb-2">
                        Key Responsibilities & Quantified Results:
                      </span>
                      {exp.achievements.map((ach, achIdx) => (
                        <div key={achIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403C]">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: currentPalette.primary }}
                          />
                          <span className="leading-relaxed">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills & Competencies Section */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#1C1917] flex items-center gap-2">
                  <Cpu className="w-5 h-5" style={{ color: currentPalette.primary }} />
                  <span>Core Competencies & Technology Stack</span>
                </h3>
                <span className="text-xs text-[#78716C] font-medium">Categorized Proficiency</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resume.skills.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#F2ECE2]">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: currentPalette.surface,
                          color: currentPalette.primary,
                        }}
                      >
                        {idx === 0 && <Layers className="w-4 h-4" />}
                        {idx === 1 && <Cpu className="w-4 h-4" />}
                        {idx === 2 && <Share2 className="w-4 h-4" />}
                        {idx === 3 && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917]">
                        {cat.category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF8F5] text-[#1C1917] border border-[#E7DFD3] hover:border-[#D6CDC0] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education & Remote Work Infrastructure */}
          {(activeTab === 'all' || activeTab === 'setup') && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Education Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#F2ECE2]">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: currentPalette.surface,
                        color: currentPalette.primary,
                      }}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#78716C] block">
                        Academic Foundation
                      </span>
                      <h4 className="text-base font-bold text-[#1C1917]">Formal Education</h4>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <h5 className="text-lg font-bold text-[#1C1917]">
                      {resume.education.degree}
                    </h5>
                    <p className="text-xs font-semibold text-[#57534E]">
                      {resume.education.institution} • {resume.education.location}
                    </p>
                    <p className="text-xs text-[#665E55] pt-3 leading-relaxed border-t border-[#F2ECE2]">
                      {resume.education.note}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-6 p-4 rounded-2xl border text-xs"
                  style={{
                    backgroundColor: currentPalette.surface,
                    borderColor: currentPalette.border,
                  }}
                >
                  <span className="font-bold text-[#1C1917] block mb-1">Psychology Applied to Operations:</span>
                  <span className="text-[#57534E]">
                    Understanding client objections, crafting authentic sales copy, and building empathetic customer nurture flows.
                  </span>
                </div>
              </div>

              {/* Remote Readiness Specs */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#E7DFD3] shadow-sm">
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#F2ECE2]">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: currentPalette.surface,
                      color: currentPalette.primary,
                    }}
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#78716C] block">
                      Guaranteed Reliability
                    </span>
                    <h4 className="text-base font-bold text-[#1C1917]">Remote Workstation & Hardware</h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6]">
                    <div className="flex items-center gap-2 font-bold text-[#1C1917] mb-1">
                      <Wifi className="w-4 h-4" style={{ color: currentPalette.primary }} />
                      <span>Internet Reliability</span>
                    </div>
                    <p className="text-[#665E55] leading-relaxed">
                      {resume.remoteSetup.internet}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6]">
                    <div className="flex items-center gap-2 font-bold text-[#1C1917] mb-1">
                      <Monitor className="w-4 h-4" style={{ color: currentPalette.primary }} />
                      <span>Hardware Workstation</span>
                    </div>
                    <p className="text-[#665E55] leading-relaxed">
                      {resume.remoteSetup.hardware}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6]">
                    <div className="flex items-center gap-2 font-bold text-[#1C1917] mb-1">
                      <Headphones className="w-4 h-4" style={{ color: currentPalette.primary }} />
                      <span>Audio / Video Calls</span>
                    </div>
                    <p className="text-[#665E55] leading-relaxed">
                      {resume.remoteSetup.audioVideo}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6]">
                    <div className="flex items-center gap-2 font-bold text-[#1C1917] mb-1">
                      <Calendar className="w-4 h-4" style={{ color: currentPalette.primary }} />
                      <span>Timezone Alignment</span>
                    </div>
                    <p className="text-[#665E55] leading-relaxed">
                      {resume.remoteSetup.availability}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2ECE2] flex flex-wrap items-center justify-between text-xs text-[#78716C]">
                  <span>Languages: <strong className="text-[#1C1917]">{resume.remoteSetup.languages}</strong></span>
                  <span>Power Backup: <strong className="text-[#1C1917]">UPS & Mobile Hotspot Available</strong></span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Bottom Call to Action Card */}
        <div
          className="mt-14 p-8 sm:p-10 rounded-3xl text-center relative overflow-hidden border shadow-md"
          style={{
            backgroundColor: currentPalette.surface,
            borderColor: currentPalette.border,
          }}
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight">
              Ready to automate your operations and scale your funnels?
            </h3>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Whether you need high-converting GoHighLevel funnels, proactive Virtual Assistant support, or active Social Media Management, let's schedule a quick 15-minute conversation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onBookCallClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#1C1917] hover:bg-[#292524] rounded-2xl shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`mailto:${personal.email}?subject=Resume%20Inquiry%20-%20Kim%20Karen%20Ambong`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#1C1917] bg-white hover:bg-[#FAF8F5] border border-[#E7DFD3] rounded-2xl transition-all shadow-xs"
              >
                <Mail className="w-4 h-4 text-[#78716C]" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* FULL-SCREEN PAPER MODAL VIEW */}
      {isPaperModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E5DACB] overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#FAF8F5] border-b border-[#EAE3D6] shrink-0">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5" style={{ color: currentPalette.primary }} />
                <div>
                  <h3 className="text-sm font-bold text-[#1C1917]">Official Resume Document Sheet</h3>
                  <p className="text-[11px] text-[#78716C]">Kim Karen Ambong • Master Curriculum Vitae</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1C1917] bg-white hover:bg-[#F2ECE2] border border-[#E7DFD3] rounded-xl transition-all cursor-pointer shadow-2xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>
                <button
                  onClick={() => setIsPaperModalOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-[#EAE3D6] text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                  aria-label="Close resume sheet"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Document Body */}
            <div className="p-6 sm:p-12 overflow-y-auto font-sans text-[#1C1917] space-y-8 bg-white">
              
              {/* Paper Header */}
              <div className="border-b-2 border-[#1C1917] pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1C1917]">
                      {personal.fullName}
                    </h1>
                    <p className="text-sm sm:text-base font-bold mt-1" style={{ color: currentPalette.primary }}>
                      {personal.title}
                    </p>
                    <p className="text-xs font-medium text-[#665E55] mt-0.5">
                      {personal.subtitle}
                    </p>
                  </div>

                  <div className="text-xs text-[#57534E] space-y-1 text-left sm:text-right">
                    <p><strong>Email:</strong> {personal.email}</p>
                    <p><strong>Phone / WhatsApp:</strong> <a href={personal.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-semibold">{personal.phone}</a></p>
                    <p><strong>Location:</strong> {personal.location}</p>
                    <p><strong>LinkedIn:</strong> linkedin.com/in/kim-karen-ambong</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1C1917] border-b border-[#EAE3D6] pb-1 mb-2.5">
                  Professional Summary
                </h4>
                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                  {resume.summary}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1C1917] border-b border-[#EAE3D6] pb-1 mb-4">
                  Professional Experience
                </h4>
                <div className="space-y-6">
                  {resume.experience.map((exp, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                        <span className="font-bold text-[#1C1917]">
                          {exp.role} <span className="font-normal text-[#57534E]">| {exp.company}</span>
                        </span>
                        <span className="text-[11px] font-semibold text-[#78716C]">{exp.period}</span>
                      </div>
                      <p className="text-[11px] text-[#665E55] italic">{exp.summary}</p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-[#44403C] pl-1">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="leading-relaxed">
                            {ach}
                          </li>
                        ))}
                      </ul>
                      {exp.liveUrl && (
                        <p className="text-[11px] text-[#57534E] pt-1">
                          Live Sample: <a href={exp.liveUrl} target="_blank" rel="noopener noreferrer" className="underline font-medium text-[#1C1917]">{exp.liveUrl}</a>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1C1917] border-b border-[#EAE3D6] pb-1 mb-3">
                  Technical Proficiency & Tools
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {resume.skills.map((cat, idx) => (
                    <div key={idx} className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE3D6]">
                      <span className="font-bold text-[#1C1917] block mb-1">{cat.category}</span>
                      <span className="text-[#57534E] leading-relaxed">{cat.skills.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Setup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1C1917] border-b border-[#EAE3D6] pb-1 mb-2">
                    Education
                  </h4>
                  <p className="text-xs font-bold text-[#1C1917]">{resume.education.degree}</p>
                  <p className="text-xs text-[#57534E]">{resume.education.institution}, {resume.education.location}</p>
                  <p className="text-[11px] text-[#78716C] mt-1">{resume.education.note}</p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1C1917] border-b border-[#EAE3D6] pb-1 mb-2">
                    Remote Setup & Languages
                  </h4>
                  <p className="text-xs text-[#44403C]"><strong>Internet:</strong> {resume.remoteSetup.internet}</p>
                  <p className="text-xs text-[#44403C]"><strong>Hardware:</strong> {resume.remoteSetup.hardware}</p>
                  <p className="text-xs text-[#44403C]"><strong>Languages:</strong> {resume.remoteSetup.languages}</p>
                  <p className="text-xs text-[#44403C]"><strong>Timezones:</strong> {resume.remoteSetup.availability}</p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#FAF8F5] border-t border-[#EAE3D6] shrink-0">
              <span className="text-xs text-[#78716C]">
                Ready for full-time remote opportunities and contract retainers.
              </span>
              <button
                onClick={() => {
                  setIsPaperModalOpen(false);
                  onBookCallClick();
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-[#1C1917] hover:bg-[#292524] rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Hire Kim Karen Ambong
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
