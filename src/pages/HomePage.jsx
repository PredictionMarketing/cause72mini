import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Shield, TrendingUp, Zap, CheckCircle, Phone, Calendar } from 'lucide-react';

const HomePage = () => {
    const handleCtaClick = (source) => {
        const currentUrl = encodeURIComponent(window.location.href);
        window.location.href = `https://calendly.com/tommylc?referrer=${currentUrl}&cta=${source}`;
    };

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            <Helmet>
                <title>Cause72 - Exclusive Motor Vehicle Accident Intelligence for Personal Injury Attorneys</title>
                <meta name="description" content="Get exclusive access to comprehensive motor vehicle accident intelligence within 72 hours. One firm per territory. DPPA compliant. Stop competing. Start owning your market." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
                <div className="absolute inset-0 bg-blue-900/10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                            Exclusive Territorial Intelligence
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Stop Competing.<br />
                            <span className="text-blue-400">Start Owning.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Exclusive motor vehicle accident intelligence delivered within 72 hours.
                            One firm per territory means zero competition for your cases.
                        </p>
                        <button
                            onClick={() => handleCtaClick('hero_cta')}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-full shadow-2xl transition-all hover:-translate-y-1 hover:shadow-blue-500/25"
                        >
                            <Calendar size={24} />
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">The Traditional Model is Broken</h2>
                        <p className="text-lg text-slate-600 text-center mb-12 leading-relaxed">
                            Every PI attorney faces the same challenge: by the time you learn about an accident,
                            so has everyone else. You're competing on price, speed, and marketing spend—not case quality.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div className="text-4xl font-bold text-red-600 mb-2">Days</div>
                                <div className="text-sm text-slate-600">Traditional discovery timeline</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div className="text-4xl font-bold text-red-600 mb-2">Everyone</div>
                                <div className="text-sm text-slate-600">Has the same information</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div className="text-4xl font-bold text-red-600 mb-2">Expensive</div>
                                <div className="text-sm text-slate-600">Rising acquisition costs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Intelligence Advantage</h2>
                        <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
                            Cause72 changes the equation by giving you exclusive access to comprehensive accident data
                            within 72 hours—before it becomes public knowledge.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="text-blue-600" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">72-Hour Advantage</h3>
                                <p className="text-sm text-slate-600">
                                    Act while evidence is fresh and witnesses are available. Not weeks later.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="text-blue-600" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Territorial Exclusivity</h3>
                                <p className="text-sm text-slate-600">
                                    One firm per territory. Once you claim it, competitors are permanently locked out.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="text-blue-600" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Comprehensive Data</h3>
                                <p className="text-sm text-slate-600">
                                    Injury indicators, insurance details, and engagement opportunities in every report.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Zap className="text-blue-600" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">DPPA Compliant</h3>
                                <p className="text-sm text-slate-600">
                                    Full legal compliance. No DMV purchases. No privacy violations. Bulletproof.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start bg-white p-8 rounded-2xl border border-slate-200">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Claim Your Territory</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Choose your geographic area. Once claimed, no other firm—regardless of size—can access
                                        intelligence from your territory. Your exclusivity is permanent and contractually protected.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start bg-white p-8 rounded-2xl border border-slate-200">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Receive Real-Time Intelligence</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Within 72 hours of any significant accident in your territory, you receive comprehensive
                                        intelligence: incident details, injury indicators, insurance information, and strategic guidance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start bg-white p-8 rounded-2xl border border-slate-200">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Act With Confidence</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Make informed decisions about case development while evidence is fresh and witnesses are
                                        available. You're not competing—you're the only firm with this information.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start bg-white p-8 rounded-2xl border border-slate-200">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Build Predictable Growth</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Transform your practice from reactive (hoping for referrals) to proactive (knowing your
                                        pipeline). Reduce marketing costs. Increase case quality. Control your market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Binary Choice */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">The Market is Splitting in Two</h2>
                        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                            The legal industry is dividing into firms with exclusive intelligence and firms without it.
                            There is no middle ground.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                                <h3 className="text-2xl font-bold mb-6">Firms With Cause72</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Know about cases before competitors',
                                        'Act while evidence is available',
                                        'Zero competition for their intelligence',
                                        'Predictable case pipeline',
                                        'Lower client acquisition costs'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="flex-shrink-0 mt-0.5" size={20} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 opacity-75">
                                <h3 className="text-2xl font-bold mb-6">Firms Without It</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Learn about cases when everyone else does',
                                        'Compete on marketing and price',
                                        'Rising acquisition costs',
                                        'Unpredictable referral pipeline',
                                        'No competitive intelligence advantage'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-white/40 mt-0.5"></div>
                                            <span className="opacity-75">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 text-2xl font-bold">
                            Which side of this equation do you want to be on?
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Questions</h2>
                        <p className="text-center text-slate-600 mb-12">
                            Attorneys are careful decision-makers. Here are answers to the questions we hear most often.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    q: 'Is this legal and ethically compliant?',
                                    a: 'Yes. Cause72 maintains strict DPPA compliance and adheres to all state bar ethical guidelines. Our data sources are legal, our methods are transparent, and our compliance protocols are designed by legal ethics experts. We do not purchase DMV records or violate any privacy laws.'
                                },
                                {
                                    q: 'How is this different from buying leads?',
                                    a: 'Lead services sell the same information to multiple firms—you\'re competing with everyone else. Cause72 provides exclusive territorial intelligence. When you control a territory, no other firm receives that data. You\'re not buying leads; you\'re owning exclusive information access.'
                                },
                                {
                                    q: 'What if my territory is already claimed?',
                                    a: 'Territorial exclusivity is permanent. Once claimed, a territory cannot be accessed by other firms at any price. However, adjacent territories or regional packages may be available. The key is acting quickly before your preferred territory is taken.'
                                },
                                {
                                    q: 'What kind of time investment is required?',
                                    a: 'Initial setup takes approximately one hour. Ongoing use requires just minutes per day to review new intelligence reports and decide which cases warrant action. The system is designed for efficiency—you focus on practicing law, not managing data.'
                                },
                                {
                                    q: 'How much does it cost?',
                                    a: 'Pricing is based on territory size and market dynamics. Most firms find that 2-3 additional cases per month cover the investment. We provide transparent pricing with no hidden fees. Schedule a consultation to discuss your specific territory and requirements.'
                                },
                                {
                                    q: 'Can large firms buy up all the territories?',
                                    a: 'Firms can claim multiple territories, which is precisely why timing matters. Every day you wait is a day competitors could be securing territories you want. Territorial availability operates on a first-come, first-served basis with no exceptions.'
                                },
                                {
                                    q: 'What happens if I need to cancel?',
                                    a: 'We offer flexible terms including monthly and annual options. If you choose to cancel, your territorial exclusivity ends and that territory becomes available to other firms. There are no long-term lock-in contracts, though most firms find the value far exceeds the investment.'
                                }
                            ].map((faq, i) => (
                                <details key={i} className="bg-slate-50 rounded-xl border border-slate-200 group">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 list-none hover:bg-slate-100 transition-colors">
                                        <span>{faq.q}</span>
                                        <span className="transition-transform group-open:rotate-180 text-blue-600">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Your Territory Won't Wait
                        </h2>
                        <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                            Territories are claimed daily. Once your market is taken, it's gone permanently.
                        </p>
                        <p className="text-lg text-slate-400 mb-12">
                            The first firm to claim a territory owns it forever. The rest are locked out.
                        </p>

                        <button
                            onClick={() => handleCtaClick('final_cta')}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-full shadow-2xl transition-all hover:-translate-y-1"
                        >
                            <Phone size={24} />
                            Schedule Your Consultation
                        </button>

                        <p className="mt-8 text-sm text-slate-500">
                            30-minute call. No pressure. Just honest discussion about whether exclusive intelligence fits your practice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Footer */}
            <div className="bg-slate-50 py-12 border-t border-slate-200">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
                        <strong className="text-slate-900">Cause72</strong> provides exclusive motor vehicle accident intelligence
                        to personal injury attorneys through strict DPPA-compliant methods. One firm per territory. No exceptions.
                    </p>
                    <div className="mt-6 text-xs text-slate-500">
                        © 2026 Cause72. All rights reserved. | Privacy Policy | Terms of Service | DPPA Compliance
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
