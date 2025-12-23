import React, { useRef, useState, useEffect } from 'react';

const HomePage: React.FC = () => {
    const sections = useRef<Record<string, React.RefObject<HTMLDivElement>>>({});
    const [activeTopic, setActiveTopic] = useState('components');
    const [showAllTopics, setShowAllTopics] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // React features data
    const reactFeatures = [
        {
            id: 'components',
            title: 'Components',
            icon: '⚛️',
            color: 'from-blue-500 to-purple-600',
            description: 'Reusable building blocks for UI development',
            pros: ['Reusable code', 'Easy maintenance', 'Better separation of concerns', 'Testable units'],
            cons: ['Props drilling', 'Too many components can be overwhelming', 'Learning curve'],
            tags: ['Core', 'Essential']
        },
        {
            id: 'jsx',
            title: 'JSX',
            icon: '📝',
            color: 'from-purple-500 to-pink-600',
            description: 'JavaScript XML syntax for React',
            pros: ['HTML-like syntax', 'Type-safe', 'Prevents injection attacks', 'Combines UI and logic'],
            cons: ['Requires Babel', 'Learning curve', 'Extra compilation step'],
            tags: ['Syntax', 'UI']
        },
        {
            id: 'hooks',
            title: 'Hooks',
            icon: '🎣',
            color: 'from-pink-500 to-rose-600',
            description: 'Functions that let you use state and lifecycle features',
            pros: ['Simplifies logic', 'Reusable stateful logic', 'No class components needed', 'Better organization'],
            cons: ['Rules restrictions', 'Learning curve', 'Complex debugging'],
            tags: ['Modern', 'State']
        },
        {
            id: 'state',
            title: 'State Management',
            icon: '📊',
            color: 'from-green-500 to-emerald-600',
            description: 'Managing component state and data flow',
            pros: ['Predictable data flow', 'Centralized state', 'Easy debugging', 'Time travel debugging'],
            cons: ['Boilerplate code', 'Learning curve', 'Overkill for simple apps'],
            tags: ['Data', 'Management']
        },
        {
            id: 'props',
            title: 'Props',
            icon: '📤',
            color: 'from-cyan-500 to-blue-600',
            description: 'Passing data from parent to child components',
            pros: ['One-way data flow', 'Predictable', 'Component reusability', 'Clear dependencies'],
            cons: ['Props drilling', 'Can become verbose', 'Limited communication'],
            tags: ['Communication', 'Data']
        },
        {
            id: 'context',
            title: 'Context API',
            icon: '🌐',
            color: 'from-violet-500 to-purple-600',
            description: 'Share data across component tree',
            pros: ['Avoids props drilling', 'Simple global state', 'Built into React', 'Lightweight'],
            cons: ['Not for frequent updates', 'Unnecessary re-renders', 'Complex nested contexts'],
            tags: ['Global', 'State']
        },
        {
            id: 'routing',
            title: 'Routing',
            icon: '📍',
            color: 'from-orange-500 to-red-600',
            description: 'Navigation in Single Page Applications',
            pros: ['Client-side routing', 'No page reloads', 'Nested routes', 'Programmatic navigation'],
            cons: ['SEO challenges', 'Bundle size increase', 'Setup complexity'],
            tags: ['Navigation', 'SPA']
        },
        {
            id: 'testing',
            title: 'Testing',
            icon: '🧪',
            color: 'from-teal-500 to-green-600',
            description: 'Testing React applications',
            pros: ['Component testing', 'Snapshot testing', 'Mocking capabilities', 'Jest integration'],
            cons: ['Setup complexity', 'Time-consuming', 'Async testing curve'],
            tags: ['Quality', 'Tools']
        },
        {
            id: 'performance',
            title: 'Performance',
            icon: '⚡',
            color: 'from-yellow-500 to-orange-600',
            description: 'Optimizing React applications',
            pros: ['Virtual DOM', 'Memoization', 'Code splitting', 'Lazy loading'],
            cons: ['Manual optimization', 'Complex strategies', 'Profiling knowledge needed'],
            tags: ['Optimization', 'Speed']
        },
        {
            id: 'virtual-dom',
            title: 'Virtual DOM',
            icon: '🖥️',
            color: 'from-lime-500 to-green-600',
            description: 'In-memory representation of the DOM',
            pros: ['Efficient updates', 'Minimizes DOM manipulation', 'Better performance', 'Automatic batching'],
            cons: ['Memory overhead', 'Initial learning', 'Not always needed'],
            tags: ['Core', 'Performance']
        },
        {
            id: 'lifecycle',
            title: 'Lifecycle',
            icon: '🔄',
            color: 'from-rose-500 to-pink-600',
            description: 'Component lifecycle methods',
            pros: ['Fine control', 'Resource management', 'Performance optimization', 'External library integration'],
            cons: ['Complex to manage', 'Memory leaks risk', 'Mostly replaced by hooks'],
            tags: ['Control', 'Timing']
        },
        {
            id: 'fragments',
            title: 'Fragments',
            icon: '🧩',
            color: 'from-indigo-500 to-blue-600',
            description: 'Group multiple elements without extra nodes',
            pros: ['Cleaner DOM', 'No wrapper divs', 'Better performance', 'Improved accessibility'],
            cons: ['Confusing at first', 'Limited styling', 'CSS patterns limitations'],
            tags: ['Clean', 'Structure']
        }
    ];

    // Create refs dynamically
    useEffect(() => {
        const refs: Record<string, React.RefObject<HTMLDivElement>> = {};
        reactFeatures.forEach(feature => {
            refs[feature.id] = React.createRef();
        });
        sections.current = refs;
        setIsLoading(false);

        // Intersection Observer for active topic highlighting
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTopic(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-100px 0px -100px 0px' }
        );

        // Observe all sections
        setTimeout(() => {
            Object.values(sections.current).forEach(ref => {
                if (ref.current) {
                    observer.observe(ref.current);
                }
            });
        }, 500);

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const sectionRef = sections.current[sectionId];
        if (sectionRef?.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            setActiveTopic(sectionId);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Stats data
    const stats = [
        { value: '10M+', label: 'Developers', description: 'Worldwide' },
        { value: '200K+', label: 'Companies', description: 'Using React' },
        { value: '2M+', label: 'Packages', description: 'NPM Ecosystem' },
        { value: '99%', label: 'Satisfaction', description: 'Developer Rating' }
    ];

    // Quick navigation topics
    const quickTopics = ['components', 'hooks', 'state', 'routing', 'performance'];

    const visibleTopics = showAllTopics ? reactFeatures : reactFeatures.slice(0, 8);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-white text-lg">Loading React Learning Hub...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header/Navigation */}
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-lg">⚛️</span>
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                React Master
                            </h1>
                        </div>
                        <nav className="hidden md:flex items-center space-x-6">
                            <button
                                onClick={scrollToTop}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('components')}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                Topics
                            </button>
                            <button
                                onClick={() => scrollToSection('hooks')}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                Hooks
                            </button>
                            <button
                                onClick={() => scrollToSection('performance')}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                Performance
                            </button>
                            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-0.5">
                                Get Started
                            </button>
                        </nav>
                        <button className="md:hidden">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column */}
                            <div className="space-y-8">
                                <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                                    <span className="text-blue-400">🎯</span>
                                    <span className="text-sm font-medium">Master React 18 Today</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                    Learn <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">React</span>
                                    <br />
                                    <span className="text-4xl md:text-5xl">The Modern Way</span>
                                </h1>

                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Comprehensive guide covering all React concepts with interactive examples,
                                    real-world projects, and professional best practices. Start your journey today!
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={() => scrollToSection('components')}
                                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 hover:shadow-2xl shadow-blue-500/25 flex items-center space-x-2"
                                    >
                                        <span>🚀</span>
                                        <span className="font-semibold">Start Learning</span>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('hooks')}
                                        className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-800 transition-all hover:border-gray-600 flex items-center space-x-2"
                                    >
                                        <span>📚</span>
                                        <span className="font-semibold">View Topics</span>
                                    </button>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                            <div className="text-xs text-gray-500">{stat.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column - Code Preview */}
                            <div className="relative">
                                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div className="text-sm text-gray-400">ReactComponent.jsx</div>
                                    </div>
                                    <div className="p-6">
                                        <pre className="text-sm md:text-base">
                                            <code className="text-blue-300">
                                                <span className="text-pink-400">import</span> {'{ useState }'} <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span>{'\n\n'}
                                                <span className="text-pink-400">function</span> <span className="text-yellow-300">Counter</span>() {'{'}{'\n'}
                                                {'  '}<span className="text-pink-400">const</span> [count, setCount] = <span className="text-yellow-300">useState</span>(<span className="text-cyan-300">0</span>){'\n\n'}
                                                {'  '}<span className="text-pink-400">return</span> ({'\n'}
                                                {'    '}&lt;<span className="text-green-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-400">"card"</span>&gt;{'\n'}
                                                {'      '}&lt;<span className="text-green-400">h1</span>&gt;Counter: {'{'}count{'}'}&lt;/<span className="text-green-400">h1</span>&gt;{'\n'}
                                                {'      '}&lt;<span className="text-green-400">button</span>{'\n'}
                                                {'        '}<span className="text-blue-300">onClick</span>=<span className="text-yellow-300">{'()'} =&gt; setCount</span>(count + <span className="text-cyan-300">1</span>){'\n'}
                                                {'        '}<span className="text-blue-300">className</span>=<span className="text-green-400">"btn-primary"</span>{'\n'}
                                                {'      '}&gt;{'\n'}
                                                {'        '}Click me{'\n'}
                                                {'      '}&lt;/<span className="text-green-400">button</span>&gt;{'\n'}
                                                {'    '}&lt;/<span className="text-green-400">div</span>&gt;{'\n'}
                                                {'  '}){'\n'}
                                                {'}'}
                                            </code>
                                        </pre>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topics Navigation */}
            <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            Explore <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">React Topics</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Click on any topic to jump directly to detailed explanations with pros and cons
                        </p>
                    </div>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {visibleTopics.map((topic) => (
                            <div
                                key={topic.id}
                                onClick={() => scrollToSection(topic.id)}
                                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${activeTopic === topic.id
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20'
                                    : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10'
                                    }`}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-2xl`}>
                                        {topic.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                                        <p className="text-sm text-gray-400">{topic.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {topic.tags.map((tag, idx) => (
                                                <span key={idx} className="px-2 py-1 text-xs bg-gray-900/50 rounded-lg">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                        <span className="text-sm">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show More Button */}
                    {!showAllTopics && reactFeatures.length > 8 && (
                        <div className="text-center">
                            <button
                                onClick={() => setShowAllTopics(true)}
                                className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all transform hover:-translate-y-1"
                            >
                                Show All {reactFeatures.length} Topics ↓
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Detailed Topics Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                Complete <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">React Reference</span>
                            </h2>
                            <p className="text-xl text-gray-400">
                                Detailed explanations, advantages, and disadvantages for each React feature
                            </p>
                        </div>

                        <div className="space-y-8">
                            {reactFeatures.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    id={feature.id}
                                    ref={sections.current[feature.id]}
                                    className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 ${activeTopic === feature.id ? 'ring-2 ring-blue-500/30' : ''
                                        }`}
                                >
                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                                            <div className="flex items-start space-x-4">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl`}>
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-2xl font-bold">{feature.title}</h3>
                                                        <span className="text-sm px-3 py-1 bg-gray-900/50 rounded-full">
                                                            Topic {index + 1}
                                                        </span>
                                                    </div>
                                                    <p className="text-lg text-gray-300">{feature.description}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={scrollToTop}
                                                className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
                                            >
                                                ↑ Top
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            {/* Pros */}
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                                                        <span className="text-2xl">✅</span>
                                                    </div>
                                                    <h4 className="text-xl font-bold">Advantages</h4>
                                                </div>
                                                <ul className="space-y-3">
                                                    {feature.pros.map((pro, idx) => (
                                                        <li key={idx} className="flex items-start space-x-3">
                                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                                <span className="text-green-400 text-sm">✓</span>
                                                            </div>
                                                            <span className="text-gray-300">{pro}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Cons */}
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/20 flex items-center justify-center">
                                                        <span className="text-2xl">⚠️</span>
                                                    </div>
                                                    <h4 className="text-xl font-bold">Challenges</h4>
                                                </div>
                                                <ul className="space-y-3">
                                                    {feature.cons.map((con, idx) => (
                                                        <li key={idx} className="flex items-start space-x-3">
                                                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                                <span className="text-red-400 text-sm">✗</span>
                                                            </div>
                                                            <span className="text-gray-300">{con}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-700">
                                            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 flex items-center space-x-2">
                                                <span>📖</span>
                                                <span>Read More</span>
                                            </button>
                                            <button className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all flex items-center space-x-2">
                                                <span>💻</span>
                                                <span>Try Example</span>
                                            </button>
                                            <button className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all flex items-center space-x-2">
                                                <span>📚</span>
                                                <span>Related Topics</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Demo */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl font-bold mb-4">
                                        Try React <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Instantly</span>
                                    </h2>
                                    <p className="text-xl text-gray-400 mb-8">
                                        Experience React's power with this interactive counter demo
                                    </p>
                                </div>
                                <CounterDemo />
                            </div>

                            {/* Code Preview */}
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="bg-gray-800 px-6 py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div className="text-sm text-gray-400">LiveDemo.jsx</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <pre className="text-sm">
                                        <code className="text-blue-300">
                                            <span className="text-pink-400">import</span> {'{ useState }'} <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span>{'\n\n'}
                                            <span className="text-pink-400">function</span> <span className="text-yellow-300">Counter</span>() {'{'}{'\n'}
                                            {'  '}<span className="text-pink-400">const</span> [count, setCount] = <span className="text-yellow-300">useState</span>(<span className="text-cyan-300">0</span>){'\n\n'}
                                            {'  '}<span className="text-pink-400">return</span> ({'\n'}
                                            {'    '}&lt;<span className="text-green-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-400">"counter"</span>&gt;{'\n'}
                                            {'      '}&lt;<span className="text-green-400">h3</span>&gt;Count: {'{'}count{'}'}&lt;/<span className="text-green-400">h3</span>&gt;{'\n'}
                                            {'      '}&lt;<span className="text-green-400">button</span>{'\n'}
                                            {'        '}<span className="text-blue-300">onClick</span>=<span className="text-yellow-300">{'()'} =&gt; setCount</span>(count - <span className="text-cyan-300">1</span>){'\n'}
                                            {'      '}&gt;{'\n'}
                                            {'        '}Decrement{'\n'}
                                            {'      '}&lt;/<span className="text-green-400">button</span>&gt;{'\n'}
                                            {'      '}&lt;<span className="text-green-400">button</span>{'\n'}
                                            {'        '}<span className="text-blue-300">onClick</span>=<span className="text-yellow-300">{'()'} =&gt; setCount</span>(<span className="text-cyan-300">0</span>){'\n'}
                                            {'      '}&gt;{'\n'}
                                            {'        '}Reset{'\n'}
                                            {'      '}&lt;/<span className="text-green-400">button</span>&gt;{'\n'}
                                            {'      '}&lt;<span className="text-green-400">button</span>{'\n'}
                                            {'        '}<span className="text-blue-300">onClick</span>=<span className="text-yellow-300">{'()'} =&gt; setCount</span>(count + <span className="text-cyan-300">1</span>){'\n'}
                                            {'      '}&gt;{'\n'}
                                            {'        '}Increment{'\n'}
                                            {'      '}&lt;/<span className="text-green-400">button</span>&gt;{'\n'}
                                            {'    '}&lt;/<span className="text-green-400">div</span>&gt;{'\n'}
                                            {'  '}){'\n'}
                                            {'}'}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Path */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                Your React <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Learning Journey</span>
                            </h2>
                            <p className="text-xl text-gray-400">
                                Follow this path to master React from beginner to expert
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline */}
                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                            {/* Steps */}
                            <div className="space-y-12 lg:space-y-0">
                                {[
                                    { step: '01', title: 'Fundamentals', desc: 'JSX, Components, Props', color: 'from-blue-500 to-cyan-500', onClick: () => scrollToSection('components') },
                                    { step: '02', title: 'Core Concepts', desc: 'State, Hooks, Events', color: 'from-purple-500 to-pink-500', onClick: () => scrollToSection('hooks') },
                                    { step: '03', title: 'Advanced Topics', desc: 'Context, Performance, Testing', color: 'from-pink-500 to-rose-500', onClick: () => scrollToSection('performance') },
                                    { step: '04', title: 'Mastery', desc: 'Architecture, Best Practices', color: 'from-green-500 to-emerald-500', onClick: scrollToTop }
                                ].map((item, index) => (
                                    <div
                                        key={item.step}
                                        onClick={item.onClick}
                                        className={`group relative lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'
                                            } cursor-pointer`}
                                    >
                                        <div className={`p-8 rounded-2xl bg-gradient-to-br ${item.color}/10 border border-gray-800 hover:border-gray-700 transition-all transform hover:-translate-y-2`}>
                                            <div className="flex lg:items-center space-x-4 lg:space-x-6">
                                                {index % 2 === 0 ? (
                                                    <>
                                                        <div className="flex-1">
                                                            <div className="text-sm text-gray-400 mb-2">Step {item.step}</div>
                                                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                                            <p className="text-gray-300">{item.desc}</p>
                                                        </div>
                                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl font-bold`}>
                                                            {item.step}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl font-bold`}>
                                                            {item.step}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-sm text-gray-400 mb-2">Step {item.step}</div>
                                                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                                            <p className="text-gray-300">{item.desc}</p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <div className="absolute top-1/2 transform -translate-y-1/2 hidden lg:block">
                                                {index % 2 === 0 ? (
                                                    <div className="right-0 translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                                        <span className="text-sm">→</span>
                                                    </div>
                                                ) : (
                                                    <div className="left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                                                        <span className="text-sm">←</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Navigation Bar */}
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full px-4 py-3 shadow-2xl">
                    <div className="flex items-center space-x-2">
                        {quickTopics.map((topicId) => {
                            const topic = reactFeatures.find(f => f.id === topicId);
                            return (
                                <button
                                    key={topicId}
                                    onClick={() => scrollToSection(topicId)}
                                    className={`px-4 py-2 rounded-full transition-all ${activeTopic === topicId
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                                        : 'bg-gray-800/50 hover:bg-gray-800'
                                        }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <span>{topic?.icon}</span>
                                        <span className="text-sm font-medium">{topic?.title}</span>
                                    </div>
                                </button>
                            );
                        })}
                        <button
                            onClick={scrollToTop}
                            className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full hover:from-gray-700 hover:to-gray-800 transition-all"
                        >
                            <div className="flex items-center space-x-2">
                                <span>↑</span>
                                <span className="text-sm font-medium">Top</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-12">
                            <h2 className="text-4xl font-bold mb-6">
                                Ready to <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Master React</span>?
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                Join thousands of developers who've accelerated their React journey with our comprehensive guide.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 hover:shadow-2xl shadow-blue-500/25 flex items-center space-x-2">
                                    <span>📖</span>
                                    <span className="font-semibold">Start Learning Now</span>
                                </button>
                                <button className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all flex items-center space-x-2">
                                    <span>💻</span>
                                    <span className="font-semibold">View Examples</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-lg">⚛️</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">React Learning Hub</h3>
                                <p className="text-sm text-gray-400">Master React the Modern Way</p>
                            </div>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} React Learning Hub. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Counter Demo Component
const CounterDemo: React.FC = () => {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState<number[]>([0]);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        setHistory(prev => [...prev.slice(-4), newCount]);
    };

    const decrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            setHistory(prev => [...prev.slice(-4), newCount]);
        }
    };

    const reset = () => {
        setCount(0);
        setHistory([0]);
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="text-center mb-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {count}
                </div>
                <div className="text-gray-400">Current Count</div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
                <button
                    onClick={decrement}
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg hover:from-red-700 hover:to-rose-700 transition-all transform hover:-translate-y-1 flex items-center space-x-2"
                >
                    <span>➖</span>
                    <span>Decrement</span>
                </button>
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:-translate-y-1 flex items-center space-x-2"
                >
                    <span>🔄</span>
                    <span>Reset</span>
                </button>
                <button
                    onClick={increment}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:-translate-y-1 flex items-center space-x-2"
                >
                    <span>➕</span>
                    <span>Increment</span>
                </button>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-4">
                <h4 className="font-semibold mb-3">Recent History:</h4>
                <div className="flex flex-wrap gap-2">
                    {history.map((val, idx) => (
                        <div
                            key={idx}
                            className="px-3 py-2 bg-gray-800 rounded-lg text-sm"
                        >
                            {val}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;