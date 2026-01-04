'use client';

import { useState } from 'react';

interface Problem {
  icon: string;
  title: string;
  description: string;
}

interface Comparison {
  problem: string;
  traditional: string;
  astryora: string;
}

export default function AstryoraDifferentiation() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'how'>('comparison');

  const problems: Problem[] = [
    {
      icon: "📝",
      title: "Inflated Profiles",
      description: "Anyone can claim expertise. No verification. Pure noise."
    },
    {
      icon: "🚫",
      title: "Fake Internships",
      description: "Certificate mills. Ghost listings. Zero real value."
    },
    {
      icon: "📄",
      title: "Resume Theater",
      description: "Formatted documents. Keyword matching. Missed talent."
    },
    {
      icon: "❌",
      title: "No Validation",
      description: "Self-assessment. Gameable tests. No proof."
    }
  ];

  const comparisons: Comparison[] = [
    {
      problem: "Resume-based shortlisting",
      traditional: "Trust the words on paper",
      astryora: "See the actual work"
    },
    {
      problem: "Skill claims",
      traditional: "Self-reported, unverifiable",
      astryora: "Proven through real projects"
    },
    {
      problem: "Profile credibility",
      traditional: "Anyone can inflate",
      astryora: "Built on real contributions"
    },
    {
      problem: "Hiring decision",
      traditional: "Based on interviews & claims",
      astryora: "Based on observable quality"
    },
    {
      problem: "Validation",
      traditional: "None. Just trust it.",
      astryora: "Every line of work is proof"
    }
  ];

  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Statement */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Work first.
            </span>
            <br />
            <span className="text-neutral-300">Reputation later.</span>
            <br />
            <span className="text-neutral-500">Hiring becomes obvious.</span>
          </h1>
        </div>

        {/* The Problem Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-neutral-200">
            Traditional platforms are
            <span className="text-red-500"> broken</span>.
          </h2>
          <p className="text-lg text-neutral-400 mb-10 max-w-3xl">
            You're making hiring decisions based on claims, not capabilities.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-neutral-100">
                  {problem.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {problem.description}
                </p>
                <div className="absolute inset-0 rounded-xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-10 flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 ${activeTab === 'comparison'
              ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/50'
              : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
              }`}
          >
            See the Difference
          </button>
          <button
            onClick={() => setActiveTab('how')}
            className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 ${activeTab === 'how'
              ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/50'
              : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
              }`}
          >
            How Astryora Works
          </button>
        </div>

        {/* Comparison Table */}
        {activeTab === 'comparison' && (
          <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="pb-4 pr-6 text-neutral-500 font-semibold uppercase text-xs tracking-wider">
                      Aspect
                    </th>
                    <th className="pb-4 pr-6 text-red-400 font-semibold uppercase text-xs tracking-wider">
                      Traditional Platforms
                    </th>
                    <th className="pb-4 text-emerald-400 font-semibold uppercase text-xs tracking-wider">
                      Astryora
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors duration-200"
                    >
                      <td className="py-5 pr-6 font-semibold text-neutral-300 text-sm">
                        {item.problem}
                      </td>
                      <td className="py-5 pr-6 text-neutral-400 text-sm">
                        <span className="flex items-center gap-2">
                          <span className="text-red-500">✗</span>
                          {item.traditional}
                        </span>
                      </td>
                      <td className="py-5 text-neutral-100 font-medium text-sm">
                        <span className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span>
                          {item.astryora}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* How It Works */}
        {activeTab === 'how' && (
          <div className="space-y-6">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-10 group hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-start gap-5 flex-col sm:flex-row">
                <div className="text-4xl sm:text-5xl font-bold text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-neutral-100">
                    Work First
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                    Candidates contribute to real projects before applying. No resumes required to prove capability. The work speaks for itself.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-10 group hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-5 flex-col sm:flex-row">
                <div className="text-4xl sm:text-5xl font-bold text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-neutral-100">
                    Reputation Later
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                    Build credibility through actual deliverables, not self-written summaries. Every contribution becomes part of your verified track record.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-10 group hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-start gap-5 flex-col sm:flex-row">
                <div className="text-4xl sm:text-5xl font-bold text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-neutral-100">
                    Hiring Becomes Obvious
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                    When you've seen someone's work quality, hiring decisions make themselves. No guesswork. No interviews based on claims. Just clear evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 p-0.5 rounded-xl">
            <div className="bg-neutral-950 rounded-xl px-8 py-6">
              <p className="text-xl font-bold text-neutral-100 mb-2">
                Stop guessing. Start seeing.
              </p>
              <p className="text-base text-neutral-400">
                Hire based on work, not words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}