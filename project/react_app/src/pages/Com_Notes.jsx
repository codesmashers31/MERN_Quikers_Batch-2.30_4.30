const Com_Notes = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                        React Mastery Guide
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive notes on React Components, Rendering Process, and React Router DOM with interview insights
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                                Quick Navigation
                            </h2>
                            <nav className="space-y-3">
                                {[
                                    "Components Basics",
                                    "Rendering Process", 
                                    "Component Types",
                                    "Interview Questions",
                                    "Router DOM Setup",
                                    "Router Concepts",
                                    "Best Practices"
                                ].map((item, index) => (
                                    <a 
                                        key={index}
                                        href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                                        className="block p-3 rounded-lg hover:bg-amber-50 transition-all duration-300 text-gray-700 hover:text-amber-600 font-medium"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Components Basics Section */}
                        <section id="components-basics" className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                                <h2 className="text-3xl font-bold text-gray-800">React Components Basics</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Functional Components</h3>
                                    <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// Modern approach with Hooks
const MyComponent = () => {
  const [state, setState] = useState('');
  
  return (
    <div>Hello World</div>
  );
};`}
                                    </pre>
                                </div>
                                
                                <div className="bg-green-50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-green-800 mb-3">Class Components</h3>
                                    <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// Traditional approach
class MyComponent extends Component {
  state = { count: 0 };
  
  render() {
    return <div>{this.state.count}</div>;
  }
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Rendering Process Section */}
                        <section id="rendering-process" className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                                <h2 className="text-3xl font-bold text-gray-800">Component Rendering Process</h2>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mt-1 flex-shrink-0">1</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">Initial Render</h3>
                                        <p className="text-gray-600">React creates virtual DOM and compares with actual DOM</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mt-1 flex-shrink-0">2</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">Re-render Triggers</h3>
                                        <ul className="text-gray-600 list-disc list-inside space-y-1">
                                            <li>State changes (useState hook)</li>
                                            <li>Props changes</li>
                                            <li>Parent component re-renders</li>
                                            <li>Context changes</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mt-1 flex-shrink-0">3</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">Optimization Techniques</h3>
                                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                                            <code className="text-sm bg-gray-100 px-2 py-1 rounded">React.memo()</code>
                                            <code className="text-sm bg-gray-100 px-2 py-1 rounded mx-2">useMemo()</code>
                                            <code className="text-sm bg-gray-100 px-2 py-1 rounded">useCallback()</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Interview Questions Section */}
                        <section id="interview-questions" className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                                <h2 className="text-3xl font-bold text-gray-800">Interview Questions & Answers</h2>
                            </div>
                            
                            <div className="space-y-6">
                                {interviewQA.map((qa, index) => (
                                    <div key={index} className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Q: {qa.question}</h3>
                                        <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                                        {qa.code && (
                                            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
                                                {qa.code}
                                            </pre>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* React Router DOM Section */}
                        <section id="router-dom-setup" className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full mr-3"></div>
                                <h2 className="text-3xl font-bold text-gray-800">React Router DOM Setup & Process</h2>
                            </div>
                            
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Installation & Basic Setup</h3>
                                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mb-4">
                                        <code>npm install react-router-dom</code>
                                    </div>
                                    
                                    <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// App.js - Basic Router Setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`}
                                    </pre>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Navigation Methods</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-indigo-50 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-indigo-800 mb-3">Declarative Navigation</h4>
                                            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm">
{`import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
<Link to="/user/123" state={{ data: userData }}>Profile</Link>`}
                                            </pre>
                                        </div>
                                        
                                        <div className="bg-purple-50 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-purple-800 mb-3">Programmatic Navigation</h4>
                                            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm">
{`import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/about');
navigate(-1); // Go back
navigate('/user', { replace: true });`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Advanced Router Concepts */}
                        <section id="router-concepts" className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-4 h-4 bg-teal-500 rounded-full mr-3"></div>
                                <h2 className="text-3xl font-bold text-gray-800">Advanced Router Concepts</h2>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">Nested Routes</h3>
                                    <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// Parent route with outlet for nested routes
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

// Dashboard component
const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
};`}
                                    </pre>
                                </div>
                                
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-orange-800 mb-3">Route Protection</h3>
                                    <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

// Usage
<Route 
  path="/admin" 
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  } 
/>`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Best Practices Section */}
                        <section id="best-practices" className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-4 h-4 bg-emerald-500 rounded-full mr-3"></div>
                                <h2 className="text-3xl font-bold text-gray-800">Best Practices & Tips</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-emerald-50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-emerald-800 mb-3">Component Best Practices</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-emerald-500 mr-2">✓</span>
                                            Keep components small and focused
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-emerald-500 mr-2">✓</span>
                                            Use meaningful prop and state names
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-emerald-500 mr-2">✓</span>
                                            Implement proper error boundaries
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-emerald-500 mr-2">✓</span>
                                            Use TypeScript for type safety
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="bg-blue-50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Router Best Practices</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">✓</span>
                                            Use lazy loading for routes
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">✓</span>
                                            Implement proper 404 handling
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">✓</span>
                                            Use relative navigation when possible
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">✓</span>
                                            Keep route definitions organized
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Interview Questions Data
const interviewQA = [
    {
        question: "What's the difference between state and props?",
        answer: "Props are passed to components (like function parameters) and are immutable. State is managed within the component and can change over time, triggering re-renders.",
        code: `// Props (immutable)
const Welcome = ({ name }) => <h1>Hello {name}</h1>;

// State (mutable)
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};`
    },
    {
        question: "Explain the virtual DOM and how it works",
        answer: "Virtual DOM is a lightweight copy of the real DOM. When state changes, React creates a new virtual DOM, compares it with previous one (diffing), and efficiently updates only the changed parts in real DOM.",
        code: `// React's reconciliation process
1. State change → New Virtual DOM
2. Diffing algorithm compares with old Virtual DOM
3. Minimal DOM updates applied
4. Better performance than direct DOM manipulation`
    },
    {
        question: "What are React hooks and name the most important ones",
        answer: "Hooks are functions that let you use state and lifecycle features in functional components. Most important hooks: useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef.",
        code: `// Common hooks example
const Example = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => { /* side effects */ }, [dependencies]);
  const value = useContext(MyContext);
  const memoizedValue = useMemo(() => expensiveCalculation(), [deps]);
  return <div>{state}</div>;
};`
    },
    {
        question: "How does React Router handle navigation without page refresh?",
        answer: "React Router uses the HTML5 History API to manipulate the browser's session history. It intercepts navigation requests and renders the appropriate components without full page reloads, providing a single-page application experience.",
        code: `// Router uses History API internally
window.history.pushState(state, title, url);
window.history.replaceState(state, title, url);

// React Router abstracts this:
navigate('/new-route');  // Uses pushState
navigate('/route', { replace: true });  // Uses replaceState`
    }
];

export default Com_Notes;