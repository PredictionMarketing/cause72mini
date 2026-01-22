import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, CheckCircle, Shield, Lock, Clock, BarChart, Users, Target } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const MotorVehicleAccidentDataReporting = () => {
    const handleCtaClick = (source) => {
        const currentUrl = encodeURIComponent(window.location.href);
        window.location.href = `https://calendly.com/placeholder?referrer=${currentUrl}&cta=${source}`;
    };

    const FeatureCard = ({ icon: Icon, title, description }) => (
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4 text-blue-700">
                <Icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    );

    const StatCard = ({ value, label }) => (
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="text-4xl font-bold text-blue-700 mb-2">{value}</div>
            <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">{label}</div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            <Helmet>
                <title>Motor Vehicle Accident Data Reporting | Cause72</title>
                <meta name="description" content="One firm per lead gets exclusive access to comprehensive accident intelligence for 60 days. No competition during your exclusivity period." />
            </Helmet>

            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/20"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium mb-8">
                                Cause72 - Zero Sum Advantage
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Every Accident. 72 Hours. <br />
                                <span className="text-blue-400">Exclusively Yours.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                One firm per lead gets exclusive access to comprehensive accident intelligence for 60 days. During your exclusivity period, no competitor—regardless of size or resources—can access your lead's data.
                            </p>
                            <button
                                onClick={() => handleCtaClick('hero_check_territory')}
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 mx-auto"
                            >
                                <CheckCircle size={20} />
                                Check Territory Availability
                            </button>
                        </div>
                    </div>
                </section>

                {/* The Fundamental Shift */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl font-bold mb-6">The Fundamental Shift</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                The personal injury legal market has operated the same way for decades: firms compete for the same cases using the same public information, arriving at the same time, making the same pitches.
                            </p>
                            <p className="text-lg text-slate-900 font-medium mb-8">
                                Cause72 changes this dynamic entirely.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Instead of competing for cases, you own exclusive access to accident intelligence in your territory. Within 72 hours of any significant accident, you have comprehensive data that no other firm can obtain. This isn't about better marketing. It's about exclusive information.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <FeatureCard
                                icon={Target}
                                title="1. Territorial Exclusivity"
                                description="We assign exclusive rights to one firm per defined territory. Once you claim a territory, no other firm—solo practitioner or national giant—can access that territory's intelligence."
                            />
                            <FeatureCard
                                icon={Clock}
                                title="2. 72-Hour Intelligence"
                                description="Every significant accident in your territory is identified, analyzed, and delivered within 72 hours. While others wait weeks for public records, you're already preserving evidence."
                            />
                            <FeatureCard
                                icon={BarChart}
                                title="3. Comprehensive Data"
                                description="Beyond basic accident information, our intelligence includes injury indicators, insurance coverage details, and engagement opportunities—everything needed for informed case development."
                            />
                            <FeatureCard
                                icon={Lock}
                                title="4. Permanent Advantage"
                                description="Your territorial exclusivity is permanent. As long as you maintain your territory, competitors remain locked out. No bidding wars. No competition for these cases."
                            />
                        </div>
                    </div>
                </section>

                {/* The Advantage Multiplier */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-16">The Advantage Multiplier</h2>
                        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Shield className="text-blue-700" size={24} />
                                    For Law Firms
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Eliminate Competition: These aren't leads everyone is chasing—they're exclusive to you",
                                        "Preserve Evidence: Act while witness memories are fresh and evidence exists",
                                        "Reduce Acquisition Costs: Stop competing on price when you're the only option",
                                        "Predictable Pipeline: Know what's coming instead of hoping for referrals"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Users className="text-blue-700" size={24} />
                                    For Marketing Agencies
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Unique Offering: Provide something no other agency can",
                                        "Client Retention: Firms can't get this elsewhere",
                                        "Recurring Revenue: Predictable monthly income stream",
                                        "Market Differentiation: Move from vendor to strategic partner"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Compliance */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-8">Compliance Without Compromise</h2>
                        <p className="text-lg text-slate-600 mb-12">
                            Every aspect of Cause72 operates within strict legal and ethical guidelines. We've spent years building bulletproof compliance protocols. You get aggressive intelligence capabilities within conservative compliance frameworks.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            {[
                                { title: "Privacy Protected", desc: "SOC 2 certified, HIPAA compliant infrastructure" },
                                { title: "Ethically Sourced", desc: "No DMV purchases, no privacy violations" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
                                    <CheckCircle className="text-green-600 shrink-0" size={20} />
                                    <div>
                                        <div className="font-bold text-slate-900">{item.title}</div>
                                        <div className="text-sm text-slate-600">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Exclusivity Principle */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-center mb-12">The Exclusivity Principle</h2>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <p className="text-lg text-slate-600 mb-8 text-center">
                                This model only works because of absolute exclusivity. When you claim a territory, you own it permanently.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                                    <h3 className="font-bold text-green-800 mb-4">When you claim a territory:</h3>
                                    <ul className="space-y-2 text-green-700 text-sm">
                                        <li>• You own it permanently</li>
                                        <li>• Competitors cannot buy access at any price</li>
                                        <li>• Your advantage is protected by contract</li>
                                        <li>• The territory is yours alone</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                                    <h3 className="font-bold text-red-800 mb-4">When you don't claim a territory:</h3>
                                    <ul className="space-y-2 text-red-700 text-sm">
                                        <li>• Another firm will</li>
                                        <li>• You're locked out forever</li>
                                        <li>• No appeals or exceptions</li>
                                        <li>• The opportunity is gone</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8 text-center font-bold text-slate-900">
                                It's binary. You either control the intelligence in your territory or you don't.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lead Availability + Decision Framework */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Lead Availability</h2>
                        <p className="text-slate-600 mb-8">Leads are being claimed daily. Once a lead is taken, it's exclusive for 60 days.</p>

                        <button
                            onClick={() => handleCtaClick('check_territory_status')}
                            className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors mb-20"
                        >
                            Check Your Territory Status
                        </button>

                        <div className="text-left bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-2xl font-bold mb-8 text-center">The Decision Framework</h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">1. What happens if you control exclusive intelligence?</h4>
                                    <p className="text-slate-600">You operate without competition for these cases. Your cost per acquisition drops. Your case quality improves. Your practice transforms.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">2. What happens if a competitor controls it?</h4>
                                    <p className="text-slate-600">They have permanent advantage you cannot overcome. They know about cases you don't. They grow while you struggle with traditional methods.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">3. Can you afford to wait?</h4>
                                    <p className="text-slate-600">Every day, territories are being claimed. Once your territory is gone, it's gone forever. There are no second chances with exclusive rights.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proof of Concept */}
                <section className="py-20 bg-blue-600 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-12">Proof of Concept</h2>
                        <p className="mb-12 opacity-90 max-w-2xl mx-auto">Firms using Cause72 exclusive intelligence report average results from active territories:</p>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { val: "40-60%", label: "Increase in Case Intake" },
                                { val: "50%", label: "Reduction in Costs" },
                                { val: "3x", label: "Improvement in Conversion" },
                                { val: "25%", label: "Higher Case Values" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                                    <div className="text-3xl font-bold mb-2">{stat.val}</div>
                                    <div className="text-sm opacity-90">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Investment Structure */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <h2 className="text-3xl font-bold mb-8">Investment Structure</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                            {[
                                "Transparent Pricing: Based on territory size",
                                "No Hidden Costs: Single monthly fee",
                                "Flexible Terms: Monthly, annual, enterprise",
                                "ROI Focused: Covers costs with 2-3 cases"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                                    <CheckCircle size={18} className="text-blue-600" />
                                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleCtaClick('request_pricing')}
                            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
                        >
                            Request Pricing for Your Territory
                        </button>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "Is this legal and ethical?", a: "Yes. Cause72 maintains strict DPPA compliance and adheres to all bar ethical guidelines. We have certification from legal ethics experts in all 50 states. Our data sources are legal and our methods are transparent." },
                                { q: "How is this different from other legal marketing?", a: "Traditional marketing puts you in competition with everyone else. Cause72 gives you exclusive access to cases no one else can pursue. You're not competing better—you're not competing at all." },
                                { q: "What if my territory is already claimed?", a: "Once a territory is claimed, it's permanently unavailable. However, adjacent territories may be available. The key is acting quickly to secure available territories." },
                                { q: "Can large firms just buy multiple territories?", a: "Yes, firms can claim multiple territories. This is why speed matters. Every day you wait is a day competitors could be locking up territories you want." },
                                { q: "What's the actual time commitment?", a: "Minimal. Initial setup takes about an hour. Ongoing use requires just minutes per day to review new cases and decide which to pursue." }
                            ].map((faq, i) => (
                                <details key={i} className="bg-white rounded-xl border border-slate-200 group">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 list-none">
                                        {faq.q}
                                        <span className="transition-transform group-open:rotate-180">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Competitive Reality */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-16">The Competitive Reality</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-8 bg-green-50 rounded-2xl border border-green-100">
                                <h3 className="text-xl font-bold text-green-900 mb-6">Group 1: Firms with Exclusive Intelligence</h3>
                                <ul className="space-y-3">
                                    {["Zero competition for their cases", "Lower acquisition costs", "Predictable growth", "Market control"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-green-800">
                                            <CheckCircle size={16} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 opacity-75">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Group 2: Firms without Intelligence</h3>
                                <ul className="space-y-3">
                                    {["Fighting for every case", "Rising marketing costs", "Unpredictable pipeline", "Market vulnerability"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-600">
                                            <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-[10px]">x</div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-12 text-slate-900 font-bold text-lg">
                            The only question is which group you'll be in.
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-slate-900 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Control Your Market?</h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                            The first firm to claim a territory owns it forever. The rest are locked out permanently.
                        </p>
                        <button
                            onClick={() => handleCtaClick('bottom_cta')}
                            className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold shadow-xl transition-all hover:-translate-y-1"
                        >
                            Check Territory Availability Now
                        </button>
                        <div className="mt-8 text-slate-500 text-sm">
                            Limited to one firm per territory. First come, first served.
                        </div>
                    </div>
                </section>

                {/* Page Specific Footer Content */}
                <div className="bg-slate-50 py-12 border-t border-slate-200">
                    <div className="container mx-auto px-6 text-center">
                        <p className="font-bold text-slate-700 mb-2">Cause72 - Exclusive Accident Intelligence</p>
                        <p className="text-slate-600 mb-4">One Firm. One Territory. Zero Competition.</p>
                        <div className="text-sm text-slate-500">
                            © 2025 Cause72. All rights reserved. | Privacy Policy | Terms of Service | Compliance Certifications
                        </div>
                    </div>
                </div>
            </main>

            {/* Main App Footer */}
            <Footer />
        </div>
    );
};

export default MotorVehicleAccidentDataReporting;
